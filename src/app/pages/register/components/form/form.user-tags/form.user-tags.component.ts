import {Component} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonsComponent} from '../../../../../shared/buttons/buttons.component';
import {TitleSubtitleComponent} from '../../../../../shared/title-subtitle/title-subtitle.component';
import {TypeButtonEnum} from '../../../../../core/models/enum/typeButton.enum';

@Component({
  selector: 'app-form-user-tags',
  standalone: true,
  imports: [TitleSubtitleComponent, ButtonsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './form.user-tags.component.html',
  styleUrl: './form.user-tags.component.scss'
})
export class FormUserTagsComponent {
  title: string = "Dit nous en plus sur toi";
  subTitle: string = "On veut te connaître";
  TypeButtonEnum = TypeButtonEnum
}
