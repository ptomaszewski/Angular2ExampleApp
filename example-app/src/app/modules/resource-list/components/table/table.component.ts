import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourceListRetrieveService } from '../../resource-list-retrieve.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

declare let window;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnDestroy {
  private resources;
  private dataTable;
  private page;
  private sub;
  private parentRouteId: number;
  private itemsCount;

  constructor(private service: ResourceListRetrieveService, public snackBar: MdSnackBar, private router: Router, private route: ActivatedRoute) {
    this.service = service;
  }

  public createTable() {
    let itemsCount = this.itemsCount || 20;
    let offset = itemsCount * this.page;
    this.dataTable = this.resources.slice(offset - itemsCount, offset);
  }

  onKey(value) {
    if (window.storage) {
      localStorage.setItem('itemsCount', value);
    }
    this.itemsCount = value;
    this.createTable();

  }

  ngOnInit() {
    if (window.storage) {
      this.itemsCount = localStorage.getItem('itemsCount');
    }
    this.service.getResourceListData().subscribe(data => {
      this.resources = JSON.parse(data._body);
      this.createTable();
    }, error => {
      this.snackBar.open('Error: (' + error.status + ') ' + error.statusText, '', {
        duration: 8000,
        announcementMessage: 'off'
      });
    });
    this.sub = this.route.params.subscribe(params => {
      this.page = +params['page'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
