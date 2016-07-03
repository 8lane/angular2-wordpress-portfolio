import { RouterConfig } from '@angular/router';

import { PostComponent } from './index';

export const PostRoutes: RouterConfig = [
  {
		path: 'portfolio/:slug',
		component: PostComponent
  },
];
