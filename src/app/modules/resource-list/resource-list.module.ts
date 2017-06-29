import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

import { ResourceListRetrieveService } from './resource-list-retrieve.service';
import { resourceListRouting } from './resource-list.routing';
import { ResourceListComponent } from './resource-list.component';
import { TableComponent } from './components/table/table.component';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FilterKeywordsPipe } from './pipes/filter-keyword.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    resourceListRouting,
    MaterialModule,
    MdNativeDateModule
  ],
  declarations: [
    ResourceListComponent,
    TableComponent,
    CapitalizePipe
  ],
  providers: [
    ResourceListRetrieveService,
    OrderByPipe,
    FilterKeywordsPipe
  ]
})
export class ResourceListModule { }
