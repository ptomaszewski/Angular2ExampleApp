import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

import { START_ROUTING } from './start-routing.module';
import { StartComponent } from './start.component';
import { StartRetrieveService } from './start-retrieve.service';

@NgModule({
  imports: [
    CommonModule,
    START_ROUTING,
    MaterialModule,
    MdNativeDateModule
  ],
  declarations: [
    StartComponent
  ],
  providers: [
    StartRetrieveService
  ]
})
export class StartModule { }
