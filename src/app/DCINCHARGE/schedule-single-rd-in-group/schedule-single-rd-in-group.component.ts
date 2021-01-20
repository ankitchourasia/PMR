import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-schedule-single-rd-in-group',
  templateUrl: './schedule-single-rd-in-group.component.html',
  styleUrls: ['./schedule-single-rd-in-group.component.css']
})
export class ScheduleSingleRdInGroupComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  dcname = this.session.get('username');
  usertype = this.session.get('role');
  loginid = this.session.get('loginid');
  resp:any;
  resp2:any;
  error:any;
  groupno:string;
  loading=false;
  showData=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http:HttpClient,private router:Router,private route: ActivatedRoute, private session:SessionStorageService) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
    this.ActiveGroupsInDC();
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

 
  ActiveRdinGroup()
{      
  this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("grno",this.enc.encrypt(this.groupno));
      return this.http.post("api/master-rec/get-list-of-rds-in-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!=null)
    {
      this.loading=false;
  this.showData=true;
    }
    else   
    {
      this.loading=false;
    }
  },
  error=>{
   this.error = error
   this.loading=false;
     alert('Server not responding');
  }
);
  
}
scheduleSingleRd(groupno,rdno)
{

  this.session.set("groupno",groupno);
  this.session.set("rdno",rdno);
    this.navCtrl.navigate('scheduled-an-rd-to-group',{groupno:groupno,rdno:rdno});
//   let formdata : FormData = new FormData();
//   formdata.append("loccode",this.loccode);
//   formdata.append("groupno",groupno);
//   formdata.append("rdno",rdno);
//   formdata.append("usertype",this.usertype);
//   formdata.append("loginid",this.loginid);
//   return this.http.post("api/master-rec/get-list-of-rds-in-groups-in-dc", formdata).subscribe(response=>
//   {
//     this.resp2=response;
//     if(this.resp2!=null)
// {
//   this.showData=true; 
// }
// else
// {
 
// }
// },
// error=>{
// this.error = error
//  alert('Server not responding');
// }
// );
}

}
