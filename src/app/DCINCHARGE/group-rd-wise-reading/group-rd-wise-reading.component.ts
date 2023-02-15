import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { _MatChipListMixinBase } from '@angular/material';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-group-rd-wise-reading',
  templateUrl: './group-rd-wise-reading.component.html',
  styleUrls: ['./group-rd-wise-reading.component.css']
})
export class GroupRdWiseReadingComponent implements OnInit {

  billmon : any;
  loading : boolean;
  billMonths = GlobalConstants.billMonths;
  locationCode = this.session.get('userlocation');
  groups : any = [];
  groupno;
  readings : any = [];
  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService, private exportService: ExportExcelService) { }

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

  rdNumbers : any = [];
  rdNo : string;
  getRDByGroupNo(){
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    return this.http.post("api/master-rec/get-list-of-rds-in-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.rdNumbers = success;
    },
    error=>{
      console.log(error);
    });
  }

  searchButtonClicked(){
    this.readings = [];
    if(this.rdNo === "ALL"){
      this.getReadingsByGroupNo();
    } else{
      this.getReadingsByGroupNoAndRDNo();
    }
  }

  getReadingsByGroupNo(){
    let formdata : FormData = new FormData();
    formdata.append("billmonth", this.enc.encrypt(this.billmon));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    return this.http.post("api/new-version-dc-status/get-bill-mon-group-read", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      this.readings = success;
    },
    error=>{
      console.log(error);
    });
  }

  getReadingsByGroupNoAndRDNo(){
    let formdata : FormData = new FormData();
    formdata.append("billmonth", this.enc.encrypt(this.billmon));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    formdata.append("rd",this.enc.encrypt(this.rdNo));
    return this.http.post("api/new-version-dc-status/get-bill-mon-group-rd-read", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      this.readings = success;
    },
    error=>{
      console.log(error);
    });
  }

  exportClicked(){
    this.exportService.exportAsExcelFile(this.readings, this.groupno + "_" + this.rdNo + "_" + this.billmon + "_Readings");
  }
}
