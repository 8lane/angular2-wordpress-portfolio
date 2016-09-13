import { Route } from '@angular/router';
import { TagComponent } from './index';

export const TagRoutes: Route[] = [
  {
    path: 'tags/:slug',
    component: TagComponent
  }
];
