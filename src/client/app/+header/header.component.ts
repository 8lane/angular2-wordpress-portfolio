import {Component} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {AppService} from '../shared/services';
import {CallToActionComponent} from '../shared/components';
import {ResizeHeaderDirective} from '../shared/directives';
import {HeaderTypeDirective} from '../shared/directives';

@Component({
  moduleId: module.id,
  selector: 'tc-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    CallToActionComponent,
    ResizeHeaderDirective,
    HeaderTypeDirective
  ]
})
export class HeaderComponent {
  authorSite = `<span class="app-header__author-site">Creator of <a target="_blank" href="http://ipsthemes.com">IPS Themes</a></span>`;

  constructor(private _appService: AppService) {}

  get appInfo() {
    return this._appService.appInfo;
  }

  get hasEpicHeader() {
    return this._appService.epicHeader;
  }

  get hasSidebar() {
    return this._appService.sidebarActive;
  }
}
