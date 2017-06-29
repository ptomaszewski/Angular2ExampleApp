import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResourceListRetrieveService } from '../../resource-list-retrieve.service';
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
  private activePageNumber: number;
  private parentRouteId: number;
  private sub;
  private resources;
  private currentTable;
  private tableItemsLength: number;
  private tablePageList: Object[] = [];
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

  constructor(
    private service: ResourceListRetrieveService,
    private router: Router,
    private route: ActivatedRoute,
    private orderByPipe: OrderByPipe,
    private filterKeywordPipe: FilterKeywordsPipe
  ) {
    this.service = service;
  }

  public createTable(): void {
    this.tableItemsLength = this.tableItemsLength > 0 ? this.tableItemsLength : 20;
    const tableEnd = this.tableItemsLength * this.activePageNumber;
    const tableOffset = tableEnd - this.tableItemsLength;
    const filteredTable = this.filterKeywordPipe.transform(this.resources, this.filterKeyword);
    const pageListLength = Math.ceil(filteredTable.length / this.tableItemsLength);
    this.currentTable = this.orderByPipe.transform(filteredTable, this.sort.column).slice(tableOffset, tableEnd);

    this.createPageList(pageListLength);
  }

  public createPageList(number): void {
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

  public convertSorting(): void {
    this.sort.column = this.sort.descending ? '-' + this.sort.column : this.sort.column;
  }

  public changeTableItemsLength(value): void {
    if (window.storage) {
      localStorage.setItem('tableItemsLength', value);
    }

    this.tableItemsLength = value;

    this.createTable();

  }

  public changeFilterKeyword(text: string): void {
    clearTimeout(this.filterTimeout);
    this.filterTimeout = setTimeout(() => {
      this.filterKeyword = text;

      this.createTable();

    }, 600);
  }

  ngOnInit() {
    if (window.storage) {
      this.tableItemsLength = parseInt(localStorage.getItem('tableItemsLength'), 10);
    }
    this.service.getResourceListData().subscribe((data) => {
      this.resources = JSON.parse(data._body);

      this.sub = this.route.params.subscribe((params) => {
        this.activePageNumber = +params['page'];
        this.createTable();
      });
    });
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
