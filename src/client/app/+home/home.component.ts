import { Component } from '@angular/core';

import { PostsComponent } from '../shared/components';
import { PostService } from '../shared/services';
import { MapToIterable } from '../shared/pipes';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'tc-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
  directives: [PostsComponent],
  pipes: [MapToIterable]
})
export class HomeComponent {
  constructor(private _postService: PostService) {}

  get posts() {
    return this._postService.postCollection;
  }

  get categories() {
    return this._postService.postCategories;
  }

 gotPosts() {
  return this.posts.length;
 }

 gotCategories() {
   return this.categories.length;
 }
}