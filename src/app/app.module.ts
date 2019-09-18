import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  ROUTING } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ReviewComponent } from './review/review.component';
import { FqAskComponent } from './fq-ask/fq-ask.component';
import { FooterComponent } from './footer/footer.component';
import { YoutubeVideoComponent } from './youtube-video/youtube-video.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { FeaturesComponent } from './page/features/features.component';
import { AboutUsComponent } from './page/about-us/about-us.component';
import { PortfiloComponent } from './page/portfilo/portfilo.component';
import { SolutionComponent } from './page/solution/solution.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavbarComponent,
    HomeComponent,
    ContactUsComponent,
    ReviewComponent,
    FqAskComponent,
    FooterComponent,
    YoutubeVideoComponent,
    ContactPageComponent,
    FeaturesComponent,
    AboutUsComponent,
    PortfiloComponent,
    SolutionComponent
  ],
  imports: [
    BrowserModule,
    ROUTING,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
