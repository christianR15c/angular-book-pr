import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/interfaces/Auth';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  form: LoginForm = {
    email: '',
    password: '',
  };

  loginEmailValidation: boolean = false;
  loginPasswordValidation: boolean = false;

  ngOnInit(): void {}

  submit() {
    if (this.form.email === '') {
      this.loginEmailValidation = true;
      return;
    } else if (this.form.password === '') {
      this.loginPasswordValidation = true;
      return;
    } else this.authService.login(this.form);
  }

  loginIsLoading() {
    return this.authService.loginIsLoading;
  }
}
