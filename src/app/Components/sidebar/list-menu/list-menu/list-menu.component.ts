import { Component, OnInit } from '@angular/core';
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

  listMenu: List[] = [];
  private listItemSub: Subscription;

  constructor(public listService: ListServiceService) { }

  ngOnInit(): void {
    this.getListItems();
  }

  getListItems(): void {
    this.listItemSub = this.listService.getNewListListner().subscribe((returnedList: List[]) => {
      this.listMenu = returnedList;
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.listMenu, event.previousIndex, event.currentIndex);
  }

}
