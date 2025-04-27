import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular'; // 追加する！

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.page.html',
  styleUrls: ['./task-list.page.scss'],
  imports: [IonicModule], // ←ここにIonicModuleを入れる！！
})
export class TaskListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
