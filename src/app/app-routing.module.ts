import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { StateComponent } from './state/state.component';
import { CountryComponent } from './country/country.component';
import { NotfoundComponent } from './notfound/notfound.component';
import{GuidelinesRoutingModule} from './guidelines/guidelines-routing.module';

const routes: Routes = [{path:"",component : AppComponent},
{path:"world",component:WorldComponent},
{path:"country",component:CountryComponent},
{path:"state",component:StateComponent},
{path:"**",component:NotfoundComponent},
{path: 'guidelines', loadChildren: () => import('./guidelines/guidelines.module').then(m => m.GuidelinesModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes),GuidelinesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
