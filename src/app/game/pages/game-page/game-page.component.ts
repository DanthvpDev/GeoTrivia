import { Component, OnInit } from '@angular/core';
import { Country } from '../../../countries/interface/country-info.interface';
import { CountryService } from '../../../countries/services/country.service';

@Component({
  selector: 'app-game-page',
  standalone: false,
  
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.css'
})
export class GamePageComponent implements OnInit{
  public countries!:Country[];

  //Aquí van las opciones de 4 banderas
  public options: Country[] = [];

  public correctOption: Country = {} as Country;

  public counter:number = 0;

  public flagSelected!:string;

  constructor(private countryService: CountryService){}

  ngOnInit(): void {
    this.countryService.GetAllCountries()
                       .subscribe(data => {
                          this.countries = data;
                          this.GetFourOptionsRandomly();
                          this.SettingCorrectOption();
                        });
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
     
     if(this.IsCorrectAnswer(this.flagSelected)) this.counter++;
     else this.counter = 0;

     this.options = [];
     this.GetFourOptionsRandomly();
     this.SettingCorrectOption();
  }

  public IsCorrectAnswer(userOption:string):boolean {
    return this.correctOption.name === userOption;
  }
}
