import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-list-of-active-groupinch',
  templateUrl: './dcinch-list-of-active-groupinch.component.html',
  styleUrls: ['./dcinch-list-of-active-groupinch.component.css']
})
export class DcinchListOfActiveGroupinchComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  resp:any;
  error:any;
  resp2:any;
  resp3:any;
  resp4:any;
  groupinchid:string;
  groupno:string;
  showGroups=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/list-of-active-groupinch", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    // alert(this.resp.msg);
    this.router.navigate(['/dcinch_dashboard']);
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
  else  
  {
      this.router.navigate(['/login']);
  }
  }
 

  removeGroupInch(groupinchid)
  {
    // alert(groupinchid)
    let formdata : FormData = new FormData();
      formdata.append("groupinchid",this.enc.encrypt(groupinchid));
      return this.http.post("api/master-rec/remove-groupinch", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2.flag==true)
    {
    alert(this.resp2.msg);
    this.router.navigate(['/dcinch_dashboard']);
    
    }
    else
    {
      alert(this.resp2.msg);
      this.router.navigate(['/ogin']);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }

  assignGroupToInch(groupinchid)
  {
    this.showGroups=true;
    this.session.set("groupinchid",groupinchid);
    this.groupinchid=groupinchid;
    this.ActiveGroupsInDC();
  }
  ActiveGroupsInDC()
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp3=response;
        if(this.resp3.flag==true)
    {
    // alert(this.resp.msg);
    
    this.router.navigate(['/dcinch_dashboard']);
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
  else  
  {
      this.router.navigate(['/login']);
  }
}

AssignedgroupToInch()
{
      let formdata : FormData = new FormData();
      formdata.append("groupinchid",this.enc.encrypt(this.groupinchid));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      alert(this.groupno);
      formdata.append("loccode",this.loccode);
      return this.http.post("api/master-rec/assign-group-to-incharge", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp4=response;
        if(this.resp4.flag==true)
    {
    alert("Group"+this.groupno+" assign to groupincharge"+this.groupinchid+"---"+this.resp4.msg);
    
    this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      alert(this.resp4.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  
  
}
}
