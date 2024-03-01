import { Component, EventEmitter, Output } from '@angular/core';
import { TitleSubtitleComponent } from "../../../../../shared/title-subtitle/title-subtitle.component";
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from "../../../../../shared/buttons/buttons.component";
import { TypeButtonEnum } from '../../../../../core/models/enum/typeButton.enum';

@Component({
  selector: 'app-form-code',
  standalone: true,
  templateUrl: './form.code.component.html',
  styleUrl: './form.code.component.scss',
  imports: [TitleSubtitleComponent, ButtonsComponent, FormsModule, ReactiveFormsModule]
})
export class FormCodeComponent {
  TypeButtonEnum = TypeButtonEnum
  @Output() emitData: EventEmitter<void> = new EventEmitter();
  formNumber: FormGroup = new FormGroup({
    number: new FormControl('', [Validators.required, Validators.email])
  });

  onSubmit() {
    this.emitData.emit();
  }

}
