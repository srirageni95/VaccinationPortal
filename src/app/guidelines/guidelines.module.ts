import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuidelinesRoutingModule } from './guidelines-routing.module';
import { GuidelinesComponent } from './guidelines.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { ImmunityboostComponent } from './immunityboost/immunityboost.component';
import { CovidhelpComponent } from './covidhelp/covidhelp.component';


@NgModule({
  declarations: [GuidelinesComponent, PrecautionsComponent, ImmunityboostComponent, CovidhelpComponent],
  imports: [
    CommonModule,
    GuidelinesRoutingModule
  ]
})
export class GuidelinesModule { }
