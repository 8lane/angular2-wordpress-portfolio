import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';

import { Config, NameListService, NavbarComponent, ToolbarComponent } from './shared/index';

import {EventStore} from './shared/misc';
import {ErrorComponent} from './shared/components';
import {PostComponent} from './shared/components';
import {AppService} from './shared/services';
import {PostService} from './shared/services';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'tc-app',
  viewProviders: [NameListService, HTTP_PROVIDERS, EventStore, AppService, PostService],
  templateUrl: 'app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent, ErrorComponent, PostComponent]
})
export class AppComponent {
	appInfo: any;

  constructor(private _appService: AppService,
              private _postService: PostService,
              private _router: Router) {
		this.appInfo = <any> false;

		console.log('Environment config', Config);
	}

  get posts() {
    return this._postService.postCollection;
  }

  ngOnInit() {
    /* Fetch and set core app data */
    this._appService.fetchAppData().subscribe(() => {
      this.appInfo = this._appService.appInfo;
      this.appInfo.description = this.appInfo.description + ` Creator of <a target="_blank" href="http://ipsthemes.com">IPS Themes</a>`;
    }, (error) => {
      this._router.navigate(['error']);
    });

    /* Fetch core posts for our app */
    this._postService.fetchPosts().subscribe();
  }
}
