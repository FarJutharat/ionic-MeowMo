import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScheduleDeletePageRoutingModule } from './schedule-delete-routing.module';

import { ScheduleDeletePage } from './schedule-delete.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScheduleDeletePageRoutingModule
  ],
  declarations: [ScheduleDeletePage]
})
export class ScheduleDeletePageModule {}
