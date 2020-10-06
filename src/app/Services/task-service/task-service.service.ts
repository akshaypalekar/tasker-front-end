import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../../models/task-model/task.model';


@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private updatedTasks = new BehaviorSubject<Task[]>([]);
  private completedTasks = new BehaviorSubject<Task[]>([]);

  constructor() { }

  //Listen to any change in the array
  getTaskUpdateListner() {
    return this.updatedTasks.asObservable();
  }

  getCompleteTaskUpdateListner() {
    return this.completedTasks.asObservable();
  }

  //Adding a task
  addTask(todo: string,selectedListId: number){
    const id = new Date().valueOf();
    const task: Task = {
      id: id,
      listId: selectedListId,
      todo: todo,
      description:'',
      status:'Ready',
      priority:'Medium',
      dueDate: new Date(),
      complete: false
    }
    let newTaskList = [...this.updatedTasks.value];
    newTaskList.push(task);
    this.updatedTasks.next(newTaskList);
  }

  //Delete a task
  deleteTask(taskId: number) {
    let newTaskList = [...this.updatedTasks.value];
    newTaskList = newTaskList.filter(el => el.id != taskId);
    this.updatedTasks.next(newTaskList);
  }

  deleteTaskWithListID(listId: number){
    let newTaskList = [...this.completedTasks.value];
    newTaskList = newTaskList.filter(el => el.listId != listId);
    this.completedTasks.next(newTaskList);
  }

  //Set task to complete
  setTaskToComplete(task: any){
    let newCompletedTaskList = [...this.completedTasks.value];
    task.complete = true;
    task.status = 'Done';
    newCompletedTaskList.push(task);
    this.completedTasks.next(newCompletedTaskList);
    this.deleteTask(task.id);
  }

  setTaskBackToIncomplete(task:any){
    let newTaskList = [...this.updatedTasks.value];
    task.complete = false;
    task.status = 'Ready';
    newTaskList.push(task);
    this.updatedTasks.next(newTaskList);
    this.deleteTaskfromComplete(task.id);
  }

    //Delete a task from complete list
    deleteTaskfromComplete(taskId: number) {
      let newTaskList = [...this.completedTasks.value];
      newTaskList = newTaskList.filter(el => el.id != taskId);
      this.completedTasks.next(newTaskList);
    }
}
