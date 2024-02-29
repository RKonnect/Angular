import {Component, signal} from '@angular/core';
import {ListFormName} from '../../../pages/enum/listfFormName.enum';
import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';
import { FormCommonInfosComponent } from '../components/form/form.common-infos/form.common-infos.component';
// import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [FormCredentialComponent],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {

  // selectedForm: ListFormName = ListFormName.Credential;
  selectedForm: any = signal(ListFormName.Credential);
  listFormName = ListFormName
  // listFormName: ListFormName[] = Object.values(ListFormName);

}
