import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-admin-delete-pmr',
  templateUrl: './admin-delete-pmr.component.html',
  styleUrls: ['./admin-delete-pmr.component.css']
})
export class AdminDeletePmrComponent implements OnInit {

  billMonth:string;
  billMonths = GlobalConstants.billMonths;
  consumerNo : string;
  id : string;
  remark : string;
  loading : boolean;

  constructor(private enc: EncreptiondecreptionService, private http: HttpClient, private session: SessionStorageService) { }

  ngOnInit() {
  }

  deleteButtonClicked(){
    this.loading = true;
    let formdata: FormData = new FormData();
    formdata.append("consno", this.enc.encrypt(this.consumerNo));
    formdata.append("billmon", this.enc.encrypt(this.billMonth));
    formdata.append("reqbyid", this.enc.encrypt(this.id));
    formdata.append("remark", this.enc.encrypt(this.remark));
    return this.http.post("api/dc-user-operations/delete-self-pmr-by-admin", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.loading = false;
      console.log(response);
      alert("Reading deleted successfully");
    },error => {
      this.loading = false;
      alert('Server not responding');
      console.log(error);
    });
  }

}
