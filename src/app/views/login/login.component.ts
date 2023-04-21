import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestLogin } from 'src/app/models/requestLogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public requestLogin: RequestLogin = new RequestLogin;

  constructor(
    private loginService: LoginService,
    private router: Router
    ) {

  }
  
  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  login(){
    this.loginService.executeLogin
    this.router.navigate(['dashboard'])

  }

  // public sendLoginInfo() :void {
  //   this.loginService.executeLogin(this.requestLogin).subscribe(
  //     data=>{
  //     console.log(data)

  //     localStorage.setItem('token', data.access_token)
  //     this.router.navigate(['dashboard'])
  //   },
  //   error => {
  //     console.error(error)
  //   })
  // }

  
}
