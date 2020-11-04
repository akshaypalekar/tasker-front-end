import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { List } from 'src/app/models/list-model/list.model';
import { environment } from 'src/environments/environment';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class MoveableServiceService {

  constructor(private http: HttpClient,
    public httpService: HttpServiceService) { }

  moveList(ListID: string, currentIndex: number, previousIndex: number){
    const item = {
      ListID: ListID,
      currentIndex: currentIndex,
      previousIndex: previousIndex
    }
    return this.http.post<List[]>(environment.endpoint + 'listmover',JSON.stringify(item));
  }
}
