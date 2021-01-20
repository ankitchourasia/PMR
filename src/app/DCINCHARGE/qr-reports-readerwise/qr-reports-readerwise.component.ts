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
  selector: 'app-qr-reports-readerwise',
  templateUrl: './qr-reports-readerwise.component.html',
  styleUrls: ['./qr-reports-readerwise.component.css']
})
export class QrReportsReaderwiseComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  billmon:string="Select Bill Month";
  resp:any;
  resp2:any;
  error:any;
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
  }

  getQrReports()
  {
    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    return this.http.post("api/qr-report/get-dc-details", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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

}
