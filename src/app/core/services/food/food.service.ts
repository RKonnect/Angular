import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiRestService} from "../../api/base-api-rest.service";
import {Observable} from "rxjs";
import {FoodDto} from "../../models/dto/food.dto";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class FoodService extends BaseApiRestService {

  constructor(private http: HttpClient, cookieService: CookieService) {
    super(cookieService, 'Food');
  }

  add(food: FoodDto):Observable<any>{
    this.updateHeaders();
    return this.http.post<any>(this.apiUrl, food, {headers: this.headers} )
  }


}
