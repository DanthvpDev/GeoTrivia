import { Component } from '@angular/core';

@Component({
  selector: 'game-button',
  standalone: false,
  
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  public buttonText:string = '';
}
