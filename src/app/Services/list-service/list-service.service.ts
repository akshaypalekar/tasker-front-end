import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { List } from '../../models/list-model/list.model';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpServiceService } from '../http-service/http-service.service';
import { environment } from 'src/environments/environment';

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
  ) {
    this.loadInitialData();
  }

  //GET list of lists from API Gateway
  loadInitialData(): any {
    return this.http
      .get<List[]>(environment.endpoint + 'list')
      .subscribe((response) => {
        this.list.next(response);
      });
  }

  //Returning the list as an observable to the list-menu component
  getAllLists(): Observable<List[]> {
    return this.list.asObservable();
  }

  addNewListToMenu(newListName: string) {
    //Create the list object
    const item: List = {
      ListID: '',
      ListName: newListName,
      ListCreatedDT: new Date(),
      ListUpdatedDT: new Date(),
      ListIndex: this.list.value.length,
    };

    this.http
      .post<List[]>(environment.endpoint + 'list', JSON.stringify(item))
      .subscribe((response) => {
        item.ListID = response['ListID'];
        let newListMenu = [...this.list.value];
        newListMenu.push(item);
        this.list.next(newListMenu);
        this.router.navigate(['/list', item.ListID]);
      });
  }

  //Delete a list
  deleteList(ListID: string) {
    this.http
      .delete(environment.endpoint + 'list/' + ListID)
      .subscribe((response) => {
        this.loadInitialData();
        if (this.list.value.length == 0) {
          this.router.navigate(['']);
        } else {
          this.router.navigate(['/list', this.list.value[0].ListID]);
        }
      });
  }

  //Edit
  editList(listItem: any, newListName: string) {
    const item: List = {
      ListID: listItem.ListID,
      ListName: newListName,
      ListCreatedDT: listItem.ListCreatedDT,
      ListUpdatedDT: new Date(),
      ListIndex: listItem.ListIndex,
    };

    this.http
      .post(environment.endpoint + 'list', JSON.stringify(item))
      .subscribe((response) => {
        let newListMenu = [...this.list.value];
        for (var el in newListMenu) {
          if (newListMenu[el].ListID == response['ListID']) {
            newListMenu[el].ListName = response['ListName'];
            newListMenu[el].ListUpdatedDT = response['ListUpdatedDT'];
          }
        }
        this.list.next(newListMenu);
      });
  }

  //Checks if the list contains more than one list item, if not then return false
  checkIfListExists() {
    if (this.list.value.length >= 1) {
      return true;
    } else {
      return false;
    }
  }
}
