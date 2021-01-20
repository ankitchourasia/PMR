import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-list-of-groups-in-dc',
  templateUrl: './dcinch-list-of-groups-in-dc.component.html',
  styleUrls: ['./dcinch-list-of-groups-in-dc.component.css']
})
export class DcinchListOfGroupsInDcComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  resp:any;
  error:any;
  resp2:any;
  loading=false;
  
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
    this.ActiveGroupsInDC();
  }
  else  
  {
      this.router.navigate(['/login']);
  }

  }
  deactivateGroup(grno)
  {
    alert(grno);
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("grno",this.enc.encrypt(grno));
      return this.http.post("api/master-rec/deactivate-a-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    alert(this.resp.msg);
    this.ActiveGroupsInDC();
    // this.router.navigate(['/dcinch_dashboard']);
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
  addRdtoGroup(groupno)
  {
    this.session.set("groupno",groupno);
    this.navCtrl.navigate('dcinch_add-rd-to-group',{groupno:groupno});
  }

  ActiveGroupsInDC()
  {
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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
