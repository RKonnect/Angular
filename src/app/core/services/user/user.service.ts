import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiRestService} from "../../api/base-api-rest.service";
import {Observable} from "rxjs";
import { User } from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiRestService {

  constructor(private http: HttpClient) {
    super('User');
  }

  getAll(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl, {headers: this.headers})
  }

  getOne(id: number): Observable<User> {
    console.log('getOne' , { headers: this.headers })
    return this.http.get<User>(this.apiUrl + 'getById/' + id, { headers: this.headers })
  }

  update(user: User): Observable<any>{
    return this.http.put<User>(this.apiUrl, user, {headers: this.headers})
  }
  /*
  delete(user: User): Observable<any>{
    return this.http.delete<User>(this.apiUrl, user, {headers: this.headers})
  }
  */

  addTag(user: User):Observable<any>{
    return this.http.post<any>(this.apiUrl, user, {headers: this.headers})
  }

  addAllergy(user: User):Observable<any>{
    return this.http.post<any>(this.apiUrl, user, {headers: this.headers})
  }

  addFavoriteFood(user: User):Observable<any>{
    return this.http.post<any>(this.apiUrl, user, {headers: this.headers})
  }
}
