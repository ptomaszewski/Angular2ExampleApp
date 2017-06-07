import { Component, OnInit } from '@angular/core';
import { StartRetrieveService } from './start-retrieve.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public start;
  constructor(private service: StartRetrieveService, public snackBar: MdSnackBar) {
    this.service = service;
  }

  ngOnInit() {
    this.service.getStartData().subscribe(data => {
      this.start = JSON.parse(data._body);
      console.log(this.start);
    }, error => {
      console.log(error);
      this.snackBar.open('Error: (' + error.status + ') ' + error.statusText, '', {
        duration: 8000,
        announcementMessage: 'off'
      });
    })
  }

}
