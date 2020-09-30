import { Component, OnInit, OnDestroy } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { List } from '../../../../models/list-model/list.model'
import { Subscription } from 'rxjs';
import { ListServiceService } from 'src/app/Services/list-service/list-service.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.css']
})
export class ListMenuComponent implements OnInit {

  listMenu: List[] = []; //Local array to store the list items
  private listItemSub: Subscription; //Create a subscription to listen to changes in array

  constructor(public listService: ListServiceService) { }

  //Function to get any items when the component is created
  ngOnInit(): void {
    this.getListItems();
  }

  //Get the list elements, the subscription is used to listen to any change of array
  getListItems(): void {
    this.listItemSub = this.listService.getNewListListner().subscribe((returnedList: List[]) => {
      this.listMenu = returnedList;
    });
  }

  //Logic for drag and drop of list items
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listMenu, event.previousIndex, event.currentIndex);
  }

  //Destroy the subscription after the component is destroyed
  ngOnDestroy(): void {
    this.listItemSub.unsubscribe();
  }

}
