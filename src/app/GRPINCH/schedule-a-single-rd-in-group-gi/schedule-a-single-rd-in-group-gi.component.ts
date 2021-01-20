import { Component, OnInit } from '@angular/core';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-schedule-a-single-rd-in-group-gi',
  templateUrl: './schedule-a-single-rd-in-group-gi.component.html',
  styleUrls: ['./schedule-a-single-rd-in-group-gi.component.css']
})
export class ScheduleASingleRdInGroupGIComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  dcname = this.session.get('username');
  usertype = this.session.get('role');
  loginid = this.session.get('loginid');
  resp:any;
  resp2:any;
  error:any;
  groupno:string;
  showData=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http:HttpClient,private router:Router,private route: ActivatedRoute, private session:SessionStorageService) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="GroupIncharge")
    {
    this.activeGroupsinGI();
    }
    else
    {
        this.router.navigate(['/login']);
    }
  }
  activeGroupsinGI()
  {
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.session.get('userlocation')));
    formdata.append("groupinchid",this.enc.encrypt(this.session.get('loginid')));
    return this.http.post("api/master-rec/get-groupinch-groupno-assigned", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp.length>0)
  {
    // // alert('yes');
    // this.session.set("groupList",this.resp);
    // this.show=true;
  }
  else
  {
    // // alert('No');
    // this.show=false;
    // // alert(this.resp.msg);
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
     
        
        let formdata : FormData = new FormData();
        formdata.append("loccode",this.enc.encrypt(this.loccode));
        formdata.append("grno",this.enc.encrypt(this.groupno));
        return this.http.post("api/master-rec/get-list-of-rds-in-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
        {
          this.resp2=response;
          if(this.resp2!=null)
      {
        this.showData=true; 
      }
      else
      {
       
      }
    },
    error=>{
     this.error = error
       alert('Server not responding');
    }
  );
    
  }
  scheduleSingleRd(groupno,rdno)
  {
  
    this.session.set("groupno",groupno);
    this.session.set("rdno",rdno);
      this.navCtrl.navigate('scheduled-an-rd-to-GI',{groupno:groupno,rdno:rdno});
  }
  
}
