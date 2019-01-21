import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ServicersComponent } from './servicers/servicers.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import{ConfigService} from './config.service';
import { NotfoundComponent } from './notfound/notfound.component';
import { PaginationComponent } from './pagination/pagination.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';

import { ArticleComponent } from './article/article.component';
import { PagerService } from './pager.service';

@NgModule({
  declarations: [
    AppComponent,
    IntroductionComponent,
    ServicersComponent,
    ContentComponent,
    TestimonialsComponent,
    ClientsComponent,
    PricingComponent,
    HeaderComponent,
    FooterComponent,
    SocialComponent,
    NavigationComponent,
    NotfoundComponent,
    PaginationComponent,
    BlogComponent,
    PostComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ConfigService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
