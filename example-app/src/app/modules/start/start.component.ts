import { Component, OnInit } from '@angular/core';
import { StartRetrieveService } from './start-retrieve.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private service: StartRetrieveService, public snackBar: MdSnackBar) { 
    this.service = service;
  }

  ngOnInit() {
    this.service.getStartData().subscribe(data => console.log(data), error => {
      console.log(error);
      this.snackBar.open('Error: (' + error.status + ') ' + error.statusText, '', {
        duration: 8000,
        announcementMessage: 'off'
      });
    })
  }

}
