import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-de-reading-verification-dashboard',
  templateUrl: './de-reading-verification-dashboard.component.html',
  styleUrls: ['./de-reading-verification-dashboard.component.css']
})
export class DeReadingVerificationDashboardComponent implements OnInit {

  readings : any;
  billMonth : any;
  divisionName = this.session.get('userlocation');
  constructor(private session : SessionStorageService, private http: HttpClient, private enc: EncreptiondecreptionService) { }

  ngOnInit() {
  }

  searchButtonClicked(){
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("billmon",this.enc.encrypt(this.billMonth));
    return this.http.post("api/division-validation/get-div-month-counts", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.readings = success;
      console.log(this.readings);
    }, error=>{
    console.log(error);
     alert(error.msg);
    });
  }

  totalCountLinkClicked(read){
    console.log("total count clicked", read);
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("billmon",this.enc.encrypt(this.billMonth));
    formdata.append("loccode",this.enc.encrypt(read.dccode));
    return this.http.post("api/division-validation/get-dc-all-non-verified", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      // this.downloadFile(success);
    }, error=>{
      console.log(error);
      alert(error.msg);
    });
  }

  verifiedLinkClicked(read){
    console.log("total count clicked", read);
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("billmon",this.enc.encrypt(this.billMonth));
    formdata.append("loccode",this.enc.encrypt(read.dccode));
    return this.http.post("api/division-validation/get-dc-all-verified", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      // this.downloadFile(success);
    }, error=>{
      console.log(error);
      alert(error.msg);
    });
  }

  rejectedLinkClicked(read){
    console.log("total count clicked", read);
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("billmon",this.enc.encrypt(this.billMonth));
    formdata.append("loccode",this.enc.encrypt(read.dccode));
    return this.http.post("api/division-validation/get-dc-all-rejected", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      // this.downloadFile(success);
    }, error=>{
      console.log(error);
      alert(error.msg);
    });
  }

  // downloadFile(data: any) {
  //   const blob = new Blob([JSON.stringify(data)]);
  //   // const blob = new Blob([byteArray], { type: 'text/javascript' });
  //   const url= window.URL.createObjectURL(blob);
  //   saveAs(blob,"file_name.pdf");
  //   // window.open(url);
  // }
}
