import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-schedule-a-complete-group',
  templateUrl: './schedule-a-complete-group.component.html',
  styleUrls: ['./schedule-a-complete-group.component.css']
})
export class ScheduleACompleteGroupComponent implements OnInit {
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
  today= new Date();
  jstoday = '';
  loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) {
    this.jstoday = formatDate(this.today, 'dd-MMM-yy', 'en-US', '+0530').toUpperCase();
    // alert(this.jstoday)
   }

  ngOnInit() 
  {
   
    $( function() {
      $( ".datepicker" ).datepicker();
    } );
 

    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
    this.ActiveGroupsInDC();
    
  }
  else  
  {
      this.router.navigate(['/login']);
  }
  }

  ActiveGroupsInDC()
  {
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
      $('#from').datepicker({
        autoclose: true
      });
       
      this.loading=false;
    alert(this.resp.msg);
    
    this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      this.loading=false;
      // alert(this.resp.msg);
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
    this.navCtrl.navigate('scheduled-a-group',{groupno:groupno});
  }
}
