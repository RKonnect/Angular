import {Component, EventEmitter, Input, Output, inject} from '@angular/core';
import {FiltersComponent} from "../filters/filters.component";
import {InputComponent} from "../input/input.component";
import {ButtonsComponent} from "../buttons/buttons.component";
import { FormsModule } from '@angular/forms';
import { NewInvitationDto } from '../../core/models/dto/newInvitation.dto';
import { InvitationService } from '../../core/services/invitation/invitation.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    FiltersComponent,
    InputComponent,
    ButtonsComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  invitationService: InvitationService = inject(InvitationService);

  @Output() close = new EventEmitter<void>();
  @Output() openNewPopup = new EventEmitter<void>(); // Nouvel EventEmitter
  @Input({required: true}) restaurantId!: number;
  payementType: number = 0;
  userMax: number = 3;
  invitationDate: Date = new Date();
  invitation!: NewInvitationDto;
  onClose() {

    this.close.emit();
  }

  // Étape 2: Créer une fonction pour émettre l'événement
  onPropose() {
    this.invitation = {
      restaurantId: this.restaurantId,
      userMax: +this.userMax,
      paymentType: +this.payementType,
      invitationDate: this.invitationDate
    }

    this.postNewInvitation(this.invitation);

    this.onClose();
    this.openNewPopup.emit(); // Émettre l'événement pour ouvrir une nouvelle popup
  }

  postNewInvitation(newInvitation: NewInvitationDto) {
    const subscription: Subscription = this.invitationService.postInvitation(newInvitation).subscribe({
      next : (response) => console.info({response}),
      error: (error) => console.error({error}),
      complete: () => subscription.unsubscribe()
    })
  }
}
