import { Component } from '@angular/core';
import { TitleSubtitleComponent } from "../../../shared/title-subtitle/title-subtitle.component";
import { SmallCardComponent } from "../../../shared/small-card/small-card.component";
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
    selector: 'app-page-recent-meeting',
    standalone: true,
    templateUrl: './page-recent-meeting.component.html',
    styleUrl: './page-recent-meeting.component.scss',
    imports: [TitleSubtitleComponent, SmallCardComponent,SearchbarComponent,NavbarComponent]
})
export class PageRecentMeetingComponent {

}
