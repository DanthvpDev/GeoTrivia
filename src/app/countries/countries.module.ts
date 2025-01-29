import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNameComponent } from './pages/search-name/search-name.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { CountryInfoCardComponent } from './components/country-info-card/country-info-card.component';





@NgModule({
  declarations: [
    SearchNameComponent,
    CountryInfoCardComponent
  ],
  imports: [
    CommonModule,
    UtilitiesModule
  ],

})
export class CountriesModule { }
