import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpApp } from '../../../shared/http-app';

@Injectable()
export class UserListRetrieveService {

  constructor(private http: HttpApp) {
    this.http = http;
  }

  public getUserListData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
