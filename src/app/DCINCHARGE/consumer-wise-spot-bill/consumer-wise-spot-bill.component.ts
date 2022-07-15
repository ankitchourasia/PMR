import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-consumer-wise-spot-bill',
  templateUrl: './consumer-wise-spot-bill.component.html',
  styleUrls: ['./consumer-wise-spot-bill.component.css']
})
export class ConsumerWiseSpotBillComponent implements OnInit {

  consumerno : any;
  loading : boolean;
  spotBills : any = [];
  constructor( private http: HttpClient, private enc: EncreptiondecreptionService, private session : SessionStorageService) { }

  ngOnInit() {

  }

  getSpotBills(){
    this.spotBills = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("consumerno",this.enc.encrypt(this.consumerno));
    return this.http.post("api/spot-bill-reporter/get-for-single-consumer", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.spotBills = success;
    }, error=>{
      this.loading = false;
      console.log(error);
      alert(error.msg);
    });
  }
}
