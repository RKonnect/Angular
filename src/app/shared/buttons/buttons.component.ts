import { Component, Input } from '@angular/core';
import { TypeButtonEnum } from '../../core/models/enum/typeButton.enum';

@Component({
  selector: 'app-buttons',
  standalone: true,
  imports: [],
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {
  @Input() buttonText: string = 'Texte';
  @Input() type: TypeButtonEnum = TypeButtonEnum.button;
  @Input() buttonColor: string = '#D9D18C';
  @Input() textColor: string = 'black';

  changeText() {
    this.buttonText = 'Texte apres clic';
  }
}



