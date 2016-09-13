import { Routes } from '@angular/router';

import { HomeRoutes } from './+home/index';
import { AboutRoutes } from './about/index';
// import { ErrorRoutes } from './shared/components';
import { PostRoutes } from './shared/components';
// import { TagRoutes } from './shared/components';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes,
  ...PostRoutes,
  //...TagRoutes,
  //...ErrorRoutes
];
