import { Component } from '@angular/core';

import { AppService } from '../shared/services';

@Component({
  moduleId: module.id,
  selector: 'tc-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css']
})
export class FooterComponent {
	constructor(private _appService: AppService) {}

  get isPostPage() {
    return this._appService.isPostPage;
  }
}
