import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { formatDate } from '@angular/common';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-reader-wise-reading',
  templateUrl: './reader-wise-reading.component.html',
  styleUrls: ['./reader-wise-reading.component.css']
})
export class ReaderWiseReadingComponent implements OnInit {

  locationCode = this.session.get('userlocation');
  constructor(private session:SessionStorageService, private enc: EncreptiondecreptionService, private http: HttpClient) { }

  ngOnInit() {
    this.getAllMeterreaders();
  }

  loading : boolean;
  data : any;
  date1 : any;
  date2 : any;
  currentDate = new Date();

  meterReaders : any = [];
  readerId : any;
  getAllMeterreaders(){
    let formdata : FormData = new FormData();
    formdata.append("dccode",this.enc.encrypt(this.locationCode));
    return this.http.post("api/mtr-reader/get-verified-readers-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      console.log(success);
      this.meterReaders = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  getDataClicked(){
    if(this.readerId === "ALL"){
      this.getDateBetweenReadByLocationCode();
    } else{
      this.getDateBetweenReadByReaderId();
    }
  }

  getDateBetweenReadByLocationCode(){
    this.loading = true;
    let formattedDate1 = formatDate(this.date1, "dd-MMM-yy", "en-US");
    let formattedDate2 = formatDate(this.date2, "dd-MMM-yy", "en-US");
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.locationCode));
      formdata.append("date1",this.enc.encrypt(formattedDate1));
      formdata.append("date2",this.enc.encrypt(formattedDate2));
      return this.http.post("api/new-version-dc-status/get-date-wise-read", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        this.data = success;
        this.loading = false;
      }, error =>{
        console.log(error);
        this.loading = false;
      });
        
  }

  getDateBetweenReadByReaderId(){
    this.loading = true;
    let formattedDate1 = formatDate(this.date1, "dd-MMM-yy", "en-US");
    let formattedDate2 = formatDate(this.date2, "dd-MMM-yy", "en-US");
    let formdata : FormData = new FormData();
      formdata.append("readerid",this.enc.encrypt(this.readerId));
      formdata.append("date1",this.enc.encrypt(formattedDate1));
      formdata.append("date2",this.enc.encrypt(formattedDate2));
      return this.http.post("api/new-version-dc-status/get-date-wise-reader-id-read", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        this.data = success;
        this.loading = false;
      }, error =>{
        console.log(error);
        this.loading = false;
      });
        
  }

}
