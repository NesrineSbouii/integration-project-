import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SecondCarouselComponent } from './components/second-carousel/second-carousel.component';
import { CentralComponent } from './components/central/central.component';
import { PlanComponent } from './components/plan/plan.component';
import { SecondCentralComponent } from './components/second-central/second-central.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    SecondCarouselComponent,
    CentralComponent,
    PlanComponent,
    SecondCentralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  