import {Injectable} from 'angular2/core';
import {Http, Request} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Settings} from '../../settings';
import {MyRequestOptions} from './myRequestOptions';

@Injectable()
export class PostService {
  postData: any[];
  // pagedResults: PagedResult;

  constructor(private _http: Http) {
    this.postData = [];
    // this.pagedResults = new PagedResult();
  }

  get(slug: string): Observable<void> {
    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      url: Settings.apiEndPoint + '/posts/?slug='+slug+'',
    });

    return this._http.request(new Request(options))
      .map((responseData) => {
        let data = responseData.json();
        let post: any[] = [];
        this.postData = [];

        if (data) {
          data.forEach((d:any) => post.push(Object.assign(d)));
          this.postData = post;

          console.log('POST DATA: ', this.postData);
        }

        // this.setPagedResult(1);
      }, (error: any) => {
        console.log(error);
      });
  }

  // setPagedResult(pageNumber: number) {
  //   this.pagedResults.pageNumber = pageNumber;
  //   this.pagedResults.posts = this.postResults.slice((pageNumber - 1) * 25, pageNumber * 25);
  //   this.pagedResults.postsTotal = this.postResults.length;
  // }
}

// export class PagedResult {
//   posts: any[];
//   pageNumber: number;
//   postsTotal: number;
// }
