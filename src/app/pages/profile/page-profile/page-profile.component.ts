import { Component, inject } from '@angular/core';
import { TitleSubtitleComponent } from "../../../shared/title-subtitle/title-subtitle.component";
import { ProfilCardComponent } from "../../../shared/profil-card/profil-card.component";
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-profile',
    standalone: true,
    templateUrl: './page-profile.component.html',
    styleUrl: './page-profile.component.scss',
    imports: [TitleSubtitleComponent, ProfilCardComponent, ButtonsComponent]
})
export class PageProfileComponent {
    router: Router = inject(Router);

    navigateTo(route: string): void {
      this.router.navigateByUrl(route);
    }
}
