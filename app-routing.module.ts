import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { RealBusiComponent } from './real-busi/real-busi.component';
import { SportsComponent } from './sports/sports.component';
import { HealthComponent } from './health/health.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path : "headlines" , component : BusinessComponent},
  {path : "business" , component : RealBusiComponent},
  {path : "sports" , component : SportsComponent},
  {path : "health" , component : HealthComponent},
  {path : "technology" , component : TechnologyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
