import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { DOCUMENT } from '@angular/common';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-check-status-of-uploaded-files-to-ngb',
  templateUrl: './check-status-of-uploaded-files-to-ngb.component.html',
  styleUrls: ['./check-status-of-uploaded-files-to-ngb.component.css']
})
export class CheckStatusOfUploadedFilesToNgbComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loading=false;
  showData=false;
  datefrom:string;
  dateto:string;
  loccode = this.session.get('loginid');
  resp:any;
  resp1:any;
  resp2:any;
  resp3:any;
  error:any;
  showData1=false;

  constructor(@Inject(DOCUMENT) private document: any,private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,private router:Router) { }
  
  ngOnInit() 
  {

    $( function() 
    {
      $( "#from" ).datepicker(
      {
        dateFormat: 'dd-M-y'
      });
      $( "#to" ).datepicker(
        {
          dateFormat: 'dd-M-y'
        });
    });
  }

  getCompanyWiseDashboard()
  {
    this.loading=true;
    this.datefrom = $("#from").val().toUpperCase();
    this.dateto = $("#to").val().toUpperCase();

    let formdata : FormData = new FormData();
    formdata.append("date1",this.enc.encrypt(this.datefrom));
    formdata.append("date2",this.enc.encrypt(this.dateto));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/get-status-of-uploaded-file/get-current-status", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!='')
      {
        this.loading=false;
        this.showData=true;
        this.showData1=false;
      }
      else
      {
        this.loading=false;
        this.showData1=true;
        this.showData=false;
      }
    },
    error=>{
    this.error = error;
    this.loading=false;
    alert('Server not responding');
    });
  }

  downloadRejectedFiles(fileid)
  {
    this.loading=true;
     let formdata : FormData = new FormData();
    formdata.append("rejectedfileid",this.enc.encrypt(fileid));
    
    return this.http.post("api/get-status-of-uploaded-file/get-rejected-file-path", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
      {
        this.loading=false;
        this.downloadFile(this.resp2.filepath);
      }
      else
      {
        this.loading=false;
      
      }
    },
    error=>{
    this.error = error;
    this.loading=false;
    alert('Server not responding');
    });
  }

  downloadFile(filepath)
  {
    // this.http.get("api/mtr-reader/get-meter-reader-image?path="+filepath).subscribe(response=>{
    //   this.resp3=response;
    //   this.loading=false;
    
    // });
    this.document.location.href = "api/mtr-reader/get-meter-reader-image?path="+filepath;
    // return this.http.get("api/mtr-reader/get-meter-reader-image?path=filepath")
     
  }
}
