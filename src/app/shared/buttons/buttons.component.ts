import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() buttonText: string = 'Texte';
  @Input() buttonColor: string = '#D9D18C';
  @Input() textColor: string = 'black';

  changeText() {
    this.buttonText = 'Texte apres clic';
  }
}



