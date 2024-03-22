import { Component } from '@angular/core';
import { ReservationCardComponent } from "../../../shared/reservation-card/reservation-card.component";

@Component({
    selector: 'app-page-reservations',
    standalone: true,
    templateUrl: './page-reservations.component.html',
    styleUrl: './page-reservations.component.scss',
    imports: [ReservationCardComponent]
})
export class PageReservationsComponent {

}
