import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchNameComponent } from './pages/search-name/search-name.component';
import { UtilitiesModule } from '../utilities/utilities.module';





@NgModule({
  declarations: [
    SearchNameComponent
  ],
  imports: [
    CommonModule,
    UtilitiesModule
  ],

})
export class CountriesModule { }
