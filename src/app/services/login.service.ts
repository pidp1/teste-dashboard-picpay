import { Injectable } from '@angular/core';
import { RequestLogin } from '../models/requestLogin';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  
  public requestLogin: RequestLogin = new RequestLogin();
  private readonly TOKEN_NAME = 'token'

  constructor(private httpClient: HttpClient, private router: Router) {}

  public executeLogin(requestLogin: RequestLogin): Observable<any> {
    return this.httpClient.post(`${API_PATH}auth/login`, requestLogin);
  }

  public sendLoginInfo(): void {
    this.executeLogin(this.requestLogin).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem(this.TOKEN_NAME, response.access_token);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  get token(){
    return localStorage.getItem(this.TOKEN_NAME)!
  }
}

