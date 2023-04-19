import { Component, OnInit } from '@angular/core';
import { RequestLogin } from 'src/app/models/requestLogin';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public requestLogin: RequestLogin = new RequestLogin;

  constructor(private loginService: LoginService) {

  }
  
  ngOnInit(): void {
    this.requestLogin = new RequestLogin();
  }

  public sendLoginInfo() :void {
    this.loginService.executeLogin(this.requestLogin).subscribe(
      data=>{
      console.log(data)
    },
    error => {
      console.error(error)
    })
  }

  
}
