import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-dcinch-header',
  templateUrl: './dcinch-header.component.html',
  styleUrls: ['./dcinch-header.component.css']
})
export class DcinchHeaderComponent implements OnInit {
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  userid=this.session.get('loginid');
  username=this.session.get('username');
  constructor(private session:SessionStorageService) { }

  ngOnInit() {
  }

}
