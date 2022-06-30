import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  login = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  get all() {
    return this.login.controls;
  }
  constructor(private router: Router, private loginSvc: LoginService) {}

  ngOnInit(): void {}

  Login() {
    //console.warn(this.login.value);
    this.loginSvc.login(this.login.value).subscribe((res: any) => {
      if (res.success) {
        localStorage.setItem('token', res.data.token);
        this.router.navigate(['seneca/home']);
      } else {
        alert('Credential not verified');
        this.router.navigate(['login']);
      }
    });

    // console.warn('hi sanjoy');
    // this.router.navigate(dashboard/home);
    // this.router.navigateByUrl('seneca/home');
  }
}
