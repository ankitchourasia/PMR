import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-group-wise-spot-bill-list',
  templateUrl: './group-wise-spot-bill-list.component.html',
  styleUrls: ['./group-wise-spot-bill-list.component.css']
})
export class GroupWiseSpotBillListComponent implements OnInit {

  billmon : any;
  loading : boolean;
  billMonths = GlobalConstants.billMonths;
  locationCode = this.session.get('userlocation');
  groups : any = [];
  spotBillList : any = [];
  groupno;
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

  getGroupWiseSpotBill(){
    this.spotBillList = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    return this.http.post("api/spot-bill-reporter/get-list-for-group", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.spotBillList = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

}
