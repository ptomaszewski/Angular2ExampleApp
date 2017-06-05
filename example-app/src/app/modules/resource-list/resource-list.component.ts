import { Component, OnInit } from '@angular/core';
import { ResourceListRetrieveService } from './resource-list-retrieve.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  private resources;
  constructor(private service: ResourceListRetrieveService, public snackBar: MdSnackBar) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getResourceListData().subscribe(data => {
      this.resources = JSON.parse(data._body).data;
      console.log(this.resources);
    }, error => {
      console.log(error);
      this.snackBar.open('Error: (' + error.status + ') ' + error.statusText, '', {
        duration: 8000,
        announcementMessage: 'off'
      });
    });
  }

}
