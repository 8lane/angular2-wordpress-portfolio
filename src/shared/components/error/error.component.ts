import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
  selector: 'app-error',
  viewProviders: [HTTP_PROVIDERS],
  moduleId: module.id,
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ErrorComponent {

	constructor() {
    console.log('error cmp!');
  }
}
