import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-group-wise-consumer',
  templateUrl: './group-wise-consumer.component.html',
  styleUrls: ['./group-wise-consumer.component.css']
})
export class GroupWiseConsumerComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  billmon:string="Select Bill Month";
  resp:any;
  error:any;
  showData=false;
  loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) 
  {
    
  }
  
  ngOnInit() 
  {
    
  }
  getGroupWiseConsumer()
  {
    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else{
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("billmonth",this.enc.encrypt(this.billmon));
      return this.http.post("api/consumer-reports/get-group-wise-consumer", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
    {
      this.showData=true;
      this.loading=false;
    }
    else
    {
      // alert(this.resp.msg);
      this.loading=false;
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  
  }
  }
}
