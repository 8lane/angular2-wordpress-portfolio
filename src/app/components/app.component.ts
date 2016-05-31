import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {EventStore} from '../../shared/services/eventStore';
import {NavbarComponent} from './navbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {PostComponent} from '../../posts/components/post.component';
import {TagComponent} from '../../tags/components/tag.component';
import {TagListComponent} from '../../tags/components/taglist.component';
import {LightboxComponent} from '../../app/components/lightbox.component';
import {AppService} from '../../shared/services/appService';
import {PostService} from '../../shared/services/postService';
import {TagService} from '../../shared/services/tagService';
import {MediaService} from '../../shared/services/mediaService';

@Component({
  selector: 'sd-app',
  providers: [AppService, PostService, TagService, MediaService, EventStore, HTTP_PROVIDERS],
  moduleId: module.id,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  directives: [ROUTER_DIRECTIVES, NavbarComponent, TagListComponent, LightboxComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/portfolio/:slug', component: PostComponent, name: 'Post' },
  { path: '/tags/:slug', component: TagComponent, name: 'Tag' },
])
export class AppComponent {
	appInfo: any;
  showLightbox: boolean = false;
  lightboxImg: string;

  constructor(private _appService: AppService) {
		this.appInfo = <any> false;

		this._appService.fetchAppData().subscribe(() => {
			this.appInfo = this._appService.appInfo;
      this.appInfo.description = this.appInfo.description + ` Creator of <a target="_blank" href="http://ipsthemes.com">IPS Themes</a>`;
		});
	}
}
