import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services/post.service';
import { TagService } from '../../services/tag.service';
import { EventStore } from '../../misc/eventStore';

declare var moment: any;

@Component({
  selector: 'tc-post',
  moduleId: module.id,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
})
export class PostComponent {
	nav: any;
	slug: string;
	post: any;
	postReady: boolean = false;
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

				this.setupPagination(this._postService.postCollection);

				this._tagService.fetchTagsCollection(this.post.tags).subscribe((tags) => {
					this.post.tags = tags;
					this.postReady = true;
				});
			});
		});
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
		this._router.navigate(['/portfolio', slug]);
	}

	loadTag(slug: string) {
		this._router.navigate(['/tags', slug]);
	}
}
