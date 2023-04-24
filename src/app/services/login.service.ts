import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { CrudService } from './crud.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn$ = false;

  statusLogIn() {
   return this.isLoggedIn$ = !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  constructor() {}
}
