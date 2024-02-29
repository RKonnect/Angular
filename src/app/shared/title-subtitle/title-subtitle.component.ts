import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-subtitle',
  standalone: true,
  imports: [],
  templateUrl: './title-subtitle.component.html',
  styleUrl: './title-subtitle.component.scss'
})
export class TitleSubtitleComponent {
  @Input({required: true}) title: string = '';
  @Input({required: true}) subTitle: string = '';
}
