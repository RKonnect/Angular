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

  onClose() {
    this.close.emit();
  }
}
