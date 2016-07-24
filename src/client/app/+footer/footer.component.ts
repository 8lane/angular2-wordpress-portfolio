import { Component } from '@angular/core';

import {CallToActionComponent} from '../shared/components';

@Component({
  moduleId: module.id,
  selector: 'tc-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
  directives: [CallToActionComponent]
})
export class FooterComponent {
  constructor() {}
}
