import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common'; // 追加！！
import { TaskService } from '../services/task.service'; // ←サービス使う！

@Component({
  standalone: true, // ←これ大事！！
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
  imports: [IonicModule, CommonModule]
})
export class TaskListPage implements OnInit {
  tasks: {name: string}[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }
}