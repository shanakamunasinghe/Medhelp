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
import { NotfoundComponent } from './notfound/notfound.component';
import{BlogComponent} from './blog/blog.component';
import { from } from 'rxjs';
import{ArticleComponent} from './article/article.component'; 
const routes: Routes = [{path: '', redirectTo: '/Home', pathMatch: 'full'},
                        {path:'Home',component:HeaderComponent },
                        {path:'About',component:IntroductionComponent},
                        {path:'Content',component:ContentComponent},
                        {path:'Servicers',component:ServicersComponent},
                        {path:'Testimonials',component: TestimonialsComponent },
                        {path:'Clients',component:ClientsComponent },
                        {path:'Pricing',component:PricingComponent},
                        {path:'Blog',component:BlogComponent},
                        {path: 'Article/:id', component: ArticleComponent},
                        {path:'404',component: NotfoundComponent},
                        {path:'**',redirectTo: '/404'},
                        
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }