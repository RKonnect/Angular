import { Component } from '@angular/core';
import { TitleSubtitleComponent } from '../../../shared/title-subtitle/title-subtitle.component';
import { ProfilCardComponent } from '../../../shared/profil-card/profil-card.component';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';

@Component({
  selector: 'app-notifications-detail',
  standalone: true,
  imports: [TitleSubtitleComponent, ProfilCardComponent,ButtonsComponent],
  templateUrl: './notifications-detail.component.html',
  styleUrl: './notifications-detail.component.scss'
})
export class NotificationsDetailComponent {

}
