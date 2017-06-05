import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ResourceListRetrieveService {

  constructor(private http: Http) {
    this.http = http;
  }

  public getResourceListData(): Observable<any> {
    return this.http.get('https://reqres.in/api/unknown');
  }
}