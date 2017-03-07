import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostComponent } from './index';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'portfolio/:slug/:pw', component: PostComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PostRoutingModule { }
