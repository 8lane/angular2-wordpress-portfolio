import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PostService } from '../../services';
import { TagService } from '../../services';
import { EventStore } from '../../misc';

declare var moment: any;

@Component({
  selector: 'tc-post',
  moduleId: module.id,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
	nav: any;
	slug: string;
	post: any;
	gotPost: boolean = false;
	goPrev: any;
	goNext: any;

	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _postService: PostService,
		private _tagService: TagService,
		private _eventStore: EventStore) {
	}

	ngOnInit() {
		this.nav = this._route.params.subscribe(params => {
			this.slug = params['slug'];

			this._postService.fetchPost(this.slug).subscribe((e) => {
				this.post = this._postService.postSingle;
				this.post.date = moment(this.post.date).format('MMMM Do YYYY');

        this._postService.currentPost = this.slug;

				this._tagService.fetchTagsCollection(this.post.tags).subscribe((tags) => {
					this.post.tags = tags;
					this._postService.isProcessing = false;
				});
			});
		});
	}

	ngAfterViewInit() {
		this.initCanvas();

		window.addEventListener('resize', () => {
			console.log('initing canvas');
			this.initCanvas();
		});
	}

  get isProcessing(): boolean {
    return this._postService.isProcessing;
  }

	initCanvas() {
		const boxContainer:any = document.querySelector('.s-research__story-container');
		if(!boxContainer) return;

		const canvas:any = document.getElementById("canvas");

		canvas.width = boxContainer.offsetWidth * 2;
		canvas.height = boxContainer.offsetHeight * 2;

		canvas.style.width =  boxContainer.offsetWidth + 'px';
		canvas.style.height = boxContainer.offsetHeight + 'px';

		const ctx = canvas.getContext("2d");
		ctx.scale(2, 2);

		/* Function to draw HTML5 canvas line */
		const drawPath = (startX: number, startY: number, endX: number, endY: number, color: string) => {
		  ctx.beginPath();
		  ctx.lineWidth = "1";
		  ctx.strokeStyle = '#'+color;
		  ctx.moveTo(startX, startY);
		  ctx.lineTo(endX, endY);
		  ctx.stroke();
		};

		/* Return coords for different points of element */
		const getCoords = (elem:HTMLElement, corner:string) => {
		  let coords:any = {};
		  switch (corner) {
		    case 'bottomRight':
		      coords.x = elem.offsetLeft + elem.offsetWidth;
		      coords.y = elem.offsetTop + elem.offsetHeight;
		    break;
		    case 'bottomLeft':
		      coords.x = elem.offsetLeft;
		      coords.y = elem.offsetTop + elem.offsetHeight;
		    break;
		    case 'topRight':
		      coords.x = elem.offsetLeft + elem.offsetWidth;
		      coords.y = elem.offsetTop;
		    break;
		    case 'topLeft':
		      coords.x = elem.offsetLeft;
		      coords.y = elem.offsetTop;
		    break;
		  }

		  return coords;
		};

		/* Get coords for all points */
		let boxData:any = {};
		let boxes:any = document.querySelectorAll('.s-research__stories');

		Array.from(boxes).forEach((boxElem:HTMLElement, index:any) => {
		  boxData['box'+parseInt(index+1)] = {
		    x: getCoords(boxElem, boxElem.getAttribute('data-path-point')).x,
		    y: getCoords(boxElem, boxElem.getAttribute('data-path-point')).y,
				color: boxElem.getAttribute('data-path-color')
		  }
		});

		/* Start the drawing! */
		drawPath(boxData.box1.x, boxData.box1.y,
		         boxData.box4.x, boxData.box4.y,
					   boxData.box1.color);

		drawPath(boxData.box2.x, boxData.box2.y,
		         boxData.box3.x, boxData.box3.y,
					 	 boxData.box2.color);
	}

	loadTag(slug: string) {
		this._router.navigate(['/tags', slug]);
	}
}
