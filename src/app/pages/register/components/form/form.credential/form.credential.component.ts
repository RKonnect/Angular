import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonsComponent } from '../../../../../shared/buttons/buttons.component';
import { TypeButtonEnum } from '../../../../../core/models/enum/typeButton.enum';
import { CredentialDto } from '../../../../../core/models/dto/credential.dto';
import { User } from '../../../../../core/models/User';

@Component({
  selector: 'app-form-credential',
  standalone: true,
  imports: [
    TitleSubtitleComponent,
    FormsModule,
    ReactiveFormsModule,
    ButtonsComponent,
  ],
  templateUrl: './form.credential.component.html',
  styleUrl: './form.credential.component.scss',
})
export class FormCredentialComponent {
  @Input() credential!: User
  @Output() emitData: EventEmitter<CredentialDto> = new EventEmitter();

  title = 'Inscription';
  subTitle = 'Inscrit toi pour commencer à utiliser RKonnect';
  TypeButtonEnum = TypeButtonEnum;
  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(this.credential?.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.credential?.password, Validators.required)
    });
  }
  onSubmit() {
    const credential: CredentialDto = this.loginForm.value as CredentialDto;
    this.emitData.emit(credential);
  }
}
