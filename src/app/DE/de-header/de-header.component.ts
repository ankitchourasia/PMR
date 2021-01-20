import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-de-header',
  templateUrl: './de-header.component.html',
  styleUrls: ['./de-header.component.css']
})
export class DeHeaderComponent implements OnInit {
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  userid=this.session.get('loginid');
  username=this.session.get('username');
  constructor(private session:SessionStorageService) { }

  ngOnInit() 
  {
    
  }

}
