import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';
import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks: Task[]=[];
  searchText:string="";
  enAttenteTasks: Task[]=[];
  enCoursTasks: Task[]=[];
  faiteTasks: Task[]=[];


  constructor(private taskService:TaskService)
  {

  }
  ngOnInit(): void {
    this.loadTasks();

  }
  loadTasks():void
  {
    this.taskService.getTasks().subscribe(data=>
    {
      this.tasks=data;
      this.updateTaskLists();
    }
    )
  }
  updateTaskLists():void
  {
    this.enAttenteTasks=this.tasks.filter(t=>t.status==='EN_ATTENTE');
    this.enCoursTasks=this.tasks.filter(t=>t.status==='EN_COURS');
    this.faiteTasks=this.tasks.filter(t=>t.status==='FAITE');
  }
  filterTasks():void
  {
    const filtered=this.tasks.filter(task=>task.title.toLowerCase().includes(this.searchText.toLowerCase())
  || task.description?.toLowerCase().includes(this.searchText.toLowerCase()));
  this.enAttenteTasks=filtered.filter(t=>t.status==='EN_ATTENTE');
  this.enCoursTasks=filtered.filter(t=>t.status==='EN_COURS');
  this.faiteTasks=filtered.filter(t=>t.status==='FAITE');

  }
drop(event:any,newStatus:string)
{

    console.log("changement d'etat");

    const tache=event.item.data;
    console.log("tache",tache);
    tache.status=newStatus;
    this.taskService.updateTask(tache).subscribe(()=>
    {
      console.log("changement d'etat");
      transferArrayItem(
       event.previousContainer.data,
       event.container.data,
       event.previousIndex,
       event.currentIndex
      )
    }
    )
  }

}
