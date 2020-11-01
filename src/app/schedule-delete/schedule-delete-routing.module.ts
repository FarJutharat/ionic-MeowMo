import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScheduleDeletePage } from './schedule-delete.page';

const routes: Routes = [
  {
    path: '',
    component: ScheduleDeletePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScheduleDeletePageRoutingModule {}
