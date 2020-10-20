import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { List } from '../../../../models/list-model/list.model'
import { Subscription } from 'rxjs';
import { ListServiceService } from 'src/app/services/list-service/list-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ListEditDialogComponent } from 'src/app/dialog/list-edit-dialog/list-edit-dialog.component';
import { DeleteConfirmationDialogComponent } from 'src/app/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import {MatSnackBar} from '@angular/material/snack-bar';
import { TaskServiceService } from '../../../../services/task-service/task-service.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit, OnDestroy {

  listMenu: List[] = []; //Local array to store the list items
  private listItemSub: Subscription; //Create a subscription to listen to changes in array

  constructor(public listService: ListServiceService, public taskService: TaskServiceService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }

  //Function to get any items when the component is created
  ngOnInit(): void {
    this.getListItems();
  }

  //Get the list elements, the subscription is used to listen to any change of array
  getListItems(): void {
    this.listItemSub = this.listService.getNewListListner().subscribe((returnedList: List[]) => {
      this.listMenu = returnedList;
    });
  }

  //Logic for drag and drop of list items
  drop(event: CdkDragDrop<string[]>) {
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
        name: listItem.listName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != undefined || result == listItem.listName) {
        for (let i in this.listMenu) {
          if (this.listMenu[i].id == listItem.id) {
            this.listMenu[i].listName = result;
          }
        }
      }
    });
  }

  //Delete Modal
  openDeleteDialog(listItem: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '350px',
      data: {
        element: 'list'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == true) {
        this.listService.deleteList(listItem.id);
        this.openSnackBar('List Deleted','Dismiss');
        this.taskService.deleteTaskWithListID(listItem.id); //Delete all tasks that belong to that list
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
