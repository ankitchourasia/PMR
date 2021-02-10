import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-de-reading-image-verification',
  templateUrl: './de-reading-image-verification.component.html',
  styleUrls: ['./de-reading-image-verification.component.css']
})
export class DeReadingImageVerificationComponent implements OnInit {

  billMonth : any;
  groupNo : any;
  locationCode : any;
  remark : any;
  locations : any;
  groups : any;
  readings : any;
  divisionName = this.session.get('userlocation');
  loginId = this.session.get('loginid');
  constructor(private session : SessionStorageService, private enc: EncreptiondecreptionService, private http: HttpClient, private dom : DomSanitizer) { }

  ngOnInit() {
  }

  billMonthChanged(){
    this.locationCode = undefined;
    this.locations = undefined;
    this.getLocationByDivisionId();
  }

  getLocationByDivisionId(){
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("billmon",this.enc.encrypt(this.billMonth));
    return this.http.post("api/division-validation/get-distinct-location-is-division", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.locations = success;
    }, error=>{
    console.log(error);
     alert(error.msg);
    });
  }

  locationChanged(){
    this.groupNo = undefined;
    this.groups = undefined;
    this.getGroupsByLocationCode();
  }

  getGroupsByLocationCode(){
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("billmon",this.enc.encrypt(this.billMonth));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    return this.http.post("api/division-validation/get-dc-available-group-to-verify", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.groups = success;
    }, error=>{
    console.log(error);
     alert(error.msg);
    });
  }

  searchButtonClicked(){
    this.getReadingsToVerify();
  }

  loading : boolean;
  getReadingsToVerify(){
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("division",this.enc.encrypt(this.divisionName));
    formdata.append("billmon",this.enc.encrypt(this.billMonth));
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("grno",this.enc.encrypt(this.groupNo));
    return this.http.post("api/division-validation/get-dc-non-verified-by-group", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      // console.log(success);
      this.readings = success;
      this.loading = false;
    }, error=>{
      this.loading = false;
      console.log(error);
      alert(error.msg);
    });
  }

  approveButtonClicked(read){
    this.approveRead("Reading and Image quality verified", this.remark, read);
  }

  actionclicked : boolean;
  approveRead(verifyType, remark, read){
    this.actionclicked = true;
    let formData : FormData = new FormData();
    formData.append("consno",this.enc.encrypt(read.custid));
    formData.append("billmon",this.enc.encrypt(this.billMonth));
    formData.append("loginid",this.enc.encrypt(this.loginId));
    formData.append("verifytype",this.enc.encrypt(verifyType));
    formData.append("verifyremark",this.enc.encrypt(remark));
    return this.http.post("api/division-validation/update-to-verify", formData, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      let result : any = success;
      this.actionclicked = false;
      if(result.flag){
        alert("Approved successfully");
        this.remark = undefined;
        this.nextButtonClicked();
      } else{
        alert(result.msg);
      }
    }, error=>{
      this.actionclicked = false;
      console.log(error);
      alert(error.msg);
    });
  }

  rejectButtonClicked(read){
    this.rejectRead("Bad Image quality", this.remark, read);
  }

  rejectRead(verifyType, remark, read){
    this.actionclicked = true;
    let formData : FormData = new FormData();
    formData.append("consno",this.enc.encrypt(read.custid));
    formData.append("billmon",this.enc.encrypt(this.billMonth));
    formData.append("loginid",this.enc.encrypt(this.loginId));
    formData.append("verifytype",this.enc.encrypt(verifyType));
    formData.append("verifyremark",this.enc.encrypt(remark));
    return this.http.post("api/division-validation/update-to-reject", formData, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      let result : any = success;
      this.actionclicked = false;
      if(result.flag){
        alert("Rejected successfully");
        this.remark = undefined;
        this.nextButtonClicked();
      } else{
        alert(result.msg);
      }
    }, error=>{
      this.actionclicked = false;
      console.log(error);
      alert(error.msg);
    });
  }

  selectedData : any;
  actionButtonClicked(read){
    this.selectedData = read;
    this.getImage(this.selectedData.imagepath);
    this.getImage2(this.selectedData.image2path);
  }

  index;
  previousButtonClicked(){
    this.index = this.readings.indexOf(this.selectedData);
    if(this.index > 0){
      this.selectedData = this.readings[this.index - 1];
    }
    this.getImage(this.selectedData.imagepath);
    this.getImage2(this.selectedData.image2path);
  }

  image1 : any; image2 : any;

  nextButtonClicked(){
    this.index = this.readings.indexOf(this.selectedData);
    if(this.index < this.readings.length - 1){
      this.selectedData = this.readings[this.index + 1];
    }
    this.getImage(this.selectedData.imagepath);
    this.getImage2(this.selectedData.image2path);
  }

  getImage(imagePath) {
    this.http.get("api/mtr-reader/get-meter-reader-image?path=" + imagePath, { responseType: 'blob' }).subscribe(success => {
      this.createImageFromBlob(success);
    }, error => {
      console.log(error);
    })
  }

  getImage2(imagePath) {
    this.http.get("api/mtr-reader/get-meter-reader-image?path=" + imagePath, { responseType: 'blob' }).subscribe(success => {
      this.createImage2FromBlob(success);
    }, error => {
      console.log(error);
    })
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image1 = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  createImage2FromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image2 = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }
}
