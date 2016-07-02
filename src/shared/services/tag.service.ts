import {Injectable} from 'angular2/core';
import {Http, Request} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import {Settings} from '../../settings';
import {PostService} from '../../shared/services/post.service';
import {MyRequestOptions} from '../misc/myRequestOptions';

@Injectable()
export class TagService {
  tags: any[];
  postCollection: any[];
  pagedResults: PagedResult;

  constructor(private _http: Http, private _postService: PostService) {
    this.tags = [];
    this.postCollection = []; /* stores the set of posts for the specified tag */
    this.pagedResults = new PagedResult();
  }

  fetchPosts(filter: any = null) {
    this._postService.fetchPostsWithFilter(filter).subscribe((posts: any) => {
      this.postCollection = posts;
      this.setPagedResult(1);
      console.log('TAG CMP POSTS: ', this.postCollection);
    });
  }

  setPagedResult(pageNumber: number) {
    this.pagedResults.pageNumber = pageNumber;
    this.pagedResults.posts = this.postCollection.slice((pageNumber - 1) * 25, pageNumber * 25);
    this.pagedResults.postsTotal = this.postCollection.length;
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


export class PagedResult {
  posts: any[];
  pageNumber: number;
  postsTotal: number;
}
