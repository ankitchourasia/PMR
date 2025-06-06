import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-md-qr-code-reports',
  templateUrl: './md-qr-code-reports.component.html',
  styleUrls: ['./md-qr-code-reports.component.css']
})
export class MdQrCodeReportsComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  region = this.session.get('userlocation');
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
  resp:any;
  resp1:any;
  resp2:any;
  resp3:any;
  resp4:any;
  error:any;
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
  }

  getQrReports()
  {

    alert(this.region);

    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    // formdata.append("region",this.enc.encrypt(this.region));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    return this.http.post("api/qr-report/get-company-details", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!='')
  {
  this.loading=false;
  this.showData=true;
  this.showData1=false;

  }
  else
  {
     this.loading=false;
     this.showData1=true;
     this.showData=false;
  }
},
error=>{
 this.error = error
 this.loading=false;
   alert('Server not responding');
}
);
  }
  }

  getQrRegionReports(region)
  {

    alert(this.region);

    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("region",this.enc.encrypt(region));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    return this.http.post("api/qr-report/get-region-details", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp1=response;
      if(this.resp1!='')
  {
  this.loading=false;
  // this.showData=true;
  // this.showData1=false;

  }
  else
  {
     this.loading=false;
    //  this.showData1=true;
    //  this.showData=false;
  }
},
error=>{
 this.error = error
 this.loading=false;
   alert('Server not responding');
}
);
  }
  }

  getCircleQrReports(circle)
  {

    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("circle",this.enc.encrypt(circle));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    return this.http.post("api/qr-report/get-circle-details", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
  {
  this.loading=false;
  // this.showData=true;
  // this.showData1=false;

  }
  else
  {
     this.loading=false;
    //  this.showData1=true;
    //  this.showData=false;
  }
},
error=>{
 this.error = error
 this.loading=false;
   alert('Server not responding');
}
);
  }
  }

  getDivisionQrReports(division)
  {

    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(division));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    return this.http.post("api/qr-report/get-division-details", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp3=response;
      if(this.resp3!='')
  {
  this.loading=false;
  // this.showData=true;
  // this.showData1=false;

  }
  else
  {
     this.loading=false;
    //  this.showData1=true;
    //  this.showData=false;
  }
},
error=>{
 this.error = error
 this.loading=false;
   alert('Server not responding');
}
);
  }
  }

  getDcWiseData(loccode)
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(loccode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    return this.http.post("api/qr-report/get-dc-details", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp4=response;
      if(this.resp4!='')
  {
  this.loading=false;
  // this.showData=true;
  // this.showData1=false;

  }
  else
  {
     this.loading=false;
    //  this.showData1=true;
    //  this.showData=false;
  }
},
error=>{
 this.error = error
 this.loading=false;
   alert('Server not responding');
}
);
  }
}
