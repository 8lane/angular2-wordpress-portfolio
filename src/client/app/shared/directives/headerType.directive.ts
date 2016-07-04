import {Directive, ElementRef} from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

@Directive({
    selector: '[headerType]'
})
export class HeaderTypeDirective {
	htmlClassName: string = 'app-header--epic';

	constructor(private el: ElementRef, private _router: Router) {}

	ngOnInit() {
		this.setHeaderType();
    this._router.events.subscribe((e) => {
      this.setHeaderType();
    });
	}

	setHeaderType() {
		let ele = this.el.nativeElement;

    if(this._router.url === '/') {
    	ele.classList.add(this.htmlClassName);
  	} else {
    	ele.classList.remove(this.htmlClassName);
  	}
	}

	ngOnDestroy() {
		this._router.events.unsubscribe();
	}
}
