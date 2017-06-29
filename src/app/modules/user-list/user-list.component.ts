import { UserListRetrieveService } from './services/user-list-retrieve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  private users;
  constructor(private service: UserListRetrieveService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getUserListData().subscribe(data => {
      this.users = JSON.parse(data._body);
    });
  }

}
