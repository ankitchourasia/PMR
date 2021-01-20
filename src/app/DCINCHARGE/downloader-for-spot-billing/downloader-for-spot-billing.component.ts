import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-downloader-for-spot-billing',
  templateUrl: './downloader-for-spot-billing.component.html',
  styleUrls: ['./downloader-for-spot-billing.component.css']
})
export class DownloaderForSpotBillingComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  error:any;
  downloader:FileList;
  loading=false;
  userloginid=this.session.get('loginid');
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
  }
  checkfile(event):void
  {
    this.downloader=event.target.files;
    // alert("called to file"+this.billfile.item(0));
  }
  uploadFile():void
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("downloader",this.downloader.item(0), this.downloader.item(0).name);
    formdata.append("userloginid",this.enc.encrypt(this.userloginid));

    let header:HttpHeaders = new HttpHeaders();
    header.append('Content-Type','multipart/formdata');
    this.http.post("api/upload-file/bill-downloader-from-ccnb",formdata,{headers:header}).subscribe(
      response=>
      {
        this.resp=response;
        if (this.resp !=null) {
          this.loading=false;
          alert(this.resp.msg);
          //location.reload();
        } 
        else{
          this.loading=false;
        }
      }
      ,error=>{alert("error");
       this.loading=false;
    });
      
    
    

    }
}
