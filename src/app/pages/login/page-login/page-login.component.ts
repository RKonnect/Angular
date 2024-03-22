import { Component, inject } from '@angular/core';
import { FormCredentialLoginComponent } from "../components/form/form-credential-login/form-credential-login.component";
import { CredentialDto } from '../../../core/models/dto/credential.dto';
import { AuthService } from '../../../core/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable, Subscription, switchMap, take } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { Login } from '../../../core/stores/user/user.action';
import { UserModel, UserState } from '../../../core/stores/user/user.state';
import { User } from '../../../core/models/User';

@Component({
    selector: 'app-page-login',
    standalone: true,
    templateUrl: './page-login.component.html',
    styleUrl: './page-login.component.scss',
  imports: [FormCredentialLoginComponent, HttpClientModule],
  providers: [AuthService]
})
export class PageLoginComponent {
  @Select(UserState) userState$!: Observable<UserModel>;
  authService: AuthService = inject(AuthService)
  store: Store = inject(Store)
  
  ngOnInit() {
 
  }
  getCredential(credential: CredentialDto) {
    console.log({credential})
      this.store.dispatch(new Login(credential));
  }

  apiLogin(credential: CredentialDto) {
    const subscription: Subscription = this.authService.login(credential).subscribe({
      next: (response) => console.info('connexion réussie', { response }),
      error: (err) => console.error('Erreur lors de la connexion', { err }),
      complete: () => subscription.unsubscribe(),
    });
  }

}
