import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  standalone: true,
  imports: [],
  templateUrl: './searchbar.component.html',
  styleUrl: './searchbar.component.scss',
  providers: [Router] 

})
export class SearchbarComponent {
  router: Router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
