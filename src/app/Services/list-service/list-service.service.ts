import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from '../../models/list-model/list.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from '../http-service/http-service.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class ListServiceService {
  private list = new BehaviorSubject<List[]>([]);

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
    public httpService: HttpServiceService
  ) {}

  getlist(): Observable<List[]> {
    return this.http.get<List[]>(environment.endpoint + 'list');
  }

  //Add List Item
  addItem(ListName: string, ListOrder: number): Observable<List[]> {
    const item: List = {
      ListID: '',
      ListName: ListName,
      ListCreatedDT: moment(),
      ListUpdatedDT: moment(),
      ListOrder: ListOrder,
    };

    return this.http.post<List[]>(
      environment.endpoint + 'list',
      JSON.stringify(item)
    );
  }

  //Edit List Item
  editList(listItem: any, newName: string):Observable<List[]> {
    const item: List = {
      ListID: listItem.ListID,
      ListName: newName,
      ListCreatedDT: listItem.ListCreatedDT,
      ListUpdatedDT: moment(),
      ListOrder: listItem.ListOrder,
    };

    return this.http.post<List[]>(environment.endpoint + 'list', JSON.stringify(item));
  }

  //Delete a list
  deleteList(ListID: string) {
    return this.http.delete(environment.endpoint + 'list/' + ListID);
  }
}
