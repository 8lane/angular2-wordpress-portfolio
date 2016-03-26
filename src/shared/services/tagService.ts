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

  fetchTagsCollection(): Observable<void> {
    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      url: Settings.apiEndPoint + Settings.apiNamespace + '/tags/',
    });

    return this._http.request(new Request(options))
      .map((responseData) => {
        let data = responseData.json();
        this.tags = [];

        if (data) {
          this.tags = data;
          console.log('TAGS: ', data);
        }

      }, (error: any) => {
        console.log(error);
      });
  }
}
