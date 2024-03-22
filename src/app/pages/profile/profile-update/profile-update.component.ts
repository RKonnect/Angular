import { Component } from '@angular/core';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';

@Component({
  selector: 'app-profile-update',
  standalone: true,
  imports: [NavbarComponent,SearchbarComponent],
  templateUrl: './profile-update.component.html',
  styleUrl: './profile-update.component.scss'
})
export class ProfileUpdateComponent {

}
