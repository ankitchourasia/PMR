import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-reading-of-group-rd-datewise-gi',
  templateUrl: './reading-of-group-rd-datewise-gi.component.html',
  styleUrls: ['./reading-of-group-rd-datewise-gi.component.css']
})
export class ReadingOfGroupRDDatewiseGiComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp1:any;
  resp2:any;
  error:any;
  pipeseprte:string;
  loccode = this.session.get('userlocation');
  billmonth:string;
  groupno:string="Select Group";
  rd:string="Select RD";
  dateofreading:string;
  showData=false;
    constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }
  

  ngOnInit() 
  {
    $( function() 
    {
      $( "#from" ).datepicker(
      {
        dateFormat: 'dd-M-y'
      });
    });
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="GroupIncharge")
    {
       this.activeGroupsinGI();
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }

  activeGroupsinGI()
  {
    this.pipeseprte="";
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.session.get('userlocation')));
    formdata.append("groupinchid",this.enc.encrypt(this.session.get('loginid')));
    return this.http.post("api/master-rec/get-groupinch-groupno-assigned", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp.length>0)
  {
    // // alert('yes');
    this.session.set("giGroups",this.resp);
  for(let data of this.resp){

    this.pipeseprte=this.pipeseprte+data.groupno+"|";
    // alert(this.pipeseprte)
  }
  this.session.set("allgroupsGI",this.pipeseprte);
  return this.pipeseprte;
  
   
  }
  else
  {
    // // alert('No');
    // this.show=false;
    // // alert(this.resp.msg);
  }
},
error=>{
 this.error = error
   alert('Server not responding');
}
);

  }
  getRD(event:string)
  {
      this.groupno = event;
      // alert(this.region);
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("grno",this.enc.encrypt(this.groupno));
      return this.http.post("api/master-rec/get-list-of-rds-in-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp1=response;
        if(this.resp1.flag==true)
    {
    // alert(this.resp3.msg);
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      // alert(this.resp3.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
      
    }

  getReadingsDatewise()
  {
    this.dateofreading = $("#from").val().toUpperCase();
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("dateofreading",this.enc.encrypt(this.dateofreading));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));    
    formdata.append("rd",this.enc.encrypt(this.rd));    
    return this.http.post("api/reading-operations/get-readings-of-group-rd-date-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!=null)
      {
        this.showData=true;
      // alert(this.resp.msg);
      // this.router.navigate(['/']);
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
