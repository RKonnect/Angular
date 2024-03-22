import { Component, OnInit, AfterViewInit, Input, inject } from '@angular/core';
import { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CommonModule } from '@angular/common';
import { ButtonsComponent } from "../buttons/buttons.component";
import { TitleSubtitleComponent } from "../title-subtitle/title-subtitle.component";
import { InvitationService } from '../../core/services/invitation/invitation.service';
import { Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'app-picture',
  standalone: true,
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
  imports: [ButtonsComponent, CommonModule, TitleSubtitleComponent]
})
export class PictureComponent implements AfterViewInit {
  @Input({required : true}) invitations: any;
  invitationService = inject(InvitationService)
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

  joinReservation(idReservation: number) {
    const subscription: Subscription = this.invitationService.joinInvitation(+idReservation).subscribe({
      next: (response) => console.log({response}),
      error: (error) => console.error({error}),
      complete: () => subscription.unsubscribe()
    })
  }

  allerAPage(page: number) {
    this.swiper.slideTo(page - 1);
  }

  suivant() {
    this.swiper.slideNext();
  }
}
