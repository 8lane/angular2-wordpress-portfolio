import {Component, Input} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {MediaService} from '../../services/media.service';

@Component({
  selector: 'app-media',
  viewProviders: [MediaService, HTTP_PROVIDERS],
  moduleId: module.id,
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MediaComponent {
  @Input() id: number;
  media: any;

	constructor(private _mediaService: MediaService) {
  }

  ngOnInit() {
    //if (typeof this.id !== 'undefined' && this.id) {
    //}
  }

  ngAfterViewInit() {
    this._mediaService.fetchMedia(this.id).subscribe((data) => {
      this.media = data;
      console.log('got media1', this.media);

    });
  }

}
