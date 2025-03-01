import { Observable } from "rxjs";
import { Task } from "../models/task.model";

export interface TaskInterface{
  getTasks():Observable<Task[]>;
  addTasks(task:Task):Observable<Task>;
  updateTask(task:Task):Observable<Task>;
  deleteTask(id:number):Observable<void>;
}
