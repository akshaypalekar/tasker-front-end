import { Component, Inject, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { List } from '../../../../models/list-model/list.model';
import { ListServiceService } from 'src/app/services/list-service/list-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ListEditDialogComponent } from 'src/app/dialog/list-edit-dialog/list-edit-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskServiceService } from '../../../../services/task-service/task-service.service';
import { ActivatedRoute, Router, RouterLinkActive } from '@angular/router';
import { ListCreateDialogComponent } from 'src/app/dialog/list-create-dialog/list-create-dialog.component';
import { DeleteConfirmationDialogComponent } from 'src/app/dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MoveableServiceService } from 'src/app/services/moveable-service/moveable-service.service';

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
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public _moveable: MoveableServiceService,
  ) {}

  //Function to get any items when the component is created
  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.listMenu = response.list.sort(function (
        a: { ListOrder: number },
        b: { ListOrder: number }
      ) {
        return a.ListOrder - b.ListOrder;
      });
    });
  }

  getList() {
    this.listService.getlist().subscribe((response) => {
      this.listMenu = response.sort(function (a, b) {
        return a.ListOrder - b.ListOrder;
      });
    });
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
          .subscribe((response: any) => {
            const list: List = {
              ...response,
            };
            this.listMenu.push(list);
            this.router.navigate(['/list', list.ListID]);
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
          .subscribe((response: any) => {
            this.listMenu.map((list) => {
              for (let i in this.listMenu) {
                if (this.listMenu[i].ListID == response['ListID']) {
                  this.listMenu[i].ListName = result;
                }
              }
            });
            this.openSnackBar('List Edited', 'Dismiss');
          });
      }
    });
  }

  //Delete a list Dialog
  openDeleteDialog(ListItem: any): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '400px',
      data: {
        element: 'list',
        ListName: ListItem.ListName,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == true) {
        this.listService.deleteList(ListItem.ListID).subscribe((response) => {
          this.listMenu = this.listMenu.filter(
            (item) => item.ListID != ListItem.ListID
          );
          if (this.listMenu.length == 0) {
            this.router.navigate(['']);
          } else {
            this.router.navigate(['/list', this.listMenu[0].ListID]);
          }
          this.getList();
          this.openSnackBar(
            ListItem.ListName +
              ' list deleted and ' +
              response['NumberOfTasks'] +
              ' tasks archived',
            'Dismiss'
          );
        });
      }
    });
  }

  //Logic for drag and drop of list items
  drop(event: CdkDragDrop<string[]>) {
    console.log(
      'P_Index: ' + event.previousIndex + ' C_Index:' + event.currentIndex
    );

    this._moveable
      .moveList(
        this.listMenu[event.previousIndex].ListID,
        event.currentIndex,
        event.previousIndex
      )
      .subscribe((response) => {
        //moveItemInArray(this.listMenu, event.previousIndex, event.currentIndex);
        this.listMenu = response.sort(function (a, b) {
          return a.ListOrder - b.ListOrder;
        });
      });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
