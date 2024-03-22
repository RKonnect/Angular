import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiRestService } from '../../api/base-api-rest.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class InvitationService extends BaseApiRestService {

  constructor(private http: HttpClient, cookieService: CookieService) {
    super(cookieService, 'Invitation');
  }

  getAllByIdUser(id: string): Observable<any> {
    this.updateHeaders();
    return this.http.get<any>(this.apiUrl + 'getById/' + id, { headers: this.headers })
  }
}
