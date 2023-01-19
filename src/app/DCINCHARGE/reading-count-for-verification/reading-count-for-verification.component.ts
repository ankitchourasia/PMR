import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';

declare var $: any;
@Component({
  selector: 'app-reading-count-for-verification',
  templateUrl: './reading-count-for-verification.component.html',
  styleUrls: ['./reading-count-for-verification.component.css']
})
export class ReadingCountForVerificationComponent implements OnInit {

  locationCode = this.session.get('userlocation');
  user = this.session.get('username');
  loading : boolean;
  readings : any = [];
  groups : any = [];
  group : any;

  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService, private exportService:ExportExcelService) { }

  ngOnInit() {
    // this.getReadingsByLocationCode();
    this.getCountByLocationCode(this.locationCode);
  }

  getCountByLocationCode(locationCode){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(locationCode));
    return this.http.post("api/new-version-verification-ops/get-group-wise-count", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
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
    return this.http.post("api/new-version-verification-ops/get-dc-list-to-verify-in-group", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      // this.readings = this.filterReadings(success);
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
