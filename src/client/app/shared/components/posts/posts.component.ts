import {Component, Input} from '@angular/core';
import {CORE_DIRECTIVES} from '@angular/common';
import {Router} from '@angular/router';

import {MediaComponent} from '../../components';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  directives: [CORE_DIRECTIVES, MediaComponent]
})
export class PostsComponent {
  @Input() post: any;

  constructor(private _router: Router) {}

  loadPost(slug: string) {
    console.log('load: ', slug);
    this._router.navigate(['/portfolio', slug ]);
  }
}
