import { Component, inject } from '@angular/core';
import { ListFormName } from '../../enum/listfFormName.enum';
import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';
import { FormCommonInfosComponent } from '../components/form/form.common-infos/form.common-infos.component';
import { User } from '../../../core/models/User';
import { CredentialDto } from '../../../core/models/dto/credential.dto';

import { FormAvatarComponent } from "../components/form/form.avatar/form.avatar.component";
import { UserCommonInfoDto } from '../../../core/models/dto/userCommonInfo.dto';
import { FormUserTagsComponent } from '../components/form/form.user-tags/form.user-tags.component';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Subscriber, Subscription, debounceTime } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { error } from 'console';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from '../../../core/services/user/user.service';
import { Route, Router } from '@angular/router';
// import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';

@Component({
  selector: 'app-page-register',
  standalone: true,
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.scss',
  imports: [FormCredentialComponent, FormAvatarComponent, FormCommonInfosComponent, FormUserTagsComponent, HttpClientModule],
  providers: [AuthService]
})
export class PageRegisterComponent {

  // selectedForm: ListFormName = ListFormName.Credential;
  selectedForm: number = ListFormName.Credential;
  cookieService: CookieService = inject(CookieService)
  listFormName = ListFormName
  newUser: User = {}
  credential : CredentialDto = {email: '', password: ''}
  authService: AuthService = inject(AuthService)
  userService: UserService = inject(UserService)
  router: Router = inject(Router)

  backPage() {
    this.selectedForm -= 1
  }

  getCredential($event: CredentialDto) {
    this.newUser = { ...this.newUser, ...$event };
    this.credential = { ...this.credential, ...$event };
    this.postNewUser();
   
    setTimeout(() => {
      console.log('token' , this.cookieService.get('token'))
      this.router.navigate(['/register/info']);
    }, 3000); 
  }

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
    this.postNewUser()
  }

  postNewUser(){
    console.log({u: this.newUser})
    console.log({ c: this.credential })

    const subscription: Subscription = this.authService.register(this.credential).subscribe({
      next: (user:User) => {
        console.log('new User', { user }),
        this.newUser = user
        },
      error: (err) => console.error('Error in registration', { err }),
      complete: () => {
        this.login()
        subscription.unsubscribe()

      
      },
    });
  }

  login() {
    const subscription: Subscription = this.authService.login(this.credential).pipe(
      debounceTime(1000) 
    ).subscribe({
      next:( token: string) => {
        console.log({token})
        this.cookieService.set('token', token)
      },
      error: (err) => console.error('Error in registration', { err }),
      complete: () => {
    
        subscription.unsubscribe()
      
      },
    })
  }


}
