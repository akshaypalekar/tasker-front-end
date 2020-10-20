import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ListCreateDialogComponent } from '../../../../dialog/list-create-dialog/list-create-dialog.component';
import { ListServiceService } from 'src/app/services/list-service/list-service.service';

@Component({
  selector: 'app-create-list-button',
  templateUrl: './create-list-button.component.html',
  styleUrls: ['./create-list-button.component.css']
})
export class CreateListButtonComponent {

  constructor(public dialog: MatDialog, public listService: ListServiceService) { }

  openCreateListDialog(): void {
    const dialogRef = this.dialog.open(ListCreateDialogComponent, {
      width: '250'
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
