import { Component } from '@angular/core';

import { AppService } from '../shared/services';

@Component({
  moduleId: module.id,
  selector: 'tc-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.css'],
  directives: [],
  pipes: []
})
export class SidebarComponent {
  constructor(private _appService: AppService) {}
}