import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { List } from '../../../../models/list-model/list.model';
import { Subscription } from 'rxjs';
import { ListServiceService } from 'src/app/services/list-service/list-service.service';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ListEditDialogComponent } from 'src/app/dialog/list-edit-dialog/list-edit-dialog.component';
import { TaskDeleteDialogComponent } from 'src/app/dialog/task-delete-dialog/task-delete-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskServiceService } from '../../../../services/task-service/task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css'],
})
export class ListMenuComponent implements OnInit {
  listMenu: List[] = []; //Local array to store the list items
  private listItemSub: Subscription; //Create a subscription to listen to changes in array

  constructor(
    public listService: ListServiceService,
    public taskService: TaskServiceService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  //Function to get any items when the component is created
  ngOnInit(): void {
    this.getListItems();
  }

  //Get the list elements, the subscription is used to listen to any change of array
  getListItems(): void {
    this.listItemSub = this.listService
      .getAllLists()
      .subscribe((returnedList: List[]) => {
        this.listMenu = returnedList;
        this.listMenu.sort(function (a, b) {
          return a.ListIndex - b.ListIndex;
        });
      });
  }

  //Logic for drag and drop of list items
  drop(event: CdkDragDrop<string[]>) {
    console.log(
      'P_Index: ' + event.previousIndex + ' C_Index:' + event.currentIndex
    );
    moveItemInArray(this.listMenu, event.previousIndex, event.currentIndex);
  }

  //Destroy the subscription after the component is destroyed
  ngOnDestroy(): void {
    this.listItemSub.unsubscribe();
  }

  openListEditDialog(listItem: any): void {
    const dialogRef = this.dialog.open(ListEditDialogComponent, {
      width: '300px',
      data: {
        name: listItem.ListName,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined || result == '' || result == listItem.ListName) {
        this.listService.editList(listItem, result);
        this.openSnackBar('List Edited', 'Dismiss');
      }
    });
  }

  //Delete Modal
  openDeleteDialog(ListID: any): void {
    const dialogRef = this.dialog.open(TaskDeleteDialogComponent, {
      width: '350px',
      data: {
        element: 'list',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.listService.deleteList(ListID);
        this.openSnackBar('List Deleted', 'Dismiss');
        //this.taskService.deleteTaskWithListID(listItem.id); //Delete all tasks that belong to that list
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
