import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private loginService: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiToken = this.loginService.getToken();

    if (apiToken) {
      const authRequest = request.clone({
        headers: new HttpHeaders({
          'Authorization': `Bearer ${apiToken}`,
          'content-type': 'application/json; charset=utf-8',
        }),
      });
      return next.handle(authRequest);
    }

    return next.handle(request);
  }
}

