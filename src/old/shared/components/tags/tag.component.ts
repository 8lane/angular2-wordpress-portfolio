import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {PostsComponent} from '../posts/posts.component';
import {TagService} from '../../services/tag.service';
import {PostService} from '../../services/post.service';
import {EventStore} from '../../misc/eventStore';

@Component({
  selector: 'app-tags',
  viewProviders: [EventStore, HTTP_PROVIDERS],
  moduleId: module.id,
  templateUrl: './tag.component.html',
  directives: [ROUTER_DIRECTIVES, PostsComponent]
})

export class TagComponent {
  slug: string;
  post: any;

	constructor(private _routeParams: RouteParams,
              private _tagService: TagService,
              private _postService: PostService) {

    this.slug = _routeParams.get('slug');
    this._tagService.fetchPosts(['tag', this.slug]);
  }

  get posts() {
    return this._tagService.pagedResults.posts;
  }

  get numberOfResults() {
    return this._tagService.pagedResults.postsTotal;
  }

}
