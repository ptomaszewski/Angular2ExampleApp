import {
  RequestOptions,
  Http,
  ConnectionBackend,
  RequestOptionsArgs,
  Response,
  Request
} from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class HttpApp extends Http {
  constructor(
    private backend: ConnectionBackend,
    private defaultOptions: RequestOptions,
    private snackBar: MdSnackBar) {
    super(backend, defaultOptions);

  }

  public request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return super.request(url, options)
      .catch((err) => {
        this.snackBar.open('Error: (' + err.status + ') ' + err.statusText, '', {
          duration: 8000,
          announcementMessage: 'off'
        });
        return Observable.throw(err);
      });
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, options);
  }

}
