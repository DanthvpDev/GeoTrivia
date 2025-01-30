import { Component } from '@angular/core';

@Component({
  selector: 'app-game-home',
  standalone: false,
  
  templateUrl: './game-home.component.html',
  styleUrl: './game-home.component.css'
})
export class GameHomeComponent {
  public userName!:string;


  public AssigningUserName(name:string):void {
    this.userName = name;
  }
}
