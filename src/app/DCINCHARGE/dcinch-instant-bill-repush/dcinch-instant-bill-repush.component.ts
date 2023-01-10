import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-dcinch-instant-bill-repush',
  templateUrl: './dcinch-instant-bill-repush.component.html',
  styleUrls: ['./dcinch-instant-bill-repush.component.css']
})
export class DcinchInstantBillRepushComponent implements OnInit {

  billmon : any;
  loading : boolean;
  billMonths = GlobalConstants.billMonths;
  locationCode = this.session.get('userlocation');
  readings : any = [];
  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService) { }

  ngOnInit() {
  }

  searchButtonClicked(){
    this.getRedingsByLocationCodeAndBillMonth();
  }

  getRedingsByLocationCodeAndBillMonth(){
    this.readings = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    return this.http.post("api/dc-instant-bill-repush-ops/get-list-to-repush-all", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.readings = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  rePushClicked(reading){
    this.readings = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(reading.loccode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("custid",this.enc.encrypt(reading.custid));
    return this.http.post("api/dc-instant-bill-repush-ops/repush-rec", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe((success: any)=>{
      this.loading = false;
      alert(success.msg);
      this.getRedingsByLocationCodeAndBillMonth();
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  user = this.session.get('username');
  deleteClicked(reading){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("consno",this.enc.encrypt(reading.custid));
    formdata.append("billmon",this.enc.encrypt(reading.billmonth));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("loginid",this.enc.encrypt(this.user));
    formdata.append("verifytype",this.enc.encrypt("Deleted"));
    formdata.append("verifyremark",this.enc.encrypt("Deleted"));

    return this.http.post("api/delete-rec-new-version/update-to-Delete", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe((success : any)=>{
      this.loading = false;
      // alert("Deleted successfully");
      alert(success.msg);
      this.getRedingsByLocationCodeAndBillMonth();
    }, error=>{
      this.loading = false;
      alert("unable to delete");
      console.log(error);
    });
  }

}
