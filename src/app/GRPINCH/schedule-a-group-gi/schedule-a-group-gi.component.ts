import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-schedule-a-group-gi',
  templateUrl: './schedule-a-group-gi.component.html',
  styleUrls: ['./schedule-a-group-gi.component.css']
})
export class ScheduleAGroupGIComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  groupno:string;
  startdate:string;
  enddate:string;
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
  operationtype:string="Select operation Type";
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  resp:any;
  error:any;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    $( function() {
      $( "#from" ).datepicker({
        dateFormat: 'dd-M-y'
      });
    } );
    $( function() {
      $( "#to" ).datepicker({
        dateFormat: 'dd-M-y'
      });
    } );
    this.groupno=this.session.get('groupno');
  }

  submitScheduled()
  {
    this.startdate = $("#from").val().toUpperCase();
    this.enddate = $("#to").val().toUpperCase();

    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      formdata.append("usertype",this.enc.encrypt(this.usertype));
      formdata.append("loginid",this.enc.encrypt(this.loginid));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
      formdata.append("startdate",this.enc.encrypt(this.startdate));
      formdata.append("enddate",this.enc.encrypt(this.enddate));
      formdata.append("operationtype",this.enc.encrypt(this.operationtype));
      return this.http.post("api/schedule-ops/schedule-a-group-completely", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    alert(this.resp.msg);
    this.router.navigate(['/schedule-a-complete-group-GI']);
    }
    else
    {
      // alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }

}
