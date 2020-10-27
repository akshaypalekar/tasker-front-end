import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperContainerComponent } from './components/main-container/wrapper-container/wrapper-container.component';
import { PageNotFoundContainerComponent } from './components/main-container/page-not-found-container/page-not-found-container.component';
import { TaskListResolverService } from './resolvers/task-list-resolver/task-list-resolver.service';
import { ReportDashboardComponent } from './components/main-container/report-dashboard/report-dashboard.component';
import { ListMenuComponent } from './components/sidebar/list-menu/list-menu/list-menu.component';
import { ListMenuResolverService } from './resolvers/list-menu-resolver/list-menu-resolver.service';


const routes: Routes = [
  { path: 'list/:id', component: WrapperContainerComponent, resolve: {id: TaskListResolverService }},
  { path: '', component: ReportDashboardComponent },
  { path: '', component: ListMenuComponent, outlet: 'app-list-menu', resolve: {list: ListMenuResolverService } },
  { path: '**', component: PageNotFoundContainerComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
