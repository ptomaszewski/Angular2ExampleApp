import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { WindowRefService } from './shared/window.service';

declare let window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'app';
  private _window;
  constructor(private windowRef: WindowRefService) {
    this._window = windowRef.nativeWindow;
  }
  ngOnInit() {
    this._window.storage;
    let fail;
    let uid;
    try {
      uid = new Date;
      (window.storage = window.localStorage).setItem(uid, uid);
      fail = window.storage.getItem(uid) != uid;
      window.storage.removeItem(uid);
      fail && (this._window.storage = false);
    } catch (exception) { }
  }
}
