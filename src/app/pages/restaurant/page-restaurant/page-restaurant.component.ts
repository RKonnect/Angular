import { Component, inject } from '@angular/core';
import { RestaurantService } from '../../../core/services/restaurant/restaurant.service';
import { Observable } from 'rxjs';
import { Restaurant } from '../../../core/models/Restaurant';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-page-restaurant',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  templateUrl: './page-restaurant.component.html',
  styleUrl: './page-restaurant.component.scss'
})
export class PageRestaurantComponent {
  restaurantService: RestaurantService = inject(RestaurantService)
  restaurants$: Observable<Restaurant[]> = this.restaurantService.getAllForUser()
}
