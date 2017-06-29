import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSnackBarModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { APP_ROUTING } from './app-routing.module';

import 'rxjs/Rx';
import { RequestErrorComponent } from './components/request-error/request-error.component';
import { RequestErrorRetrieveService } from './components/request-error/request-error-retrieve.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RequestErrorComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    BrowserAnimationsModule,
    MdSnackBarModule
  ],
  exports: [
    MdSnackBarModule
  ],
  providers: [
    RequestErrorRetrieveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
