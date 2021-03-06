import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundContainerComponent } from './components/main-container/page-not-found-container/page-not-found-container.component';
import { TaskListResolverService } from './resolvers/task-list-resolver/task-list-resolver.service';
import { ReportDashboardComponent } from './components/main-container/report-dashboard/report-dashboard.component';
import { ListMenuComponent } from './components/sidebar/list-menu/list-menu/list-menu.component';
import { ListMenuResolverService } from './resolvers/list-menu-resolver/list-menu-resolver.service';
import { TaskListComponent } from './components/main-container/task-list/task-list.component';
import { ReportResolverService } from './resolvers/report-resolver/report-resolver.service';
import { ArchiveListComponent } from './components/main-container/archive-list/archive-list.component';
import { LoginComponent } from './login/login.component';
import { HeadnavSidenavComponent } from './navigation/headnav-sidenav/headnav-sidenav.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { AuthGuard } from './guards/authguard/auth.guard';
import { ConfirmGuard } from './guards/confirmguard/confirm.guard';

// const routes: Routes = [
//   {   path: '', component: ReportDashboardComponent, resolve: {task: ReportResolverService } },
//   { path: '', component: ListMenuComponent, outlet: 'app-list-menu', resolve: {list: ListMenuResolverService }},
//   { path: 'list/:id', component: TaskListComponent},
//   { path: 'archive', component: ArchiveListComponent, resolve: {archivedtask: TaskListResolverService }},
//   { path: '**', component: PageNotFoundContainerComponent },  // Wildcard route for a 404 page
// ];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'confirm', component: ConfirmComponent, canActivate: [ConfirmGuard] },
  { 
    path: '', 
    component: HeadnavSidenavComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListMenuComponent, outlet: 'app-list-menu',  resolve: {list: ListMenuResolverService }},
      { path: '', component: ReportDashboardComponent, resolve: {task: ReportResolverService }},
      { path: 'list/:id', component: TaskListComponent },
      {path: 'archive', component: ArchiveListComponent, canActivate: [AuthGuard], resolve: {archivedtask: TaskListResolverService }}
    ]
  },
  { path: '**', canActivate: [AuthGuard], component: PageNotFoundContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }