import { Component } from '@angular/core';
import { Swiper } from "swiper";
import { TitleSubtitleComponent } from "../title-subtitle/title-subtitle.component";
import { ButtonsComponent } from "../buttons/buttons.component";
import { ModalComponent } from "../modal/modal.component";
import { NgForOf, NgIf } from "@angular/common";
import { ModalStripeComponent } from '../modal-stripe/modal-stripe.component';

@Component({
  selector: 'app-picture-restaurant',
  standalone: true,
  imports: [
    TitleSubtitleComponent,
    ButtonsComponent,
    ModalComponent,
    ModalStripeComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './picture-restaurant.component.html',
  styleUrl: './picture-restaurant.component.scss'
})
export class PictureRestaurantComponent {
  reservations = [
    {
      name: "Rodrigue S",
      image: '../../assets/invitations/image1.png',
      location: "Le Druide,",
      city: "76130 Mont-Saint-Aignan",
      buttonText: "On s'invite",
      age: "20a",
      profilpic: "../../assets/profil_pictures/chien.jpg",
      participantsPic: "../../assets/profil_pictures/chien.jpg",
      tags: "#famille"
    },
    {
      name: "Sylvie89",
      image: '../../assets/invitations/image2.jpg',
      location: "Le Druide,",
      city: "76130 Mont-Saint-Aignan",
      buttonText: "Tu m'invite",
      age: "71a",
      profilpic: "../../assets/profil_pictures/chien.jpg",
      participantsPic: "../../assets/profil_pictures/chien.jpg",
      tags: "#cool"
    }
  ];
  swiper: any;

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
