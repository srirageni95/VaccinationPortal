import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorldComponent } from './world/world.component';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { NotfoundComponent } from './notfound/notfound.component';
import  {GuidelinesModule} from './guidelines/guidelines.module'

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    CountryComponent,
    StateComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GuidelinesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
