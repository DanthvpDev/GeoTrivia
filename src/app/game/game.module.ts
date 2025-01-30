import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuessFlagsPageComponent } from './pages/guess-flags-page/guess-flags.component';
import { ButtonComponent } from './components/button/button.component';
import { FlagComponent } from './components/flag/flag.component';
import { GameHomeComponent } from './pages/game-home/game-home.component';
import { UtilitiesModule } from '../utilities/utilities.module';
import { RouterModule } from '@angular/router';
import { ModalComponent } from './components/modal/modal.component';





@NgModule({
  declarations: [
    GuessFlagsPageComponent,
    ButtonComponent,
    FlagComponent,
    GameHomeComponent,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    UtilitiesModule,
    RouterModule
  ],
  exports: [
    GuessFlagsPageComponent,
    GameHomeComponent
  ]
})
export class GameModule { }
