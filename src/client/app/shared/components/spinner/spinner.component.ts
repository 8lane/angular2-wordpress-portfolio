import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tc-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  @Input() isProcessing: boolean = true;

  constructor() {}
}
