import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SectionComponent } from './section/section.component';
import { ScrollBackgroundDirective } from './scroll-background.directive';
import { SmoothScrollingDirective } from './smooth-scrolling.directive';
import { OnscrollDirective } from './_deprecated_onscroll.directive';
import { HomeComponent } from './home/home.component';
import { ScrollButtonComponent } from './scroll-button/scroll-button.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SectionComponent,
    ScrollBackgroundDirective,
    SmoothScrollingDirective,
    OnscrollDirective,
    HomeComponent,
    ScrollButtonComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
