import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
declare var $:any;
@Component({
  selector: 'app-reader-wise-daily-count',
  templateUrl: './reader-wise-daily-count.component.html',
  styleUrls: ['./reader-wise-daily-count.component.css']
})
export class ReaderWiseDailyCountComponent implements OnInit {
  myDateValue: Date;
  baseurl:BaseUrl= new BaseUrl();
  userkeyvalue= this.session.get('userlocation');
  resp:any;
  resp1:any;
  error:any;
  datefrom:string;
  dateto:string;
  showForm=true;
  showDtl=false;
  loading=false;
  dailyCount:FormGroup;
  submitted=false;
  constructor(private formBuilder: FormBuilder,private enc: EncreptiondecreptionService,private activeroute:ActivatedRoute,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
    $(function () {
      $("#from").datepicker({ dateFormat: 'dd-M-y' });
      $("#to").datepicker({ dateFormat: 'dd-M-y' });
    });

      this.dailyCount = this.formBuilder.group({
      date1: [''],
      date2: [''],
      
  });
  }

  get f() { return this.dailyCount.controls; }

  onSubmit()
  {
    this.submitted=true;
    this.loading=true;
    if(this.dailyCount.invalid)
    {
      this.loading=false;
      return;
    }
   
    this.datefrom = $("#from").val().toUpperCase();
    this.dateto = $("#to").val().toUpperCase();
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.userkeyvalue));
    formdata.append("date1",this.enc.encrypt(this.datefrom));
    formdata.append("date2",this.enc.encrypt(this.dateto));
    return this.http.post("api/consumer-reports/get-report-summery-readerwise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.loading=false;
        this.resp=response;
        this.showForm=false;
        this.showDtl=true;
      },
    error=>{
    this.error = error
      alert('Server not responding');
    }
    );
  
}
backToForm()
  {
    this.showForm=true;
    this.showDtl=false;
  }

}
