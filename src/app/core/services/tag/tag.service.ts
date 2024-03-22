import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiRestService} from "../../api/base-api-rest.service";
import {Observable} from "rxjs";
import { Tag } from '../../models/Tag';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class TagService extends BaseApiRestService {

  constructor(private http: HttpClient, cookieService: CookieService) {
    super(cookieService, 'Tag');
  }



  getAll(): Observable<Tag[]> {
    this.updateHeaders();
    return this.http.get<Tag[]>(this.apiUrl + 'getAll', {headers: this.headers})
  }
}
