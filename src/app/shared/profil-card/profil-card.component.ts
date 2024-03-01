import { Component } from '@angular/core';
import { LabelComponent } from "../label/label.component";

@Component({
    selector: 'app-profil-card',
    standalone: true,
    templateUrl: './profil-card.component.html',
    styleUrl: './profil-card.component.scss',
    imports: [LabelComponent]
})
export class ProfilCardComponent {

}
