import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { Task } from '../../models/task-model/task.model';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor(
    private http: HttpClient,
    public httpService: HttpServiceService
  ) {}

  getTaskList(ListID: string) {
    return this.http.get<Task[]>(environment.endpoint + 'task/' + ListID);
  }

  getCompletedTaskList(ListID: string) {
    return this.http.get<Task[]>(environment.endpoint + 'taskcomplete/' + ListID);
  }

  getAllTasks(){
    return this.http.get<Task[]>(environment.endpoint + 'task');
  }

  //Adding a tasks
  addTask(todo: string, selectedListId: string, taskIndex: number) {
    const task: Task = {
      TaskID: '',
      ListID: selectedListId,
      TaskTitle: todo,
      TaskDescription: '',
      TaskStatus: 'Ready',
      TaskDueDT: moment(),
      TaskPriority: 'Medium',
      isComplete: false,
      isArchived: false,
      isDueDateSet: false,
      TaskOrder: taskIndex,
      TaskCreatedDT: moment(),
      TaskUpdatedDT: moment(),
    };

    return this.http.post<Task[]>(
      environment.endpoint + 'task',
      JSON.stringify(task)
    );
  }

  //Delete a task
  deleteTask(TaskID: string, type: string) {
    return this.http.delete<Task[]>(environment.endpoint + type + TaskID);
  }

  //Edit a task
  editTask(task: Task) {
    return this.http.post<Task[]>(
      environment.endpoint + 'task',
      JSON.stringify(task)
    );
  }

  updateTask(taskList: Task[], task: Task, response: any): Task[]{
    taskList = taskList.map((item) => {
      if (task.TaskID == item.TaskID) {
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


  completeTask(data: any){
    return this.http.post<Task[]>(
      environment.endpoint + 'taskcomplete',
      JSON.stringify(data)
    );
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
