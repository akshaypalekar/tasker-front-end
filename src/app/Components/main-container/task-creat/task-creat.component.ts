import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-creat',
  templateUrl: './task-creat.component.html',
  styleUrls: ['./task-creat.component.css']
})
export class TaskCreatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      return;
    }
  }

}
