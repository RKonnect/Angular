import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from '../../../../../shared/buttons/buttons.component';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';
import { TypeButtonEnum } from '../../../../../core/models/enum/typeButton.enum';
import { TagService } from '../../../../../core/services/tag/tag.service';
import { Observable , Subscription } from 'rxjs';
import { Tag } from '../../../../../core/models/Tag';
import { AsyncPipe, CommonModule } from '@angular/common';
import { UserService } from '../../../../../core/services/user/user.service';


@Component({
  selector: 'app-form-user-tags',
  standalone: true,
  imports: [TitleSubtitleComponent, ButtonsComponent, FormsModule, ReactiveFormsModule, AsyncPipe, FormsModule, CommonModule],
  templateUrl: './form.user-tags.component.html',
  styleUrl: './form.user-tags.component.scss'
})
export class FormUserTagsComponent {
  @Output() emitData: EventEmitter<string> = new EventEmitter();
  title: string = "Dit nous en plus sur toi";
  subTitle: string = "On veut te connaître";
  tags$: Observable<Tag[]> = inject(TagService).getAll()
  userService: UserService = inject(UserService)
  biography: string = "";
  TypeButtonEnum = TypeButtonEnum
  onSubmit() {
    console.log('onSubmit', this.biography)
    this.emitData.emit(this.biography);
  }

  postTag(tag: Tag) {
    const subscription: Subscription = this.userService.addTag(tag).subscribe({
      next:() => console.log('Tag added'),
      error: (err) => console.error({err}),
      complete: () => subscription.unsubscribe()
    })
  }

}
