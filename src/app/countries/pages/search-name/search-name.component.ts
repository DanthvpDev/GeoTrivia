import { Component, OnInit } from '@angular/core';
import { Country } from '../../interface/country-info.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'countries-search-name',
  standalone: false,
  
  templateUrl: './search-name.component.html',
  styleUrl: './search-name.component.css'
})
export class SearchNameComponent implements OnInit {

  public countries: Country[] = [];
  public countryName:string = '';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.GetAllCountries().subscribe(data => {
      {this.countries = data}
    })
  }

  public SearchCountry(name:string) {
    this.countryService.GetCountryByName(name).subscribe(data=> {this.countries = data});
  }
  
}
