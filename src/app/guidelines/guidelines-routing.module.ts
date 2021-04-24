import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidelinesComponent } from './guidelines.component';
import { PrecautionsComponent } from './precautions/precautions.component';
import { ImmunityboostComponent } from './immunityboost/immunityboost.component';
import { CovidhelpComponent } from './covidhelp/covidhelp.component';

const childroutes:Routes = [{path:"precautions",component:PrecautionsComponent},
{path:"immunityboost",component:ImmunityboostComponent},
{path:"covidhelp",component:CovidhelpComponent}]
const routes: Routes = [{ path: "guidelines", children:childroutes}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuidelinesRoutingModule { }
