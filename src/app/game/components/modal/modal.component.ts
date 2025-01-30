import { Component, Input } from '@angular/core';

@Component({
  selector: 'game-modal',
  standalone: false,
  
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input()
  public answer!:boolean | null;

  @Input()
  public message!:string;

}
