import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';

declare var $: any;
@Component({
  selector: 'app-de-update-and-verify-readings',
  templateUrl: './de-update-and-verify-readings.component.html',
  styleUrls: ['./de-update-and-verify-readings.component.css']
})
export class DEUpdateAndVerifyReadingsComponent implements OnInit {

  division = this.session.get('userlocation');
  user = this.session.get('username');
  loading : boolean;
  readings : any = [];
  locations : any = [];
  groups : any = [];
  location : any;
  group : any;

  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService, private exportService : ExportExcelService) { }

  ngOnInit() {
    // this.getCountByDivisionCode(this.division);
    this.getLocationsByDivisionCode(this.division);
  }

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
    this.group = undefined;
    this.getGroupsByLocationCode();
  }

  getGroupsByLocationCode(){
    this.groups = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.location));
    return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.groups = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  getReadingsByGroupNo(){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.location));
    formdata.append("gr",this.enc.encrypt(this.group));
    return this.http.post("api/de-verification/get-de-list-to-verify-loc-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      // this.readings = this.filterReadings(success);
      this.readings = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  readToEdit : any = {};
  oldRead : any = {};
  editValue : any;
  readingSelected : boolean;
  assessmentSelected : boolean;
  editClicked(reading){
    this.oldRead = reading;
    this.readToEdit = Object.assign({}, reading);
    this.editValue = undefined;
    this.readingSelected = false;
    this.assessmentSelected = false;
  }

  editValueChanged(){
    this.readingSelected = false;
    this.assessmentSelected = false;
    if(this.editValue === "READING"){
      this.readingSelected = true;
    } else if(this.editValue === "ASSESSMENT"){
      this.assessmentSelected = true;
    }
  }

  submitClicked(){
    if(this.editValue === "READING"){
      this.updateReading();
    } else if(this.editValue === "ASSESSMENT"){
      this.updateAssessment();
    }
  }

  updateReading(){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.readToEdit.loccode));
    formdata.append("consno",this.enc.encrypt(this.readToEdit.custid));
    formdata.append("billmonth",this.enc.encrypt(this.readToEdit.billmonth));
    formdata.append("oldreading",this.enc.encrypt(this.oldRead.reading));
    formdata.append("newreading",this.enc.encrypt(this.readToEdit.reading));
    formdata.append("userid",this.enc.encrypt(this.user));

    return this.http.post("api/de-verification/edit-reading-kwh-from-de", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe((success : any)=>{
      this.loading = false;
      $("#myModal11").modal("hide");
      // alert("Reading updated successfully");
      alert(success.msg);
      this.getReadingsByGroupNo();
    }, error=>{
      this.loading = false;
      alert("Unable to update Reading, please try again later..");
      console.log(error);
    });
  }

  updateAssessment(){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.readToEdit.loccode));
    formdata.append("consno",this.enc.encrypt(this.readToEdit.custid));
    formdata.append("billmonth",this.enc.encrypt(this.readToEdit.billmonth));
    formdata.append("oldass",this.enc.encrypt(this.oldRead.assesment));
    formdata.append("newass",this.enc.encrypt(this.readToEdit.assesment));
    formdata.append("userid",this.enc.encrypt(this.user));

    return this.http.post("api/de-verification/edit-assesment-kwh", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe((success : any)=>{
      this.loading = false;
      $("#myModal11").modal("hide");
      // alert("Assessment updated successfully");
      alert(success.msg);
      this.getReadingsByGroupNo();
    }, error=>{
      this.loading = false;
      alert("Unable to update Assessment, please try again later..");
      console.log(error);
    });
  }

  verifyClicked(reading){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("consno",this.enc.encrypt(reading.custid));
    formdata.append("billmonth",this.enc.encrypt(reading.billmonth));
    formdata.append("remark",this.enc.encrypt("Verified"));

    return this.http.post("api/de-verification/verify-from-de", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe((success : any)=>{
      this.loading = false;
      alert(success.msg);
      this.getReadingsByGroupNo();
    }, error=>{
      this.loading = false;
      alert("unable to verify");
      console.log(error);
    });
  }

  verifyAll(readings){
    if (confirm("Do you really want to verify selected readings ?")) {
      this.loading = true;
      let readToVerify = readings.filter(read => read.checked);
      for(let i = 0; i < readToVerify.length; i++){
        let formdata : FormData = new FormData();
        formdata.append("consno",this.enc.encrypt(readToVerify[i].custid));
        formdata.append("billmonth",this.enc.encrypt(readToVerify[i].billmonth));
        formdata.append("remark",this.enc.encrypt("Verified"));
        this.http.post("api/de-verification/verify-from-de", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
          if(i === readToVerify.length -1){
            this.loading = false;
            this.getReadingsByGroupNo();
          }
        }, error=>{
          if(i === readToVerify.length -1){
            this.loading = false;
            this.getReadingsByGroupNo();
          }
          console.log(error);
        });
      };
    }
  }

  exportClicked(){
    this.exportService.exportAsExcelFile(this.readings, this.group + "_Readings");
  }

  allLocation : boolean;
  allReadChecked() {
    if(this.allLocation){
      this.readings.forEach(read => {
        read.checked = true;
      });
    } else{
      this.readings.forEach(read => {
        read.checked = false;
      });
    }
  }

}
