import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class= "container" style="margin-top: 30px;">
  <h1>TODO APP </h1>
  <hr>
  <div *ngIf="!isUpdateFormActive; else active"  >
  <div class="form-group">
    <label for="task">Create a task</label>
    <input 
    type="text" 
    class= "form-control"
    id="task" 
    name="task"
    [(ngModel)]="task">
  </div>
  <div class="form-group mt-2">
    <button 
    class="btn btn-outline-primary w-100" (click)="add()">
    Add
   </button>
   <button class="btn btn-outline-dark w-100" (click)="save()">
    Save
   </button>
   <button 
   class= "btn btn-outline-danger w-100" (click)="deleteAll()">
   DeleteAll
   </button>
  </div>
  </div>

  <ng-template #active>
  <div class="form-group">
    <label for="task">Create a task</label>
    <input 
    type="text" 
    class= "form-control"
    id="task" 
    name="task"
    [(ngModel)]="updateTask">
  </div>
  <div class="form-group mt-2">
    <button 
    class="btn btn-outline-warning w-100"
    (click)="update()">
    Edit
   </button>
   <button class="btn btn-outline-danger w-100 mt-2"
      (click)="cancel()">
        cancel
      </button>
  </div>
</ng-template>
  <hr>
  <ul>
    <li class="mt" *ngFor="let t of tasks let i = index">
      {{t}}
      <div *ngIf="!isUpdateFormActive">
      <button
      (click)="get(t,i)"
       class="btn btn-outline-warning btn-sm mx-1"> 
        Edit 
      </button>
      
      <button (click)="remove(i)"
        class = "btn btn-outline-danger btn-sm">
        Delete
      </button>
      </div>
    </li>
  </ul>
  </div>
  `,
})
export class AppComponent {
  isUpdateFormActive: boolean = false;
  task: string = "";
  updateTask: string = "";
  tasks: string[] = [];
  index: number = 0;

  add() {
    this.tasks.push(this.task);
    this.task = "";
  }
  remove(index: number) {
    let result: boolean = confirm("Do you want to delete the task? ")
    if (result) {
      this.tasks.splice(index, 1);
    }
  }
  deleteAll(){
    let result: boolean = confirm("Do you want to delete all of the task? ")
    this.tasks= [];
  }
  save(){
    let result: boolean = confirm("Tasks Saved!")
    localStorage.setItem("tasks", this.task);
  }
  get(task: string, index: number) {
    this.updateTask = task;
    this.index = index;
    this.isUpdateFormActive = true;
   
  }

  update() {
    this.tasks[this.index] = this.updateTask;
    this.cancel();
  }
  cancel() {
    this.isUpdateFormActive = false;
  }
} 
