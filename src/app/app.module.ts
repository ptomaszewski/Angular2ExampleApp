import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSnackBarModule, MdSnackBar } from '@angular/material';

import { APP_ROUTING } from './app-routing.module';
import { WindowRefService } from './shared/window.service';
import { RequestErrorRetrieveService } from './components/request-error/request-error-retrieve.service';
import { RequestErrorComponent } from './components/request-error/request-error.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';

import { Observable } from 'rxjs/Rx';
import { HttpApp } from './shared/http-app';

export function httpAppFunc(backend: XHRBackend, options: RequestOptions, snackBar: MdSnackBar) {
  return new HttpApp(backend, options, snackBar);
}

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RequestErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSnackBarModule,
    APP_ROUTING
  ],
  exports: [
    MdSnackBarModule
  ],
  providers: [
    RequestErrorRetrieveService,
    WindowRefService,
    {
      provide: HttpApp,
      useFactory: httpAppFunc,
      deps: [XHRBackend, RequestOptions, MdSnackBar]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
