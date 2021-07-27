import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { formatDate } from '@angular/common';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
declare var $ :any;

@Component({
  selector: 'app-de-reading-verification-dashboard',
  templateUrl: './de-reading-verification-dashboard.component.html',
  styleUrls: ['./de-reading-verification-dashboard.component.css']
})
export class DeReadingVerificationDashboardComponent implements OnInit {

  readings : any;
  date1 : any;
  date2 : any;
  currentDate = new Date();
  divisionName = this.session.get('userlocation');
  constructor(private session : SessionStorageService, private http: HttpClient, private enc: EncreptiondecreptionService, private exportService:ExportExcelService) { }

  ngOnInit() {
  }

  dateChanged(){
    this.readings = undefined;
  }

  formattedDate1 : string;
  formattedDate2 : string;
  loading : boolean;
  searchButtonClicked(){
    this.loading = true;
    let formdata : FormData = new FormData();
    this.formattedDate1 = formatDate(this.date1, "dd-MMM-yy", "en-US");
    this.formattedDate2 = formatDate(this.date2, "dd-MMM-yy", "en-US");
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("date1",this.enc.encrypt(this.formattedDate1));
    formdata.append("date2",this.enc.encrypt(this.formattedDate2));
    return this.http.post("api/division-validation/get-div-month-counts", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.readings = success;
      console.log(this.readings);
    }, error=>{
      this.loading = false;
    console.log(error);
     alert(error.msg);
    });
  }

  dataToExport : any;
  loadingTable : boolean;
  totalCountLinkClicked(read){
    this.loadingTable = true;
    this.dataToExport = undefined;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("date1",this.enc.encrypt(this.formattedDate1));
    formdata.append("date2",this.enc.encrypt(this.formattedDate2));
    formdata.append("loccode",this.enc.encrypt(read.dccode));
    return this.http.post("api/division-validation/get-dc-all-non-verified", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loadingTable = false;
      console.log(success);
      this.dataToExport = success;
    }, error=>{
      this.loadingTable = false;
      console.log(error);
      alert(error.msg);
    });
  }

  verifiedLinkClicked(read){
    this.loadingTable = true;
    this.dataToExport = undefined;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("date1",this.enc.encrypt(this.formattedDate1));
    formdata.append("date2",this.enc.encrypt(this.formattedDate2));
    formdata.append("loccode",this.enc.encrypt(read.dccode));
    return this.http.post("api/division-validation/get-dc-all-verified", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loadingTable = false;
      console.log(success);
      this.dataToExport = success;
    }, error=>{
      this.loadingTable = false;
      console.log(error);
      alert(error.msg);
    });
  }

  rejectedLinkClicked(read){
    this.loadingTable = true;
    this.dataToExport = undefined;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("date1",this.enc.encrypt(this.formattedDate1));
    formdata.append("date2",this.enc.encrypt(this.formattedDate2));
    formdata.append("loccode",this.enc.encrypt(read.dccode));
    return this.http.post("api/division-validation/get-dc-all-rejected", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loadingTable = false;
      console.log(success);
      this.dataToExport = success;
    }, error=>{
      this.loadingTable = false;
      console.log(error);
      alert(error.msg);
    });
  }

  exportClicked(data){
    this.exportService.exportAsExcelFile(data, 'consumer-list');
  }
}
