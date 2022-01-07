import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-date-wise-self-pmr',
  templateUrl: './dcinch-date-wise-self-pmr.component.html',
  styleUrls: ['./dcinch-date-wise-self-pmr.component.css']
})
export class DcinchDateWiseSelfPmrComponent implements OnInit {

  locationCode = this.session.get('userlocation');
  constructor(private session:SessionStorageService, private enc: EncreptiondecreptionService, private http: HttpClient) { }

  ngOnInit() {
    this.getDateWisePMRByConsumer();
  }

  loading : boolean;
  count : any;
  getDateWisePMRByConsumer(){
    this.loading = true;
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.locationCode));
      return this.http.post("api/dc-user-operations/get-my-pending-reading-count-date-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        console.log(success);
        this.count = success;
        this.loading = false;
      }, error =>{
        console.log(error);
        this.loading = false;
      });
        
  }

}
