import {Injectable} from '@angular/core';
import {Http, Request} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Settings} from '../../../settings';
import {MyRequestOptions} from '../misc';

declare var moment: any;

@Injectable()
export class PostService {
  postSingle: any[];
  postCollection: any[];
  postCategories: any[];
  currentPost: string;
  isProcessing: boolean = true;

  constructor(private _http: Http) {
    this.postCategories = []; /* list of posts by year */
    this.postSingle = []; /* stores individual posts */
    this.postCollection = []; /* stores the core set of posts for lifetime of app */
  }

  fetchPost(slug: string): Observable<void> {
    var requestOptions = new MyRequestOptions();
    var options = requestOptions.merge({
      // @todo requestOptions() has better param handling. Refactor!
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
      }, (error: any) => {
        // @todo handle error
        console.warn('ERROR IN GET SINGLE POST HTTP REQUEST ', error);
      });
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
        this.postCollection = posts; /* store our returned posts from the API in a postCollection array */
        this.setupCategoriesByYear(posts); /* create a new restructured collection of posts organised by year */
        return posts;
      } else {
        // @todo handle error
        console.warn('ERROR IN GET POSTS HTTP REQUEST');
      }
    }, (error: any) => {
      // @todo handle error
      console.warn('ERROR IN GET POSTS HTTP REQUEST ', error);
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

  setupCategoriesByYear(posts: Array<any>) {
    posts.forEach((post: any) => {
      let year = moment(post.date).format('YYYY');

      /* Check if the year already exists within the array, if not, add it and push the post to it */
      if (this.postCategories.filter((e) => { return e.hasOwnProperty(year); }).length === 0) {
        this.postCategories.push({ [year]: [post] });
      } else { // Year already exists, push the post
        this.postCategories.forEach((cat, idx) => {
          if (cat.hasOwnProperty(year)) {
            cat[year].push(post);
          }
        });
      }
    });
  }
}
