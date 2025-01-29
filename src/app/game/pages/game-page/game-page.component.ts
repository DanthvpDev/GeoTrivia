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
  public options!: Country[];

  constructor(private countryService: CountryService){}

  ngOnInit(): void {
    this.countryService.GetAllCountries().subscribe(data => {this.countries = data})
  }


  //Solo obtener 4 de la petición que se realizó.
  //? Función random para obtener las banderas
  
}
