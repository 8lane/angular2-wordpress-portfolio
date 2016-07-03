import {Injectable} from '@angular/core';
import {Http, Request, Response, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Settings} from '../../../settings';
import {MyRequestOptions} from '../misc/myRequestOptions';

@Injectable()
export class AppService {
  appInfo: any[];

  constructor(private _http: Http) {
    this.appInfo = [];
  }

  fetchAppData(): Observable<void> {
    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      url: Settings.apiEndPoint + '/',
    });

    return this._http.request(new Request(options))
      .map((responseData) => {
        let data = responseData.json();
        this.appInfo = [];

        if (data) {
          this.appInfo = data;
          console.log('APP DATA: ', data);
        }
      });
  }
}
