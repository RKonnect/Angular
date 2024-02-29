import { Component } from '@angular/core';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';

@Component({
  selector: 'app-form-credential',
  standalone: true,
  imports: [TitleSubtitleComponent],
  templateUrl: './form.credential.component.html',
  styleUrl: './form.credential.component.scss'
})
export class FormCredentialComponent {
  title = 'Login';
  subTitle = 'Please enter your credentials';
}
