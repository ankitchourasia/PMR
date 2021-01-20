import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-circle-wise-dashboard',
  templateUrl: './circle-wise-dashboard.component.html',
  styleUrls: ['./circle-wise-dashboard.component.css']
})
export class CircleWiseDashboardComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loading=false;
  billmonth:string="Select Bill Month";
  showData=false;
  circle = this.session.get('username');
  resp:any;
  resp2:any;
  resp3:any;
  error:any;
  division:string;
  showData1=false;
  showData2=false;
  showData3=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,private router:Router) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="CIRCLE")
    {
      //  alert(this.circle);
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }

  getCircleDashboard()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("circle",this.enc.encrypt(this.circle));
    
    return this.http.post("api/circle-dashboard/get-circle-dashboard", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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

  getDivisionDashboard()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("circle",this.enc.encrypt(this.circle));
    
    return this.http.post("api/circle-dashboard/get-circle-dashboard-division-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
      {
        this.loading=false;
        this.showData=true;
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
      this.resp3=response;
      if(this.resp3!='')
      {
        this.loading=false;
        this.showData=false;
        this.showData3=true;
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

}
