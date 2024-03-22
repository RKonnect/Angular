import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';

import { Observable } from 'rxjs';
import { GetUserState } from '../../core/stores/user/user.action';
import { UserModel, UserState } from '../../core/stores/user/user.state';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [Router] 

})
export class NavbarComponent {
  router: Router = inject(Router);
  navigateTo(route: string): void {
    this.router.navigateByUrl(route); 
  }
}
