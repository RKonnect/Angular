import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dots-loading',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dots-loading.component.html',
  styleUrl: './dots-loading.component.scss'
})
export class DotsLoadingComponent {
  version = {
    width: '70px',
    height: '20px',
    color: '#D9D18C'
  };
}
