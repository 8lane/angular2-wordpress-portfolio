import {BaseRequestOptions, Headers} from '@angular/http';

// import {Settings} from '../../settings';

export class MyRequestOptions extends BaseRequestOptions {
	headers: Headers = new Headers({
		'Accept': 'application/json',
		//'Content-Type': 'application/json'
	});
}
