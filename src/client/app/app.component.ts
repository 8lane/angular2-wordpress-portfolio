import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Config } from './shared/config/env.config';
import './operators';

import { AppService } from './shared/services';
import { PostService } from './shared/services';

import { ContainerOffsetDirective } from './shared/directives';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'tc-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
	@ViewChild(ContainerOffsetDirective) containerOffset: ContainerOffsetDirective;

  constructor(private _appService: AppService, private _postService: PostService, private _router: Router) {}

	get isPostPage() {
    return this._appService.isPostPage;
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

	// ngAfterContentInit() {
	// 	this.containerOffset.setPosition();
	// }

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
        this._appService.isPostPage = true;
        this._appService.sidebarActive = false;
      } else {
        this._appService.isPostPage = false;
        this._appService.sidebarActive = true;
      }
    });
  }
}
