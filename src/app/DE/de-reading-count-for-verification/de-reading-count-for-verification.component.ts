import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';

declare var $: any;
@Component({
  selector: 'app-de-reading-count-for-verification',
  templateUrl: './de-reading-count-for-verification.component.html',
  styleUrls: ['./de-reading-count-for-verification.component.css']
})
export class DEReadingCountForVerificationComponent implements OnInit {

  division = this.session.get('userlocation');
  user = this.session.get('username');
  loading : boolean;
  readings : any = [];
  locations : any = [];
  groups : any = [];
  group : any;

  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService, private exportService:ExportExcelService) { }

  ngOnInit() {
    this.getCountByDivisionCode(this.division);
  }

  getCountByDivisionCode(division){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(division));
    return this.http.post("api/de-verification/get-location-wise-counter", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.locations = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  getCountByLocationCode(locationCode){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(locationCode));
    return this.http.post("api/de-verification/get-location-wise-group-counter", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.groups = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  getReadingsClicked(data){
    this.group = data;
    this.getReadingsByGroupNo();
  }

  getReadingsByGroupNo(){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.group.loccode));
    formdata.append("gr",this.enc.encrypt(this.group.grno));
    return this.http.post("api/de-verification/get-de-list-to-verify-loc-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.readings = success;
      this.exportAsXsls();
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.readings, 'Readings-to-Verify-'+ this.group.grno);
  }

}
