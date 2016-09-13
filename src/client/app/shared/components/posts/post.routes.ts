import { Route } from '@angular/router';
import { PostComponent } from './index';

export const PostRoutes: Route[] = [
  {
    path: 'portfolio/:slug',
    component: PostComponent
  }
];
