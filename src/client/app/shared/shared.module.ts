import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AgileStoriesCanvas } from './directives';
import { ContainerOffsetDirective } from './directives';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AgileStoriesCanvas, ContainerOffsetDirective],
  exports: [CommonModule, RouterModule, AgileStoriesCanvas, ContainerOffsetDirective]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: []
    };
  }
}
