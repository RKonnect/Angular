import {Injectable} from '@angular/core';
import {BaseApiRestService} from "../../api/base-api-rest.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Restaurant} from "../../models/Restaurant";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService extends BaseApiRestService {

  constructor(private http: HttpClient, cookieService: CookieService) {
    super(cookieService, 'Restaurant');
  }

  add(restaurant: Restaurant): Observable<any> {
    this.updateHeaders();
    return this.http.post<any>(this.apiUrl, restaurant, {headers: this.headers})
  }

  getAll(): Observable<any> {
    this.updateHeaders();
    return this.http.get<any>(this.apiUrl + 'getAll', {headers: this.headers})
  }

  getAllForUser(): Observable<any> {
    this.updateHeaders();
    return this.http.get<any>(this.apiUrl + 'getByUserId', { headers: this.headers })
  }

  getOne(id: string): Observable<any> {
    this.updateHeaders();
    return this.http.get<any>(this.apiUrl + id, {headers: this.headers})
  }

  update(id: string, restaurant: Restaurant): Observable<any>{
    this.updateHeaders();
    return this.http.put<any>(this.apiUrl + id, restaurant, {headers: this.headers})
  }
}
