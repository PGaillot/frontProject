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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

// Material Design imports
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule} from '@angular/material/icon';
import { AccordionComponent } from './components/faq/accordion.component';
import { HttpClientModule } from '@angular/common/http';
import { StarComponent } from './components/explore/star.component';
import {MatButtonModule} from '@angular/material/button';


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
    AccordionComponent,
    StarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    // Material design imports
    MatExpansionModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
