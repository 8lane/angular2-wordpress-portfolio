import {Injectable} from '@angular/core';

@Injectable()
export class SidebarPosts {
  static list = [
    {Name: 'angular2-spinners', Url: 'http://google.com', Source: 'github'},
    {Name: 'ng2 dynamic content loader', Url: 'http://google.com', Source: 'codepen'},
    {Name: 'sass color palettes', Url: 'http://google.com', Source: 'medium'},
    {Name: 'angular2-wordpress-portfolio', Url: 'http://google.com', Source: 'github'},
    {Name: '@extending %placeholders', Url: 'http://google.com', Source: 'codepen'},
    {Name: 'edd statistics app', Url: 'http://google.com', Source: 'github'}
  ];
}
