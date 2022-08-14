import { Component, OnInit } from '@angular/core';
import { RegisterForm } from 'src/app/interfaces/Auth';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  form: RegisterForm = {
    names: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  emailValidation: boolean = false;
  namesValidation: boolean = false;
  passwordValidation: boolean = false;
  confirmPasswordValidation: boolean = false;

  ngOnInit(): void {}

  submit() {
    if (this.form.names === '') {
      this.namesValidation = true;
      return;
    } else if (this.form.email === '') {
      this.emailValidation = true;
      return;
    } else if (this.form.password === '') {
      this.passwordValidation = true;
      return;
    } else if (this.form.confirmPassword === '') {
      this.confirmPasswordValidation = true;
      return;
    } else if (this.form.confirmPassword != this.form.password) {
      this.confirmPasswordValidation = true;
      return;
    } else this.authService.register(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }
}
