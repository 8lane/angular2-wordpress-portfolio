import {Component} from 'angular2/core';
import {RouteParams, ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {EventStore} from '../../shared/services/eventStore';
import {PostsComponent} from '../../posts/components/posts.component';
import {TagService} from '../../shared/services/tagService';
import {PostService} from '../../shared/services/postService';

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
    //this._postService.pagedResults.posts = [];
    this._tagService.fetchPosts(['tag', this.slug]);
  }

  get posts() {
    return this._tagService.pagedResults.posts;
  }

  get numberOfResults() {
    return this._tagService.pagedResults.postsTotal;
  }

}
