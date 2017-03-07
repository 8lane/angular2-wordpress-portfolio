import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  @Input() post: any;

  constructor(private _router: Router) {}

  ngOnInit() {}

  loadPost(slug: string, password: boolean = false) {
    this._router.navigate(['portfolio', slug, password ? true : false]);
  }
}
