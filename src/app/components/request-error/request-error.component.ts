import { Component, OnInit } from '@angular/core';
import { RequestErrorRetrieveService } from './request-error-retrieve.service';

@Component({
  selector: 'app-request-error',
  templateUrl: './request-error.component.html',
  styleUrls: ['./request-error.component.scss']
})
export class RequestErrorComponent implements OnInit {

  constructor(private service: RequestErrorRetrieveService) { }

  ngOnInit() {
    this.service.getFailRequest().subscribe();
  }

}
