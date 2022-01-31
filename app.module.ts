import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { HttpClientModule } from '@angular/common/http';
import { RealBusiComponent } from './real-busi/real-busi.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';
@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    RealBusiComponent,
    SportsComponent,
    HealthComponent,
    TechnologyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
