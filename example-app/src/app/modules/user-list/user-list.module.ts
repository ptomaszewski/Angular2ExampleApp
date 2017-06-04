import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { USER_LIST_ROUTING } from './user-list-routing.module';
import { UserListRetrieveService } from './services/user-list-retrieve.service';

@NgModule({
  imports: [
    CommonModule,
    USER_LIST_ROUTING
  ],
  declarations: [
    UserListComponent
  ],
  providers: [
    UserListRetrieveService
  ] 
})
export class UserListModule { }
