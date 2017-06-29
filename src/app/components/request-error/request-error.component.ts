import { Component, OnInit } from '@angular/core';
import { RequestErrorRetrieveService } from './request-error-retrieve.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-request-error',
  templateUrl: './request-error.component.html',
  styleUrls: ['./request-error.component.scss']
})
export class RequestErrorComponent implements OnInit {

  constructor(private service: RequestErrorRetrieveService, private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.service.getFailRequest().subscribe(() => {}, (error) => {
      this.snackBar.open('Error: (' + error.status + ') ' + error.statusText, '', {
        duration: 8000,
        announcementMessage: 'off'
      });
    })
  }

}
