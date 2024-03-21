import {Component} from '@angular/core';
import {PictureComponent} from "../../../shared/picture/picture.component";
import {ModalComponent} from "../../../shared/modal/modal.component";
import {PictureRestaurantComponent} from "../../../shared/picture-restaurant/picture-restaurant.component";

@Component({
  selector: 'app-page-restaurant',
  standalone: true,
  imports: [PictureComponent, ModalComponent, PictureRestaurantComponent],
  templateUrl: './page-restaurant.component.html',
  styleUrl: './page-restaurant.component.scss'
})
export class PageRestaurantComponent {
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
