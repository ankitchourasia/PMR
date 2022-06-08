import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-readings-gor-single-consumer-gi',
  templateUrl: './readings-gor-single-consumer-gi.component.html',
  styleUrls: ['./readings-gor-single-consumer-gi.component.css']
})
export class ReadingsGorSingleConsumerGiComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  error:any;
  loccode = this.session.get('userlocation');
  billmonth:string;
  billMonths = GlobalConstants.billMonths;
  consumerno:string;
  showData=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }


  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="GroupIncharge")
    {
      
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }
  getReadingsDatewise()
  {
    
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("consumerno",this.enc.encrypt(this.consumerno));
    return this.http.post("api/reading-operations/get-for-single-consumer", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!=null)
      {
        this.showData=true;
      // alert(this.resp.msg);
      // this.router.navigate(['/']);
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
}
