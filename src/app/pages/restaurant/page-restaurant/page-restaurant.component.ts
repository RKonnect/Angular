import { Component, inject } from '@angular/core';
import { RestaurantService } from '../../../core/services/restaurant/restaurant.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../../core/models/Restaurant';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {PictureComponent} from "../../../shared/picture/picture.component";
import {ModalComponent} from "../../../shared/modal/modal.component";
import {PictureRestaurantComponent} from "../../../shared/picture-restaurant/picture-restaurant.component";

@Component({
  selector: 'app-page-restaurant',
  standalone: true,
  imports: [PictureComponent, ModalComponent, PictureRestaurantComponent, AsyncPipe, JsonPipe],
  templateUrl: './page-restaurant.component.html',
  styleUrl: './page-restaurant.component.scss'
})
export class PageRestaurantComponent {
  restaurantService: RestaurantService = inject(RestaurantService)
  restaurants$: Observable<Restaurant[]> = this.restaurantService.getAllForUser()

  // Vous pouvez ajouter les autres propriétés que vous avez comme 'reservations'
  showModal: boolean = false;

  // Méthode pour ouvrir la modal
  openModal() {
    this.showModal = true;
  }

  // Méthode pour fermer la modal
  closeModal() {
    this.showModal = false;
  }
}
