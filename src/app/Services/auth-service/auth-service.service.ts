import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Amplify, { Auth, Cache } from 'aws-amplify';
import { Router } from '@angular/router';


Amplify.configure({
  Auth: {
    region: environment.region,
    userPoolId: environment.userpoolId,
    userPoolWebClientId: environment.clientId,
  }
})

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private router: Router) { }

  async authenticateUser(username: string, password: string) {
    return await Auth.signIn(username, password);
  }

  async getCurrentSession() {
    return await Auth.currentSession();
  }

  async getCurrentUser() {
    return await Auth.currentAuthenticatedUser();
  }

  async signOut() {
    await Auth.signOut({ global: true }).then(() => {
      localStorage.removeItem("userID");
      localStorage.removeItem("idToken");
      this.router.navigate(['login']);
      console.log('signed out successfully');
      location.reload();
    }).catch((err) => {
      console.log('error signing out: ', err);
    });
  }

}
