import { Component, inject } from '@angular/core';
import { Router } from 'express';
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
import { Store } from '@ngxs/store';

@Component({
  selector: 'app-page-register-info',
  standalone: true,
  imports: [FormCredentialComponent, FormAvatarComponent, FormCommonInfosComponent, FormUserTagsComponent, HttpClientModule],
  templateUrl: './page-register-info.component.html',
  styleUrl: './page-register-info.component.scss'
})
export class PageRegisterInfoComponent {

  selectedForm: number = ListFormName.Avatar;
  cookieService: CookieService = inject(CookieService)
  listFormName = ListFormName
  newUser: User = {}
  userService: UserService = inject(UserService)


  getCode() {
    this.selectedForm += 1
  }

  getAvatar($event: string) {


    this.selectedForm += 1
  }

  getCommonInfo($event: UserCommonInfoDto) {
    this.newUser = { ...this.newUser, ...$event };
    this.selectedForm += 1
  }

  getTags() {
    
  }

}
