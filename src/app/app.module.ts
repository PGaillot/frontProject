import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StarterComponent } from './components/starter/starter.component';
import { PricesComponent } from './components/prices/prices.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FaqComponent } from './components/faq/faq.component';
import { GiftCardComponent } from './components/gift-card/gift-card.component';
import { PriceCardComponent } from './components/price-card/price-card.component';
import { FeatureComponent } from './components/prices/feature.component';
import { TrialStepComponent } from './components/explore/trial-step.component';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    PricesComponent,
    ExploreComponent,
    FaqComponent,
    GiftCardComponent,
    PriceCardComponent,
    FeatureComponent,
    TrialStepComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
