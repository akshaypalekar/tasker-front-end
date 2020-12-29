import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service/auth-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Amplify, { Auth, Cache } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthServiceService, private _snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
  }


  onSignIn(form: NgForm) {
    this.auth.authenticateUser(form.value.email, form.value.password).then((user) => {
      this.router.navigate(['']);
      localStorage.setItem('userID', user['username']);
      localStorage.setItem('idToken',user['signInUserSession']['idToken']['jwtToken']);
    }).catch((err) => {
      form.resetForm();
      if(err.message == 'User is not confirmed.'){
        this.router.navigate(['confirm']);
        this.openSnackBar('Enter confirmation code', 'Dismiss');
      }else{
        this.openSnackBar(err.message, 'Dismiss');
      }
    });
  }

  async onSignUp(form: NgForm) {
    const username = form.value.email;
    const password = form.value.password;
    const repassword = form.value.repassword;

    let re = /\S+@\S+\.\S+/;

    if (password != repassword) {
      this.openSnackBar('Passwords do not match', 'Dismiss');
    }
    else if (!re.test(username)) {
      this.openSnackBar('Enter valid email', 'Dismiss');
    } else {
      try {
        const { user } = await Auth.signUp({
          username,
          password,
        });
        localStorage.setItem('emailID', username);
        this.router.navigate(['confirm']);
        this.openSnackBar('Enter confirmation code', 'Dismiss');
      } catch (error) {
        console.log('error signing up:', error);
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
