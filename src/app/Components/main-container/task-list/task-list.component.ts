import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from '../../../models/task-model/task.model';
import { combineLatest, Subscription } from 'rxjs';
import { TaskServiceService } from '../../../services/task-service/task-service.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteConfirmationDialogComponent } from 'src/app/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { TaskEditDialogComponent } from 'src/app/dialog/task-edit-dialog/task-edit-dialog.component';
import { TaskListResolverService } from 'src/app/resolvers/task-list-resolver/task-list-resolver.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit, OnDestroy {
  taskList: Task[] = []; //Local array to store the list items
  completedTaskList: Task[] = [];
  selectedListId: number;
  taskSub: Subscription;
  public taskCompleteClass: string;
  public boxClass = 'row example-box';

  constructor(
    public taskService: TaskServiceService,
    public taskListResolver: TaskListResolverService,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  //Function to get any items when the component is created
  ngOnInit(): void {
    this.taskSub = combineLatest([this.taskService.getTaskUpdateListner(), this.route.data])
      .pipe(
        map(([tasks, routeData]) => {
          return tasks.filter(task => task.listId == routeData.id)
        }),
        tap(tasks => {
          this.taskList = tasks.filter(task => !task.complete)
          this.completedTaskList = tasks.filter(task => task.complete)
        })
      )
      .subscribe()
  }

  getBorderColor(priority: string) {
    if (priority == 'Low') {
      return 'solid 5px #3c78d8';
    }
    if (priority == 'Medium') {
      return 'solid 5px #6aa84f';
    }
    if (priority == 'High') {
      return 'solid 5px #e69138';
    }
    if (priority == 'Critical') {
      return 'solid 5px #cc0000';
    }
  }

  //Push tasks in completed list
  onCompleteCheck(task: Task): void {
    this.taskService.editTask(task.id, { complete: true });
    this.openSnackBar('Task Completed', 'Dismiss');
  }

  restoreTask(task: Task): void {
    this.taskService.editTask(task.id, { complete: false });
    this.openSnackBar('Task Restored', 'Dismiss');
  }

  //Edit Dialog
  openEditModal(task: Task): void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '350px',
      data: { ...task }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.taskService.editTask(result.id, result)
      }
      this.openSnackBar('Task Updated', 'Dismiss');
    });
  }

  //Delete Dialog
  openDeleteModal(taskId: number): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: {
        element: 'task',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.taskService.deleteTask(taskId)
        this.openSnackBar('Task Deleted', 'Dismiss');
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
    this.taskSub.unsubscribe()
  }

  //Logic for drag and drop of task items
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
}
