import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
@Component({
  selector: 'app-generate-qr-code',
  templateUrl: './generate-qr-code.component.html',
  styleUrls: ['./generate-qr-code.component.css']
})
export class GenerateQrCodeComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  ivrs:string;
  resp:any;
  error:any;
  loading=false;
  showData=false;
  showIvrs=true;
  showData1=false;
  consumername:string;
  address:string;
  filepath:string;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
  }

  getQrCode()
  {


    if(this.ivrs=='')
    {
      alert("Please enter ivrs no.");
    }
    
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("ivrs",this.enc.encrypt(this.ivrs));
    return this.http.post("api/qr-code-generation/generate", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp.flag=true)
  {
    alert(this.resp.msg);
  this.loading=false;
  this.consumername=this.resp.conusmername;
  this.address=this.resp.address;
  this.filepath=this.resp.filepath;
  this.showData=true;
  this.showIvrs=false;

  }
  else
  {
    alert(this.resp.msg);
     this.loading=false;
     this.showData=false;
     this.showIvrs=false;
  }
},
error=>{
 this.error = error
 this.loading=false;
   alert('Server not responding');
}
);
  }
  }

  printDiv(divName) {
  
    window.print();
  
  }
  
}
