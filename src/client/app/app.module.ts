import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './+home/home.module';
import { PostsModule } from './shared/components/posts/posts.module';
import { SharedModule } from './shared/shared.module';

import { ErrorComponent } from './shared/components';
import { HeaderComponent } from './shared/components';
import { SidebarComponent } from './shared/components';
import { PaginationComponent } from './shared/components';
import { CallToActionComponent } from './shared/components';
import { FooterComponent } from './shared/components';

import { ResizeHeaderDirective } from './shared/directives';
import { HeaderTypeDirective } from './shared/directives';

import { AppService } from './shared/services';
import { EventStore } from './shared/misc';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, PostsModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent,
                 HeaderComponent,
                 FooterComponent,
                 SidebarComponent,
                 CallToActionComponent,
                 PaginationComponent,
                 ErrorComponent,
                 ResizeHeaderDirective,
                 HeaderTypeDirective
               ],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }, AppService, EventStore],
  bootstrap: [AppComponent]

})

export class AppModule { }
