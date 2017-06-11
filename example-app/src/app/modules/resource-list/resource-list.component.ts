import { Component, OnInit } from '@angular/core';
import { ResourceListRetrieveService } from './resource-list-retrieve.service';
import { MdSnackBar } from '@angular/material';

declare let window;

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
  private resources;
  private itemsCount;

  constructor(private service: ResourceListRetrieveService, public snackBar: MdSnackBar) {
    this.service = service;
  }

  onKey(value) {
    
    if (window.storage) {
      localStorage.setItem('itemsCount', value);
    } else {
      this.itemsCount = value;
    }
  }

  ngOnInit() {
    if (window.storage) {
      this.itemsCount = localStorage.getItem('itemsCount');
    }

    this.service.getResourceListData().subscribe(data => {
      this.resources = JSON.parse(data._body);
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
