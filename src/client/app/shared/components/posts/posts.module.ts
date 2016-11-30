import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../../components';
import { SpinnerComponent } from '../../components';

import { TagComponent } from '../../components';

import { PostService } from '../../services';
import { TagService } from '../../services';

@NgModule({
    imports: [CommonModule],
    declarations: [PostComponent, SpinnerComponent, TagComponent],
    exports: [PostComponent],
    providers: [TagService, PostService]
})

export class PostsModule { }
