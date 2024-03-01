import { Component } from '@angular/core';
import { TitleSubtitleComponent } from "../../../shared/title-subtitle/title-subtitle.component";
import { ProfilCardComponent } from "../../../shared/profil-card/profil-card.component";
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";

@Component({
    selector: 'app-page-profile',
    standalone: true,
    templateUrl: './page-profile.component.html',
    styleUrl: './page-profile.component.scss',
    imports: [TitleSubtitleComponent, ProfilCardComponent, ButtonsComponent]
})
export class PageProfileComponent {

}
