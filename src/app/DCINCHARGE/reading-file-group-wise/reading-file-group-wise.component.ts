import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { saveAs } from "file-saver";
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { DOCUMENT } from '@angular/common';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-reading-file-group-wise',
  templateUrl: './reading-file-group-wise.component.html',
  styleUrls: ['./reading-file-group-wise.component.css']
})
export class ReadingFileGroupWiseComponent implements OnInit {

  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp1:any;
  resp2:any;
  resp4:any;
  resp5:any;
  error:any;
  loccode = this.session.get('userlocation');
  billmonth:string="Select Bill Month";
  billMonths = GlobalConstants.billMonths;
  groupno:string="Select Group";
  rd:string="Select RD No.";
  loading=false;
  showData=false;
  showData1=false;
  showbutton=false;
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
  
  getReadingsData()
  {
    if(this.billmonth=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.groupno=='Select Group')
    {
      alert("Please select Group");
    }
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    return this.http.post("api/reading-ops/get-formatted-reading-file-for-group", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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
  }

  imageDownload()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("rdno",this.enc.encrypt(this.rd));
    return this.http.post("api/reading-ops/get-formatted-reading-folder-download-groupwise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp4=response;
      
        alert(this.resp4.path);
        this.showbutton=true;
        this.loading=false;
        //this.downloadZip(this.resp4.path);
              
    },
    error=>{
    this.error = error
    alert('Server not responding');
    });
  }
  downloadZip(filepath)
  {

  this.document.location.href = "api/mtr-reader/get-meter-reader-image?path="+filepath;
  }




  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, this.groupno+"_"+this.billmonth);
  }

}
