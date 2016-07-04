import { Component } from '@angular/core';

import { PostsComponent } from '../shared/components';
import { AppService } from '../shared/services';
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
  constructor(private _postService: PostService, private _appService: AppService) {}

  ngAfterViewInit() {
    if(this._appService.skipToPosts) {
      document.getElementById('js-main-content').scrollIntoView();
    }
  }

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

 ngOnDestroy() {
   this._appService.skipToPosts = true;
 }
}