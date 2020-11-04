import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task-model/task.model';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportResolverService implements Resolve<any> {

  constructor(private http: HttpClient, public httpService: HttpServiceService, private activatedRoute: ActivatedRoute) { }
  
   resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Task[]> {
    
    return this.http.get<Task[]>(environment.endpoint + 'task/');
  }
}
