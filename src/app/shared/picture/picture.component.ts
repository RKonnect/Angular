import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../buttons/buttons.component";
import { TitleSubtitleComponent } from "../title-subtitle/title-subtitle.component";


@Component({
  selector: 'app-picture',
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  imports: [ButtonsComponent, CommonModule, TitleSubtitleComponent]
})
export class PictureComponent implements AfterViewInit {
  reservations = [
    {
      name: "Rodrigue S",
      image:'../../assets/invitations/image1.png',
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
      image:'../../assets/invitations/image2.jpg',
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
}
