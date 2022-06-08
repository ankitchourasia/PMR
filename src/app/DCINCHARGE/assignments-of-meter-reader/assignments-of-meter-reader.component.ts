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
  selector: 'app-assignments-of-meter-reader',
  templateUrl: './assignments-of-meter-reader.component.html',
  styleUrls: ['./assignments-of-meter-reader.component.css']
})
export class AssignmentsOfMeterReaderComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  dccode = this.session.get('userlocation');
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
  meterreaderid:string="Select Meter Reader";
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

  getAssignmentsOfReader()
  {
    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.meterreaderid=='Select Meter Reader')
    {
      alert("Please select meter reader id");
    }
    else
    {
      this.loading=true;
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.dccode));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
      formdata.append("meterreaderid",this.enc.encrypt(this.meterreaderid));
      return this.http.post("api/meter-reader-assignment-ops/get-my-assignments", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!=null)
    {
      this.showData=true;
      this.loading=false;
    }
    else
    {
      // alert(this.resp.msg);
      this.loading=false;
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
    this.exportService.exportAsExcelFile(this.resp2, 'all-assignments-to-reader');
  
  }
}
