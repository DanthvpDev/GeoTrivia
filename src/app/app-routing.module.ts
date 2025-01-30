import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchNameComponent } from './countries/pages/search-name/search-name.component';
import { GuessFlagsPageComponent } from './game/pages/guess-flags-page/guess-flags.component';
import { GameHomeComponent } from './game/pages/game-home/game-home.component';


const routes: Routes = [
  {
    path: '',
    component: SearchNameComponent
  },
  {
    path: 'gameHome',
    component: GameHomeComponent
  },
  {
    path: 'guessFlags',
    component: GuessFlagsPageComponent
  },
  {
    path: '**',
    component: SearchNameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
