import { Component, inject } from '@angular/core';
import { ReservationCardComponent } from "../../../shared/reservation-card/reservation-card.component";
import { Observable } from 'rxjs';
import { InvitationService } from '../../../core/services/invitation/invitation.service';
import { CookieService } from 'ngx-cookie-service';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
    selector: 'app-page-reservations',
    standalone: true,
    templateUrl: './page-reservations.component.html',
    styleUrl: './page-reservations.component.scss',
    imports: [ReservationCardComponent, AsyncPipe, JsonPipe]
})
export class PageReservationsComponent {
    reservation$!: Observable<any>
    invitationService : InvitationService = inject(InvitationService)
    cookieService: CookieService = inject(CookieService)
    ngOnInit() {
        const id = this.cookieService.get('idUser')
        this.reservation$ = this.invitationService.getAllByIdUser(id)
    }
}
