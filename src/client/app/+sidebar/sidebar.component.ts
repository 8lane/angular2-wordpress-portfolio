import { Component } from '@angular/core';

import { SidebarPosts } from './sidebarPosts';
import { AppService } from '../shared/services';

import * as _ from 'lodash';

@Component({
  moduleId: module.id,
  selector: 'tc-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css']
})
export class SidebarComponent {
  sidebarPosts: Array<Object>;

  constructor(private _appService: AppService) {}

  ngOnInit() {
    this.sidebarPosts = _.shuffle(SidebarPosts.list);
  }
}
