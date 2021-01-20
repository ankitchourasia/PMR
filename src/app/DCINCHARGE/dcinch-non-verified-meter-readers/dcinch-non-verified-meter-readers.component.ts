import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-dcinch-non-verified-meter-readers',
  templateUrl: './dcinch-non-verified-meter-readers.component.html',
  styleUrls: ['./dcinch-non-verified-meter-readers.component.css']
})
export class DcinchNonVerifiedMeterReadersComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  dccode = this.session.get('userlocation');
  loginid=this.session.get('loginid');
  resp:any;
  error:any;
  resp2:any;
 resp3:any;
 resp4:any;
 mtrdrid:any;
 loading=false;
 src="/mtr-reader/get-meter-reader-image?path="+encodeURIComponent
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit()
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      this.listOfNonverifiedMtrrdr();
  }
  else  
  {
      this.router.navigate(['/login']);
  }
  
  }

  imagePopup()
  {
    $(document).ready(function () {
      //                                                                                                                           
         $('img').on('click', function () {
             var image = $(this).attr('src');
             //alert(image);
             $('#myModal').on('show.bs.modal', function () {
                 $(".showimage").attr("src", image);
             });
         });
     });
  }


  verifyMeterReader(mtrrdid)
  {
    
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.dccode));
      formdata.append("loginid",this.enc.encrypt(this.loginid));
      formdata.append("mtrrdid",this.enc.encrypt(mtrrdid));
      
      return this.http.post("api/mtr-reader/approve-a-meter-reader", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp3=response;
        if(this.resp3.flag==true)
    {
    alert(this.resp3.msg);
    this.listOfNonverifiedMtrrdr();
  
    }
    else
    {
      alert(this.resp3.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
  
  rejectMeterReader(mtrrdid)
  {
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.dccode));
      formdata.append("loginid",this.enc.encrypt(this.loginid));
      formdata.append("mtrrdid",this.enc.encrypt(mtrrdid));
      
      return this.http.post("api/mtr-reader/remove-a-meter-reader", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp4=response;
        if(this.resp4.flag==true)
    {
    alert(this.resp4.msg);
    this.listOfNonverifiedMtrrdr();
  
    }
    else
    {
      alert(this.resp4.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }

  listOfNonverifiedMtrrdr()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.dccode));
      return this.http.post("api/mtr-reader/get-non-verified-readers", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    // alert(this.resp.msg);
    this.loading=false;
    
    this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      this.loading=false;
      // alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
}
