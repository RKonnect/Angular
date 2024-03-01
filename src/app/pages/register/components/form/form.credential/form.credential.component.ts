import { Component, EventEmitter, Output } from '@angular/core';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonsComponent } from '../../../../../shared/buttons/buttons.component';
import { TypeButtonEnum } from '../../../../../core/models/enum/typeButton.enum';
import { CredentialDto } from '../../../../../core/models/dto/credential.dto';

@Component({
  selector: 'app-form-credential',
  standalone: true,
  imports: [TitleSubtitleComponent, FormsModule, ReactiveFormsModule, ButtonsComponent],
  templateUrl: './form.credential.component.html',
  styleUrl: './form.credential.component.scss'
})
export class FormCredentialComponent {

  @Output() emitData: EventEmitter<CredentialDto> = new EventEmitter();

  title = 'Inscription';
  subTitle = 'Inscrit toi pour commencer a utiliser cette R connect';
  TypeButtonEnum = TypeButtonEnum;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    const credential: CredentialDto = this.loginForm.value as CredentialDto
    this.emitData.emit(credential);
  }
}
