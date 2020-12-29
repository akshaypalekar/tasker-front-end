import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions, FullCalendarComponent } from '@fullcalendar/angular';
import * as moment from 'moment';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css'],
})
export class ReportDashboardComponent implements OnInit {
  calendarData = [];
  dashboardData = [];

  colorMap = {
    "Critical": "#cc0000",
    "High": "#e69138",
    "Medium": "#6aa84f",
    "Low": "#3c78d8"
  }

  constructor(private activatedRoute: ActivatedRoute) { }

  calendarOptions: CalendarOptions;
  @ViewChild('fullcalendar') fullcalendar: FullCalendarComponent;

  ngOnInit() {
    this.activatedRoute.data.subscribe((response) => {
      console.log(response);
      if (Object.keys(response).length != 0) {
        this.calendarData = response.task.map((data) => {
          return {
            title: data.TaskTitle,
            date: moment(data.TaskDueDT).format('YYYY-MM-DD'),
            description: data.TaskDescription,
            color: this.colorMap[data.TaskPriority]
          };
        }
        );

        this.dashboardData = response.task.map((data) => {
          return {
            ...data,
          };
        });
      }
    });

    //Calendar
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      events: this.calendarData,
    };

    //Priority Chart
    const priorityChart = new Chart('priorityChart', {
      type: 'doughnut',
      data: {
        labels: ['Critical', 'High', 'Medium', 'Low'],
        datasets: [
          {
            label: '# of Votes',
            data: [
              this.dashboardData.filter((el) => el.TaskPriority == 'Critical')
                .length,
              this.dashboardData.filter((el) => el.TaskPriority == 'High')
                .length,
              this.dashboardData.filter((el) => el.TaskPriority == 'Medium')
                .length,
              this.dashboardData.filter((el) => el.TaskPriority == 'Low')
                .length,
            ],
            backgroundColor: [
              'rgba(204, 0, 0, 0.6)',
              'rgba(231, 127, 17, 0.6)',
              'rgba(106, 168, 79, 0.6)',
              'rgba(60, 12, 216, 0.6)',
            ],
            borderColor: [
              'rgba(204, 0, 0, 1)',
              'rgba(231, 127, 17, 1)',
              'rgba(106, 168, 79, 1)',
              'rgba(60, 12, 216, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });

    //Productivity chart
    const productivityChart = new Chart('productivityChart', {
      type: 'pie',
      data: {
        labels: ['Ready', 'In Progress', 'Done', 'Stuck', 'On Hold'],
        datasets: [
          {
            label: '# of Votes',
            data: [
              this.dashboardData.filter((el) => el.TaskStatus == 'Ready')
                .length,
              this.dashboardData.filter((el) => el.TaskStatus == 'In Progress')
                .length,
              this.dashboardData.filter((el) => el.TaskStatus == 'Done').length,
              this.dashboardData.filter((el) => el.TaskStatus == 'Stuck')
                .length,
              this.dashboardData.filter((el) => el.TaskStatus == 'On Hold')
                .length,
            ],
            backgroundColor: [
              'rgba(223, 168, 0, 0.6)',
              'rgba(7, 85, 204, 0.6)',
              'rgba(56, 118, 29, 0.6)',
              'rgba(153, 0, 0, 0.6)',
              'rgba(116, 27, 71, 0.6)',
            ],
            borderColor: [
              'rgba(223, 168, 0, 1)',
              'rgba(7, 85, 204, 1)',
              'rgba(56, 118, 29, 1)',
              'rgba(153, 0, 0, 1)',
              'rgba(116, 27, 71, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {},
    });
  }
}
