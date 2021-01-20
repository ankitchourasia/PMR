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
  selector: 'app-readings-of-group-datewise-gi',
  templateUrl: './readings-of-group-datewise-gi.component.html',
  styleUrls: ['./readings-of-group-datewise-gi.component.css']
})
export class ReadingsOfGroupDatewiseGiComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp2:any;
  error:any;
  pipeseprte:string;
  loccode = this.session.get('userlocation');
  billmonth:string;
  groupno:string="Select Group";
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
  getReadingsDatewise()
  {
    this.dateofreading = $("#from").val().toUpperCase();
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("dateofreading",this.enc.encrypt(this.dateofreading));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));    
    return this.http.post("api/reading-operations/get-readings-of-group-date-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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
