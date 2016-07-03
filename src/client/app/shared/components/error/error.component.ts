import {Component} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tc-error',
  viewProviders: [],
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'], 
  directives: []
})
export class ErrorComponent {

	constructor() {
    console.log('error cmp!');
  }
}
