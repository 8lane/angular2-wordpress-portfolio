import {Component} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {MapToIterable} from '../../shared/pipes/mapToIterable.pipe';
import {PostsComponent} from '../../posts/components/posts.component';
import {PostService} from '../../shared/services/postService';

@Component({
  selector: 'sd-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  directives: [CORE_DIRECTIVES, PostsComponent],
  pipes: [MapToIterable]
})

export class HomeComponent {
  catYears: any = {};
  gotCategories: boolean = false;

  constructor(private _postService: PostService) {}

  get posts() {
    return this._postService.postCollection;
  }

  get categories() {
    return this._postService.postCategories;
  }

 get gotPosts() {
    return this.posts.length;
 }

 // get gotCategories() {
    //console.log(this.categories);
    //return this.categories;
 // }
}
