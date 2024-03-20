import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.scss',
  providers: [Router] 
})
export class SmallCardComponent {
  @Input() imageUrl: string = '';
  @Input() cardColor: string = '#D9D18C';
  @Input() width: string = '90vw';
  @Input() height: string = '80px';
  @Input() buttonColor: string = '#FFFFFF';
  @Input() userName: string = '';
  @Input() date: string = '';
  @Input() notificationDate: string = '';
  @Input() location: string = '';

  router: Router = inject(Router);

  navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }
}
