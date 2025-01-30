import { Component } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-home',
  standalone: false,
  
  templateUrl: './game-home.component.html',
  styleUrl: './game-home.component.css'
})
export class GameHomeComponent {

  constructor(private gameService: GameService){}

  public SetUserName(name:string):void {
    if(name.length == 0) {
      this.gameService.SetUserName('user');
    }
    this.gameService.SetUserName(name);
    console.log(name);
  }

  public SetGameMode(gameMode:string):void {
    this.gameService.SetGameMode(gameMode);
    console.log(gameMode);
  }


  
}
