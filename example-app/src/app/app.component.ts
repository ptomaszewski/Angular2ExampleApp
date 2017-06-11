import { Component, OnInit } from '@angular/core';

declare let window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit() {
    window.storage;
    let fail;
    let uid;
    try {
      uid = new Date;
      (window.storage = window.localStorage).setItem(uid, uid);
      fail = window.storage.getItem(uid) != uid;
      window.storage.removeItem(uid);
      fail && (window.storage = false);
    } catch (exception) { }
  }
}
