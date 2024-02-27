import { Component } from '@angular/core';
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";

@Component({
    selector: 'app-page-launch',
    standalone: true,
    templateUrl: './page-launch.component.html',
    styleUrl: './page-launch.component.scss',
    imports: [ButtonsComponent]
})
export class PageLaunchComponent {

}
