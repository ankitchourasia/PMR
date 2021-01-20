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
  selector: 'app-survey-report-overall-company',
  templateUrl: './survey-report-overall-company.component.html',
  styleUrls: ['./survey-report-overall-company.component.css']
})
export class SurveyReportOverallCompanyComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp2:any;
  error:any;
  loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private exportService:ExportExcelService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }


  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="MDOFFICE")
    {
      //this.getCompanySurveyReport();
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }

}
