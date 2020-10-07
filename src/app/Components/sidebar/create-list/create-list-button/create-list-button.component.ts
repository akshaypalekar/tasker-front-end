import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ListCreateDialogComponent } from '../../../../dialog/list-create-dialog/list-create-dialog.component';
import { ListServiceService } from 'src/app/services/list-service/list-service.service';

@Component({
  selector: 'app-create-list-button',
  templateUrl: './create-list-button.component.html',
  styleUrls: ['./create-list-button.component.css']
})
export class CreateListButtonComponent implements OnInit {

  listName: string;

  constructor(public dialog: MatDialog, public listService: ListServiceService) { }

  ngOnInit(): void {
  }

  openCreateListDialog(): void {
    const dialogRef = this.dialog.open(ListCreateDialogComponent, {
      width: '250',
      data: {
        listName: this.listName
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (typeof result != undefined) {
        if (result.trim().length > 0) {
          this.listService.addNewListToMenu(result);
        }
      }
    })
  }

}
