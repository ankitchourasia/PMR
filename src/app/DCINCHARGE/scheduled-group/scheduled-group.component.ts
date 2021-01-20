import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-scheduled-group',
  templateUrl: './scheduled-group.component.html',
  styleUrls: ['./scheduled-group.component.css']
})
export class ScheduledGroupComponent implements OnInit {
baseurl:BaseUrl= new BaseUrl();
groupno:string;
billmon:string="Select Bill Month";
operationtype:string="Select operation Type";
loccode = this.session.get('userlocation');
loginid=this.session.get('loginid');
resp:any;
error:any;
loading=false;
  showData=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    this.groupno=this.session.get('groupno');
  }
  submitScheduled()
  {
    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.operationtype=='Select operation Type')
    {
      alert("Please select operation type");
    }
    else
    {
      
      if(this.operationtype=="PMRSPOTBILLBOTH")
      {
        alert("Please Select operation type PMR ONLY");
        return false;
      }
      else
      {
        this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      formdata.append("loginid",this.enc.encrypt(this.loginid));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
      formdata.append("operationtype",this.enc.encrypt(this.operationtype));
      return this.http.post("api/schedule-ops/schedule-a-group-completely", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    alert(this.resp.msg);
    this.loading=false;
    this.router.navigate(['/schedule-a-complete-group']);
    }
    else
    {
       alert(this.resp.msg);
       this.loading=false;
    }
  
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
  }
}
}
