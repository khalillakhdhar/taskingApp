import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent {
  task={} as Task;
  isEdit=false;
  constructor(private taskService:TaskService,private route:ActivatedRoute,private router:Router)
  {

  }
  ngOnInit():void
  {
    const taskId=this.route.snapshot.paramMap.get("id");
    if(taskId)
    {
      this.isEdit=true
      this.taskService.getTasks().subscribe(
        tasks=>{
          const foundTask=tasks.find(t=>t.id=== +taskId);
          if(foundTask)
            this.task=foundTask;
        }
      );
    }
 }
 onSubmit()
 {
  if(this.isEdit)
  {
    this.taskService.updateTask(this.task).subscribe(()=>{
      this.router.navigate(['/']);
  }
)
 }
 else
 this.taskService.addTasks(this.task).subscribe(()=>{
this.router.navigate(['/'])
})
}
}
