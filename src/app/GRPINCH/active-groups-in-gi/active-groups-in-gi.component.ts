import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-active-groups-in-gi',
  templateUrl: './active-groups-in-gi.component.html',
  styleUrls: ['./active-groups-in-gi.component.css']
})
export class ActiveGroupsInGIComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  resp:any;
  error:any;
  pipeseprte:string;
  resp2:any;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    if(this.session.get('loginid')!=null && this.session.get('role')=="GroupIncharge")
    {
      this.activeGroupsinGI();
      console.log(this.pipeseprte);
    }
    else
    {
        this.router.navigate(['/login']);
    }
      
  }

  activeGroupsinGI()
  {
    this.pipeseprte="";
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.session.get('userlocation')));
    formdata.append("groupinchid",this.enc.encrypt(this.session.get('loginid')));
    return this.http.post("api/master-rec/get-groupinch-groupno-assigned", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp.length>0)
  {
    // // alert('yes');
    this.session.set("giGroups",this.resp);
  for(let data of this.resp){

    this.pipeseprte=this.pipeseprte+data.groupno+"|";
    //alert(this.pipeseprte);
  }
  this.session.set("allgroupsGI",this.pipeseprte);
  return this.pipeseprte;
  
   
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
}
