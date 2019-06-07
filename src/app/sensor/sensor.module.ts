import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SensorComponent } from './sensor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ SensorComponent ],
  exports: [ SensorComponent ]
})
export class SensorModule { }
