import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { DOCUMENT } from '@angular/common';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-spot-bill-downloader-ccnb',
  templateUrl: './spot-bill-downloader-ccnb.component.html',
  styleUrls: ['./spot-bill-downloader-ccnb.component.css']
})
export class SpotBillDownloaderCcnbComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp2:any;
  resp3:any;
  error:any;
  loading=false;
  showData=false;
  showData1=false;
  showbutton=false;
  loccode = this.session.get('userlocation');
  billmonth:string;
  billMonths = GlobalConstants.billMonths;
  groupno:string="Select Group";
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private exportService:ExportExcelService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,@Inject(DOCUMENT) private document: any) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      this.ActiveGroupsInDC();
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }
  ActiveGroupsInDC()
  {
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
      {
    // alert(this.resp.msg);
    
    // this.router.navigate(['/dcinch_dashboard']);
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

  getDownloaderData()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    return this.http.post("api/get-spot-bill/uploader", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
      {
        this.loading=false;
        this.showData=true;
    
      }
      else
      {
        this.loading=false;
        this.showData1=true;
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error
    this.loading=false;
    alert('Server not responding');
    });
  }

 
  prepareDownload()
  {
    this.loading=true;
     let formdata : FormData = new FormData();
    // formdata.append("billmonth",this.billmonth);
    // formdata.append("grno",this.groupno);
     formdata.append("loccode",this.enc.encrypt(this.loccode));
    return this.http.post("api/get-spot-bill/doller-sep-file", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp3=response;
      
        alert(this.resp3.path);
        this.showbutton=true;
        this.loading=false;
        //this.downloadZip(this.resp4.path);
              
    },
    error=>{
    this.error = error
    alert('Server not responding');
    });
  }
  downloadFile(filepath)
  {
  this.document.location.href = "api/mtr-reader/get-meter-reader-image?path="+filepath;
  }

  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, 'ccdnl_'+this.groupno+"_"+this.billmonth);
  
  }


 
}
