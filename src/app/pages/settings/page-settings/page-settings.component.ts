import { Component } from '@angular/core';
import { TitleSubtitleComponent } from '../../../shared/title-subtitle/title-subtitle.component';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';

@Component({
  selector: 'app-page-settings',
  standalone: true,
  imports: [TitleSubtitleComponent, ButtonsComponent],
  templateUrl: './page-settings.component.html',
  styleUrl: './page-settings.component.scss'
})
export class PageSettingsComponent {

}
