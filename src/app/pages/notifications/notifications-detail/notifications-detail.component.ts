import { Component } from '@angular/core';
import { TitleSubtitleComponent } from '../../../shared/title-subtitle/title-subtitle.component';
import { ProfilCardComponent } from '../../../shared/profil-card/profil-card.component';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';

@Component({
  selector: 'app-notifications-detail',
  standalone: true,
  imports: [TitleSubtitleComponent, ProfilCardComponent, ButtonsComponent, NavbarComponent, SearchbarComponent],
  templateUrl: './notifications-detail.component.html',
  styleUrl: './notifications-detail.component.scss'
})
export class NotificationsDetailComponent {

}
