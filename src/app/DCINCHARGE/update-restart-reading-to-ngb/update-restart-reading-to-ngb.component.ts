import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-update-restart-reading-to-ngb',
  templateUrl: './update-restart-reading-to-ngb.component.html',
  styleUrls: ['./update-restart-reading-to-ngb.component.css']
})
export class UpdateRestartReadingToNgbComponent implements OnInit {

  billmon : any;
  loading : boolean;
  billMonths = GlobalConstants.billMonths;
  locationCode = this.session.get('userlocation');
  groups : any = [];
  readings : any = [];
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
    this.readings = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    return this.http.post("api/reading-ops/get-list-for-meter-restart", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.readings = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  pushToNGBButtonClicked(data){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    formdata.append("consno",this.enc.encrypt(data.custid));
    return this.http.post("api/dc-user-operations/post-reading-meter-restart-to-ngb", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      alert("Reading Pushed to NGB Successfully");
    }, error=>{
      alert("unable to Push Reading to NGB");
      this.loading = false;
      console.log(error);
    });
  }

}
