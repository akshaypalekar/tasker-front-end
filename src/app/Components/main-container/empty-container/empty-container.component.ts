import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-empty-container',
  templateUrl: './empty-container.component.html',
  styleUrls: ['./empty-container.component.css']
})
export class EmptyContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
