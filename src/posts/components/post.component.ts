import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Router, RouteParams} from 'angular2/router';

import {PostService} from '../../shared/services/postService';
import {TagService} from '../../shared/services/tagService';

@Component({
  selector: 'app-post',
  moduleId: module.id,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES],
})
export class PostComponent {
	slug: string;
	post: any;
	gotPost: boolean = false;

	constructor(private _routeParams: RouteParams,
		private _router: Router,
		private _postService: PostService,
		private _tagService: TagService) {
		this.slug = _routeParams.get('slug');

		this._postService.fetchSinglePost(this.slug).subscribe((e) => {
			this.post = this._postService.postSingle;
			this.gotPost = true;

		});
	}

}
