import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { ListServiceService } from 'src/app/services/list-service/list-service.service';
import { List } from 'src/app/models/list-model/list.model';
import { ActivatedRoute } from '@angular/router';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import * as moment from 'moment';

@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: './task-edit-dialog.component.html',
  styleUrls: ['./task-edit-dialog.component.css']
})
export class TaskEditDialogComponent implements OnInit {
  listMenu: List[] = [];
  displayList: List[] = [];

  constructor(public dialogRef: MatDialogRef<TaskEditDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any, public listService: ListServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    setTimeout(() => {
      this.listService.getlist().subscribe((response: List[]) => {
        this.listMenu = response;
        this.displayList = this.listMenu.filter((list) => list.ItemID != this.data.ListID).sort((a,b) => {
          return moment(a.CreatedOn).diff(b.CreatedOn);
        });;
      });
    }, 0);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
