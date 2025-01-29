import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchNameComponent } from './countries/pages/search-name/search-name.component';
import { GamePageComponent } from './game/pages/game-page/game-page.component';


const routes: Routes = [
  {
    path: '',
    component: SearchNameComponent
  },
  {
    path: 'game',
    component: GamePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
