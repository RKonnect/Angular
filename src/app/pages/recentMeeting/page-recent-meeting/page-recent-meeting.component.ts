import { Component } from '@angular/core';
import { TitleSubtitleComponent } from "../../../shared/title-subtitle/title-subtitle.component";
import { SmallCardComponent } from "../../../shared/small-card/small-card.component";

@Component({
    selector: 'app-page-recent-meeting',
    standalone: true,
    templateUrl: './page-recent-meeting.component.html',
    styleUrl: './page-recent-meeting.component.scss',
    imports: [TitleSubtitleComponent, SmallCardComponent]
})
export class PageRecentMeetingComponent {

}
