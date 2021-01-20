import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-schedule-a-complete-group-gi',
  templateUrl: './schedule-a-complete-group-gi.component.html',
  styleUrls: ['./schedule-a-complete-group-gi.component.css']
})
export class ScheduleACompleteGroupGIComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  resp:any;
  error:any;
  resp2:any;
  startdate:string;
  enddate:string;
  billmon:string;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="GroupIncharge")
    {
    this.activeGroupsinGI();
    
  }
  else  
  {
      this.router.navigate(['/login']);
  }
  }

  activeGroupsinGI()
  {
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.session.get('userlocation')));
    formdata.append("groupinchid",this.enc.encrypt(this.session.get('loginid')));
    return this.http.post("api/master-rec/get-groupinch-groupno-assigned", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp.length>0)
      {
        // // alert('yes');
        // this.session.set("groupList",this.resp);
        // this.show=true;
      }
      else
      {
        // // alert('No');
        // this.show=false;
        // // alert(this.resp.msg);
      }
    },
      error=>{
      this.error = error
        alert('Server not responding');
      }
    );
  }

  scheduleGroup(groupno)
  {
    this.session.set("groupno",groupno);
    this.navCtrl.navigate('schedule-a-group-GI',{groupno:groupno});
  }

}
