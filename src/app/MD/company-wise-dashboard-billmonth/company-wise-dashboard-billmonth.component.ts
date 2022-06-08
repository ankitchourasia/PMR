import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-company-wise-dashboard-billmonth',
  templateUrl: './company-wise-dashboard-billmonth.component.html',
  styleUrls: ['./company-wise-dashboard-billmonth.component.css']
})
export class CompanyWiseDashboardBillmonthComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loading=false;
  billmonth:string="Select Bill Month";
  billMonths = GlobalConstants.billMonths;
  showData=false;
  region = this.session.get('username');
  circle:string;
  division:string;
  resp:any;
  resp2:any;
  resp3:any;
  resp4:any;
  error:any;
  showData1=false;
  showData2=false;
  showData3=false;
  showData4=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,private router:Router) { }
  
  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="MDOFFICE")
    {
      // alert(this.division);
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }
  getRegionDashboard()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    
    return this.http.post("api/md-dashboard-full/get-md-dashboard-full", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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
        //this.showData2=false;
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error;
    this.loading=false;
    alert('Server not responding');
    });
  }

  getCircleDashboard()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    //formdata.append("region",this.region);
    
    return this.http.post("api/md-dashboard-full/get-circle-wise-deatils-for-md", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
      {
        this.loading=false;
        this.showData=false;
        this.showData2=true;
        //this.showData=false;
        this.showData1=false;
     
      }
      else
      {
        this.loading=false;
        //this.showData2=false;
        this.showData1=true;
        
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error;
    this.loading=false;
    alert('Server not responding');
    });
  }

  getDivisionDashboard(circle)
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("circle",this.enc.encrypt(circle));
    
    return this.http.post("api/circle-dashboard/get-circle-dashboard-division-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp3=response;
      if(this.resp3!='')
      {
        this.loading=false;
        this.showData=false;
        this.showData2=true;
        this.showData3=true;
        //this.showData=false;
        this.showData1=false;
     
      }
      else
      {
        this.loading=false;
        //this.showData2=false;
        this.showData1=true;
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error;
    this.loading=false;
    alert('Server not responding');
    });
  }

  getDCDashboard(division)
  {
    this.loading=true;
     //alert(this.division);
     this.division=division;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("division",this.enc.encrypt(division));
    
    return this.http.post("api/division-dashboard/get-division-dashboard-dc-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp4=response;
      if(this.resp4!='')
      {
        this.loading=false;
        this.showData=false;
        this.showData3=true;
        this.showData2=false;
        this.showData4=true;
        //this.showData=false;
        this.showData1=false;
     
      }
      else
      {
        this.loading=false;
        //this.showData2=false;
        this.showData1=true;
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error;
    this.loading=false;
    alert('Server not responding');
    });
  }
}
