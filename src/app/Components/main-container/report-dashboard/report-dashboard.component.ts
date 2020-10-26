import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-report-dashboard',
  templateUrl: './report-dashboard.component.html',
  styleUrls: ['./report-dashboard.component.css']
})
export class ReportDashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Task Calendar', cols: 1, rows: 1 },
          { title: 'Priority', cols: 1, rows: 1 },
          { title: 'Productivity', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Task Calendar', cols: 1, rows: 2 },
        { title: 'Priority', cols: 1, rows: 1 },
        { title: 'Productivity', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
