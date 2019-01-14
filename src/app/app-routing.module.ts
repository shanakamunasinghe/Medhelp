import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ServicersComponent } from './servicers/servicers.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';


const routes: Routes = [{path: '', redirectTo: '/Home', pathMatch: 'full'},
                        {path:'Home',component:HeaderComponent },
                        {path:'About',component:IntroductionComponent},
                        {path:'Gallery',component:ContentComponent},
                        {path:'Servicers',component:ServicersComponent},
                        {path:'Testimonials',component: TestimonialsComponent },
                        {path:'Clients',component:ClientsComponent },
                        {path:'Pricing',component:PricingComponent},
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }