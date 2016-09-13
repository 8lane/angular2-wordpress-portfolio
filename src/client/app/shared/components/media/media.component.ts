import { Component, Input } from '@angular/core';

import { MediaService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'tc-media',
  viewProviders: [MediaService],
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {
  @Input() id: number;
  media: any;

  constructor(private _mediaService: MediaService) {}

  ngOnInit() {
    //if (typeof this.id !== 'undefined' && this.id) {
    //}
  }

  ngAfterViewInit() {
    this._mediaService.fetchMedia(this.id).subscribe((data) => {
      this.media = data;
    });
  }
}
