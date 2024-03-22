import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonsComponent } from '../../../../../shared/buttons/buttons.component';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';
import { UserCommonInfoDto } from '../../../../../core/models/dto/userCommonInfo.dto';
import { TypeButtonEnum } from '../../../../../core/models/enum/typeButton.enum';

@Component({
  selector: 'app-form-common-infos',
  standalone: true,
  imports: [TitleSubtitleComponent, ButtonsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './form.common-infos.component.html',
  styleUrl: './form.common-infos.component.scss'
})
export class FormCommonInfosComponent {
  @Input() userCommonInfo!: UserCommonInfoDto
  @Output() emitData: EventEmitter<UserCommonInfoDto> = new EventEmitter();
  TypeButtonEnum = TypeButtonEnum
  loginForm: FormGroup = new FormGroup({
    name: new FormControl(this.userCommonInfo?.name, [Validators.required]),
    surname: new FormControl(this.userCommonInfo?.surname, [Validators.required]),
    pseudo: new FormControl(this.userCommonInfo?.pseudo, [Validators.required]),
    gender: new FormControl(this.userCommonInfo?.gender,),
    dateOfBirth: new FormControl(this.userCommonInfo?.dateOfBirth,),

  });

  onSubmit() {
    const userCommonInfo: UserCommonInfoDto = this.loginForm.value as UserCommonInfoDto
    this.emitData.emit(userCommonInfo);
  }
}
