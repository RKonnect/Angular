import {Injectable} from '@angular/core';
import {BaseApiRestService} from "../../api/base-api-rest.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CredentialDto} from "../../models/dto/credential.dto";

@Injectable({
  providedIn: 'root',

})
export class AuthService extends BaseApiRestService {

  constructor(private http: HttpClient) {
    super('Auth');
  }

  register(credential:CredentialDto): Observable<void> {
    return this.http.post<any>(this.apiUrl + "register", credential, {headers: this.headers})
  }

  login(credential:CredentialDto): Observable<string> {
    return this.http.post<any>(this.apiUrl + "login", credential, {headers: this.headers})
  }
}
