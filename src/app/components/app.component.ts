import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {EventStore} from '../../shared/services/eventStore';
import {NavbarComponent} from './navbar.component';
import {ToolbarComponent} from './toolbar.component';
import {HomeComponent} from '../../home/components/home.component';
import {PostComponent} from '../../posts/components/post.component';
import {AboutComponent} from '../../about/components/about.component';
import {NameListService} from '../../shared/services/name-list.service';
import {PostService} from '../../shared/services/postService';
import {PostsService} from '../../shared/services/postsService';

@Component({
  selector: 'sd-app',
  viewProviders: [NameListService, PostService, PostsService, EventStore, HTTP_PROVIDERS],
  moduleId: module.id,
  templateUrl: './app.component.html',
  directives: [ROUTER_DIRECTIVES, NavbarComponent, ToolbarComponent]
})
@RouteConfig([
  { path: '/',      name: 'Home',  component: HomeComponent  },
  { path: '/about', name: 'About', component: AboutComponent },
  { path: '/portfolio/:slug', component: PostComponent, name: 'Post' },
])
export class AppComponent {}
