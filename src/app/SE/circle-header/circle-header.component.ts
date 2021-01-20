import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-circle-header',
  templateUrl: './circle-header.component.html',
  styleUrls: ['./circle-header.component.css']
})
export class CircleHeaderComponent implements OnInit {
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  userid=this.session.get('loginid');
  username=this.session.get('username');
  constructor(private session:SessionStorageService) { }

  ngOnInit() {
  }

}
