import { Component, OnInit } from '@angular/core';
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
  swiper: any;

  constructor() { }

  allerAPage(page: number) {
    this.swiper.slideTo(page - 1);
  }

  suivant() {
    this.swiper.slideNext();
  }
  async ngAfterViewInit() {
    const { Swiper } = await import('swiper');

    const swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
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
