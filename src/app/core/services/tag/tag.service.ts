import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseApiRestService} from "../../api/base-api-rest.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TagService extends BaseApiRestService {

  constructor(private http: HttpClient) {
    super('Tag');
  }

  addTag(tag: Tag):Observable<any>{
    return this.http.post<any>(this.apiUrl, tag, {headers: this.headers})
  }
}
