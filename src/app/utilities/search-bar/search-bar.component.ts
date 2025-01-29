import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'util-search-bar',
  standalone: false,
  
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  @ViewChild('txtCountry')
  public searchedCountry!:ElementRef<HTMLInputElement>

  @Output()
  public sendedInput = new EventEmitter<string>();

  public SendingInput(countryName:string):void {
    if(countryName.length === 0) return;
    this.sendedInput.emit(countryName);
  }
}
