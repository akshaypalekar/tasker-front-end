import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ListServiceService } from '../../services/list-service/list-service.service';

@Injectable({
  providedIn: 'root'
})
export class TaskListResolverService implements Resolve<number> {
  private listItemSub: Subscription;

  constructor(public listService: ListServiceService, private router: Router) { }
  
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    let urlListID = route.paramMap.get('id');
    let doesListExist = this.listService.checkIfListExists();
    if(doesListExist){
      return urlListID;
    }else{
      this.router.navigate(['']);
    }
  }
}
