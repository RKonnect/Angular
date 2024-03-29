import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reservation-card',
  standalone: true,
  imports: [],
  templateUrl: './reservation-card.component.html',
  styleUrl: './reservation-card.component.scss'
})
export class ReservationCardComponent {
  @Input({ required: true }) reservation: any
}
