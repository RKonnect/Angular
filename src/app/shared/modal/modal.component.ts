import {Component, EventEmitter, Output} from '@angular/core';
import {FiltersComponent} from "../filters/filters.component";
import {InputComponent} from "../input/input.component";
import {ButtonsComponent} from "../buttons/buttons.component";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    FiltersComponent,
    InputComponent,
    ButtonsComponent
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  @Output() close = new EventEmitter<void>();
  @Output() openNewPopup = new EventEmitter<void>(); // Nouvel EventEmitter

  onClose() {
    this.close.emit();
  }

  // Étape 2: Créer une fonction pour émettre l'événement
  onPropose() {
    this.onClose();
    this.openNewPopup.emit(); // Émettre l'événement pour ouvrir une nouvelle popup
  }
}
