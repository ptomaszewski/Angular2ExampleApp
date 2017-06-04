import { UserListRetrieveService } from './services/user-list-retrieve.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private service: UserListRetrieveService) { 
    this.service = service;
  }

  ngOnInit() {
    this.service.getUserListData().subscribe(data => console.log(data), error => console.log(error))
  }

}
