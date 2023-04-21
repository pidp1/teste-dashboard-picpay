import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private loginService: LoginService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const apiToken = this.loginService.getToken()

    if(apiToken !== null){

      const authRequest = request.clone({setHeaders: {'Autorization': `Bearer ${apiToken}`}})
      return next.handle(authRequest)

    }

    return next.handle(request);

  }
}
