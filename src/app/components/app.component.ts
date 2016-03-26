import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {EventStore} from '../../shared/services/eventStore';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {PostComponent} from '../../posts/components/post.component';
import {TagComponent} from '../../tags/components/tag.component';
import {TagListComponent} from '../../tags/components/taglist.component';
import {AboutComponent} from '../../about/components/about.component';
import {NameListService} from '../../shared/services/name-list.service';
import {AppService} from '../../shared/services/appService';
import {PostService} from '../../shared/services/postService';
import {TagService} from '../../shared/services/tagService';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService, AppService, PostService, TagService, EventStore, HTTP_PROVIDERS],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, TagListComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/portfolio/:slug', component: PostComponent, name: 'Post' },
  { path: '/tags/:slug', component: TagComponent, name: 'Tag' },
])
export class AppComponent {
	appInfo: any;

	constructor(private _appService: AppService) {
		this.appInfo = <any> false;

		this._appService.fetchAppData().subscribe(() => {
			this.appInfo = this._appService.appInfo;
		});
	}
}
