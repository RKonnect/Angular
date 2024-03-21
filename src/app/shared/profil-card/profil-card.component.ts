import { Component, Input } from '@angular/core';
import { LabelComponent } from "../label/label.component";
import { User } from '../../core/models/User';
import { FoodIconComponent } from "../food-icon/food-icon.component";

@Component({
    selector: 'app-profil-card',
    standalone: true,
    templateUrl: './profil-card.component.html',
    styleUrl: './profil-card.component.scss',
    imports: [LabelComponent, FoodIconComponent]
})
export class ProfilCardComponent {
    @Input() user!: User
    currentDate = new Date()
    userAge!: string

    ngOnInit() {
        if(this.user.dateOfBirth) {
            const ageNumber = this.currentDate.getFullYear() - new Date(this.user.dateOfBirth).getFullYear()
            this.userAge = ageNumber.toString() + ' ans'
        } else {
            this.userAge = 'Non renseigne'
        }
    }
}
