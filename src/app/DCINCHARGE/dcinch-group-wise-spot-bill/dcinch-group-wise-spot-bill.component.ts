import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-dcinch-group-wise-spot-bill',
  templateUrl: './dcinch-group-wise-spot-bill.component.html',
  styleUrls: ['./dcinch-group-wise-spot-bill.component.css']
})
export class DcinchGroupWiseSpotBillComponent implements OnInit {

  billMonths = GlobalConstants.billMonths;
  billMonth : string = "";
  locationCode = this.session.get('userlocation');
  loading : boolean;
  
  constructor(private session: SessionStorageService, private enc: EncreptiondecreptionService, private http: HttpClient,
    private exportService : ExportExcelService) { }

  ngOnInit() {
  }

  searchButtonClicked(){
    this.getGroupWiseConsumerCount();
  }

  groups : any;
  getGroupWiseConsumerCount(){
    this.loading = true;
    let formdata: FormData = new FormData();
    formdata.append("loccode", this.enc.encrypt(this.locationCode));
    formdata.append("billmonth", this.enc.encrypt(this.billMonth));
    return this.http.post("api/spot-bill-reporter/get-for-loc-groupwise-month-wise-counts", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.loading = false;
      console.log(response);
      this.groups = response;
    },error => {
      this.loading = false;
      alert('Server not responding');;
      }
    );
  }

  consumers : any;
  getByGroupNoAndBillMonth(groupNo){
    this.loading = true;
    let formdata: FormData = new FormData();
    formdata.append("loccode", this.enc.encrypt(this.locationCode));
    formdata.append("billmonth", this.enc.encrypt(this.billMonth));
    formdata.append("groupno", this.enc.encrypt(groupNo));
    return this.http.post("api/spot-bill-reporter/get-list-for-group-only", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.loading = false;
      console.log(response);
      this.consumers = response;
    },error => {
        this.loading = false;
        alert('Server not responding');;
      }
    );
  }

  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.consumers, "spot_bill_group_wise_consumers_" + this.billMonth);
  }

}
