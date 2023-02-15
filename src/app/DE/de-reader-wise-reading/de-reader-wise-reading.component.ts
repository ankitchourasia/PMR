import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';
import { TokengenratorService } from 'src/app/Util-services/tokengenerator-service';

@Component({
  selector: 'app-de-reader-wise-reading',
  templateUrl: './de-reader-wise-reading.component.html',
  styleUrls: ['./de-reader-wise-reading.component.css']
})
export class DeReaderWiseReadingComponent implements OnInit {

  division = this.session.get('userlocation');
  billmon: string;
  billMonths = GlobalConstants.billMonths;
  loading = false;
  meterReaderId;
  locationCode;
  constructor(private enc: EncreptiondecreptionService, private http: HttpClient, private session: SessionStorageService, private exportService: ExportExcelService) { }

  ngOnInit() {
    this.getLocationsByDivisionCode(this.division);
  }

  locations : any;
  getLocationsByDivisionCode(division){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(division));
    return this.http.post("api/office-master-ops/get-dc-in-division-single", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.locations = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  locationChanged(){
    this.readers = [];
    this.getMeterReaders();
  }

  readers : any;
  getMeterReaders() {
    let formdata: FormData = new FormData();
    formdata.append("dccode", this.enc.encrypt(this.locationCode));
    return this.http.post("api/mtr-reader/get-verified-readers-in-dc", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.readers = response;
    },
      error => {
        console.log(error);
      }
    );
  }

  readings : any = [];
  getReaderwiseReport() {
      this.loading = true;
      let formdata: FormData = new FormData();
      formdata.append("loccode", this.enc.encrypt(this.locationCode));
      formdata.append("billmonth", this.enc.encrypt(this.billmon));
      formdata.append("readerid", this.enc.encrypt(this.meterReaderId));
      return this.http.post("api/reading-operations/get-meter-reader-wise-data", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
        this.loading = false;
        this.readings = response;
      },
        error => {
          this.loading = false;
          console.log(error);
        }
      );
  }
  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.readings, 'reader-wise-reading-report');
  }

}
