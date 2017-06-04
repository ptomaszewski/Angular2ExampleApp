import { Component, OnInit } from '@angular/core';
import { StartRetrieveService } from './start-retrieve.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  constructor(private service: StartRetrieveService) { 
    this.service = service;
  }

  ngOnInit() {
    this.service.getStartData().subscribe(data => console.log(data), error => console.log(error))
  }

}
