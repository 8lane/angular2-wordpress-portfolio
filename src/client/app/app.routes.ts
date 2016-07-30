import { provideRouter, RouterConfig } from '@angular/router';

import { HomeRoutes } from './+home/index';
import { ErrorRoutes } from './shared/components';
import { PostRoutes } from './shared/components';
import { TagRoutes } from './shared/components';

const routes: RouterConfig = [
  ...HomeRoutes,
  ...PostRoutes,
  ...TagRoutes,
  ...ErrorRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes),
];
