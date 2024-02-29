import { Component } from '@angular/core';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  buttonText: string = 'Texte';
  buttonColor: string = '  #D9D18C';
  textColor: string = 'black';

  changeText() {
    this.buttonText = 'Texte apres clic';
  }
}



