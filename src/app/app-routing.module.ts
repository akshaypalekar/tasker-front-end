import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperContainerComponent } from './components/main-container/wrapper-container/wrapper-container.component';
import { EmptyContainerComponent } from './components/main-container/empty-container/empty-container.component';

const routes: Routes = [
  { path: '', component:  EmptyContainerComponent },
  { path: 'list/:id', component:WrapperContainerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
