import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService,LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var $ :any;
@Component({
  selector: 'app-high-low-consumption-report',
  templateUrl: './high-low-consumption-report.component.html',
  styleUrls: ['./high-low-consumption-report.component.css']
})
export class HighLowConsumptionReportComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  billmonth:string="Select Bill Month";
  grno:string="Select Group";
  consumptiontype:string="Select Conumption Type";
  resp:any;
  resp1:any;
  error:any;
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService,private localStorage:LocalStorageService) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
      {
        this.ActiveGroupsInDC();
      }
      else  
      {
        this.router.navigate(['/login']);
      }
  }

  imagePopup()
  {
    $(document).ready(function () {
      //                                                                                                                           
         $('img').on('click', function () {
             var image = $(this).attr('src');
             //alert(image);
             $('#myModal').on('show.bs.modal', function () {
                 $(".showimage").attr("src", image);
             });
         });
     });
  }

  ActiveGroupsInDC()
  {
   
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.length>0)
      {

    // alert(this.resp.msg);
    
    // this.router.navigate(['/dcinch_dashboard']);
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

  getConsumtionData()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("grno",this.enc.encrypt(this.grno));
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("consumptiontype",this.enc.encrypt(this.consumptiontype));
    return this.http.post("api/reading-operations/get-higher-lower-consumption-report", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp1=response;
        if(this.resp1.length>0)
      {
        this.loading=false;
        this.showData=true;
        this.showData1=false;
    // alert(this.resp.msg);
    
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      this.loading=false;
        this.showData1=true;
        this.showData=false;
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
