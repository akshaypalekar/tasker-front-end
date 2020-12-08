import { Pipe, PipeTransform } from '@angular/core';
import { List } from 'src/app/models/list-model/list.model';

@Pipe({
  name: 'dialogListPipe'
})
export class DialogListPipePipe implements PipeTransform {

  transform(value: List[], listId: string): unknown {
    console.log(listId);
    return value.filter((list) => list.ItemID != listId);
  }

}
