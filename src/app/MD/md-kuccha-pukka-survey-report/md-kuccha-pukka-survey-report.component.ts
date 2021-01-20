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
  selector: 'app-md-kuccha-pukka-survey-report',
  templateUrl: './md-kuccha-pukka-survey-report.component.html',
  styleUrls: ['./md-kuccha-pukka-survey-report.component.css']
})
export class MdKucchaPukkaSurveyReportComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp2:any;
  error:any;
  loccode = this.session.get('userlocation');
  billmonth:string="Select Bill Month";
  circle:string="Select circle";
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private exportService:ExportExcelService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="MDOFFICE")
    {
      this.getCircle();
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }

  getCircle()
  {
      let formdata : FormData = new FormData();
      return this.http.post("api/get-data-for-survey/get-Circle-list", null).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
      {
    // alert(this.resp);
    
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

  getSurveyData()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
      formdata.append("circle",this.enc.encrypt(this.circle));
      return this.http.post("api/get-data-for-survey/get-md-record", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!=null)
      {
        //alert(this.resp.imageid);
        this.loading=false;
        this.showData=true;
        this.showData1=false;
        this.getCircle();
    }
    else
    {
      this.showData1=true;
      this.showData=false;
      // alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, 'kuchha-makaan-pakka-makaan-survey'+this.circle);
  
  }

}
