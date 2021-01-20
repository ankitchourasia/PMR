import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-meter-reader-image',
  templateUrl: './dcinch-meter-reader-image.component.html',
  styleUrls: ['./dcinch-meter-reader-image.component.css']
})
export class DcinchMeterReaderImageComponent implements OnInit {
baseurl:BaseUrl= new BaseUrl();
path:string;
resp:any;
error:any;

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
  }
  getMmeterRreaderImage()
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      
      formdata.append("path",this.enc.encrypt(this.path));
      
      return this.http.post("api/mtr-reader/get-meter-reader-image", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    alert(this.resp.msg);
    this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
  else  
  {
      this.router.navigate(['/login']);
  }
  }
}
