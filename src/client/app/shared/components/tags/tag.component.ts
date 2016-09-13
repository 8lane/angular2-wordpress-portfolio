import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TagService } from '../../services';
import { PostService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'tc-tags',
  templateUrl: './tag.component.html'
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
