import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  constructor() {
    this.generateTodayOptions();
  }

  todayOptions: string[] = [];
  selectedToday = '';



  timeOptions = ['18h30', '19h00', '19h30'];
  distanceOptions = ['1km', '5km', '10km'];

  selectedTime = '';
  selectedDistance = '';


  inviteButtonText = 'Tu m\'invites ↔️';
  inviteButtonClicked = false;

  toggleInviteButton() {
    this.inviteButtonClicked = !this.inviteButtonClicked;
    this.inviteButtonText = this.inviteButtonClicked ? 'On s\'invite ↔️' : 'Tu m\'invites ↔️';
  }

  generateTodayOptions() {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const futureDate = new Date(today);
        futureDate.setDate(today.getDate() + i);
        const dateString = futureDate.toLocaleDateString('fr-FR', {
            weekday: 'long', month: 'long', day: 'numeric'
        });
        this.todayOptions.push(dateString.charAt(0).toUpperCase() + dateString.slice(1)); // Capitalize first letter
    }
}

}
