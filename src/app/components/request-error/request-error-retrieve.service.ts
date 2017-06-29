import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RequestErrorRetrieveService {

  constructor(private http: Http) {
    this.http = http;
  }

  public getFailRequest(): Observable<any> {
    return this.http.get('http://jsonapi.org/articles?include=author');
  }

}
