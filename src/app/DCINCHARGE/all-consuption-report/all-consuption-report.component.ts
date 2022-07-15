import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService, LocalStorageService } from 'angular-web-storage';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';
import { TokengenratorService } from 'src/app/Util-services/tokengenerator-service';

@Component({
  selector: 'app-all-consuption-report',
  templateUrl: './all-consuption-report.component.html',
  styleUrls: ['./all-consuption-report.component.css']
})
export class AllConsuptionReportComponent implements OnInit {

  baseurl: BaseUrl = new BaseUrl();
  loccode = this.session.get('userlocation');
  billmonth: string = "Select Bill Month";
  billMonths = GlobalConstants.billMonths;
  groups : any = [];
  grno: string = "Select Group";
  loading = false;
  constructor(private enc: EncreptiondecreptionService, private genrateToken: TokengenratorService, public navCtrl: NgxNavigationWithDataComponent, private http: HttpClient, private session: SessionStorageService, private router: Router, private exportService: ExportExcelService, private localStorage: LocalStorageService) { }

  ngOnInit() {
    this.activeGroupsInDC();
  }

  activeGroupsInDC() {
    let formdata: FormData = new FormData();
    formdata.append("loccode", this.enc.encrypt(this.loccode));
    return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.groups = response;
    },
      error => {
       console.log(error);
      }
    );
  }

  consumptionList : any = [];
  getConsumtionData() {
    this.loading = true;
    let formdata: FormData = new FormData();
    formdata.append("loccode", this.enc.encrypt(this.loccode));
    formdata.append("grno", this.enc.encrypt(this.grno));
    formdata.append("billmonth", this.enc.encrypt(this.billmonth));
    return this.http.post("api/reading-operations/get-consumption-report-for-entiregroup", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.consumptionList = response;
      this.loading = false;
    },
      error => {
        this.loading = false;
        console.log(error);
      }
    );
  }


}
