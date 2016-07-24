import {Directive, ElementRef} from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';

import {AppService} from '../services';

@Directive({
    selector: '[headerType]'
})
export class HeaderTypeDirective {
	htmlClassName: string = 'app-header--epic';

	constructor(private el: ElementRef, private _router: Router, private _appService: AppService) {}

	ngOnInit() {
		this.setHeaderType();
    this._router.events.subscribe((e) => {
      this.setHeaderType();
    });
	}

	setHeaderType() {
		let ele = this.el.nativeElement;

    if(this._router.url === '/') {
    	//ele.classList.add(this.htmlClassName);
      this._appService.epicHeader = true;
  	} else {
    	//ele.classList.remove(this.htmlClassName);
      this._appService.epicHeader = false;
  	}
	}
}
