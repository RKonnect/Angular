import {HttpHeaders} from '@angular/common/http';
import {environment} from "../../../environments/environment";
import { inject } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

export abstract class BaseApiRestService {
  protected apiUrl = environment.apiUrl;
  protected headers: HttpHeaders;
  protected headerFormData: HttpHeaders;
  protected cookieService = inject(CookieService)
  constructor(path?: string) {
    const token = this.cookieService.get('token') ?? ''; 
    this.apiUrl = environment.apiUrl + (path ? path + '/' : '/');
    this.headers = new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    this.headerFormData = new HttpHeaders({
      // 'Authorization': `Bearer ${localStorage.getItem('token')}`,

    });
  }
}
