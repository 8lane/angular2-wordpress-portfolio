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
    let filter = include.length ? `&include=${include.join(', ')}` : ``;

    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      url: Settings.apiEndPoint + Settings.apiNamespace + '/tags/?orderby=count&order=desc&hide_empty=true&per_page=10' + filter,
    });

    return this._http.request(new Request(options))
      .map((responseData) => {
        let data = responseData.json();
        this.tags = [];

        if (data && !include.length) {
          this.tags = data;
          return;
        }

        return data;
      }, (error: any) => {
        console.log(error);
      });
  }
}
