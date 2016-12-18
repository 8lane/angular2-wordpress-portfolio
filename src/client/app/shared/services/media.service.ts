import { Injectable } from '@angular/core';
import { Http, Request } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Config } from '../../shared/config/env.config';
import { MyRequestOptions } from '../misc';

@Injectable()
export class MediaService {
  media: any;
  mediaStore: any = {}; // @todo: make into interface with ID, URL, Status etc

  constructor(private _http: Http) {}

  fetchMedia(id: number): Observable<void> {
    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      url: Config.apiEndPoint + Config.apiNamespace + '/media/?include='+ id +'',
    });

    return this._http.request(new Request(options))
      .map((responseData) => {
        let data = responseData.json();

        if (data) {
          return data[0];
        }
      }, (error: any) => {
        console.log(error);
      });
  }
}
