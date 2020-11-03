import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { SpinnerServiceService } from 'src/app/services/spinner-service/spinner-service.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  spinner: Subject<boolean> = this._spinner.spinner

  constructor(private _spinner: SpinnerServiceService) { 
  }

  ngOnInit(): void {
  }

}
