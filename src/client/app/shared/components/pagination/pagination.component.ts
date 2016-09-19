import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services';
import { EventStore } from '../../misc';

declare var moment: any;

@Component({
  selector: 'tc-pagination',
  moduleId: module.id,
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  currentPost: string;

	constructor(private _router: Router, private _postService: PostService) {
	}

  loadPrevious(): void {
    this.findPost('prev').then((slug) => {
      this._postService.isProcessing = true;
      this._router.navigate(['/portfolio', slug])
    });
  }

  loadNext($event: Event): void {
    $event.preventDefault();

    this.findPost('next').then((slug) => {
      this._postService.isProcessing = true;
      this._router.navigate(['/portfolio', slug])
    });
  }

  findPost(direction: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let getPosts = this._postService.postCollection.map((post, idx, posts) => {
        if(post.slug === this._postService.currentPost) {
          if(direction === 'prev') {
            /* Go to previous item, if first item, skip to end */
            let prev = posts[idx - 1];
            resolve(typeof (prev) !== 'undefined' ? prev.slug : posts[posts.length - 1].slug);
          }
          if(direction === 'next') {
            /* Go to next item, if last item, skip to start */
            let next = posts[idx + 1];
            resolve(typeof (next) !== 'undefined' ? next.slug : posts[0].slug);
          }
        }
      });
    });
  }
}
