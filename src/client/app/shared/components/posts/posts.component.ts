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

  ngOnInit() {
        console.log(this.post);
  }

  loadPost(slug: string) {
    this._router.navigate(['/portfolio', slug ]);
  }
}