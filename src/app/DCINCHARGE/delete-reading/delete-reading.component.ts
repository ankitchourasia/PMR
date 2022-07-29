import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-delete-reading',
  templateUrl: './delete-reading.component.html',
  styleUrls: ['./delete-reading.component.css']
})
export class DeleteReadingComponent implements OnInit {

  billmon : any;
  loading : boolean;
  billMonths = GlobalConstants.billMonths;
  locationCode = this.session.get('userlocation');
  groups : any = [];
  ReadingList : any = [];
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

  getGroupWiseReading(){
    this.ReadingList = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    return this.http.post("api/delete-read-ops/get-readings-of-group-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.ReadingList = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  deleteClicked : boolean;
  deleteReading(read){
    this.deleteClicked = true;
    let formdata : FormData = new FormData();
    let userid=this.session.get('loginid');
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("custid",this.enc.encrypt(read.custid));
    formdata.append("userid",this.enc.encrypt(userid));
    formdata.append("remark",this.enc.encrypt(read.rem));
    return this.http.post("api/delete-read-ops/delete-a-reading", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.deleteClicked = false;
      alert("Rerading Deleted Successfully..");
      this.getGroupWiseReading();
    }, error=>{
      this.deleteClicked = false;
      console.log(error);
    });
  }

}
