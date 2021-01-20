import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-add-rd-to-group',
  templateUrl: './dcinch-add-rd-to-group.component.html',
  styleUrls: ['./dcinch-add-rd-to-group.component.css']
})
export class DcinchAddRdToGroupComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  dcname = this.session.get('username');
  resp:any;
  error:any;
  groupno:string;
  rdno:string;
  resp2:any;
  resp3:any;
  resp4:any;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http:HttpClient,private router:Router,private route: ActivatedRoute, private session:SessionStorageService) { }

  ngOnInit() 
  {
    this.groupno=this.session.get('groupno');
    this.ActiveRdinGroup();
    this.DeactiveRdinGroup();
  }
addRDToGroup()
{
  if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("dcname",this.enc.encrypt(this.dcname));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      formdata.append("rdno",this.enc.encrypt(this.rdno));
      return this.http.post("api/master-rec/add-a-rd-to-group-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    // alert(this.resp.msg);
    this.ActiveRdinGroup();
    }
    else
    {
      alert(this.resp.msg);
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
deactivateRD(rdno,grno)
  {
  
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("grno",this.enc.encrypt(grno));
      formdata.append("rdno",this.enc.encrypt(rdno));
      return this.http.post("api/master-rec/deactivate-a-rd-in-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2.flag==true)
    {
    // alert(this.resp2.msg);
   this.ActiveRdinGroup();
   this.DeactiveRdinGroup();
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      // alert(this.resp2.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }


  ActiveRdinGroup()
{
 
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("grno",this.enc.encrypt(this.groupno));
      return this.http.post("api/master-rec/get-list-of-rds-in-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp3=response;
        if(this.resp3.flag==true)
    {
    // alert(this.resp3.msg);
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      // alert(this.resp3.msg);
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

DeactiveRdinGroup()
{
 
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("grno",this.enc.encrypt(this.groupno));
      return this.http.post("api/master-rec/get-list-of-deactive-rds-in-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp4=response;
        if(this.resp4.flag==true)
    {
    // alert(this.resp4.msg);
    this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      // alert(this.resp4.msg);
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

}


