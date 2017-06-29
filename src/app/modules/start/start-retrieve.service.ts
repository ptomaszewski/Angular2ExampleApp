import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpApp } from '../../shared/http-app';

@Injectable()
export class StartRetrieveService {

  constructor(private http: HttpApp) {
    this.http = http;
  }

  public getStartData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
