import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { TaskListPage } from './task-list.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TaskListPage, // ← ここ！！declarationsじゃなくて、importsにTaskListPageを入れる！！
    RouterModule.forChild([{ path: '', component: TaskListPage }])
  ]
})
export class TaskListPageModule {}
