import { Component } from '@angular/core';
import { SmallCardComponent } from "../../../shared/small-card/small-card.component";
import { TitleSubtitleComponent } from "../../../shared/title-subtitle/title-subtitle.component";
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';

@Component({
    selector: 'app-page-notifications',
    standalone: true,
    templateUrl: './page-notifications.component.html',
    styleUrl: './page-notifications.component.scss',
    imports: [SmallCardComponent, TitleSubtitleComponent, NavbarComponent, SearchbarComponent]
})
export class PageNotificationsComponent {

}
