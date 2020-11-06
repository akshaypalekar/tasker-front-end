import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadnavSidenavComponent } from './navigation/headnav-sidenav/headnav-sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CreateListButtonComponent } from './components/sidebar/create-list/create-list-button/create-list-button.component';
import { ListMenuComponent } from './components/sidebar/list-menu/list-menu/list-menu.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule} from '@angular/material/dialog';
import { ListCreateDialogComponent } from './dialog/list-create-dialog/list-create-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TaskCreatComponent } from './components/main-container/task-creat/task-creat.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { TaskListComponent } from './components/main-container/task-list/task-list.component';
import { EmptyContainerComponent } from './components/main-container/empty-container/empty-container.component';
import { MatCardModule} from '@angular/material/card';
import { WrapperContainerComponent } from './components/main-container/wrapper-container/wrapper-container.component';
import { TaskDeleteDialogComponent } from './dialog/task-delete-dialog/task-delete-dialog.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatMenuModule} from '@angular/material/menu';
import { ListEditDialogComponent } from './dialog/list-edit-dialog/list-edit-dialog.component';
import { TaskEditDialogComponent } from './dialog/task-edit-dialog/task-edit-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { PageNotFoundContainerComponent } from './components/main-container/page-not-found-container/page-not-found-container.component';
import { ReportDashboardComponent } from './components/main-container/report-dashboard/report-dashboard.component';
import { ListMenuResolverService } from './resolvers/list-menu-resolver/list-menu-resolver.service';
import { TaskListResolverService } from './resolvers/task-list-resolver/task-list-resolver.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DeleteConfirmationDialogComponent } from './dialog/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { TaskCompletePipePipe } from './pipes/task-complete-pipe/task-complete-pipe.pipe';
import { SpinnerServiceService } from './services/spinner-service/spinner-service.service';
import { RequestInterceptor } from './interceptors/request-interceptor/request-interceptor';

import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction';
import { ArchiveListComponent } from './components/main-container/archive-list/archive-list.component'; // a plugin

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    HeadnavSidenavComponent,
    CreateListButtonComponent,
    ListMenuComponent,
    ListCreateDialogComponent,
    TaskCreatComponent,
    TaskListComponent,
    EmptyContainerComponent,
    WrapperContainerComponent,
    TaskDeleteDialogComponent,
    ListEditDialogComponent,
    TaskEditDialogComponent,
    PageNotFoundContainerComponent,
    ReportDashboardComponent,
    DeleteConfirmationDialogComponent,
    SpinnerComponent,
    TaskCompletePipePipe,
    ArchiveListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    DragDropModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatGridListModule,
    MatCardModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatDividerModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FullCalendarModule
  ],
  providers: [ListMenuResolverService, TaskListResolverService, SpinnerServiceService, { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
