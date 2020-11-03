import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Task } from '../../../models/task-model/task.model';
import { TaskServiceService } from '../../../services/task-service/task-service.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskDeleteDialogComponent } from 'src/app/dialog/task-delete-dialog/task-delete-dialog.component';
import { TaskEditDialogComponent } from 'src/app/dialog/task-edit-dialog/task-edit-dialog.component';
import { NgForm } from '@angular/forms';
import { SpinnerServiceService } from '../../../services/spinner-service/spinner-service.service';
import * as moment from 'moment';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent {
  taskList: Task[] = [];
  completedTaskList: Task[] = [];
  selectedListId: string;

  public taskCompleteClass: string;
  public boxClass = 'row example-box';

  constructor(
    public taskService: TaskServiceService,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.selectedListId = params.get('id');
      this.getTasks();
      this.getCompletedTasks();
    });
  }

  getTasks(): void {
    this.taskService.getTaskList(this.selectedListId).subscribe((response) => {
      this.taskList = response
        .map((item: Task) => {
          return {
            ...item,
          };
        })
        .sort(function (a: { TaskOrder: number }, b: { TaskOrder: number }) {
          return a.TaskOrder - b.TaskOrder;
        });
    });
  }

  getCompletedTasks(): void {
    this.taskService
      .getCompletedTaskList(this.selectedListId)
      .subscribe((response) => {
        this.completedTaskList = response
          .map((item: Task) => {
            return {
              ...item,
            };
          })
          .sort(function (a: { TaskOrder: number }, b: { TaskOrder: number }) {
            return a.TaskOrder - b.TaskOrder;
          });
      });
  }

  // Create task form
  createTask(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    this.taskService
      .addTask(
        form.value.taskInputField,
        this.selectedListId,
        this.getIndextoSet(this.selectedListId)
      )
      .subscribe(
        (response: any) => {
          const task: Task = {
            ...response,
          };
          this.taskList.push(task);
        },
        (error) => {
          console.log('Task not created: ' + JSON.stringify(error));
        }
      );
    form.resetForm();
  }

  //Delete Dialog
  openDeleteModal(TaskID: string, type: string): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
      width: '350px',
      data: {
        element: 'task',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.taskService.deleteTask(TaskID, type).subscribe(
          (response: any) => {
            if (type == 'task/') {
              this.taskList = this.taskList.filter(
                (task) => task.TaskID != TaskID
              );
            } else {
              this.completedTaskList = this.completedTaskList.filter(
                (task) => task.TaskID != TaskID
              );
            }
            this.openSnackBar('Task Deleted', 'Dismiss');
          },
          (error) => {
            console.log('Task not deleted: ' + JSON.stringify(error));
          }
        );
      }
    });
  }

  //Edit Dialog
  openEditModal(task: any): void {
    const dialogRef = this.dialog.open(TaskEditDialogComponent, {
      width: '350px',
      data: {
        ...task,
        TaskUpdatedDT: moment(),
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.taskService.editTask(result).subscribe(
          (response: any) => {
            this.taskList = this.taskService.updateTask(
              this.taskList,
              task,
              response
            );
            this.openSnackBar('Task Updated', 'Dismiss');
          },
          (error) => {
            console.log('Task not updated: ' + JSON.stringify(error));
          }
        );
      }
    });
  }

  //Push tasks in the completed list
  onCompleteCheck(task: any): void {
    const data = {
      TaskID: task.TaskID,
      completedOrder: this.completedTaskList.length,
    };
    this.taskService.completeTask(data).subscribe((response: any) => {
      const task: Task = {
        ...response,
      };
      this.completedTaskList.push(task);
      this.getTasks();
      this.openSnackBar('Task Completed', 'Dismiss');
    });
  }

  //Push tasks in the active list
  restoreTask(task: any): void {
    const data = {
      TaskID: task.TaskID,
      restoreOrder: this.taskList.length,
    };
    this.taskService.restoreTask(data).subscribe((response: any) => {
      const task: Task = {
        ...response,
      };
      this.taskList.push(task);
      this.getCompletedTasks();
      this.openSnackBar('Task Restored', 'Dismiss');
    });
  }

  archiveTask(task: any): void{
    this.taskService.archiveTask(task).subscribe((response) =>{
      this.completedTaskList = this.completedTaskList.filter((el) => el.TaskID != task.TaskID);
      this.openSnackBar('Task Archived', 'Dismiss');
    })
  }

  //Get the index to be set on the task
  getIndextoSet(ListID: string): number {
    return this.taskList.filter((el) => el.ListID == ListID).length;
  }

  getMomentFormat(TaskDueDate: any): string {
    return moment(TaskDueDate).format('MMM Do YY');
  }

  getBorderColor(priority: string): string {
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

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  //Logic for drag and drop of task items
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.taskList, event.previousIndex, event.currentIndex);
  }
}
