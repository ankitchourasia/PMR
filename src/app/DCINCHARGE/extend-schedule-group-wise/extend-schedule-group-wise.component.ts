import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-extend-schedule-group-wise',
  templateUrl: './extend-schedule-group-wise.component.html',
  styleUrls: ['./extend-schedule-group-wise.component.css']
})
export class ExtendScheduleGroupWiseComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  meterreaderid:string;
  billmonth:string="Select Bill Month";
  groupno:string="Select Group";
  resp:any;
  resp2:any;
  error:any;
  startdate:string;
  showData=false;
  showData1=false;
  loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

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
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
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

  getExtendScheduleGroup()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("billmon",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    return this.http.post("api/schedule-ops/get-schedule-of-a-group-for-billmonth", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!=null)
  {
  //   this.loading=false;
  // this.showData=true;
  for(let data of this.resp)
  { this.startdate=data.startdate;}
   

    this.extendSchedule();

  }
  else
  {
   // this.loading=false;
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

  extendSchedule()
  {
    this.session.set("groupno",this.groupno);
    this.session.set("billmon",this.billmonth);
    this.session.set("startdate",this.startdate);
    this.navCtrl.navigate('select-date-to-extend-group-schedule',{groupno:this.groupno,billmon:this.billmonth,startdate:this.startdate});
  }

}
