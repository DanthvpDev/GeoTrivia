import { Component, OnInit } from '@angular/core';
import { Country } from '../../../countries/interface/country-info.interface';
import { CountryService } from '../../../countries/services/country.service';
import { GameService } from '../../services/game.service';
import { count } from 'rxjs';

@Component({
  selector: 'flag-game-page',
  standalone: false,
  
  templateUrl: './guess-flags.component.html',
  styleUrl: './guess-flags.component.css'
})
export class GuessFlagsPageComponent implements OnInit{
  public countries!:Country[];

  //Aquí van las opciones de 4 banderas
  public options: Country[] = [];

  public userAnswer!:boolean;
  public answerFeedback!:string;

  private successMessages:string[] = [
    "🎉 Correct! You really know your world geography!",
    "🌍 Well done! That’s the right answer!",
    "🏆 Impressive! You guessed it like a pro!",
    "🎯 Spot on! Keep going, you're on a roll!"
  ];
  
  private failureMessages: string[] = [
    "❌ Oops! That’s not quite right. Try again!",
    "🤔 Close, but not the correct answer. Give it another shot!",
    "❗ Incorrect! But don’t give up, you’ll get the next one!",
    "😬 Not this time! Keep guessing and learning!"
  ];

  public correctOption: Country = {} as Country;

  public counter:number = 0;

  public highestScore:number = 0;

  public flagSelected!:string;

  public guessCapital:boolean = false;
  public userName!:string;

  constructor(private countryService: CountryService, private gameService: GameService){}

  ngOnInit(): void {
    this.countryService.GetAllCountries()
                       .subscribe(data => {
                          this.countries = data;
                          this.GetFourOptionsRandomly();
                          this.SettingCorrectOption();
                        });
    let data:{name:string, mode:boolean} = this.gameService.GetData();
    this.userName = data.name;
    this.guessCapital= data.mode;
  }

  public SettingCorrectOption():void {
    this.correctOption = this.options[Math.floor(Math.random() * this.options.length)]
  }

  //Solo obtener 4 de la petición que se realizó.
  //? Función random para obtener las banderas
  public GetFourOptionsRandomly(): void {
    let counter:number = 0;
    while(counter < 4) {
      this.options.push(this.countries[Math.floor(Math.random() * this.countries.length)]);  
      counter++;
    }
  }

  public AssigningSelectedFlag(altSelected: string): void {
     this.flagSelected = altSelected;
     this.IsCorrectAnswer(altSelected);
     this.ShowingFeedback();
  }

  public ShowingFeedback(): void {
    if(this.userAnswer) {
      this.counter++;
      this.answerFeedback = this.successMessages[Math.floor(Math.random() * this.successMessages.length)];
     }
     else {
       if(this.highestScore < this.counter) this.highestScore = this.counter ;
       this.gameService.SaveDataInLocalStorage(this.userName, this.counter)
       this.answerFeedback = this.failureMessages[Math.floor(Math.random() * this.successMessages.length)]
       this.counter = 0;
     }

     this.options = [];
     this.GetFourOptionsRandomly();
     this.SettingCorrectOption();
  }

  public IsCorrectAnswer(userOption:string):void {
    this.userAnswer = this.correctOption.name === userOption;
  }
}
