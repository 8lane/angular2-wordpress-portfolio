import {Component, Input} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import {Router} from 'angular2/router';

import {MediaComponent} from '../../app/components/media.component';

@Component({
  selector: 'app-posts',
  moduleId: module.id,
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  directives: [CORE_DIRECTIVES, MediaComponent]
})
export class PostsComponent {
  @Input() post: any;

  constructor(private _router: Router) {}

  loadPost(slug: string) {
    this._router.navigate(['Post', { slug: slug }]);
  }
}
