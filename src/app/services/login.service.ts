import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/requestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseLogin } from '../models/responseLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }

  public executeLogin(requestLogin: RequestLogin): Observable<any>{
    return this.httpClient.post('https://3kniis.sse.codesandbox.io/auth/login', requestLogin);

  }
}
