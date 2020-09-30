import { Component, OnInit, Inject  } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-task-delete-dialog',
  templateUrl: './task-delete-dialog.component.html',
  styleUrls: ['./task-delete-dialog.component.css']
})
export class TaskDeleteDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TaskDeleteDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
