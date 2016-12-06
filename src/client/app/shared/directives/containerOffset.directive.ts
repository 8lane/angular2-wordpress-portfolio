import {Directive, ElementRef} from '@angular/core';

@Directive({
    selector: '[containerOffset]'
})
export class ContainerOffsetDirective {
	constructor(private el: ElementRef) {}

	ngOnInit() {
		window.addEventListener('resize', () => {
			this.setPosition();
		});
	}

	ngDoCheck() {
		this.setPosition();
	}

	setPosition() {
		let $container = this.el.nativeElement;
		let $firstPost: any = $container.querySelector('.home__category:first-child .posts');
		let $header:any  = document.querySelector('.app-header');

		$container.style.marginTop = null;

		if(!$firstPost || !$header || $container.classList.contains('app-content--with-post')) return;

		let offsetHeight = $firstPost.clientHeight / 2;
		let headerPadding = 100;

		$container.style.marginTop = `-${offsetHeight}px`;
		$header.style.paddingBottom = `${headerPadding + offsetHeight}px`;
	}

}
