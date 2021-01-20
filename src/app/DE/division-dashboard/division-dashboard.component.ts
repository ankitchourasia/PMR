import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-division-dashboard',
  templateUrl: './division-dashboard.component.html',
  styleUrls: ['./division-dashboard.component.css']
})
export class DivisionDashboardComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loading=false;
  billmonth:string="Select Bill Month";
  showData=false;
  division = this.session.get('username');
  resp:any;
  resp2:any;
  error:any;
  showData1=false;
  showData2=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,private router:Router) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DIVISION")
    {
      // alert(this.division);
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }

  getDivisionDashboard()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("division",this.enc.encrypt(this.division));
    
    return this.http.post("api/division-dashboard/get-division-dashboard", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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

  getDCDashboard()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("division",this.enc.encrypt(this.division));
    
    return this.http.post("api/division-dashboard/get-division-dashboard-dc-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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

}
