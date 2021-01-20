import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService,LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-delete-reading-remark',
  templateUrl: './delete-reading-remark.component.html',
  styleUrls: ['./delete-reading-remark.component.css']
})
export class DeleteReadingRemarkComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  custid:string;
  billmonth:string;
  remark:string;
  resp:any;
  error:any;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService,private localStorage:LocalStorageService) { }

  ngOnInit() {
    this.custid=this.session.get('custid');
    this.billmonth=this.session.get('billmonth');
  }

  deleteReading()
{
 
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(this.custid));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  formdata.append("loccode",this.enc.encrypt(this.loccode));
  formdata.append("remark",this.enc.encrypt(this.remark));
  
  return this.http.post("api/reading-operations/delete-a-reading", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp=response;
    if(this.resp!=null)
    {
      
    alert(this.resp.msg);
    this.router.navigateByUrl('/dcinch_dashboard', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/reading-for-verification"])); 
    // this.router.navigate(['/']);
    }
    else
    {
      // alert(this.resp.msg);
    }
  },
  error=>{
  this.error = error
  alert('Server not responding');
  });
}
}
