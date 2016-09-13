import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services';
import { TagService } from '../../services';
import { EventStore } from '../../misc';

declare var moment: any;

@Component({
  selector: 'tc-post',
  moduleId: module.id,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
	nav: any;
	slug: string;
	post: any;
	gotPost: boolean = false;
	goPrev: any;
	goNext: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _postService: PostService,
		private _tagService: TagService,
		private _eventStore: EventStore) {
	}

	ngOnInit() {
		this.nav = this._route.params.subscribe(params => {
			this.slug = params['slug'];

			this._postService.fetchPost(this.slug).subscribe((e) => {
				this.post = this._postService.postSingle;
				this.post.date = moment(this.post.date).format('MMMM Do YYYY');

        this._postService.currentPost = this.slug;

				this._tagService.fetchTagsCollection(this.post.tags).subscribe((tags) => {
					this.post.tags = tags;
					this._postService.isProcessing = false;
				});
			});
		});
	}

  get isProcessing(): boolean {
    return this._postService.isProcessing;
  }

	loadTag(slug: string) {
		this._router.navigate(['/tags', slug]);
	}
}
