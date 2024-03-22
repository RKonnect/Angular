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
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() borderRadius: string = '20px';
  @Input() fontSize: string = '';
  @Input() fontWeight: string = '';
  @Input() cursorPointer: boolean = false;
}



