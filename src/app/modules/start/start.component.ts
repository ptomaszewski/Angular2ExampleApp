import { Component, OnInit } from '@angular/core';
import { StartRetrieveService } from './start-retrieve.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  public start;
  constructor(private service: StartRetrieveService) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getStartData().subscribe(data => {
      this.start = JSON.parse(data._body);
    });
  }

}
