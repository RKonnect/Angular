import { Component, inject } from '@angular/core';
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";
import { PictureComponent } from "../../../shared/picture/picture.component";
import { FiltersComponent } from "../../../shared/filters/filters.component";
import { InvitationService } from '../../../core/services/invitation/invitation.service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';

@Component({
  selector: 'app-page-invitation',
  standalone: true,
  imports: [ButtonsComponent, FiltersComponent, PictureComponent, AsyncPipe, JsonPipe, SearchbarComponent, NavbarComponent],
  templateUrl: './page-invitation.component.html',
  styleUrl: './page-invitation.component.scss'
})
export class PageInvitationComponent {
  invitations$ = inject(InvitationService).getAll();
}
