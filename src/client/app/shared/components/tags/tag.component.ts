import { Component} from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import { HTTP_PROVIDERS} from '@angular/http';

import { PostsComponent } from '../../components';
import { TagService } from '../../services';
import { PostService } from '../../services';
import { EventStore } from '../../misc';

@Component({
  moduleId: module.id,
  selector: 'tc-tags',
  viewProviders: [HTTP_PROVIDERS, EventStore],
  templateUrl: './tag.component.html',
  directives: [ROUTER_DIRECTIVES, PostsComponent]
})

export class TagComponent {
  tag: any;
  slug: string;
  post: any;

  constructor(private _route: ActivatedRoute,
              private _tagService: TagService,
              private _postService: PostService) {

    this.tag = this._route.params.subscribe(params => {
      this.slug = params['slug'];
      this._tagService.fetchPosts(['tag', this.slug]);
    });
  }

  get posts() {
    return this._tagService.pagedResults.posts;
  }

  get numberOfResults() {
    return this._tagService.pagedResults.postsTotal;
  }
}
