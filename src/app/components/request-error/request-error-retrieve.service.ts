import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpApp } from '../../shared/http-app';

@Injectable()
export class RequestErrorRetrieveService {

  constructor(private http: HttpApp) {
    this.http = http;
  }

  public getFailRequest(): Observable<any> {
    return this.http.get('http://jsonapi.org/articles?include=author');
  }

}
