import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
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
