import { ResourceListRetrieveService } from './resource-list-retrieve.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ResourceListComponent } from './resource-list.component';
import { RESOURCE_LIST_ROUTING } from './resource-list-routing.module';
@NgModule({
  imports: [
    CommonModule,
    RESOURCE_LIST_ROUTING,
    FormsModule
  ],
  declarations: [
    ResourceListComponent
  ],
  providers: [
    ResourceListRetrieveService
  ]
})
export class ResourceListModule { }
