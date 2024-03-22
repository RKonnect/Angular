import { Component } from '@angular/core';
import { TitleSubtitleComponent } from '../../../shared/title-subtitle/title-subtitle.component';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';

@Component({
  selector: 'app-page-settings',
  standalone: true,
  imports: [TitleSubtitleComponent, ButtonsComponent, NavbarComponent, SearchbarComponent],
  templateUrl: './page-settings.component.html',
  styleUrl: './page-settings.component.scss'
})
export class PageSettingsComponent {

}
