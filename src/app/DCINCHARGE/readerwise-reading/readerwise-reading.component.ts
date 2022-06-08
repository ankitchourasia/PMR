import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-readerwise-reading',
  templateUrl: './readerwise-reading.component.html',
  styleUrls: ['./readerwise-reading.component.css']
})
export class ReaderwiseReadingComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  dccode = this.session.get('userlocation');
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
readerid:string="Select Meter Reader";
  resp:any;
  resp2:any;
  error:any;
  showData=false;
  loading=false;
  meterreaderid:string="Select Meter Reader";

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService, private router:Router,private exportService:ExportExcelService) { }

  ngOnInit() {
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

  getReaderwiseReport()
  {
    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.meterreaderid=='Select Meter Reader')
    {
      alert("Please select reader id");
    }
    else
    {
      this.loading=true;
    let formdata : FormData = new FormData();
    let data = this.meterreaderid.split("--")
    
    let id = data[0]
    let name =  data[1]

      formdata.append("loccode",this.enc.encrypt(this.dccode));
      formdata.append("billmonth",this.enc.encrypt(this.billmon));
      formdata.append("readerid",this.enc.encrypt(id));
      return this.http.post("api/reading-operations/get-meter-reader-wise-data", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!=null)
    {
      this.showData=true;
      this.loading=false;
    }
    else
    {
      this.loading=false;
      // alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
}
  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, 'reader-wise-reading-report');
  
  }

}
