import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationRoutingModule } from './proevent-routing.module';
import { ApplicationListComponent } from './proevent-list/proevent-list.component';

@NgModule({
  imports: [
    ApplicationListComponent,
    CommonModule,
    ApplicationRoutingModule,
  ],
  exports: [
  ],
})
export class ProEventModule { }
