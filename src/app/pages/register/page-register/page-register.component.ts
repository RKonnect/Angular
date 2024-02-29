import {Component, signal} from '@angular/core';
import {ListFormName} from '../../enum/listfFormName.enum';
import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';
import { FormCommonInfosComponent } from '../components/form/form.common-infos/form.common-infos.component';
// import { FormCredentialComponent } from '../components/form/form.credential/form.credential.component';

@Component({
  selector: 'app-page-register',
  standalone: true,
  imports: [FormCredentialComponent],
  templateUrl: './page-register.component.html',
  styleUrl: './page-register.component.scss'
})
export class PageRegisterComponent {

  // selectedForm: ListFormName = ListFormName.Credential;
  selectedForm: any = signal(ListFormName.Credential);
  listFormName = ListFormName
  // listFormName: ListFormName[] = Object.values(ListFormName);

}
