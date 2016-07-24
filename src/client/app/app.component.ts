import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { Config } from './shared/index';

import {EventStore} from './shared/misc';
import {ErrorComponent} from './shared/components';
import {SidebarComponent} from './shared/components';
import {FooterComponent} from './shared/components';
import {PostComponent} from './shared/components';
import {CallToActionComponent} from './shared/components';
import {AppService} from './shared/services';
import {PostService} from './shared/services';
import {TagService} from './shared/services';
import {ResizeHeaderDirective} from './shared/directives';
import {HeaderTypeDirective} from './shared/directives';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */

@Component({
  moduleId: module.id,
  selector: 'tc-app',
  viewProviders: [HTTP_PROVIDERS, EventStore, AppService, PostService, TagService],
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    ErrorComponent,
    SidebarComponent,
    FooterComponent,
    PostComponent,
    CallToActionComponent,
    ResizeHeaderDirective,
    HeaderTypeDirective
  ]
})
export class AppComponent {
	appInfo: any;
  authorSite = `<span class="app-header__author-site">Creator of <a target="_blank" href="http://ipsthemes.com">IPS Themes</a></span>`;

  constructor(private _appService: AppService,
              private _postService: PostService,
              private _router: Router) {
		this.appInfo = <any> false;

    console.log('ROUTER: ', this._router);
		console.log('Environment config', Config);
	}

  get hasSidebar() {
    return this._appService.sidebarActive;
  }

  get posts() {
    return this._postService.postCollection;
  }

  ngOnInit() {
    /* Fetch and set core app data */
    this._appService.fetchAppData().subscribe(() => {
      this.appInfo = this._appService.appInfo;
    }, (error) => {
      this._router.navigate(['error']);
    });

    /* Fetch core posts for our app */
    this._postService.fetchPosts().subscribe();

    /* Sidebar display TODO: move to directive */
    this._router.events.subscribe((e) => {
      if(this._router.url.indexOf('/portfolio') > -1) {
        this._appService.sidebarActive = false;
      } else {
        this._appService.sidebarActive = true;
      }
    });
  }
}
