import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Task } from 'src/app/models/task-model/task.model';

@Component({
  selector: 'app-archive-list',
  templateUrl: './archive-list.component.html',
  styleUrls: ['./archive-list.component.css']
})
export class ArchiveListComponent implements OnInit {
  archiveList: Task[] = [];

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((response) => {
      this.archiveList = response.archivedtask
    });
  }

  getMomentFormat(TaskDueDate: any): string {
    return moment(TaskDueDate).format('MMM Do YY');
  }

}
