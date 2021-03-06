import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task-model/task.model';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskListResolverService implements Resolve<any> {

  constructor(private http: HttpClient, public httpService: HttpServiceService, private activatedRoute: ActivatedRoute) { }
  
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task[]> {
    
    let user = localStorage.getItem('userID');
    let params = new HttpParams();
    params = params.append('itemType', 'task');
    params = params.append('archiveFlag', 'true');
    
    return this.http.get<Task[]>(environment.api_endpoint, {params: params});
  }


  /*************Used for Archive List ****************************************/
}
