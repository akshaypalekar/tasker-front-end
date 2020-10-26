import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-list-edit-dialog',
  templateUrl: './list-edit-dialog.component.html',
  styleUrls: ['./list-edit-dialog.component.css']
})
export class ListEditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ListEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
