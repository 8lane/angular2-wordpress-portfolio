import {Component, DynamicComponentLoader, ElementRef} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';

import {PostService} from '../../shared/services/postService';
import {TagService} from '../../shared/services/tagService';

declare var moment: any;

@Component({
  selector: 'app-post',
  moduleId: module.id,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES]
})
export class PostComponent {
	slug: string;
	post: any;
	gotPost: boolean = false;
	goPrev: any;
	goNext: any;
	directiveTest: boolean;

	constructor(
		private dcl: DynamicComponentLoader,
		private elementRef: ElementRef,
		private _routeParams: RouteParams,
		private _router: Router,
		private _dcl: DynamicComponentLoader,
		private _postService: PostService,
		private _tagService: TagService) {
		this.slug = _routeParams.get('slug');

		this._postService.fetchSinglePost(this.slug).subscribe((e) => {
			this.post = this._postService.postSingle;
			this.post.date = moment(this.post.date).format('MMMM Do YYYY');
			this.gotPost = true;

			this._tagService.fetchTagsCollection(this.post.tags).subscribe((tags) => {
				this.post.tags = tags;
			});

			this._postService.fetchAllPosts().subscribe(() => {
				this.setupPagination(this._postService.postCollection);
			});

			let template = `<hello></hello><h2>${this.post.content.rendered}</h2>`;
			let directives = [FORM_DIRECTIVES, CORE_DIRECTIVES];
			this.dcl.loadIntoLocation(this.buildComponent(template, directives), this.elementRef, 'postContent');
		});
	}

	/* Hacky way to do the equivalent of NG1's $compile (http://stackoverflow.com/a/34786039/1010691) */
	buildComponent(template: any, directives: any) {
		@Component({
			selector: 'fake',
			template, directives
		})
		class FakeComponent {
			directiveTest: boolean;
			ngOnInit() {
				this.directiveTest = false;
			}
		};
		return FakeComponent;
	}

	setupPagination(posts: any[]) {
		let self = this;

		posts.forEach(function(item, key) {
			if (item.id === self.post.id) {
				let prev = posts[key - 1];
				let next = posts[key + 1];
				self.goPrev = typeof (prev) !== 'undefined' ? prev : posts[posts.length - 1]; // Go to previous item, if first item, skip to end
				self.goNext = typeof (next) !== 'undefined' ? next : posts[0]; // Go to next item, if last item, skip to start
			}
		});

	}

	loadPost(slug: string) {
		this._router.navigate(['Post', { slug: slug }]);
	}

	loadTag(slug: string) {
		this._router.navigate(['Tag', { slug: slug }]);
	}

}
