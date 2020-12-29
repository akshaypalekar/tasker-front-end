import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Amplify, { Auth, Cache } from 'aws-amplify';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async confirmSignUp(form: NgForm) {
    const code = form.value.confirmCode;

    await Auth.confirmSignUp(localStorage.getItem('emailID'), code).then((data) => {
      localStorage.removeItem('emailID');
      this.router.navigate(['login']);
      this.openSnackBar('Confirmation Successful ! Please login using your email and password', 'Dismiss');
    }).catch((err) => {
      this.openSnackBar(err.message, 'Dismiss');
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
