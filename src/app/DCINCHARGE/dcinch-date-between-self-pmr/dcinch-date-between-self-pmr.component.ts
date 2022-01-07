import { formatDate } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-date-between-self-pmr',
  templateUrl: './dcinch-date-between-self-pmr.component.html',
  styleUrls: ['./dcinch-date-between-self-pmr.component.css']
})
export class DcinchDateBetweenSelfPmrComponent implements OnInit {

  locationCode = this.session.get('userlocation');
  constructor(private session:SessionStorageService, private enc: EncreptiondecreptionService, private http: HttpClient) { }

  ngOnInit() {
    // this.getDateBetweenPMRByConsumer();
  }

  loading : boolean;
  data : any;
  date1 : any;
  date2 : any;
  currentDate = new Date();

  getDateBetweenPMRByConsumer(){
    this.loading = true;
    let formattedDate1 = formatDate(this.date1, "dd-MMM-yy", "en-US");
    let formattedDate2 = formatDate(this.date2, "dd-MMM-yy", "en-US");
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.locationCode));
      formdata.append("date1",this.enc.encrypt(formattedDate1));
      formdata.append("date2",this.enc.encrypt(formattedDate2));
      return this.http.post("api/dc-user-operations/get-date-wise-upload-record", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        this.data = success;
        this.loading = false;
      }, error =>{
        console.log(error);
        this.loading = false;
      });
        
  }

}
