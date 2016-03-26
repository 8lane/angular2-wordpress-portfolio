import {BaseRequestOptions, Headers} from 'angular2/http';

//import {Settings} from '../../settings';

export class MyRequestOptions extends BaseRequestOptions {
  headers: Headers = new Headers({
      'Accept': 'application/json',
      'Authorization': 'Basic '+btoa('tctc91,wtf')+'',
      // 'Content-Type': 'application/json'
  });
}
