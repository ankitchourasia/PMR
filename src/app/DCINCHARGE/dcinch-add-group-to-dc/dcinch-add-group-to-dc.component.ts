import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-dcinch-add-group-to-dc',
  templateUrl: './dcinch-add-group-to-dc.component.html',
  styleUrls: ['./dcinch-add-group-to-dc.component.css']
})
export class DcinchAddGroupToDcComponent implements OnInit {
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

  ngOnInit() {
  }
  addGroupToDC()
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      formdata.append("groupname", this.enc.encrypt(this.groupname));
     
      return this.http.post("api/master-rec/add-a-group-to-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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
    this.groupno="";
    this.groupname="";
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

  downloadData()
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("dcname",this.enc.encrypt(this.dcname));
     
      return this.http.post("api/master-rec/download-data-from-ngb", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp1=response;
         if(this.resp1.flag==true)
     {
      
      alert(this.resp1.msg);
      this.loading=false;
    // this.router.navigate(['/dcinch_dashboard']);
     }
    else
    {
      alert(this.resp1.msg);
      this.loading=false;
    }
    // this.groupno="";
    // this.groupname="";
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
