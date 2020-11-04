import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundContainerComponent } from './components/main-container/page-not-found-container/page-not-found-container.component';
import { TaskListResolverService } from './resolvers/task-list-resolver/task-list-resolver.service';
import { ReportDashboardComponent } from './components/main-container/report-dashboard/report-dashboard.component';
import { ListMenuComponent } from './components/sidebar/list-menu/list-menu/list-menu.component';
import { ListMenuResolverService } from './resolvers/list-menu-resolver/list-menu-resolver.service';
import { TaskListComponent } from './components/main-container/task-list/task-list.component';
import { ReportResolverService } from './resolvers/report-resolver/report-resolver.service';

const routes: Routes = [
  { path: '', component: ReportDashboardComponent, resolve: {task: ReportResolverService } },
  { path: '', component: ListMenuComponent, outlet: 'app-list-menu', resolve: {list: ListMenuResolverService }},
  { path: 'list/:id', component: TaskListComponent},
  { path: '**', component: PageNotFoundContainerComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }