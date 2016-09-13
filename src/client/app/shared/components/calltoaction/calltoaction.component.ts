import {Component, ViewChild} from '@angular/core';

declare var smoothScroll: any;

@Component({
  moduleId: module.id,
  selector: 'tc-calltoactions',
  viewProviders: [],
  templateUrl: './calltoaction.component.html',
  styleUrls: ['./calltoaction.component.css']
})
export class CallToActionComponent {
	constructor() {}

  scrollToPortfolio($event: any): void {
    $event.preventDefault();
    let projectsElement = document.querySelector('#timeline-year-0');
    smoothScroll.animateScroll(projectsElement);
  }
}
