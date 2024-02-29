import {Component, signal} from '@angular/core';
import {ListFormName} from '../../../pages/enum/listfFormName.enum';

@Component({
  selector: 'app-page-login',
  standalone: true,
  imports: [],
  providers: [],
  templateUrl: './page-login.component.html',
  styleUrl: './page-login.component.scss'
})
export class PageLoginComponent {

  // selectedForm: ListFormName = ListFormName.Credential;
  selectedForm: any = signal(ListFormName.Credential);
  // listFormName: ListFormName[] = Object.values(ListFormName);


}
