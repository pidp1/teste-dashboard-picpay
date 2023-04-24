import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
    private crudService: CrudService
  ) {}

  ngOnInit(): void {}

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.crudService
      .executeLogin(
        this.form.get('username')?.value!,
        this.form.get('password')?.value!
      )
      .subscribe((response) => {
        console.log(response);
        localStorage.setItem('token', response.access_token);
        this.loginService.statusLogIn();
        this.router.navigate(['/dashboard']);
      });
  }
}
