import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { ProgressiveBarComponent } from './progressive-bar/progressive-bar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { PostsComponent } from './posts/posts.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollTopButtonComponent } from './scroll-top-button/scroll-top-button.component';

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
    AboutComponent,
    ProgressiveBarComponent,
    PortfolioComponent,
    FooterComponent,
    PostsComponent,
    ContactComponent,
    ScrollTopButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
