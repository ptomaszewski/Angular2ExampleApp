import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpApp } from '../../shared/http-app';

@Injectable()
export class ResourceListRetrieveService {

  constructor(private http: HttpApp) {
    this.http = http;
  }

  public getResourceListData(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
