import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonsComponent } from "../../../../../shared/buttons/buttons.component";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';
import { TypeButtonEnum } from '../../../../../core/models/enum/typeButton.enum';
import { CredentialDto } from '../../../../../core/models/dto/credential.dto';

@Component({
    selector: 'app-form-credential-login',
    standalone: true,
    templateUrl: './form-credential-login.component.html',
    styleUrl: './form-credential-login.component.scss',
  imports: [TitleSubtitleComponent, FormsModule, ReactiveFormsModule, ButtonsComponent],
})
export class FormCredentialLoginComponent {
  @Output() emitData: EventEmitter<CredentialDto> = new EventEmitter();

  title = 'Connexion';
  subTitle = 'Connecte toi pour commencer à utiliser RKonnect';
  TypeButtonEnum = TypeButtonEnum;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('', Validators.required)
  });
  onSubmit() {
    const credential: CredentialDto = this.loginForm.value as CredentialDto
    this.emitData.emit(credential);
  }

}
