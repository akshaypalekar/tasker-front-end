import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { List } from 'src/app/models/list-model/list.model';
import { HttpServiceService } from 'src/app/services/http-service/http-service.service';
import { environment } from 'src/environments/environment';
import { AuthServiceService } from '../../services/auth-service/auth-service.service';


@Injectable({
  providedIn: 'root',
})
export class ListMenuResolverService implements Resolve<any>{

  constructor(private http: HttpClient, public httpService: HttpServiceService, public authService: AuthServiceService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) :Observable<List[]> {

    let params = new HttpParams();
    params = params.append('itemType', 'list');
    
    return this.http.get<List[]>(environment.api_endpoint, {params: params});
  }
}