import { Component, OnInit, inject } from '@angular/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-launch',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './page-launch.component.html',
  styleUrls: ['./page-launch.component.scss']
})
export class PageLaunchComponent {
  swiper: any;
  currentPage: number = 1;
  router: Router = inject(Router);

  constructor() { }

  async ngAfterViewInit() {
    const { Swiper } = await import('swiper');

    this.swiper = new Swiper('.swiper', {
      direction: 'horizontal',
      loop: false,

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

      on: {
        slideChange: () => {
          this.currentPage = this.swiper.realIndex + 1;
        },
      },
    });
  }

  allerAPage(page: number) {
    this.swiper.slideTo(page - 1);
  }

  suivant() {
    this.swiper.slideNext();
  }

  navigateTo(route: string): void {
    this.router.navigateByUrl(route); 
  }
}
