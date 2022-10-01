import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PassengerComponent} from "./passenger/passenger.component";
import {PricingComponent} from "./pricing/pricing.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {PassengerDetailComponent} from "./passenger-detail/passenger-detail.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'passenger', component: PassengerComponent},
  {path: 'detail/:id', component: PassengerDetailComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
