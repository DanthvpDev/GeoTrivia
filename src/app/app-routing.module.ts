import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchNameComponent } from './countries/pages/search-name/search-name.component';


const routes: Routes = [
  {
    path: '',
    component: SearchNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
