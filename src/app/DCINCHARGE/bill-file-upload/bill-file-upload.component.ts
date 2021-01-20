import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-bill-file-upload',
  templateUrl: './bill-file-upload.component.html',
  styleUrls: ['./bill-file-upload.component.css']
})
export class BillFileUploadComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  error:any;
  billfile:FileList;
  loading=false;
  userloginid=this.session.get('loginid');
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
  }
  checkfile(event):void
  {
    this.billfile=event.target.files;
    // alert("called to file"+this.billfile.item(0));
  }
  uploadFile():void
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billfile",this.billfile.item(0), this.billfile.item(0).name);
    formdata.append("userloginid",this.enc.encrypt(this.userloginid));

    let header:HttpHeaders = new HttpHeaders();
    header.append('Content-Type','multipart/formdata');
    this.http.post("api/upload-file/bill-file",formdata,{headers:header}).subscribe(
      response=>
      {
        this.resp=response;
        if (this.resp !=null) {
          this.loading=false;
          alert(this.resp.msg);
          location.reload();
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
