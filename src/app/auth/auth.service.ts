import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { LoginForm, RegisterForm } from '../interfaces/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  loginIsLoading: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  login(form: LoginForm) {
    this.loginIsLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.router.navigate(['']);
        if (userCredential) this.loginIsLoading = false;
        this.isAuthenticated = true;
      })
      .catch((error) => {
        this.isAuthenticated = false;
        this.loginIsLoading = false;
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('user not found');
      });
  }
  register(form: RegisterForm) {
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        if (userCredential) this.isLoading = false;
        console.log(userCredential);
      })
      .catch((error) => {
        this.isLoading = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        this.isAuthenticated = false;
        this.router.navigate(['login']);
      })
      .catch((error) => {
        // An error happened.
      });
  }
}
