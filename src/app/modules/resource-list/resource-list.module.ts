import { ResourceListRetrieveService } from './resource-list-retrieve.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ResourceListComponent } from './resource-list.component';
import { TableComponent } from './components/table/table.component';
import { resourceListRouting } from './resource-list.routing';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterKeywordsPipe } from './pipes/filter-keyword.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    resourceListRouting
  ],
  declarations: [
    ResourceListComponent,
    TableComponent
    
  ],
  providers: [
    ResourceListRetrieveService,
    OrderByPipe,
    FilterKeywordsPipe
  ]
})
export class ResourceListModule { }
