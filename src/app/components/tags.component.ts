import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {EventStore} from '../../shared/services/eventStore';
import {TagService} from '../../shared/services/tagService';

@Component({
  selector: 'app-tags',
  viewProviders: [EventStore, HTTP_PROVIDERS],
  moduleId: module.id,
  templateUrl: './tags.component.html',
  directives: [ROUTER_DIRECTIVES]
})

export class TagComponent {
	tagList: any;

	constructor(private _tagService: TagService) {
		this.tagList = <any> false;

		this._tagService.fetchTagsCollection().subscribe(() => {
      console.log('got tags');
			this.tagList = this._tagService.tags;
		});
	}

  loadTag(slug: string) {
    console.log('go to: ', slug);
  }
}
