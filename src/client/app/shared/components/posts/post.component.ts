import { Component, AfterViewInit, Compiler, NgModule, ViewChild, ViewContainerRef, ComponentRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services';
import { EventStore } from '../../misc';

import { SharedModule } from '../../shared.module';

import { AgileStoriesCanvas } from '../../directives';

declare var moment: any;

@Component({
  selector: 'tc-post',
  moduleId: module.id,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
	@ViewChild('renderedPost', { read: ViewContainerRef }) renderedPost: ViewContainerRef;
	component: any;
	protected componentRef: ComponentRef<any>;
	nav: any;
	slug: string;

  hasPassword: boolean;
  password: string = null;

	post: any;
	gotPost: boolean;
	goPrev: any;
	goNext: any;

	constructor(
		private compiler: Compiler,
		private _route: ActivatedRoute,
		private _router: Router,
		private _postService: PostService,
		private _eventStore: EventStore) {
	}

	ngOnInit() {
		this.nav = this._route.params.subscribe(params => {
      this.slug = params['slug'];
      this.hasPassword = (params['pw'] == 'true') ? true : false;

      if(!this.hasPassword) {
        this.loadPost();
      } else {
        this.showPasswordForm();
      }
		});
	}

  loadPost() {
    this._postService.fetchPost(this.slug, this.password).subscribe((e) => this.displayPost());
  }

  showPasswordForm() {
    this._postService.isProcessing = false;
  }

  setPassword() {
    this._postService.isProcessing = true;
    this.loadPost();
  }

  ngOnDestroy() {
		if (this.component) {
			this.component.destroy();
			this.component = null;
		}
  }

  get isProcessing(): boolean {
    return this._postService.isProcessing;
	}

  private displayPost() {
    this.post = this._postService.postSingle;

    if(this.post.content.rendered != "") {
      this.hasPassword = false;
    }

    this.post.date = moment(this.post.date).format('MMMM Do YYYY'); // move to service
    this._postService.currentPost = this.slug; // move to service
    this._postService.isProcessing = false; // move to service

    this.addComponent(this.post.content.rendered);
  }

	/* http://stackoverflow.com/questions/38888008/how-can-i-use-create-dynamic-template-to-compile-dynamic-component-with-angular */
	private addComponent(template: string) {
		if (this.component) {
			this.component.destroy();
		}

    @Component({template: template})
    class TemplateComponent {}

    @NgModule({imports: [SharedModule], declarations: [TemplateComponent]})
    class TemplateModule {}

    const mod = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const factory = mod.componentFactories.find((comp) =>
      comp.componentType === TemplateComponent
    );

    this.component = this.renderedPost.createComponent(factory);
  }
}
