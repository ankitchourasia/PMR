import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var $ :any;
@Component({
  selector: 'app-select-date-to-extend-group-schedule',
  templateUrl: './select-date-to-extend-group-schedule.component.html',
  styleUrls: ['./select-date-to-extend-group-schedule.component.css']
})
export class SelectDateToExtendGroupScheduleComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  groupno:string;
  rdno:string;
  startdate:string;
  enddate:string;
  billmon:string;
  operationtype:string="Select operation Type";
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  resp:any;
  error:any;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
    
    $( function() {
      $( "#to" ).datepicker({
        dateFormat: 'dd-M-y'
      });
    } );
    this.groupno=this.session.get('groupno');
    this.startdate=this.session.get('startdate');
    this.billmon=this.session.get('billmon');

  }
  extendSchedule()
  {
    this.enddate = $("#to").val().toUpperCase();

    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
      formdata.append("enddate",this.enc.encrypt(this.enddate));
      return this.http.post("api/schedule-ops/extend-schedule-whole-group", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    alert(this.resp.msg);
    this.router.navigate(['/extend-schedule-date']);
    }
    else
    {
       alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
  }
