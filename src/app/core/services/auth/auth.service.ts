import {Injectable} from '@angular/core';
import {BaseApiRestService} from "../../api/base-api-rest.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CredentialDto} from "../../models/dto/credential.dto";
import { User } from '../../models/User';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',

})
export class AuthService extends BaseApiRestService {

  constructor(private http: HttpClient, cookieService: CookieService) {
    super(cookieService, 'Auth');
  }

  register(credential:CredentialDto): Observable<User> {
    this.updateHeaders();
    return this.http.post<any>(this.apiUrl + "register", credential, {headers: this.headers})
  }

  login(credential:CredentialDto): Observable<string> {
    this.updateHeaders();
    return this.http.post<any>(this.apiUrl + "login", credential, {headers: this.headers})
  }
}
