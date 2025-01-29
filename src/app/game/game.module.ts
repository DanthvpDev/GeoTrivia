import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ButtonComponent } from './components/button/button.component';
import { FlagComponent } from './components/flag/flag.component';



@NgModule({
  declarations: [
    GamePageComponent,
    ButtonComponent,
    FlagComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GamePageComponent
  ]
})
export class GameModule { }
