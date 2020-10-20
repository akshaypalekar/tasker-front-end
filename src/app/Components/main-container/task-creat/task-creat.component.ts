import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskServiceService } from './../../../services/task-service/task-service.service';
import { ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-creat',
  templateUrl: './task-creat.component.html',
  styleUrls: ['./task-creat.component.css']
})
export class TaskCreatComponent implements OnInit, OnDestroy {

  routeSub: Subscription;
  selectedListId: number;

  constructor(public taskService: TaskServiceService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      this.selectedListId = Number(params.get('id'));
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe()
  }

  onSubmit(form: NgForm){
    if(form.invalid){
      return;
    }

    this.taskService.addTask(form.value.taskInputField, this.selectedListId);
    form.resetForm();
  }

}
