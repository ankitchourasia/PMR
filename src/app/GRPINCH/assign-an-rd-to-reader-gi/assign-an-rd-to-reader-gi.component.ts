import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-assign-an-rd-to-reader-gi',
  templateUrl: './assign-an-rd-to-reader-gi.component.html',
  styleUrls: ['./assign-an-rd-to-reader-gi.component.css']
})
export class AssignAnRdToReaderGiComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  userid=this.session.get('loginid');
  billmon:string;
  assgroup:string;
  meterreaderid:string="Select Meter Reader";
  rd:string;
  resp:any;
  resp2:any;
  error:any;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    this.assgroup=this.session.get('groupno');
    // alert(this.assgroup);
    this.rd=this.session.get('rdno');
    this.billmon=this.session.get('billmon');
    this.listOfverifiedMtrrdr();
  }
  listOfverifiedMtrrdr()
  {
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/mtr-reader/get-verified-readers-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!=null)
    {
    // alert(this.resp.msg);
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      // alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }

  submitAssignment()
  {
    let formdata : FormData = new FormData();
      formdata.append("meterreaderid",this.enc.encrypt(this.meterreaderid));
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("assgroup",this.enc.encrypt(this.assgroup));
      formdata.append("rd",this.enc.encrypt(this.rd));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
      formdata.append("userid",this.enc.encrypt(this.userid));
      // alert(this.userid);
      return this.http.post("api/meter-reader-assignment-ops/assigned-a-rd-in-group-to-reader", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
        {
        alert(this.resp.msg);
        this.router.navigate(['/assign-scheduled-rd-to-meter-reader-GI']);
        }
        else
        {
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
