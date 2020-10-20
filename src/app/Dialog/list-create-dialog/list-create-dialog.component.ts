import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { List } from '../../models/list-model/list.model';

@Component({
  selector: 'app-list-create-dialog',
  templateUrl: './list-create-dialog.component.html',
  styleUrls: ['./list-create-dialog.component.css']
})
export class ListCreateDialogComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<ListCreateDialogComponent> ) { }

  ngOnInit(): void {
  }

  onNoClick(): void{
    this.dialogRef.close();
  }

}
