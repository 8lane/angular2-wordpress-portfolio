import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from '../../components';
import { SpinnerComponent } from '../../components';

import { PostService } from '../../services';

@NgModule({
    imports: [CommonModule, PostRoutingModule],
    declarations: [PostComponent, SpinnerComponent],
    exports: [PostComponent],
    providers: [PostService]
})

export class PostsModule { }
