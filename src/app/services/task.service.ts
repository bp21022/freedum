import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: { name: string }[] = [];

  getTasks() {
    return this.tasks;
  }

  addTask(taskName: string) {
    this.tasks.push({ name: taskName });
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }
}