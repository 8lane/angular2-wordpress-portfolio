import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {NameListService} from '../../shared/services/name-list.service';
import {PostService} from '../../shared/services/postService';
import {PostsComponent} from '../../posts/components/posts.component';

@Component({
  selector: 'sd-home',
  moduleId: module.id,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES, PostsComponent]
})
export class HomeComponent {
  gotPosts: boolean = false;

  constructor(private nameListService: NameListService,
    private _postService: PostService) {

    this._postService.fetchAllPosts().subscribe(() => {
      this.gotPosts = true;
    });
  }

}
