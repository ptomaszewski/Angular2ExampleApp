import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { USER_LIST_ROUTING } from './user-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    USER_LIST_ROUTING
  ],
  declarations: [
    UserListComponent
  ]
})
export class UserListModule { }
