import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-group-wise-self-pmr',
  templateUrl: './dcinch-group-wise-self-pmr.component.html',
  styleUrls: ['./dcinch-group-wise-self-pmr.component.css']
})
export class DcinchGroupWiseSelfPmrComponent implements OnInit {

  locationCode = this.session.get('userlocation');
  username = this.session.get('username');
  constructor(private session:SessionStorageService, private enc: EncreptiondecreptionService, private http: HttpClient) { }

  ngOnInit() {
    this.getDateWisePMRByConsumer();
  }

  count : any;
  getDateWisePMRByConsumer(){
    this.loading = true;
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.locationCode));
      return this.http.post("api/dc-user-operations/get-my-pending-group-wise-date-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        this.count = success;
        this.loading = false;
      }, error =>{
        console.log(error);
        this.loading = false;
      });
        
  }

  // records : any;
  loading : boolean;
  rowClicked(data){
    this.loading = true;
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(data.loccode));
      formdata.append("dateupload",this.enc.encrypt(formatDate(data.date, "dd-MMM-yy", "en-US")));
      formdata.append("groupno",this.enc.encrypt(data.groupno));
      return this.http.post("api/dc-user-operations/get-list-of-readings-by-date-and-gr", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        data.records = success;
        this.loading = false;
      }, error =>{
        this.loading = false;
        console.log(error);
        
      });
  }

  viewConsumerClicked(data){
    if(data.records && data.records.length > 0){
      data.records = undefined;
    } else{
      this.loading = true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(data.loccode));
      formdata.append("dateupload",this.enc.encrypt(formatDate(data.date, "dd-MMM-yy", "en-US")));
      formdata.append("groupno",this.enc.encrypt(data.groupno));
      return this.http.post("api/dc-user-operations/get-list-of-readings-by-date-and-gr", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        data.records = success;
        this.loading = false;
      }, error =>{
        this.loading = false;
        console.log(error);
        
      });
    }
  }

  selectedRecord : any;
  viewImageClicked(record){
    console.log(record);
    this.showPMRReading = false;
    this.selectedRecord = record;
    this.getImage1(record.image);
    this.getPMRStatus(record.consno, record.appid);
  }

  image1: any;
  getImage1(imagePath) {
    this.http.get("api/mtr-reader/get-meter-reader-image?path=" + imagePath, { responseType: 'blob' }).subscribe(success => {
      console.log(success);
      this.createImage1FromBlob(success);
    }, error => {
      console.log(error);
    })
  }

  createImage1FromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image1 = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  pmrStatus : any;
  showPMRReading : boolean;
  pmrData : any;
  getPMRStatus(consumerNo, selfPMRAppId){
    let formdata : FormData = new FormData();
      formdata.append("consno",this.enc.encrypt(consumerNo));
      formdata.append("selfpmrappid",this.enc.encrypt(selfPMRAppId));
      return this.http.post("api/dc-user-operations/check-status-of-reading-in-ngb", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        this.pmrStatus = success;
        this.pmrData = this.pmrStatus.pmrreadtab;
        if(this.pmrStatus.flag && this.pmrStatus.pmrfoundflag){
          this.pmrData = this.pmrStatus.pmrreadtab;
          this.getImage2(this.pmrStatus.pmrreadtab.imagepath);
          this.showPMRReading = true;
        } else {
          alert(this.pmrStatus.msg);
        }
      }, error =>{
        console.log(error);
      });
  }

  image2: any;
  getImage2(imagePath) {
    console.log("inside get image");
    this.http.get("api/mtr-reader/get-meter-reader-image?path=" + imagePath, { responseType: 'blob' }).subscribe(success => {
      console.log(success);
      this.createImage2FromBlob(success);
    }, error => {
      console.log(error);
    })
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

  approveButtonClicked(data, modalCloseButtonRef){
    let formdata : FormData = new FormData();
      formdata.append("consno",this.enc.encrypt(data.consno));
      formdata.append("selfpmrappid",this.enc.encrypt(data.appid));
      formdata.append("userid",this.enc.encrypt(this.username));
      modalCloseButtonRef.click();
      return this.http.post("api/dc-user-operations/accept-reading-in-ngb-pmr", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        alert("Approved Successfully.");
        this.getDateWisePMRByConsumer();
      }, error =>{
        console.log(error);
        alert("Some error occurred, unable to approve.")
      });
  }

  remark : any;
  rejectButtonClicked(data, modalCloseButtonRef){
    if(!this.remark){
      alert("Please fill the rejection Remark..");
      return;
    }
    let formdata : FormData = new FormData();
    formdata.append("consno",this.enc.encrypt(data.consno));
    formdata.append("selfpmrappid",this.enc.encrypt(data.appid));
    formdata.append("userid",this.enc.encrypt(this.username));
    formdata.append("remark",this.enc.encrypt(this.remark));
    modalCloseButtonRef.click();
    return this.http.post("api/dc-user-operations/reject-reading-in-ngb-pmr", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      alert("Rejected Successfully");
      this.getDateWisePMRByConsumer();  
    }, error =>{
      console.log(error);
      alert("Some error occurred, unable to reject.")
    });
  }

}
