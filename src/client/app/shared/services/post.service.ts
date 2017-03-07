import {Injectable} from '@angular/core';
import {Http, Request, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Config} from '../../shared/config/env.config';
import {MyRequestOptions} from '../misc';

declare var moment: any;

@Injectable()
export class PostService {
	API: string;
  postSingle: any[];
  postCollection: any[];
  postCategories: any[];
  currentPost: string;
  isProcessing: boolean = true;

  constructor(private _http: Http) {
    this.postCategories = []; /* list of posts by year */
    this.postSingle = []; /* stores individual posts */
    this.postCollection = []; /* stores the core set of posts for lifetime of app */
		this.API = Config.apiEndPoint + Config.apiNamespace;
  }

  fetchPost(slug: string, password: string = null): Observable<void> {
		let params: URLSearchParams = new URLSearchParams();
		params.set('slug', slug);

		if(password) {
			params.set('password', password);
		}

    return this._http.request(this.API + '/posts', { search: params }).map(
			(response) => this.postSingle = response.json()[0],
			(error: any) => console.warn(error.json())
		);
  }

  fetchPosts(): Observable<void> {
    return this._http.request(this.API + '/posts/').map((response) => {
      let data = response.json();
      data.forEach((d: any) => this.postCollection.push(Object.assign(d)));
      this.setupCategoriesByYear(data);
    }, (error: any) => console.warn(error.json()));
	}

  fetchPostsWithFilter(filter: any = null): Observable<void> {
		let requestOptions = new MyRequestOptions();

		let filterQuery = filter ? `?filter[${filter[0]}]=${filter[1]}` : '';

    let options = requestOptions.merge({
			url: this.API + '/posts/' + filterQuery,
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
