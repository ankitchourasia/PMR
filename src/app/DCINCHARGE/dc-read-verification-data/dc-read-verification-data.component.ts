import { Component, OnInit } from '@angular/core';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { formatDate } from '@angular/common';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';

@Component({
  selector: 'app-dc-read-verification-data',
  templateUrl: './dc-read-verification-data.component.html',
  styleUrls: ['./dc-read-verification-data.component.css']
})
export class DcReadVerificationDataComponent implements OnInit {

  public readonly VERIFIED = "VERIFIED";
  public readonly REJECTED = "REJECTED";
  public readonly PENDING = "PENDING";
  dataTypes = [this.VERIFIED, this.REJECTED, this.PENDING];

  date1 : any;
  date2 : any;
  currentDate = new Date();
  formattedDate1 : string;
  formattedDate2 : string;
  loading : boolean;
  dataToExport : any;
  dataType : string;
  locationCode = this.session.get('userlocation');

  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService, private exportService:ExportExcelService) { }

  ngOnInit() {
  }

  searchButtonClicked(){
    this.formattedDate1 = formatDate(this.date1, "dd-MMM-yy", "en-US");
    this.formattedDate2 = formatDate(this.date2, "dd-MMM-yy", "en-US");
    if(this.dataType === this.VERIFIED){
      this.getVerifiedReadings();
    } else if(this.dataType === this.REJECTED){
      this.getRejectedReadings();
    } else if(this.dataType === this.PENDING){
      this.getPendingReadings();
    } 
  }

  getPendingReadings(){
    this.dataToExport = undefined;
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt("NA"));
    formdata.append("date1",this.enc.encrypt(this.formattedDate1));
    formdata.append("date2",this.enc.encrypt(this.formattedDate2));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    return this.http.post("api/division-validation/get-dc-all-non-verified", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.dataToExport = success;
    }, error=>{
      this.loading = false;
      console.log(error);
      alert(error.msg);
    });
  }

  getVerifiedReadings(){
    this.dataToExport = undefined;
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt("NA"));
    formdata.append("date1",this.enc.encrypt(this.formattedDate1));
    formdata.append("date2",this.enc.encrypt(this.formattedDate2));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    return this.http.post("api/division-validation/get-dc-all-verified", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.dataToExport = success;
    }, error=>{
      this.loading = false;
      console.log(error);
      alert(error.msg);
    });
  }

  getRejectedReadings(){
    this.dataToExport = undefined;
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt("NA"));
    formdata.append("date1",this.enc.encrypt(this.formattedDate1));
    formdata.append("date2",this.enc.encrypt(this.formattedDate2));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    return this.http.post("api/division-validation/get-dc-all-rejected", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.dataToExport = success;
    }, error=>{
      this.loading = false;
      console.log(error);
      alert(error.msg);
    });
  }

  exportClicked(data){
    this.exportService.exportAsExcelFile(data, 'consumer-list');
  }
}
