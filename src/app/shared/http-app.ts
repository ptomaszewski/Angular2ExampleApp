import {
  RequestOptions,
  Http,
  ConnectionBackend,
  RequestOptionsArgs,
  Response,
  Request
}
  from '@angular/http';
  
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Headers } from '@angular/http';

@Injectable()
export class HttpApp extends Http {
  constructor(
    private backend: ConnectionBackend, 
    private defaultOptions: RequestOptions) {
    super(backend, defaultOptions);
  }

  public get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options.withCredentials = true;
    return super.get(url, options)
      .catch((err) => {
        console.log(err);
        return Observable.throw(err);
      });
  }

}


//   public delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
//     options.withCredentials = true;
//     return super.delete(url, options)
//       .catch((err) => {
//         this.errorLogger.log(err);
//         return Observable.throw(err);
//       });
//   }
//   public put(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
//     options.withCredentials = true;
//     return super.put(url, body, options)
//       .catch((err) => {
//         this.errorLogger.log(err);
//         return Observable.throw(err);
//       });
//   }
//   public post(url: string, body: any, options?: RequestOptionsArgs): Observable<Response> {
//     options.withCredentials = true;
//     return super.post(url, body, options)
//       .catch((err) => {
//         this.errorLogger.log(err);
//         return Observable.throw(err);
//       });
//   }
// }
