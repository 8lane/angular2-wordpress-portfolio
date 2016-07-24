import {Component} from '@angular/core';

declare var smoothScroll: any;

@Component({
  moduleId: module.id,
  selector: 'tc-calltoactions',
  viewProviders: [],
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css'],
  directives: []
})
export class CallToActionComponent {
	constructor() {}

  scrollToPortfolio(): void {
    smoothScroll.animateScroll(`#js-main-content`, null, { speed: 700, easing: 'easeOutQuart' });
  }
}
