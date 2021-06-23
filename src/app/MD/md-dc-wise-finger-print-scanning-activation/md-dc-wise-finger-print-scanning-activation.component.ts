import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { TokengenratorService } from 'src/app/Util-services/tokengenerator-service';

@Component({
  selector: 'app-md-dc-wise-finger-print-scanning-activation',
  templateUrl: './md-dc-wise-finger-print-scanning-activation.component.html',
  styleUrls: ['./md-dc-wise-finger-print-scanning-activation.component.css']
})
export class MdDcWiseFingerPrintScanningActivationComponent implements OnInit {

  locationCode;
  imeiNo;
  constructor(private enc: EncreptiondecreptionService, private http: HttpClient, private session:SessionStorageService) { }

  ngOnInit() {
  }

  submitClicked : boolean;
  submitButtonClicked(){
    this.submitClicked = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("dcinchimieno",this.enc.encrypt(this.imeiNo));
    return this.http.post("api/sys-admin-add-a-dc-to-scan/update-to-dc-for-scanning", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.submitClicked = false;
      console.log(success);
      let result = <any> success;
      if(result.flag){
        alert(result.msg);
        this.locationCode = undefined;
        this.imeiNo = undefined;
      } else {
        alert("Unable to submit.");
      }
    }, error =>{
      this.submitClicked = false;
      console.log(error);
    });
  }
}
