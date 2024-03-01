import { Component, inject } from '@angular/core';
import { ListFormName } from '../../enum/listfFormName.enum';
import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';
import { FormCommonInfosComponent } from '../components/form/form.common-infos/form.common-infos.component';
import { User } from '../../../core/models/User';
import { CredentialDto } from '../../../core/models/dto/credential.dto';
import { FormCodeComponent } from "../components/form/form.code/form.code.component";
import { FormAvatarComponent } from "../components/form/form.avatar/form.avatar.component";
import { UserCommonInfoDto } from '../../../core/models/dto/userCommonInfo.dto';
import { FormUserTagsComponent } from '../components/form/form.user-tags/form.user-tags.component';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Subscriber, Subscription } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';

@Component({
  selector: 'app-page-register',
  standalone: true,
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.scss',
  imports: [FormCredentialComponent, FormCodeComponent, FormAvatarComponent, FormCommonInfosComponent, FormUserTagsComponent, HttpClientModule],
  providers: [AuthService]
})
export class PageRegisterComponent {

  // selectedForm: ListFormName = ListFormName.Credential;
  selectedForm: number = ListFormName.Credential;
  listFormName = ListFormName
  newUser: User = {}
  credential : CredentialDto = {email: '', password: ''}
  authService: AuthService = inject(AuthService)

  backPage() {
    this.selectedForm -= 1
  }

  getCredential($event: CredentialDto) {
    this.newUser = { ...this.newUser, ...$event };
    this.credential = { ...this.credential, ...$event };
    this.selectedForm += 1
  }
  getCode() {
    this.selectedForm += 1
  }

  getAvatar($event: string) {
    this.newUser.avatar = $event
    this.selectedForm += 1
  }

  getCommonInfo($event: UserCommonInfoDto) {
    this.newUser = { ...this.newUser, ...$event };
    this.selectedForm += 1
  }

  getTags() {
    this.postNewUser()
  }

  postNewUser(){
    console.log({u: this.newUser})
    console.log({ c: this.credential })

    const subscription: Subscription = this.authService.register(this.credential).subscribe({
      next: (response) => console.log('new User', { response }),
      error: (err) => console.error('Error in registration', { err }),
      complete: () => subscription.unsubscribe(),
    });
  }

}
