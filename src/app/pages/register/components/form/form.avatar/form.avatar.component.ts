import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from '../../../../../shared/buttons/buttons.component';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';

@Component({
  selector: 'app-form-avatar',
  standalone: true,
  imports: [TitleSubtitleComponent, ButtonsComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './form.avatar.component.html',
  styleUrl: './form.avatar.component.scss'
})
export class FormAvatarComponent {
  @Output() emitData: EventEmitter<string> = new EventEmitter();
  title: string = "Choisis ton avatar";
  subTitle: string = "Ton avatar sera public et visible par les utilisateurs de l’app. Choisis celui qui te correspond le plus.";
}
