import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { List } from '../../../../models/list-model/list.model';
import { ListServiceService } from 'src/app/services/list-service/list-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ListEditDialogComponent } from 'src/app/dialog/list-edit-dialog/list-edit-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskServiceService } from '../../../../services/task-service/task-service.service';
import { ActivatedRoute } from '@angular/router';
import { ListCreateDialogComponent } from 'src/app/dialog/list-create-dialog/list-create-dialog.component';
import { DeleteConfirmationDialogComponent } from 'src/app/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css'],
})
export class ListMenuComponent implements OnInit {
  listMenu: List[] = []; //Local array to store the list items

  constructor(
    public listService: ListServiceService,
    public taskService: TaskServiceService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  //Function to get any items when the component is created
  ngOnInit(): void {
    this.route.data.subscribe((response) => {
      this.listMenu = response.list.sort(function (a, b) {
        return a.ListIndex - b.ListIndex;
      });
    });
  }

  getList(){
    this.listService.getlist().subscribe((response) =>{
      this.listMenu = response.sort(function (a, b) {
        return a.ListIndex - b.ListIndex;
      });
    })
  }

  //Create a list item dialog
  openCreateListDialog(): void {
    const dialogRef = this.dialog.open(ListCreateDialogComponent, {
      width: '250',
    });

    dialogRef.afterClosed().subscribe((ListName) => {
      if (ListName != undefined) {
        this.listService
          .addItem(ListName, this.listMenu.length)
          .subscribe((response: List[]) => {
            const list = {
              ListID: response['ListID'],
              ListName: response['ListName'],
              ListCreatedDT: new Date(response['ListCreatedDT']),
              ListUpdatedDT: new Date(response['ListUpdatedDT']),
              ListIndex: parseInt(response['ListIndex']),
            };
            this.listMenu.push(list);
            this.openSnackBar('New List Added', 'Dismiss');
          });
      }
    });
  }

  //Edit a list dialog
  openListEditDialog(listItem: any): void {
    const dialogRef = this.dialog.open(ListEditDialogComponent, {
      width: '300px',
      data: {
        ...listItem,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined || result == '' || result == listItem.ListName) {
        this.listService
          .editList(listItem, result)
          .subscribe((response: List[]) => {
            for (let i in this.listMenu) {
              if (this.listMenu[i].ListID == response['ListID']) {
                this.listMenu[i].ListName = result;
              }
            }
            this.openSnackBar('List Edited', 'Dismiss');
          });
      }
    });
  }

  //Delete a list Dialog
  openDeleteDialog(ListItem: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '380px',
      data: {
        element: 'list',
        ListName: ListItem.ListName,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.listService.deleteList(ListItem.ListID).subscribe((response) => {
          console.log(response);
          this.getList();
          this.openSnackBar('List Deleted', 'Dismiss');
        });
        //this.taskService.deleteTaskWithListID(listItem.id); //Delete all tasks that belong to that list
      }
    });
  }

  //Logic for drag and drop of list items
  drop(event: CdkDragDrop<string[]>) {
    console.log(
      'P_Index: ' + event.previousIndex + ' C_Index:' + event.currentIndex
    );
    moveItemInArray(this.listMenu, event.previousIndex, event.currentIndex);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
