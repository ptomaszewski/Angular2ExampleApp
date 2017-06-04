import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { START_ROUTING } from './start-routing.module';
import { StartComponent } from './start.component';

@NgModule({
  imports: [
    CommonModule,
    START_ROUTING
  ],
  declarations: [
    StartComponent
  ]
})
export class StartModule { }
