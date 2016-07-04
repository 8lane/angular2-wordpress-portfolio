import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tc-spinner',
  viewProviders: [],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'], 
  directives: []
})
export class SpinnerComponent {
  @Input() isProcessing: boolean = true;

  constructor() {}
}
