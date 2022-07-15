import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-group-wise-spot-bill-count',
  templateUrl: './group-wise-spot-bill-count.component.html',
  styleUrls: ['./group-wise-spot-bill-count.component.css']
})
export class GroupWiseSpotBillCountComponent implements OnInit {

  billmon : any;
  loading : boolean;
  billMonths = GlobalConstants.billMonths;
  locationCode = this.session.get('userlocation');
  spotBills : any = [];
  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService) { }

  ngOnInit() {

  }

  getGroupWiseSpotBill(){
    this.spotBills = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    return this.http.post("api/spot-bill-reporter/get-for-loc-groupwise-month-wise-counts", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.spotBills = success;
    }, error=>{
      this.loading = false;
      console.log(error);
      alert(error.msg);
    });
  }

}
