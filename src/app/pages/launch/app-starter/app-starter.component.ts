import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DotsLoadingComponent } from './dots-loading/dots-loading.component';

@Component({
  selector: 'app-app-starter',
  standalone: true,
  imports: [DotsLoadingComponent],
  templateUrl: './app-starter.component.html',
  styleUrl: './app-starter.component.scss'
})
export class AppStarterComponent {

  constructor(private router: Router) {
    setTimeout(() => {
      this.router.navigate(['/launch']);
    }, 3000);
  }

}

