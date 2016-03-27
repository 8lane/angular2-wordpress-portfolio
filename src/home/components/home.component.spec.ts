import {
  describe,
} from 'angular2/testing';
import {Component} from 'angular2/core';
import {HomeComponent} from './home.component';


export function main() {
  describe('Home component', () => {
    console.log('home');
  });
}

@Component({
  providers: [],
  selector: 'test-cmp',
  template: '<sd-home></sd-home>',
  directives: [HomeComponent]
})
class TestComponent {}
