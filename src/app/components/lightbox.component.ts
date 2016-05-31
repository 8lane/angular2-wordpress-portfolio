import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {EventStore} from '../../shared/services/eventStore';

@Component({
  selector: 'app-lightbox',
  viewProviders: [HTTP_PROVIDERS],
  moduleId: module.id,
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class LightboxComponent {
  @Input() active: boolean = false;
  @Input() img: number;

  constructor(private _eventStore: EventStore) {
    this._eventStore.lightbox.subscribe((img: any) => {
      this.active = true;
      this.img = img;
    });
  }
}
