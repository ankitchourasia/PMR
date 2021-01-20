import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-md-header',
  templateUrl: './md-header.component.html',
  styleUrls: ['./md-header.component.css']
})
export class MdHeaderComponent implements OnInit {
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  userid=this.session.get('loginid');
  username=this.session.get('username');
  constructor(private session:SessionStorageService) { }

  ngOnInit() {
  }

}
