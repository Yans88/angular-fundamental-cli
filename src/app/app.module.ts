import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StatusPipe} from './status.pipe';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LengthArticlePipe} from './length-article.pipe';
import {PassengerComponent} from './passenger/passenger.component';
import {PassengerFormComponent} from './passenger-form/passenger-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PassengerServiceService} from '../app/passenger-service.service';
import {AppNavbarComponent} from './app-navbar/app-navbar.component';
import {HomeComponent} from './home/home.component';
import {PricingComponent} from './pricing/pricing.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {PassengerDetailComponent} from './passenger-detail/passenger-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    StatusPipe,
    LengthArticlePipe,
    PassengerComponent,
    PassengerFormComponent,
    AppNavbarComponent,
    HomeComponent,
    PricingComponent,
    AboutComponent,
    ContactComponent,
    PassengerDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PassengerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
