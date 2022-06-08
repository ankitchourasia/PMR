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
  selector: 'app-assign-scheduled-complete-group-to-meter-reader',
  templateUrl: './assign-scheduled-complete-group-to-meter-reader.component.html',
  styleUrls: ['./assign-scheduled-complete-group-to-meter-reader.component.css']
})
export class AssignScheduledCompleteGroupToMeterReaderComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  meterreaderid:string;
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
  resp:any;
  resp2:any;
  error:any;
  showData=false;
  loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {

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
    return this.http.post("api/schedule-ops/get-groupsonly-scheduled-allgroups-for-billmonth", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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


  assigngrouptoMeterReader(groupno)
  {
    this.session.set("groupno",groupno);
    this.session.set("billmon",this.billmon);
    this.navCtrl.navigate('assign-complete-group-to-reader',{groupno:groupno,billmon:this.billmon});
  }
}
