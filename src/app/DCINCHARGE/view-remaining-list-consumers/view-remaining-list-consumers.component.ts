import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-view-remaining-list-consumers',
  templateUrl: './view-remaining-list-consumers.component.html',
  styleUrls: ['./view-remaining-list-consumers.component.css']
})
export class ViewRemainingListConsumersComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp2:any;
  error:any;
  loccode = this.session.get('userlocation');
  billmonth:string;
  grno:string;
  loading=false;
  showData=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private exportService:ExportExcelService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    this.grno=this.navCtrl.get('grno');
    this.billmonth=this.navCtrl.get('billmonth');
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("grno",this.enc.encrypt(this.grno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/reading-operations/get-group-wise-remaining-list", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
      {
        this.loading=false;
        this.showData=true;
     
      }
      else
      {
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error
    alert('Server not responding');
    });
  }
  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, 'Remaining-consumer-list');
  
  }
}
