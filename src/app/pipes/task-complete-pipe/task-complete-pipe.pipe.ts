import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/models/task-model/task.model';

@Pipe({
  name: 'taskCompletePipe',
  pure: false
})
export class TaskCompletePipePipe implements PipeTransform {

  transform(value: Task[], complete: boolean): unknown {
    if(complete){
    return value.filter((task) => task.isComplete == true);
    }else{
      return value.filter((task) => task.isComplete == false);
    }
  }
}
