import { RouterConfig } from '@angular/router';

import { TagComponent } from './index';

export const TagRoutes: RouterConfig = [
  {
		path: 'tags/:slug',
		component: TagComponent
  },
];
