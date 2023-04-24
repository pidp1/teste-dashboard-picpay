import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(private loginService: LoginService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    | Observable<boolean | UrlTree>
    | Promise <boolean | UrlTree>
    | boolean
    | UrlTree {
      const isUserLoggedIn = this.loginService.statusLogIn()
      return isUserLoggedIn
    }

  }
  