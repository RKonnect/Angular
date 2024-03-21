import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonsComponent } from '../buttons/buttons.component';
import { TitleSubtitleComponent } from '../title-subtitle/title-subtitle.component';

@Component({
  selector: 'app-modal-stripe',
  standalone: true,
  imports: [ButtonsComponent, TitleSubtitleComponent],
  templateUrl: './modal-stripe.component.html',
  styleUrl: './modal-stripe.component.scss'
})
export class ModalStripeComponent {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
