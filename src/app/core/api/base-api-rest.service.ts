import {HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";

export abstract class BaseApiRestService {
  protected apiUrl = environment.apiUrl;
  protected headers: HttpHeaders;
  protected headerFormData: HttpHeaders;

  constructor(path?: string) {
    this.apiUrl = environment.apiUrl + (path ? path + '/' : '/');
    this.headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${localStorage.getItem('token')}`
    });
    this.headerFormData = new HttpHeaders({
      // 'Authorization': `Bearer ${localStorage.getItem('token')}`,

    });
  }
}
