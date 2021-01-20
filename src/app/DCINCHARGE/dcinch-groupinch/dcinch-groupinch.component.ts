import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-groupinch',
  templateUrl: './dcinch-groupinch.component.html',
  styleUrls: ['./dcinch-groupinch.component.css']
})
export class DcinchGroupinchComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
groupinchid:string;
groupinchname:string;
empno:string;
desg:string;
loccode = this.session.get('userlocation');
dcname=this.session.get('username');
password:string;
resp:any;
error:any;


  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
  }
  
  creategroupinch()
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      
      formdata.append("groupinchid",this.enc.encrypt(this.groupinchid));
      formdata.append("groupinchname", this.enc.encrypt(this.groupinchname));
      formdata.append("empno", this.enc.encrypt(this.empno));
      formdata.append("desg", this.enc.encrypt(this.desg));
      formdata.append("loccode", this.enc.encrypt(this.loccode));
      formdata.append("dcname", this.enc.encrypt(this.dcname));
      formdata.append("password", this.enc.encrypt(this.password));
      return this.http.post("api/master-rec/create-new-groupinch", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    alert(this.resp.msg);
    this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      alert(this.resp.msg);
    }
    this.groupinchid="";
    this.groupinchname="";
    this.empno="";
    this.desg="";
    this.password="";
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
