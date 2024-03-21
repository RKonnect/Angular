import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { ButtonsComponent } from '../../../shared/buttons/buttons.component';

@Component({
  selector: 'app-auth-choice',
  standalone: true,
  imports: [ButtonsComponent],
  templateUrl: './auth-choice.component.html',
  styleUrl: './auth-choice.component.scss'
})
export class AuthChoiceComponent {
  router: Router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigateByUrl(route); 
  }
}
