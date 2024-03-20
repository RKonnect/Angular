import { Component } from '@angular/core';
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";
import { PictureComponent } from "../../../shared/picture/picture.component";
import { FiltersComponent } from "../../../shared/filters/filters.component";

@Component({
  selector: 'app-page-invitation',
  standalone: true,
  imports: [ButtonsComponent, FiltersComponent, PictureComponent],
  templateUrl: './page-invitation.component.html',
  styleUrl: './page-invitation.component.scss'
})
export class PageInvitationComponent {

}
