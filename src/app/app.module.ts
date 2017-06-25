import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSnackBarModule } from '@angular/material';
import { MaterialModule, MdNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { APP_ROUTING } from './app-routing.module';

import 'rxjs/Rx';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    BrowserAnimationsModule,
    MdSnackBarModule,
    MaterialModule,
    MdNativeDateModule
  ],
  exports: [
    MdSnackBarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
