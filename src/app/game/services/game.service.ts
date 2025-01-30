import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public userName!:string;
  public userGameMode!:boolean;

  constructor() { }

  public SetGameMode(gameMode: string): void {
    this.userGameMode = gameMode.toLowerCase() === 'capital'
  }
  public SetUserName(name:string): void {
    this.userName = name;
  }

  public GetData(): {name:string, mode:boolean}{
    return {name: this.userName, mode: this.userGameMode}
  }

  public SaveDataInLocalStorage(name:string, score:number): void {
    if(typeof(Storage) !== undefined) localStorage.removeItem(name)
    localStorage.setItem(name, score.toString());
  }
}
