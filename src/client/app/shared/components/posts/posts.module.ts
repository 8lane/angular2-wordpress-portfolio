import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../../components';
import { SpinnerComponent } from '../../components';

@NgModule({
    imports: [CommonModule],
    declarations: [PostComponent, SpinnerComponent],
    exports: [PostComponent]
})

export class PostsModule { }
