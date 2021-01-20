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
  selector: 'app-kuccha-pukka-survey-report',
  templateUrl: './kuccha-pukka-survey-report.component.html',
  styleUrls: ['./kuccha-pukka-survey-report.component.css']
})
export class KucchaPukkaSurveyReportComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp2:any;
  error:any;
  loccode = this.session.get('userlocation');
  billmonth:string="Select Bill Month";
  groupno:string="Select Group";
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private exportService:ExportExcelService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

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

  getSurveyData()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("grno",this.enc.encrypt(this.groupno));
      return this.http.post("api/dcuser-survey-report/get-for-group", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!=null)
      {
        //alert(this.resp.imageid);
        this.loading=false;
        this.showData=true;
        this.showData1=false;
        this.ActiveGroupsInDC();
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
    this.exportService.exportAsExcelFile(this.resp2, 'kuchha-makaan-pakka-makaan-survey'+this.groupno);
  
  }

}
