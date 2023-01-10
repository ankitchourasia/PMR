import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-consumption-comparison-report',
  templateUrl: './consumption-comparison-report.component.html',
  styleUrls: ['./consumption-comparison-report.component.css']
})
export class ConsumptionComparisonReportComponent implements OnInit {

  billmon : any;
  loading : boolean;
  billMonths = GlobalConstants.billMonths;
  locationCode = this.session.get('userlocation');
  groups : any = [];
  groupno;
  readings : any = [];
  consumption : any;
  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService) { }

  ngOnInit() {
    this.getGroupsByLocationCode();
  }

  getGroupsByLocationCode(){
    this.groups = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.groups = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  searchButtonClicked(){
    this.readings = [];
    if(this.consumption === "UNDERPERCENT"){
      this.getReadingsBelow90PercentByGroupNo();
    } else if(this.consumption === "OUTOFPERCENT"){
      this.getReadingsAbove120PercentByGroupNo();
    } else {
      console.log("Invalid choice");
    }
  }

  getReadingsBelow90PercentByGroupNo(){
    let formdata : FormData = new FormData();
    formdata.append("billmonth", this.enc.encrypt(this.billmon));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    return this.http.post("api/new-version-dc-status/get-bill-mon-less-then-90-percent", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      this.readings = success;
    },
    error=>{
      console.log(error);
    });
  }

  getReadingsAbove120PercentByGroupNo(){
    let formdata : FormData = new FormData();
    formdata.append("billmonth", this.enc.encrypt(this.billmon));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    return this.http.post("api/new-version-dc-status/get-bill-mon-higher-then-125-percent", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      this.readings = success;
    },
    error=>{
      console.log(error);
    });
  }
}
