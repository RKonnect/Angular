import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../../../core/models/User';
import { CredentialDto } from '../../../core/models/dto/credential.dto';
import { AuthService } from '../../../core/services/auth/auth.service';
import { UserService } from '../../../core/services/user/user.service';
import { ListFormName } from '../../enum/listfFormName.enum';
import { HttpClientModule } from '@angular/common/http';
import { FormAvatarComponent } from '../components/form/form.avatar/form.avatar.component';
import { FormCommonInfosComponent } from '../components/form/form.common-infos/form.common-infos.component';
import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';
import { FormUserTagsComponent } from '../components/form/form.user-tags/form.user-tags.component';
import { UserCommonInfoDto } from '../../../core/models/dto/userCommonInfo.dto';
import { Subscription, debounceTime } from 'rxjs';


@Component({
  selector: 'app-page-register-info',
  standalone: true,
  imports: [FormCredentialComponent, FormAvatarComponent, FormCommonInfosComponent, FormUserTagsComponent, HttpClientModule],
  templateUrl: './page-register-info.component.html',
  styleUrl: './page-register-info.component.scss'
})
export class PageRegisterInfoComponent {
  router: Router = inject(Router)
  selectedForm: number = ListFormName.Avatar;
  cookieService: CookieService = inject(CookieService)
  listFormName = ListFormName
  newUser: User = {}
  userService: UserService = inject(UserService)


  getCode() {
    this.selectedForm += 1
  }

  getAvatar($event: string) {
    this.newUser = { ...this.newUser, avatar: $event }
    this.updateUser(this.newUser)
    this.selectedForm += 1
  }

  getCommonInfo($event: UserCommonInfoDto) {
    this.newUser = { ...this.newUser, ...$event };
    if(this.newUser.gender)
    this.newUser.gender = +this.newUser.gender
    this.updateUser(this.newUser)
    this.selectedForm += 1
  }

  getTags($event: string) {
    console.log('getTags', $event)
    this.newUser.biography = $event
    this.updateUser(this.newUser)
    this.router.navigate(['/']);
    
  }

  updateUser(user: User)  {
    const subscription: Subscription = this.userService.update(user).pipe(
      debounceTime(300)
    ).subscribe({
      next:() =>{},
      error: (err) => console.error({err}),
      complete: () => subscription.unsubscribe()
    })
  }

}
