import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from './shared/index';

import { AppService } from './shared/services';
import { PostService } from './shared/services';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'tc-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  constructor(private _appService: AppService, private _postService: PostService, private _router: Router) {
    console.log('ROUTER: ', this._router);
		console.log('Environment config', Config);
	}

  get hasSidebar() {
    return this._appService.sidebarActive;
  }

  get hasEpicHeader() {
    return this._appService.epicHeader;
  }

  get posts() {
    return this._postService.postCollection;
  }

  ngOnInit() {
    /* Fetch and set core app data */
    this._appService.fetchAppData().subscribe(() => {

      /* Fetch core posts for our app */
      this._postService.fetchPosts().subscribe();

    }, (error) => {
      this._router.navigate(['error']);
    });

    /* Sidebar display TODO: move to directive */
    this._router.events.subscribe((e) => {
      window.scrollTo(0,0);

      if(this._router.url.indexOf('/portfolio') > -1) {
        this._appService.sidebarActive = false;
      } else {
        this._appService.sidebarActive = true;
      }
    });
  }
}
