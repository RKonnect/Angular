import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsComponent } from '../../../../../shared/buttons/buttons.component';
import { TitleSubtitleComponent } from '../../../../../shared/title-subtitle/title-subtitle.component';
import { AvatarService } from '../../../../../core/services/avatar/avatar.service';
import { Observable, Subscription, debounceTime } from 'rxjs';
import { Avatar } from '../../../../../core/models/Avatar';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { UserService } from '../../../../../core/services/user/user.service';

@Component({
  selector: 'app-form-avatar',
  standalone: true,
  imports: [TitleSubtitleComponent, ButtonsComponent, FormsModule, ReactiveFormsModule, AsyncPipe, JsonPipe],
  templateUrl: './form.avatar.component.html',
  styleUrl: './form.avatar.component.scss'
})
export class FormAvatarComponent {
  avatarService : AvatarService = inject(AvatarService)
  currentId: number  = 0
  currentAvatarName = ''
  listAvatar$!: Observable<Avatar[]>
  userService: UserService = inject(UserService)
  @Output() emitData: EventEmitter<string> = new EventEmitter();


  ngOnInit() {
    this.listAvatar$ = this.avatarService.getAll()
  }

  applyAvatar(avatar: Avatar) {
    if(avatar.id && avatar.name) {
      this.currentId = avatar.id
      this.currentAvatarName = avatar.name
    }
  }

  emit() {
    this.updateUser() 
    this.emitData.emit(this.currentAvatarName);
  }

  updateUser()  {
    const subscription: Subscription = this.userService.update({avatar : this.currentAvatarName}).pipe(
      debounceTime(300)
    ).subscribe({
      next:() => '',
      error: (err) => console.error({err}),
      complete: () => subscription.unsubscribe()

    })
  }

 
}
