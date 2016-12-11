import {Injectable} from '@angular/core';

@Injectable()
export class SidebarPosts {
  static list = [
		{Name: 'Color palettes in SASS', Url: 'https://medium.com/p/dc0b13d9ae74/', Source: 'medium', Featured: true},
    {Name: 'angular2-wordpress-portfolio', Url: 'https://github.com/tctc91/angular2-wordpress-portfolio', Source: 'github', Featured: true},
    {Name: 'Undo delete design pattern', Url: 'https://embed.plnkr.co/3QT7JQ/', Source: 'codepen', Featured: false},
    {Name: 'Media query mixin in SASS', Url: 'https://codepen.io/tctc91/pen/ZBXPOz', Source: 'codepen', Featured: false},
    {Name: 'angular-holiday-chooser', Url: 'https://github.com/tctc91/angular-holiday-chooser', Source: 'github', Featured: false},
    {Name: 'Form loading button animation', Url: 'https://embed.plnkr.co/bp0CMY/', Source: 'codepen', Featured: false}
  ];
}
