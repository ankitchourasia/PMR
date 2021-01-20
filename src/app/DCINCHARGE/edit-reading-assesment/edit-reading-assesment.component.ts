import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-edit-reading-assesment',
  templateUrl: './edit-reading-assesment.component.html',
  styleUrls: ['./edit-reading-assesment.component.css']
})
export class EditReadingAssesmentComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  error:any;
  billmonth:string;
  ivrs:string;
  readingid:string;
  assesment:string;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    this.readingid=this.navCtrl.get('readingid');
    this.ivrs=this.navCtrl.get('ivrs');
    this.billmonth=this.navCtrl.get('billmonth');
    this.assesment=this.navCtrl.get('assesment');
  }
  editAssesment()
  {
    let formdata : FormData = new FormData();
    formdata.append("readingid",this.enc.encrypt(this.readingid));
    formdata.append("ivrs",this.enc.encrypt(this.ivrs));
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("assesment",this.enc.encrypt(this.assesment));
    return this.http.post("api/reading-ops/edit-readings-for-assesment", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!=null)
      {
        alert(this.resp.msg);
       this.router.navigate(['/rd-wise-data-of-reading']);
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
