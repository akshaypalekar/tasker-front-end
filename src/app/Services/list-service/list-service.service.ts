import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from '../../models/list-model/list.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpServiceService } from '../http-service/http-service.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ListServiceService {
  private list = new BehaviorSubject<List[]>([]);
  user = 'akshay123';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public httpService: HttpServiceService
  ) {}

  getlist(): Observable<List[]> {
    let params = new HttpParams();
    params = params.append('itemType', 'list');

    return this.http.get<List[]>(environment.api_endpoint + 'users/'+ this.user +'/items', {params: params});
  }

  //Add List Item
  addItem(ListName: string): Observable<List[]> {
    const item: List = {
      ItemType: 'LIST',
      ItemID: '',
      ListName: ListName,
      CreatedOn: moment(),
      CreatedBy: 'akshay123',
      UpdatedOn: moment(),
      UpdatedBy: 'akshay123',
    };

    return this.http.post<List[]>(environment.api_endpoint + 'users/'+ this.user +'/items', JSON.stringify(item));
  }

  //Edit List Item
  editList(listItem: any, newName: string):Observable<List> {
    const item: List = {
      ItemType: 'LIST',
      ItemID: listItem.ItemID,
      ListName: newName,
      CreatedOn: listItem.CreatedOn,
      CreatedBy: 'akshay123',
      UpdatedOn: moment(),
      UpdatedBy: 'akshay123',
    };

    return this.http.put<List>(environment.api_endpoint + 'users/'+ this.user +'/items', item);
  }

  //Delete a list
  deleteList(ListID: string) {
    let params = new HttpParams();
    params = params.append('itemType', 'list');
    params = params.append('itemId', ListID);
    return this.http.delete(environment.api_endpoint + 'users/'+ this.user +'/items', {params: params});
  }
}
