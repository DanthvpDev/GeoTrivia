import { Component, Input } from '@angular/core';
import { Country } from '../../../countries/interface/country-info.interface';

@Component({
  selector: 'game-flag',
  standalone: false,
  
  templateUrl: './flag.component.html',
  styleUrl: './flag.component.css'
})
export class FlagComponent {
  @Input()
  public country!:Country;
}
