import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interface/country-info.interface';
import { FullCountryInfo } from '../interface/full-country-info.interface';

@Injectable({
  providedIn: 'root'
})

export class CountryService {
  private API_URL: string = 'https://restcountries.com/v3.1';
  
  constructor(private http: HttpClient) { }

  public GetAllCountries(): Observable<Country[]> {
    const API_ALL: string = `${this.API_URL}/all`;

    return this.http.get<FullCountryInfo[]>(API_ALL)
      .pipe(
        map((element) => element.map((country) => ({
          name: country.name.common,
          flag: country.flags.png,
          capital: country.capital?country.capital[0]: 'No capital',
          population: country.population,
          acronym: country.cca2,
          region: country.region,
        }))),
        catchError(error => of([]))
      )
  }

  public GetCountryByName(name:string): Observable<Country[]> {
    const API_ALL: string = `${this.API_URL}/name/${name}`;

    return this.http.get<FullCountryInfo[]>(API_ALL)
      .pipe(
        map((element) => element.map((country) => ({
          name: country.name.common,
          flag: country.flags.png,
          capital: country.capital?country.capital[0]: 'No capital',
          population: country.population,
          acronym: country.cca2,
          region: country.region,
        }))),
        catchError(error => of([]))
      )
  }
}
