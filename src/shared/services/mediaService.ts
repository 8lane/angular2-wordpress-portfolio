import {Injectable} from 'angular2/core';
import {Http, Request} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Settings} from '../../settings';
import {MyRequestOptions} from './myRequestOptions';

@Injectable()
export class MediaService {
  media: any;

  constructor(private _http: Http) {}

  fetchMedia(id: number): Observable<void> {
    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      url: Settings.apiEndPoint + Settings.apiNamespace + '/media/?include='+ id +'',
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
