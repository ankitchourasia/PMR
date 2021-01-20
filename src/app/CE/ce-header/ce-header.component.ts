import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
@Component({
  selector: 'app-ce-header',
  templateUrl: './ce-header.component.html',
  styleUrls: ['./ce-header.component.css'] 
})
export class CeHeaderComponent implements OnInit {
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  userid=this.session.get('loginid');
  username=this.session.get('username');
  constructor(private session:SessionStorageService) { }

  ngOnInit() {
  }

}
