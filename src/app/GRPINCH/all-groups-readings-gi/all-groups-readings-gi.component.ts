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
  selector: 'app-all-groups-readings-gi',
  templateUrl: './all-groups-readings-gi.component.html',
  styleUrls: ['./all-groups-readings-gi.component.css']
})
export class AllGroupsReadingsGiComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  billmon:string;
  billMonths = GlobalConstants.billMonths;
  resp:any;
  error:any;
  giGroups:any;
  allgroupsGI:string;
  showData=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    this.giGroups=this.session.get('giGroups');
    this.allgroupsGI=this.session.get('allgroupsGI');
  }

  getReadingsDatewise()
  {
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("billmonth",this.enc.encrypt(this.billmon));
      formdata.append("grps",this.enc.encrypt(this.allgroupsGI));
      alert(this.allgroupsGI);
      return this.http.post("api/reading-operations/get-all-multiple-grps-in-bill-month", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
    {
      this.showData=true;
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
}
