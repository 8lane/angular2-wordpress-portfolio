import {Injectable} from 'angular2/core';
import {Http, Request} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Settings} from '../../settings';
import {MyRequestOptions} from './myRequestOptions';

@Injectable()
export class TagService {
  tags: any[];

  constructor(private _http: Http) {
    this.tags = [];
  }

  fetchTagsCollection(include:any[] = []): Observable<void> {
    var requestOptions = new MyRequestOptions();

    let filter = include.length ? `?include=${include.join(', ')}` : ``;

    var options = requestOptions.merge({
      url: Settings.apiEndPoint + Settings.apiNamespace + '/tags/' + filter,
    });

    return this._http.request(new Request(options))
      .map((responseData) => {
        let data = responseData.json();
        this.tags = [];

        if (data && !include.length) {
          this.tags = data;
          console.log('TAGS: ', data);
          return;
        }

        return data;
      }, (error: any) => {
        console.log(error);
      });
  }
}
