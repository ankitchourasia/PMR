import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-list-of-created-schedule',
  templateUrl: './list-of-created-schedule.component.html',
  styleUrls: ['./list-of-created-schedule.component.css']
})
export class ListOfCreatedScheduleComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  meterreaderid:string;
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
  groupno:string="Select group no.";
  resp:any;
  resp1:any;
  resp2:any;
  error:any;
  loading=false;
  showData=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService) { }

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
  ActiveGroupsInDC()
  {
    //this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp1=response;
        if(this.resp1.length>0)
      {
    // alert(this.resp.msg);
    //this.loading=false;
    
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      //this.loading=false;

      // alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
  getGroupforBillMonth()
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
    formdata.append("billmon",this.enc.encrypt(this.billmon));
    return this.http.post("api/schedule-ops/get-schedule-of-a-allgroups-for-billmonth", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!=null)
  {
   this.loading=false;
  this.showData=true;

  }
  else
  {
    this.loading=false;
    // alert(this.resp.msg);
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

  listOfverifiedMtrrdr()
  {
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/mtr-reader/get-verified-readers-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!=null)
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

  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, 'list-of-created-schedule');
  
  }


  getScheduleGroupWise()
  {
    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.groupno=='Select group no.')
    {
      alert("Please select group no.")
    }
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("billmon",this.enc.encrypt(this.billmon));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    return this.http.post("api/schedule-ops/get-schedule-of-a-group-for-billmonth", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!=null)
  {
   this.loading=false;
  this.showData=true;

  }
  else
  {
    this.loading=false;
    // alert(this.resp.msg);
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
