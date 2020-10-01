import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from '../../../models/task-model/task.model';
import { Subscription } from 'rxjs';
import { TaskServiceService } from '../../../services/task-service/task-service.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TaskDeleteDialogComponent } from 'src/app/dialog/task-delete-dialog/task-delete-dialog.component';


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

  
  //Delete Modal
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
