import {Directive, ElementRef} from 'angular2/core';

@Directive({
    selector: '[lazyLoad]'
})

/* Angular2 img Lazy Load Directive adapted from https://github.com/i-like-robots/Responsive-Image-Placeholders */
export class LazyLoadDirective {
	constructor(private el: ElementRef) {}

	ngDoCheck() {
		var placeholders = this.el.nativeElement.querySelectorAll('.defer-image');

    if (!placeholders) return;

    for (var i = 0, len = placeholders.length; i < len; i++) {
        this.deferImage(placeholders[i]);
    }
	}

	deferImage(element: any) {

		if (element.classList.contains('is-loading') || element.classList.contains('is-loaded')) {
			return;
		}

    var attr:any;
    var img = new Image();
    var placehold = element.children[0];


    element.className += ' is-loading';

    img.onload = function() {
        element.className = element.className.replace('is-loading', 'is-loaded img-fluid');
        element.replaceChild(img, placehold);
    };

    let len = placehold.attributes.length;

    for (let i = 0; i < len; i++) {
        attr = placehold.attributes[i];

        if (attr.name.match(/^data-/)) {
            img.setAttribute(attr.name.replace('data-', ''), attr.value);
            img.className = 'img-fluid';
        }
    }
	}
}
