import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from './crud.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'token';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  

  constructor(private crudService: CrudService, private router: Router) {
    this._isLoggedIn$.next(!!this.getToken);
  }

  login(username: string, password: string) {
    return this.crudService.executeLogin(username, password).pipe(
      tap((response: any) => {
        this.router.navigate(['/dashboard']);
        this._isLoggedIn$.next(true);
      })
    );
  }
   getToken() {
    return localStorage.getItem(this.TOKEN_NAME)!;
  }
}
