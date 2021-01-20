import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { SessionStorageService } from 'angular-web-storage';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-view-rejected-files-from-ngb',
  templateUrl: './view-rejected-files-from-ngb.component.html',
  styleUrls: ['./view-rejected-files-from-ngb.component.css']
})
export class ViewRejectedFilesFromNgbComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loading=false;
  showData=false;
  datefrom:string;
  dateto:string;

  resp:any;
  resp1:any;
  error:any;
  showData1=false;

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,private router:Router) { }
  
  ngOnInit() 
  {

    $( function() 
    {
      $( "#from" ).datepicker(
      {
        dateFormat: 'dd-M-y'
      });
      $( "#to" ).datepicker(
        {
          dateFormat: 'dd-M-y'
        });
    });
  }

  getCompanyWiseDashboard()
  {
    this.loading=true;
    this.datefrom = $("#from").val().toUpperCase();
    this.dateto = $("#to").val().toUpperCase();

    let formdata : FormData = new FormData();
    formdata.append("date1",this.enc.encrypt(this.datefrom));
    formdata.append("date2",this.enc.encrypt(this.dateto));
    
    
    return this.http.post("api/md-dashboard/get-counts-for-dates", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!='')
      {
        this.loading=false;
        this.showData=true;
        this.showData1=false;
      }
      else
      {
        this.loading=false;
        this.showData1=true;
        this.showData=false;
      }
    },
    error=>{
    this.error = error;
    this.loading=false;
    alert('Server not responding');
    });
  }

}
