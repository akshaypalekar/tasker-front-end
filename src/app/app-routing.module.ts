import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WrapperContainerComponent } from './components/main-container/wrapper-container/wrapper-container.component';
import { EmptyContainerComponent } from './components/main-container/empty-container/empty-container.component';
import { PageNotFoundContainerComponent } from './components/main-container/page-not-found-container/page-not-found-container.component';


const routes: Routes = [
  { path: 'list/:id', component: WrapperContainerComponent },
  { path: '', component: EmptyContainerComponent },
  { path: '**', component: PageNotFoundContainerComponent },  // Wildcard route for a 404 page

];



@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
