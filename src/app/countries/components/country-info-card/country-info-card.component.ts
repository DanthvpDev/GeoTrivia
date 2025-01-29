import { Component, Input } from '@angular/core';
import { Country } from '../../interface/country-info.interface';

@Component({
  selector: 'countries-country-info-card',
  standalone: false,
  
  templateUrl: './country-info-card.component.html',
  styleUrl: './country-info-card.component.css'
})

export class CountryInfoCardComponent {
  @Input()  
  public countries!: Country;
}
