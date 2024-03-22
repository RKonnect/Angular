import { HttpHeaders } from '@angular/common/http';
import { environment } from "../../../environments/environment";
import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class BaseApiRestService {
  protected apiUrl = environment.apiUrl;
  protected headers: HttpHeaders | undefined;
  protected headerFormData: HttpHeaders;

  constructor(protected cookieService: CookieService, path?: string) {
    this.apiUrl = environment.apiUrl + (path ? path + '/' : '/');
    this.headerFormData = new HttpHeaders();
    this.updateHeaders();
  }

  updateHeaders() {
    const token = this.cookieService.get('token') || '';
    this.headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  }
}
