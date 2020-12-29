import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from '../../models/list-model/list.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpServiceService } from '../http-service/http-service.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { AuthServiceService} from '../auth-service/auth-service.service'

@Injectable({
  providedIn: 'root',
})
export class ListServiceService {
  private list = new BehaviorSubject<List[]>([]);
  user: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public httpService: HttpServiceService,
    private authService: AuthServiceService
  ) {
    
      this.user = localStorage.getItem('userID');
  }

  getlist(): Observable<List[]> {
    let params = new HttpParams();
    params = params.append('itemType', 'list');

    return this.http.get<List[]>(environment.api_endpoint, {params: params});
  }

  //Add List Item
  addItem(ListName: string): Observable<List[]> {
    const item: List = {
      ItemType: 'LIST',
      ItemID: '',
      ListName: ListName,
      CreatedOn: moment(),
      CreatedBy: this.user,
      UpdatedOn: moment(),
      UpdatedBy: this.user,
    };

    return this.http.post<List[]>(environment.api_endpoint, JSON.stringify(item));
  }

  //Edit List Item
  editList(listItem: any, newName: string):Observable<List> {
    const item: List = {
      ItemType: 'LIST',
      ItemID: listItem.ItemID,
      ListName: newName,
      CreatedOn: listItem.CreatedOn,
      CreatedBy: this.user,
      UpdatedOn: moment(),
      UpdatedBy: this.user,
    };

    return this.http.put<List>(environment.api_endpoint, JSON.stringify(item));
  }

  //Delete a list
  deleteList(ListID: string) {
    let params = new HttpParams();
    params = params.append('itemType', 'list');
    params = params.append('itemId', ListID);
    return this.http.delete(environment.api_endpoint, {params: params});
  }
}
