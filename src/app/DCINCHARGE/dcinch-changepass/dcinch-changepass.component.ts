import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-changepass',
  templateUrl: './dcinch-changepass.component.html',
  styleUrls: ['./dcinch-changepass.component.css']
})
export class DcinchChangepassComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  password:string;
  newpassword:string;
  confirmnewpassword:string;
  resp:any;
  error:any;
  
  loginid = this.session.get('loginid');

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() {
  }
  changePassword()
  {
  
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      
      formdata.append("loginid",this.enc.encrypt(this.loginid));
      formdata.append("password", this.enc.encrypt(this.password));
      formdata.append("newpassword", this.enc.encrypt(this.newpassword));
      return this.http.post("api/pmr-user-other/change-password", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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
    this.password="";
    this.newpassword="";
    this.confirmnewpassword="";
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
