import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerServiceService {
  
  spinner = new Subject<boolean>();

  constructor() {}

  show() {
    this.spinner.next(true);
  }
  hide() {
    this.spinner.next(false);
  }
}
