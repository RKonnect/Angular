import { Component, Input } from '@angular/core';
import { Swiper } from "swiper";
import { TitleSubtitleComponent } from "../title-subtitle/title-subtitle.component";
import { ButtonsComponent } from "../buttons/buttons.component";
import { ModalComponent } from "../modal/modal.component";
import { NgForOf, NgIf } from "@angular/common";
import { ModalStripeComponent } from '../modal-stripe/modal-stripe.component';
import { Restaurant } from '../../core/models/Restaurant';
import { User } from '../../core/models/User';
import { LabelComponent } from "../label/label.component";

@Component({
    selector: 'app-picture-restaurant',
    standalone: true,
    templateUrl: './picture-restaurant.component.html',
    styleUrl: './picture-restaurant.component.scss',
    imports: [
        TitleSubtitleComponent,
        ButtonsComponent,
        ModalComponent,
        ModalStripeComponent,
        NgForOf,
        NgIf,
        LabelComponent
    ]
})
export class PictureRestaurantComponent {
  @Input({ required: true }) listRestaurant!: Restaurant[] 
  @Input({ required: true }) user!: User
  userAge!: string

  swiper: any;
  currentDate = new Date()
ngOnInit() {
  if(this.user.dateOfBirth) {
    const ageNumber = this.currentDate.getFullYear() - new Date(this.user.dateOfBirth).getFullYear()
    this.userAge = ageNumber.toString() + ' ans'
  } else {
    this.userAge = 'Non renseigne'
  }
}
  async ngAfterViewInit() {
    if (typeof Swiper !== 'undefined') {
      this.swiper = new Swiper('.swiper-container', {
        direction: 'vertical',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        allowTouchMove: true
      });
    } else {
      console.error('Swiper is not defined. Please check your import.');
    }
  }

  allerAPage(page: number) {
    this.swiper.slideTo(page - 1);
  }

  suivant() {
    this.swiper.slideNext();
  }

  showModal: boolean = false;
  showStripeModal: boolean = false;

  openModal() {
    this.showModal = true;
  }

  // Méthode pour fermer la modal
  closeModal() {
    this.showModal = false;
  }

  // Méthode pour fermer la modal
  closeStripeModal() {
    this.showStripeModal = false;
  }

  handleOpenNewPopup() {
    // Par exemple :
    this.showModal = false; // Ferme la popup actuelle
    this.showStripeModal = true;
  }

}
