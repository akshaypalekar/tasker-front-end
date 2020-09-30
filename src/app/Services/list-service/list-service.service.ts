import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { List } from '../../models/list-model/list.model';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListServiceService {
  private newList = new BehaviorSubject<List[]>([]);

  constructor(private router: Router, private route: ActivatedRoute) { }
  
  getNewListListner(){
    return this.newList.asObservable();
  }

  addNewListToMenu(newListName: string){
    const listID = new Date().valueOf(); //Using timestamp as ID
    const list: List = {
      id:listID,
      listName:newListName
    }
    let newListMenu = [...this.newList.value];
    newListMenu.push(list);
    this.newList.next(newListMenu);
    this.router.navigate(['/list', listID]);
  }

}
