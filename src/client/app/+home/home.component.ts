import { Component } from '@angular/core';

import { AppService } from '../shared/services';
import { PostService } from '../shared/services';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'tc-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class HomeComponent {
  constructor(private _postService: PostService, private _appService: AppService) {}

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
