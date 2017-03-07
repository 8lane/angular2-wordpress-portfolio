import {Injectable} from '@angular/core';

@Injectable()
export class SidebarPosts {
  static list = [
    {Name: 'Live Departures in React', Url: 'https://github.com/tctc91/react-mystop', Source: 'github', Featured: false},
		{Name: 'Color palettes in SASS', Url: 'https://medium.com/p/dc0b13d9ae74/', Source: 'medium', Featured: true},
    {Name: 'Angular2 / Wordpress Portfolio', Url: 'https://github.com/tctc91/angular2-wordpress-portfolio', Source: 'github', Featured: true},
    {Name: 'Node IPS Credit Scraper', Url: 'https://github.com/tctc91/nodejs-invision-credit-scraper', Source: 'github', Featured: false},
    {Name: 'SASS Media query mixin', Url: 'https://codepen.io/tctc91/pen/ZBXPOz', Source: 'codepen', Featured: false},
    {Name: 'Holiday Chooser in Angular', Url: 'https://github.com/tctc91/angular-holiday-chooser', Source: 'github', Featured: false},
  ];
}
