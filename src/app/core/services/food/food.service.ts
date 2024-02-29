import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiRestService} from "../../api/base-api-rest.service";
import {Observable} from "rxjs";
import {FoodDto} from "../../models/dto/food.dto";

@Injectable({
  providedIn: 'root'
})
export class FoodService extends BaseApiRestService {

  constructor(private http: HttpClient) {
    super('Food');
  }

  add(food: FoodDto):Observable<any>{
    return this.http.post<any>(this.apiUrl, food, {headers: this.headers} )
  }


}
