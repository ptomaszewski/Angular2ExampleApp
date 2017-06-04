import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserListRetrieveService {

  constructor(private http: Http) {
    this.http = http;
  }

  public getUserListData(): Observable<any> {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}