import { Component, inject } from '@angular/core';
import { TitleSubtitleComponent } from "../../../shared/title-subtitle/title-subtitle.component";
import { ProfilCardComponent } from "../../../shared/profil-card/profil-card.component";
import { ButtonsComponent } from "../../../shared/buttons/buttons.component";
import { Router } from '@angular/router';
import { UserService } from '../../../core/services/user/user.service';
import { CookieService } from 'ngx-cookie-service';
import { AsyncPipe, JsonPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/User';
import { NavbarComponent } from '../../../shared/navbar/navbar.component';
import { SearchbarComponent } from '../../../shared/searchbar/searchbar.component';

@Component({
    selector: 'app-page-profile',
    standalone: true,
    templateUrl: './page-profile.component.html',
    styleUrl: './page-profile.component.scss',
  imports: [AsyncPipe, JsonPipe,TitleSubtitleComponent, ProfilCardComponent, ButtonsComponent,NavbarComponent,SearchbarComponent],
    providers: [UserService]
})
export class PageProfileComponent {

    userService: UserService = inject(UserService);
    user$!: Observable<User>;
    cookieService: CookieService = inject(CookieService)
    router: Router = inject(Router);

    ngOnInit() {
      const id = this.cookieService.get('idUser');
      this.user$ = this.userService.getOne(id);
       
    }

    navigateTo(route: string): void {
      this.router.navigateByUrl(route);
    }
}
