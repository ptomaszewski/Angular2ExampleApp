import { UserListRetrieveService } from './services/user-list-retrieve.service';
import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  private users;
  constructor(private service: UserListRetrieveService, public snackBar: MdSnackBar) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getUserListData().subscribe(data => {
      this.users = JSON.parse(data._body);
      console.log(this.users);
    }, error => {
      console.log(error);
      this.snackBar.open('Error: (' + error.status + ') ' + error.statusText, '', {
        duration: 8000,
        announcementMessage: 'off'
      });
    })
  }

}
