import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from '../../../models/task-model/task.model';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../../../services/task-service/task-service.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TaskDeleteDialogComponent } from 'src/app/dialog/task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from 'src/app/dialog/task-edit-dialog/task-edit-dialog.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  
  taskList: Task[] = []; //Local array to store the list items
  private taskSub: Subscription; //Create a subscription to listen to changes in array
  selectedListId: number;

  constructor(public taskService: TaskServiceService, private route: ActivatedRoute, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  //Function to get any items when the component is created
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.selectedListId = Number(params.get('id'));
      this.getTaskList(this.selectedListId);
    });
  }

  getTaskList(selectedListId: number): void {
    this.taskSub = this.taskService.getTaskUpdateListner().subscribe((tasks: Task[]) => {
      this.taskList = tasks.filter((el) => {
        return el.listId == selectedListId;
      });
    });
  }

  onCompleteCheck(taskId: number): void {
    console.log("I'm walking over here");
  }

  //Edit Dialog
  openEditModal(task: any):void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '350px',
      data: {
        taskText: task.todo,
        taskDescription: task.description,
        taskPriority: task.priority,
        taskDueDate: task.dueDate,
        taskStatus: task.status
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined) {
        for (let i in this.taskList) {
          if (this.taskList[i].id == task.id) {
            
            if(this.taskList[i].todo != result.taskText){
              this.taskList[i].todo = result.taskText;
            }
            if(this.taskList[i].description != result.taskDescription){
              this.taskList[i].description = result.taskDescription;
            }
            if(this.taskList[i].priority != result.taskPriority){
              this.taskList[i].priority = result.taskPriority;
            }
            if(this.taskList[i].dueDate != result.taskDueDate){
              this.taskList[i].dueDate = result.taskDueDate;
            }
            if(this.taskList[i].status != result.taskStatus){
              this.taskList[i].status = result.taskStatus;
            }
          }
        }
      }
    });
  }

  
  //Delete Dialog
  openDeleteModal(taskId: number): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
      width: '350px',
      data: {
        element: 'task'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.taskService.deleteTask(taskId);
        this.openSnackBar('Task Deleted','Dismiss');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  //Destroy the subscription after the component is destroyed
  ngOnDestroy(): void {
  }

  //Logic for drag and drop of task items
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
}
