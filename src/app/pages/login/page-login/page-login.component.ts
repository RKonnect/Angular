import { Component, inject } from '@angular/core';
import { FormCredentialLoginComponent } from "../components/form/form-credential-login/form-credential-login.component";
import { CredentialDto } from '../../../core/models/dto/credential.dto';
import { AuthService } from '../../../core/services/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-page-login',
    standalone: true,
    templateUrl: './page-login.component.html',
    styleUrl: './page-login.component.scss',
  imports: [FormCredentialLoginComponent, HttpClientModule],
  providers: [AuthService]
})
export class PageLoginComponent {

  authService: AuthService = inject(AuthService)
  getCredential($event: CredentialDto) {
    this.apiLogin($event)
  }

  apiLogin(credential: CredentialDto) {
    const subscription: Subscription = this.authService.login(credential).subscribe({
      next: (response) => console.info('connexion réussie', { response }),
      error: (err) => console.error('Erreur lors de la connexion', { err }),
      complete: () => subscription.unsubscribe(),
    });
  }

}
