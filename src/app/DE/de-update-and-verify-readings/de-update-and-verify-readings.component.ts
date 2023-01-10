import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';

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

  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService) { }

  ngOnInit() {
    this.getReadingsByLocationCode();
  }

  getReadingsByLocationCode(){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.division));
    return this.http.post("api/de-verification/get-de-list-to-verify", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.readings = this.filterReadings(success);
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  filterReadings(readings){
    return readings.filter(read => read.percentageflag );
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
      this.getReadingsByLocationCode();
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
      this.getReadingsByLocationCode();
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
      // alert("verified successfully");
      alert(success.msg);
      this.getReadingsByLocationCode();
    }, error=>{
      this.loading = false;
      alert("unable to verify");
      console.log(error);
    });
  }


  verifyAll(readings){
    this.loading = true;
    for(let i = 0; i < readings.length; i++){
      let formdata : FormData = new FormData();
      formdata.append("consno",this.enc.encrypt(readings[i].custid));
      formdata.append("billmonth",this.enc.encrypt(readings[i].billmonth));
      formdata.append("remark",this.enc.encrypt("Verified"));
      this.http.post("api/de-verification/verify-from-de", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        if(i === readings.length -1){
          this.loading = false;
          this.getReadingsByLocationCode();
        }
      }, error=>{
        if(i === readings.length -1){
          this.loading = false;
          this.getReadingsByLocationCode();
        }
        console.log(error);
      });
    };
  }

  // deleteClicked(reading){
  //   this.loading = true;
  //   let formdata : FormData = new FormData();
  //   formdata.append("consno",this.enc.encrypt(reading.custid));
  //   formdata.append("billmonth",this.enc.encrypt(reading.billmonth));
  //   formdata.append("loccode",this.enc.encrypt(this.division));
  //   formdata.append("userid",this.enc.encrypt(this.user));0
  //   formdata.append("verifytype",this.enc.encrypt("Deleted"));
  //   formdata.append("verifyremark",this.enc.encrypt("Deleted"));

  //   return this.http.post("api/de-verification/update-to-Delete", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
  //     this.loading = false;
  //     alert("Deleted successfully");
  //     this.getReadingsByLocationCode();
  //   }, error=>{
  //     this.loading = false;
  //     console.log(error);
  //   });
  // }

}
