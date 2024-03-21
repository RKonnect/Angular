import { Component, Input } from '@angular/core';
import { Food } from '../../core/models/Food';

@Component({
  selector: 'app-food-icon',
  standalone: true,
  imports: [],
  templateUrl: './food-icon.component.html',
  styleUrl: './food-icon.component.scss'
})
export class FoodIconComponent {
  @Input({required: true}) food!: Food
}
