import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseApiRestService } from '../../api/base-api-rest.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitationService extends BaseApiRestService {

  constructor(private http: HttpClient) {
    super('Invitation');
  }

  getAllByIdUser(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + 'getById/' + id, { headers: this.headers })
  }
}
