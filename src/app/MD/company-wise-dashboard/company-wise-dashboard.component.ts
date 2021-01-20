import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-company-wise-dashboard',
  templateUrl: './company-wise-dashboard.component.html',
  styleUrls: ['./company-wise-dashboard.component.css']
})

export class CompanyWiseDashboardComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loading=false;
  showData=false;
  datefrom:string;
  dateto:string;
  circle:string;
  division:string;
  resp:any;
  resp1:any;
  resp2:any;
  resp3:any;
  error:any;
  showData1=false;
  showData2=false;
  showData3=false;
  showData4=false;

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,private router:Router) { }
  
  ngOnInit() 
  {

    $( function() 
    {
      $( "#from" ).datepicker(
      {
        dateFormat: 'dd-M-y'
      });
      $( "#to" ).datepicker(
        {
          dateFormat: 'dd-M-y'
        });
    });
  
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="MDOFFICE")
    {
      // alert(this.division);
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }

  getCompanyWiseDashboard()
  {
    this.loading=true;
    this.datefrom = $("#from").val().toUpperCase();
    this.dateto = $("#to").val().toUpperCase();

    let formdata : FormData = new FormData();
    formdata.append("date1",this.enc.encrypt(this.datefrom));
    formdata.append("date2",this.enc.encrypt(this.dateto));
    
    return this.http.post("api/md-dashboard/get-counts-for-dates", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!='')
      {
        this.loading=false;
        this.showData=true;
        this.showData1=false;
        this.getCircleDashboard();
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
    this.datefrom = $("#from").val().toUpperCase();
    this.dateto = $("#to").val().toUpperCase();

    let formdata : FormData = new FormData();
    formdata.append("date1",this.enc.encrypt(this.datefrom));
    formdata.append("date2",this.enc.encrypt(this.dateto));
    
    return this.http.post("api/md-dashboard/get-circle-wise-count-for-dates", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp1=response;
      if(this.resp1!='')
      {
        this.loading=false;
        this.showData=true;
        this.showData2=true;
        this.showData1=false;
     
      }
      else
      {
        this.loading=false;
        this.showData1=true;
        this.showData=false;
        this.showData2=false;
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

  getdivisionDashboard(circle)
  {
    this.loading=true;
    this.datefrom = $("#from").val().toUpperCase();
    this.dateto = $("#to").val().toUpperCase();

    let formdata : FormData = new FormData();
    formdata.append("date1",this.enc.encrypt(this.datefrom));
    formdata.append("date2",this.enc.encrypt(this.dateto));
    formdata.append("circle",this.enc.encrypt(circle));
    return this.http.post("api/md-dashboard/get-division-wise-count-for-dates", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
      {
        this.loading=false;
        this.showData=true;
        this.showData3=true;
        this.showData2=false;
        this.showData1=false;
     
      }
      else
      {
        this.loading=false;
        this.showData1=true;
        this.showData=false;
        this.showData3=false;
        this.showData2=false;
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

  getDcDashboard(division)
  {
    this.loading=true;
    this.datefrom = $("#from").val().toUpperCase();
    this.dateto = $("#to").val().toUpperCase();

    let formdata : FormData = new FormData();
    formdata.append("date1",this.enc.encrypt(this.datefrom));
    formdata.append("date2",this.enc.encrypt(this.dateto));
    formdata.append("division",this.enc.encrypt(division));
    return this.http.post("api/md-dashboard/get-dc-wise-count-for-dates", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp3=response;
      if(this.resp3!='')
      {
        this.loading=false;
        this.showData=true;
        this.showData3=true;
        this.showData4=true;
        this.showData2=false;
        this.showData1=false;
     
      }
      else
      {
        this.loading=false;
        this.showData1=true;
        this.showData=false;
        this.showData3=false;
        this.showData4=false;
        this.showData2=false;
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
}
