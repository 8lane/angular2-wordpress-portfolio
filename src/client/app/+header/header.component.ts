import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {AppService} from '../shared/services';

@Component({
  moduleId: module.id,
  selector: 'tc-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  authorSite = `<span class="app-header__author-site">Creator of <a target="_blank" href="http://ipsthemes.com">IPS Themes</a></span>`;

  constructor(private _appService: AppService) {}

  get appInfo() {
    return this._appService.appInfo;
  }

  get hasScrolledHeader() {
    return this._appService.isPageScrolled && !this.hasEpicHeader;
  }

  get hasEpicHeader() {
    return this._appService.epicHeader;
  }

  get hasSidebar() {
    return this._appService.sidebarActive;
  }
}
