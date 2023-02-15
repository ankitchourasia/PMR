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
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
@Component({
  selector: 'app-qr-reports-readerwise',
  templateUrl: './qr-reports-readerwise.component.html',
  styleUrls: ['./qr-reports-readerwise.component.css']
})
export class QrReportsReaderwiseComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
  resp:any;
  resp2:any;
  error:any;
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService, public navCtrl: NgxNavigationWithDataComponent,
    private http: HttpClient,private session:SessionStorageService,  private router:Router, 
    private exportService : ExportExcelService) { }

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

  getReadingsClicked(data, countType){
    let dataFor;
    if(data.officetype === "DC Data"){
      dataFor = "DC"
    } else if(data.officetype === "Meter Reader"){
      dataFor = "METERREADER";
    } else {
      console.log("Invalid Office Type");
      return;
    }
    this.getReadingsByBillMonthAndOfficeType(countType, dataFor, data.officename);
  }

  getReadingsByBillMonthAndOfficeType(countType, dataFor, dataForValue){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("counttype",this.enc.encrypt(countType));
    formdata.append("datafor",this.enc.encrypt(dataFor));
    formdata.append("dataforvalue",this.enc.encrypt(dataForValue));
    return this.http.post("api/qr-report/get-list-date", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.exportAsXsls(success, countType, dataFor, dataForValue);
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  exportAsXsls(readings, countType, dataFor, dataForValue): void {
    this.exportService.exportAsExcelFile(readings, countType + '_Readings_' + this.billmon + '_' + dataFor + '_' + dataForValue);
  }

}
