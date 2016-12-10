import {Injectable} from '@angular/core';
import {Http, Request, Response, RequestMethod} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Config} from '../../shared/config/env.config';
import {MyRequestOptions} from '../misc/myRequestOptions';

@Injectable()
export class AppService {
  appInfo: any;
  skipToPosts: boolean;
  sidebarActive: boolean = true;
  epicHeader: boolean = true;
  isPageScrolled: boolean;
  isPostPage: boolean;

  constructor(private _http: Http) {
    this.appInfo = {
			name: '&nbsp;',
			description: '&nbsp;'
		};
  }

  fetchAppData(): Observable<void> {
    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      url: Config.apiEndPoint + '/',
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
