import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(
    private router: Router
  ) { }

  // Get user session
  async getSession() {

    // ...
    // put auth session here
    // ...

    // Sample only - remove this after real authentication / session
    const session = {
      email: 'john.doe@mail.com'
    };

    return false;
    // return session;
  }

  // Sign in
  async signIn(email: string, password: string) {
    // Sample only - remove this after real authentication / session
    const sample_user = {
      email,
      password
    };

    return sample_user;
  }

  // Sign up
  async signUp(email: string, password: string) {
    // Sample only - remove this after real authentication / session
    const sample_user = {
      email,
      password
    };

    return sample_user;
  }

  // Sign out
  async signOut() {
    // ...
    // clean subscriptions / local storage etc. here
    // ...

    // Navigate to sign-in
    this.router.navigateByUrl('/signin');
  }
}
