import { Injectable } from '@angular/core';
import { EncreptiondecreptionService } from './encreptiondecreption.service';
import { BaseUrl } from './base-url';
import { HttpClient } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';

@Injectable({
  providedIn: 'root'
})
export class TokengenratorService {

  constructor(private encreption:EncreptiondecreptionService,private http:HttpClient,private session:SessionStorageService) { }
resp:any;
baseurl:BaseUrl=new BaseUrl();
username:any;
token:string;
randomItem:string;
// dynamic = ["tbr","lmn","tstr","blj","vndv","matji"];
// randomItem = this.dynamic[Math.floor(Math.random()*this.dynamic.length)];
// username:string="MPEB";
// password:string="123";
userpass = ["hi-123","bye-111","this-123","rram-222","shhyam-123","mohan-555","sohan-111","ravi-123","anand-222","aaa-123","tttt-555"];
error:any;

genrateToekn(){

    this.randomItem = this.userpass[Math.floor(Math.random()*this.userpass.length)];   
    this.username=this.randomItem.split("-");
    var userid=this.username[0];
    var password=this.username[1];

  let formdata : FormData = new FormData();

  formdata.append("username",this.encreption.encrypt(userid));
  formdata.append("password",this.encreption.encrypt(password));


   return this.http.post("api/token/generate-token",formdata).subscribe(response=>
     {
       this.resp=response;
       // console.log(this.resp);
       if(this.resp!=null)      
             {
       this.session.set("token","NGBPMR "+this.resp.token);
       console.log(this.token);

       }else{
 
       }
     } ,error=>{
       this.error = error
       // this.loading=false;
         alert('Server not responding');
      });
}
 
}
