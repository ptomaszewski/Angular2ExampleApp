import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourceListRetrieveService } from '../../resource-list-retrieve.service';
import { MdSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderByPipe } from '../../pipes/order-by.pipe';
import { FilterKeywordsPipe } from '../../pipes/filter-keyword.pipe';

declare let window;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  private resources;
  private currentTable;
  private activePageNumber: number;
  private tablePageList: Object[] = [];
  private sub;
  private sort: any = {
    column: 'id',
    descending: false
  };
  private tableHeadings: any[] = [
    {
      name: 'id',
      sorting: 'none'
    },
    {
      name: 'title',
      sorting: 'none'
    },
    {
      name: 'body',
      sorting: 'none'
    },
  ];
  private filterKeyword: string;
  private filterTimeout: any;
  private parentRouteId: number;
  private tableItemsLength: number;

  constructor(
    private service: ResourceListRetrieveService,
    public snackBar: MdSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private orderByPipe: OrderByPipe,
    private filterKeywordPipe: FilterKeywordsPipe
  ) {
    this.service = service;
  }

  public createTable() {
    this.tableItemsLength = this.tableItemsLength > 0 ? this.tableItemsLength : 20;
    let tableEnd = this.tableItemsLength * this.activePageNumber;
    let tableOffset = tableEnd - this.tableItemsLength;
    let filteredTable = this.filterKeywordPipe.transform(this.resources, this.filterKeyword);
    let pageListLength = Math.ceil(filteredTable.length / this.tableItemsLength);
    this.currentTable = this.orderByPipe.transform(filteredTable, this.sort.column).slice(tableOffset, tableEnd);

    this.createPageList(pageListLength);
  }

  public createPageList(number) {
    if (number < 2) {
      number = 0;
    }

    this.tablePageList = [];
    let j = 0;
    for (j; j < number; j++) {
      this.tablePageList[j] = {
        index: j + 1
      }
    }

    if (number < this.activePageNumber) {
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  public changeSorting(column): void {
    for (const el of this.tableHeadings) {
      el.sorting = 'none';
    }

    if (this.sort.column === column.name) {
      this.sort.descending = !this.sort.descending;
      column.sorting = 'descending';
    } else {
      this.sort.column = column.name;
      this.sort.descending = false;
      column.sorting = 'ascending'
    }
    this.convertSorting();
    this.createTable();
  }

  convertSorting(): void {
    this.sort.column = this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  changeTableItemsLength(value) {
    if (window.storage) {
      localStorage.setItem('tableItemsLength', value);
    }

    this.tableItemsLength = value;

    this.createTable();

  }

  changeFilterKeyword(text: string) {
    clearTimeout(this.filterTimeout);
    this.filterTimeout = setTimeout(() => {
      this.filterKeyword = text;

      this.createTable();

    }, 600);
  }

  ngOnInit() {
    if (window.storage) {
      this.tableItemsLength = parseInt(localStorage.getItem('tableItemsLength'));
    }
    this.service.getResourceListData().subscribe(data => {
      this.resources = JSON.parse(data._body);

      this.sub = this.route.params.subscribe(params => {
        this.activePageNumber = +params['page'];
        this.createTable();
      });

    }, error => {
      this.snackBar.open('Error: (' + error.status + ') ' + error.statusText, '', {
        duration: 8000,
        announcementMessage: 'off'
      });
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
