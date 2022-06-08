import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-assign-scheduled-rd-to-meter-reader-gi',
  templateUrl: './assign-scheduled-rd-to-meter-reader-gi.component.html',
  styleUrls: ['./assign-scheduled-rd-to-meter-reader-gi.component.css']
})
export class AssignScheduledRdToMeterReaderGiComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  meterreaderid:string;
  billmon:string="";
  billMonths = GlobalConstants.billMonths;
  allgroupsGI:string;
  resp:any;
  resp2:any;
  error:any;
  giGroups:any;
  showData=false;
  
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    this.giGroups=this.session.get('giGroups');
    this.allgroupsGI=this.session.get('allgroupsGI');
    
      // alert(this.allgroupsGI);
    
  }

  getGroupforBillMonth()
  {
    
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("billmon",this.enc.encrypt(this.billmon));
    formdata.append("groups",this.enc.encrypt(this.allgroupsGI));
    return this.http.post("api/schedule-ops/get-schedule-of-a-multigroups-for-billmonth", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!=null)
  {
   
  this.showData=true;

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


  assigngrouptoMeterReader(groupno,rdno,billmon)
  {
    this.session.set("groupno",groupno);
    this.session.set("rdno",rdno);
    this.session.set("billmon",billmon);
    this.navCtrl.navigate('assign-an-rd-to-reader-GI',{groupno:groupno,rdno:rdno,billmon:billmon});
  }

}
