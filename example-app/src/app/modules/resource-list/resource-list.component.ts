import { Component, OnInit } from '@angular/core';
import { ResourceListRetrieveService } from './resource-list-retrieve.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {

  constructor(private service: ResourceListRetrieveService) { 
    this.service = service;
  }

  ngOnInit() {
    this.service.getResourceListData().subscribe(data => console.log(data), error => console.log(error));
  }

}
