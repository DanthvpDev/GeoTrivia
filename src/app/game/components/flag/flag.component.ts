import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
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

  @Output()
  public sendedFlag = new EventEmitter<string>

  public SendingFlagSelected(event: Event):void {
    const clickedElement = event.target as HTMLImageElement;
    this.sendedFlag.emit(clickedElement.alt);
  }

}
