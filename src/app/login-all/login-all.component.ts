import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SessionStorageService,LocalStorageService} from 'angular-web-storage';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { BaseUrl } from '../Util-services/base-url';
import { TokengenratorService } from '../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-login-all',
  templateUrl: './login-all.component.html',
  styleUrls: ['./login-all.component.css']
})
export class LoginAllComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  error:any;
  loginid:string;
  password:string;
  msg:string;
  uid:string;
  upass:string;

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http:HttpClient, private router:Router, private session:SessionStorageService, public localsession:LocalStorageService) { }



  ngOnInit() {
   let urlParams = new URLSearchParams(window.location.search);
   console.log(urlParams)
   if(urlParams.has('data')){
      let resp = urlParams.get('data');
      
      console.log(resp)
      this.resp = JSON.parse(resp);
      console.log(this.resp);
      this.routeDecisionByUser();
   }
  }

  loginall()
  {
    let formdata : FormData = new FormData();

   formdata.append("loginid",this.enc.encrypt(this.loginid));
   formdata.append("password",this.enc.encrypt(this.password));

 this.http.post("api/pmr-user/login", formdata).subscribe(
   response=>{
     this.resp=response;
     this.routeDecisionByUser();
   },
    error=>{
     this.error = error
       alert('Something went wrong. Please try again letter.');
    }
  );  }

  routeDecisionByUser(){
   this.session.set("loginid",this.resp.loginid);
     this.session.set("role",this.resp.role);
     this.session.set("username",this.resp.username);
     this.session.set("userlocation",this.resp.userlocation);
     this.session.set("userofficename",this.resp.userofficename);
     this.session.set("token","NGBPMR "+this.resp.token);
     this.session.set("check","FOUNDOK");
     
     if(this.resp.flag==true && this.resp.role=="DCINCHARGE")
     {
        this.router.navigate(['/dcinch_dashboard']);
     }
       
      else if(this.resp.flag==true && this.resp.role=="GroupIncharge")
      {
        
         this.router.navigate(['/gi-dashboard']);
      }

      else if(this.resp.flag==true && this.resp.role=="DIVISION")
      {
        
         this.router.navigate(['/de_dashboard']);
      }
        
      else if(this.resp.flag==true && this.resp.role=="CIRCLE")
      {
        
         this.router.navigate(['/circle_dashboard']);
      }

      else if(this.resp.flag==true && this.resp.role=="CEUSER")
      {
        
         this.router.navigate(['/region-wise-dashboard']);
      }

      else if(this.resp.flag==true && this.resp.role=="MDOFFICE")
      {
        
         this.router.navigate(['/company-wise-dashboard']);
      }

      else if(this.resp.flag==true && this.resp.role=="SWADMIN"){
         this.router.navigate(['/admin']);
      }

      else{
         alert(this.msg=this.resp.msg);
         this.router.navigate(['/login']);
      }
  }

}
