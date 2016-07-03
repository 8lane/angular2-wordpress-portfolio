import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {PostsComponent} from '../../shared/components/posts/posts.component';
import {PostService} from '../../shared/services/post.service';
import {MapToIterable} from '../../shared/pipes/mapToIterable.pipe';

@Component({
  selector: 'sd-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  directives: [CORE_DIRECTIVES, PostsComponent],
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
