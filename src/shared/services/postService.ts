import {Injectable} from 'angular2/core';
import {Http, Request} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Settings} from '../../settings';
import {MyRequestOptions} from './myRequestOptions';

@Injectable()
export class PostService {
  postSingle: any[];
  postCollection: any[];
  pagedResults: PagedResult;

  constructor(private _http: Http) {
    this.postSingle = []; /* stores individual posts */
    this.postCollection = []; /* stores the core set of posts for lifetime of app */
    this.pagedResults = new PagedResult();
  }

  fetchSinglePost(slug: string): Observable<void> {
    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      url: Settings.apiEndPoint + Settings.apiNamespace + '/posts/?slug=' + slug + '',
    });

    return this._http.request(new Request(options))
      .map((responseData) => {
        let data = responseData.json();
        let post: any[] = [];
        this.postSingle = [];

        if (data) {
          data.forEach((d: any) => post.push(Object.assign(d)));
          this.postSingle = post[0];
          console.log('POST SINGLE: ', this.postSingle);
        }

        // this.setPagedResult(1);
      }, (error: any) => {
        console.log(error);
      });
  }

  setAppPosts(posts: any) {
		this.postCollection = posts;
		this.setPagedResult(1);
  }

  fetchPosts(): Observable<void> {
		let requestOptions = new MyRequestOptions();

    let options = requestOptions.merge({
      url: Settings.apiEndPoint + Settings.apiNamespace + '/posts/',
    });

    return this._http.request(new Request(options)).map((responseData) => {
      let data = responseData.json();

      if (data) {
				let posts: any = [];
        data.forEach((d: any) => posts.push(Object.assign(d)));
        return posts;
      }
    }, (error: any) => {
      console.log(error);
    });
	}

  fetchPostsWithFilter(filter: any = null): Observable<void> {
		let requestOptions = new MyRequestOptions();

		let filterQuery = filter ? `?filter[${filter[0]}]=${filter[1]}` : '';

    let options = requestOptions.merge({
			url: Settings.apiEndPoint + Settings.apiNamespace + '/posts/' + filterQuery,
    });

    return this._http.request(new Request(options)).map((responseData) => {
      let data = responseData.json();

      if (data) {
				let posts: any = [];
        data.forEach((d: any) => posts.push(Object.assign(d)));
        return posts;
      }
    }, (error: any) => {
      console.log(error);
    });
	}

  // fetchAllPosts(filter: any = null): Observable<void> {
  //   var requestOptions = new MyRequestOptions();

  //   let filterQuery = filter ? `?filter[${filter[0]}]=${filter[1]}` : '';

  //   var options = requestOptions.merge({
  //     url: Settings.apiEndPoint + Settings.apiNamespace + '/posts/' + filterQuery,
  //   });

    // return this._http.request(new Request(options))
    //   .map((responseData) => {
    //     let data = responseData.json();
    //     let posts: any[] = [];
    //     this.postCollection = [];

    //     if (data) {
    //       data.forEach((d: any) => posts.push(Object.assign(d)));
    //       this.postCollection = posts;

    //       console.log('POST COLLECTION: ', this.postCollection);
    //     }

    //     this.setPagedResult(1);
    //   }, (error: any) => {
    //     console.log(error);
    //   });
  // }

  setPagedResult(pageNumber: number) {
    this.pagedResults.pageNumber = pageNumber;
    this.pagedResults.posts = this.postCollection.slice((pageNumber - 1) * 25, pageNumber * 25);
    this.pagedResults.postsTotal = this.postCollection.length;
  }
}

export class PagedResult {
  posts: any[];
  pageNumber: number;
  postsTotal: number;
}
