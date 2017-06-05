import { Component, OnInit } from '@angular/core';
import { ResourceListRetrieveService } from './resource-list-retrieve.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  constructor(private service: ResourceListRetrieveService, public snackBar: MdSnackBar) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getResourceListData().subscribe(data => console.log(data), error => {
      console.log(error);
      this.snackBar.open('Error: (' + error.status + ') ' + error.statusText , '', {
        duration: 8000,
        announcementMessage: 'off'
      });
    });
  }

}
