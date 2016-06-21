import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';

import {PostsComponent} from '../../posts/components/posts.component';
import {PostService} from '../../shared/services/postService';

@Component({
  selector: 'sd-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  directives: [CORE_DIRECTIVES, PostsComponent]
})

export class HomeComponent {
  constructor(private _postService: PostService) {}

  get posts() {
    return this._postService.postCollection;
  }

  get gotPosts() {
    return this.posts.length;
  }
}
