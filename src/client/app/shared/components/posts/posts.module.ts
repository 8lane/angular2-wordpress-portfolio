import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../../components';
import { SpinnerComponent } from '../../components';

import { PostService } from '../../services';

@NgModule({
    imports: [CommonModule],
    declarations: [PostComponent, SpinnerComponent],
    exports: [PostComponent],
    providers: [PostService]
})

export class PostsModule { }
