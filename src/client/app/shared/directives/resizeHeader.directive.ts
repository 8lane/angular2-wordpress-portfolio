import {Directive, ElementRef} from '@angular/core';

import {AppService} from '../services';

@Directive({
    selector: '[resizeHeader]'
})
export class ResizeHeaderDirective {
	constructor(private el: ElementRef, private _appService: AppService) {}

	ngOnInit() {
		this.calculateHeight();
    this.calculateScrollClasses();

		window.addEventListener('resize', () => {
			this.calculateHeight();
		}, true);

    window.addEventListener('scroll', () => {
      // lodash debounce?
      this.calculateScrollClasses();
    });
	}

	calculateHeight() {
		this.el.nativeElement.style.height = window.innerHeight + 'px';
	}

  calculateScrollClasses() {
    if(window.scrollY > 0) {
      this._appService.isPageScrolled = true;
    } else {
      this._appService.isPageScrolled = false;
    }
  }

	ngOnDestroy() {
		window.removeEventListener('resize', null);
    window.removeEventListener('scroll', null);
	}
}
