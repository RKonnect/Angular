import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-title-subtitle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-subtitle.component.html',
  styleUrl: './title-subtitle.component.scss'
})
export class TitleSubtitleComponent {
  @Input({ required: true }) title: string = '';
  @Input() subTitle: string = '';
  @Input() showArrow: boolean = false;

  constructor(private location: Location) { }

  goBack(): void {
    this.location.back();
  }
}
