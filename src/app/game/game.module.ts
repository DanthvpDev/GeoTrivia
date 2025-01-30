import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { ButtonComponent } from './components/button/button.component';
import { FlagComponent } from './components/flag/flag.component';
import { GameHomeComponent } from './pages/game-home/game-home.component';
import { UtilitiesModule } from '../utilities/utilities.module';




@NgModule({
  declarations: [
    GamePageComponent,
    ButtonComponent,
    FlagComponent,
    GameHomeComponent
  ],
  imports: [
    CommonModule,
    UtilitiesModule
  ],
  exports: [
    GamePageComponent,
    GameHomeComponent
  ]
})
export class GameModule { }
