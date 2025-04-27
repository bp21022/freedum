import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service'; // サービス読み込み

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: false,
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  title = "タスク登録";
  tasks: {name: string}[] = [];
  task: string = "";

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.tasks = this.taskService.getTasks(); // ここでサービスから取る！
  }

  addTask(){
    if (this.task) {
      this.taskService.addTask(this.task);
      this.task = '';
      this.tasks = this.taskService.getTasks(); // 追加後にリフレッシュ
    }
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index);
    this.tasks = this.taskService.getTasks(); // 削除後にリフレッシュ
  }
}