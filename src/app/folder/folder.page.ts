import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  tasks: {name: string}[] = [
    {name: "タスク1"},
    {name: "タスク2"},
  ];
  task: string = "";
  constructor() {}

  addTask(){
    this.tasks.push({
      name: this.task
    });
    // localStorage.tasks = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    this.task = "";
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // index番目を削除
    localStorage.setItem("tasks", JSON.stringify(this.tasks)); // 上書き保存
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  
    // if ("tasks" in localStorage) {
    //   this.tasks = JSON.parse(localStorage.tasks);
    // }
    const saved = localStorage.getItem("tasks");
    if (saved) {
      this.tasks = JSON.parse(saved);
    }
  }
}
