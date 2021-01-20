import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-reset-meter-reader-password',
  templateUrl: './reset-meter-reader-password.component.html',
  styleUrls: ['./reset-meter-reader-password.component.css']
})
export class ResetMeterReaderPasswordComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  dccode = this.session.get('userlocation');
  billmon:string="Select Bill Month";
  meterreaderid:string="Select Meter Reader";
  newpass:string;
  resp:any;
  resp2:any;
  error:any;
  showData=false;
  loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService, private router:Router,private exportService:ExportExcelService) { }

  ngOnInit() 
  {
    this.listOfverifiedMtrrdr();
  }
  listOfverifiedMtrrdr()
  {
    
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.dccode));
      return this.http.post("api/mtr-reader/get-verified-readers-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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

  changePassword()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("mtrreaderid",this.enc.encrypt(this.meterreaderid));
    formdata.append("loccode",this.enc.encrypt(this.dccode));
    formdata.append("newpassword",this.enc.encrypt(this.newpass));
    return this.http.post("api/mtr-reader/reset-mtr-reader-pass", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2.flag==true)
  {
    this.loading=false;
  alert(this.resp2.msg);
  // this.router.navigate(['/dcinch_dashboard']);
  }
  else
  {
    this.loading=false;
          alert(this.resp2.msg);
  }
},
error=>{
 this.error = error
   alert('Server not responding');
}
);
  }

}
