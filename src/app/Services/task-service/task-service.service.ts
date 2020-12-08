import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../../models/task-model/task.model';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  user = 'akshay123';

  constructor(
    private http: HttpClient,
    public httpService: HttpServiceService
  ) {}


  getTaskList(ListID: string) {
    let params = new HttpParams();
    params = params.append('itemType', 'task');
    params = params.append('listId', ListID);

    return this.http.get<Task[]>(environment.api_endpoint + 'users/'+ this.user +'/items', {params: params});
  }

  getAllTasks(){
    let params = new HttpParams();
    params = params.append('itemType', 'task');

    return this.http.get<Task[]>(environment.api_endpoint + 'users/'+ this.user +'/items', {params: params});
  }

  //Adding a tasks
  addTask(todo: string, selectedListId: string) {
    const task: Task = {
      ItemType: 'TASK',
      ItemID: '',
      ListID: selectedListId,
      TaskTitle: todo,
      TaskDescription: '',
      TaskStatus: 'Ready',
      TaskDueDT: moment(),
      TaskPriority: 'Medium',
      isComplete: false,
      isArchived: false,
      CreatedOn: moment(),
      CreatedBy: 'akshay123',
      UpdatedOn: moment(),
      UpdatedBy: 'akshay123'
    };

    return this.http.post<Task[]>(environment.api_endpoint + 'users/'+ this.user +'/items', JSON.stringify(task));
  }

  //Delete a task
  deleteTask(task: Task) {
    let params = new HttpParams();
    params = params.append('itemType', 'task');
    params = params.append('itemId', task.ItemID);
    params = params.append('listId', task.ListID);

    return this.http.delete<Task[]>(environment.api_endpoint + 'users/'+ this.user +'/items', {params: params});
  }

  //Edit a task
  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(environment.api_endpoint + 'users/'+ this.user +'/items', JSON.stringify(task));
  }

  updateTask(taskList: Task[], task: Task, response: any): Task[]{
    taskList = taskList.map((item) => {
      if (task.ItemID == item.ItemID) {
        return {
          ...item,
          ...response,
        };
      } else {
        return item;
      }
    });

    return taskList;
  }


  restoreTask(data: any){
    return this.http.post<Task[]>(
      environment.endpoint + 'taskrestore',
      JSON.stringify(data)
    );
  }

  archiveTask(data:any){
    return this.http.post<Task[]>(environment.endpoint + 'taskarchive', JSON.stringify(data));
  }

}
