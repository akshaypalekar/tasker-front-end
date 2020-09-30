import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDialogModule} from '@angular/material/dialog';
import { ListCreateDialogComponent } from './dialog/list-create-dialog/list-create-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { TaskCreatComponent } from './components/main-container/task-creat/task-creat.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { TaskListComponent } from './components/main-container/task-list/task-list.component';
import { EmptyContainerComponent } from './components/main-container/empty-container/empty-container.component';
import {MatCardModule} from '@angular/material/card';
import { WrapperContainerComponent } from './components/main-container/wrapper-container/wrapper-container.component';
import { TaskDeleteDialogComponent } from './dialog/task-delete-dialog/task-delete-dialog.component';


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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
