import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[agileStoriesCanvas]'
})
export class AgileStoriesCanvas {
	canvasContext: any;

	constructor(private el: ElementRef) {}

	ngOnInit() {
		this.initCanvas();

		window.addEventListener('resize', () => {
			this.initCanvas();
		}, true);
	}

	initCanvas() {
		const canvasContainer:any = this.el.nativeElement;
		const canvasEle = canvasContainer.querySelector("#canvas");

		canvasEle.width = canvasContainer.offsetWidth * 2;
		canvasEle.height = canvasContainer.offsetHeight * 2;

		canvasEle.style.width =  canvasContainer.offsetWidth + 'px';
		canvasEle.style.height = canvasContainer.offsetHeight + 'px';

		this.canvasContext = canvasEle.getContext("2d");
		this.canvasContext.scale(2, 2);

		/* Get coords for all points */
		let boxData:any = {};
		let boxes:any = canvasContainer.querySelectorAll('.s-research__stories');

		Array.from(boxes).forEach((boxElem:HTMLElement, index:any) => {
		  boxData['box'+parseInt(index+1)] = {
		    x: this.getCoords(boxElem, boxElem.getAttribute('data-path-point')).x,
		    y: this.getCoords(boxElem, boxElem.getAttribute('data-path-point')).y,
				color: boxElem.getAttribute('data-path-color')
		  }
		});

		/* Start the drawing! */
		this.drawPath(boxData.box1.x, boxData.box1.y,
		         boxData.box4.x, boxData.box4.y,
					   boxData.box1.color);

		this.drawPath(boxData.box2.x, boxData.box2.y,
		         boxData.box3.x, boxData.box3.y,
					 	 boxData.box2.color);
	}

	/* Function to draw HTML5 canvas line */
	drawPath(startX: number, startY: number, endX: number, endY: number, color: string) {
		let ctx = this.canvasContext;

		ctx.beginPath();
		ctx.lineWidth = "1";
		ctx.strokeStyle = '#'+color;
		ctx.moveTo(startX, startY);
		ctx.lineTo(endX, endY);
		ctx.stroke();
	}

	/* Return coords for different points of element */
	getCoords(elem:HTMLElement, corner:string) {
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

	ngOnDestroy() {
		window.removeEventListener('resize', null);
	}
}
