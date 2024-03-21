import { Injectable } from '@angular/core';
import { BaseApiRestService } from '../../api/base-api-rest.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avatar } from '../../models/Avatar';

@Injectable({
  providedIn: 'root'
})
export class AvatarService  extends BaseApiRestService {

  constructor(private http: HttpClient) {
    super('Avatar');
  }

  getAll(): Observable<Avatar[]>{
    return this.http.get<Avatar[]>(this.apiUrl + 'getAll', {headers : this.headers})
  }

}