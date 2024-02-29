import { Component, OnInit } from '@angular/core';

// Note: Removed direct import of Swiper here as we're now dynamically importing it within the method
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

@Component({
  selector: 'app-page-launch',
  standalone: true,
  templateUrl: './page-launch.component.html',
  styleUrls: ['./page-launch.component.scss']
})
export class PageLaunchComponent {
  swiper: any; // Ajoutez cette ligne pour déclarer l'instance de Swiper

  constructor() { }

  async ngAfterViewInit() { // Added async keyword here
    const { Swiper } = await import('swiper');

    const swiper = new Swiper('.swiper', {
      // Swiper options
      direction: 'horizontal',
      loop: true,

      // If you need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if you need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
  allerAPage(page: number) {
    if (this.swiperRef && this.swiperRef.swiperRef) {
      this.swiperRef.swiperRef.slideTo(page - 1);
    }
  }

  suivant() {
    if (this.swiperRef && this.swiperRef.swiperRef) {
      this.swiperRef.swiperRef.slideNext();
    }
  }
  activateGeolocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => this.showPosition(position),
        error => this.showError(error)
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position: GeolocationPosition) {
    alert("Latitude: " + position.coords.latitude + 
          "\nLongitude: " + position.coords.longitude);
  }

  showError(error: GeolocationPositionError) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation.");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      default:
        alert("An unknown error occurred.");
        break;
    }
  }
}
