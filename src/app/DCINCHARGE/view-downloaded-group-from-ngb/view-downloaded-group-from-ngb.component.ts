import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-view-downloaded-group-from-ngb',
  templateUrl: './view-downloaded-group-from-ngb.component.html',
  styleUrls: ['./view-downloaded-group-from-ngb.component.css']
})
export class ViewDownloadedGroupFromNgbComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp1:any;
  resp2:any;
  groupno:string;
  groupname:string;
  error:any;
  loccode = this.session.get('userlocation');
  dcname= this.session.get('username');
  loading=false;
    showData=false;

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
      if(this.resp2!=null)
      {
        // alert(this.resp.msg);
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
  }
);  
  }
viewGroups()
  {
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
      if(this.resp2!=null)
      {
        // alert(this.resp.msg);
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
  }
);
  
  }
  viewRdofGroup(groupno)
  {
    this.session.set("groupno",groupno);
    this.navCtrl.navigate('dcinch_add-rd-to-group',{groupno:groupno});
  }
}
