import { Component, inject } from '@angular/core';
import { RestaurantService } from '../../../core/services/restaurant/restaurant.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../../core/models/Restaurant';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { PictureComponent } from "../../../shared/picture/picture.component";
import { ModalComponent } from "../../../shared/modal/modal.component";
import { PictureRestaurantComponent } from "../../../shared/picture-restaurant/picture-restaurant.component";
import { UserService } from '../../../core/services/user/user.service';
import { User } from '../../../core/models/User';
import { CookieService } from 'ngx-cookie-service';
import { DotsLoadingComponent } from "../../launch/app-starter/dots-loading/dots-loading.component";
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';

@Component({
  selector: 'app-page-restaurant',
  standalone: true,
  templateUrl: './page-restaurant.component.html',
  styleUrl: './page-restaurant.component.scss',
  imports: [PictureComponent, ModalComponent, PictureRestaurantComponent, AsyncPipe, JsonPipe, DotsLoadingComponent, NavbarComponent, SearchbarComponent]
})
export class PageRestaurantComponent {
  restaurantService: RestaurantService = inject(RestaurantService)
  userService: UserService = inject(UserService)
  cookieService: CookieService = inject(CookieService)
  restaurants$: Observable<Restaurant[]> = this.restaurantService.getAllForUser()
  user$!: Observable<User>
  // Vous pouvez ajouter les autres propriétés que vous avez comme 'reservations'
  showModal: boolean = false;

  ngOnInit() {
    const id = this.cookieService.get('idUser');
    this.user$ = this.userService.getOne(id)
  }

  // Méthode pour ouvrir la modal
  openModal() {
    this.showModal = true;
  }

  // Méthode pour fermer la modal
  closeModal() {
    this.showModal = false;
  }
}
