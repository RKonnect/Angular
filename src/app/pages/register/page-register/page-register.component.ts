import { Component, CreateSignalOptions, signal, Pipe } from '@angular/core';
import { ListFormName } from '../../enum/listfFormName.enum';
import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';
import { FormCommonInfosComponent } from '../components/form/form.common-infos/form.common-infos.component';
import { User } from '../../../core/models/User';
import { CredentialDto } from '../../../core/models/dto/credential.dto';
import { BehaviorSubject, Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import { FormCodeComponent } from "../components/form/form.code/form.code.component";
import { FormAvatarComponent } from "../components/form/form.avatar/form.avatar.component";
import { UserCommonInfoDto } from '../../../core/models/dto/userCommonInfo.dto';
import { FormUserTagsComponent } from '../components/form/form.user-tags/form.user-tags.component';
// import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';

@Component({
  selector: 'app-page-register',
  standalone: true,
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.scss',
  imports: [FormCredentialComponent, FormCodeComponent, FormAvatarComponent, FormCommonInfosComponent, FormUserTagsComponent]
})
export class PageRegisterComponent {

  // selectedForm: ListFormName = ListFormName.Credential;
  selectedForm: number = ListFormName.Credential;
  listFormName = ListFormName
  newUser: User = {}

  backPage() {
    this.selectedForm -= 1
  }

  getCredential($event: CredentialDto) {
    this.newUser = { ...this.newUser, ...$event };
    this.selectedForm += 1
  }
  getCode() {
    this.selectedForm += 1
  }

  getAvatar($event: string) {
    this.newUser.avatar = $event
    this.selectedForm += 1
  }

  getCommonInfo($event: UserCommonInfoDto) {
    this.newUser = { ...this.newUser, ...$event };
    this.selectedForm += 1
  }

  getTags() {
    // c'est le derniers form c'est là qu'on va envoyer le user
  }

}
