import { Component } from '@angular/core';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonsComponent } from '../../../../../shared/buttons/buttons.component';

@Component({
  selector: 'app-form-credential',
  standalone: true,
  imports: [TitleSubtitleComponent, FormsModule, ReactiveFormsModule, ButtonsComponent],
  templateUrl: './form.credential.component.html',
  styleUrl: './form.credential.component.scss'
})
export class FormCredentialComponent {
  title = 'Inscription';
  subTitle = 'Inscrit toi pour commencer a utiliser cette R connect';

  loginForm: FormGroup = new FormGroup({
    email: new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    }),
    password: new FormGroup({
      password: new FormControl('', Validators.required)
    }),
    // confirm_password: new FormGroup({
    //   password: new FormControl('', Validators.required)
    // })
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
