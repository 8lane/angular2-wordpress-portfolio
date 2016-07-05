import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[resizeHeader]'
})
export class ResizeHeaderDirective {
	constructor(private el: ElementRef) {}

	ngOnInit() {
		this.calculateHeight();
		window.addEventListener('resize', () => {
			this.calculateHeight();
		}, true);
	}

	calculateHeight() {
		this.el.nativeElement.style.height = window.innerHeight + 'px';
	}

	ngOnDestroy() {
		window.removeEventListener('resize', null);
	}
}