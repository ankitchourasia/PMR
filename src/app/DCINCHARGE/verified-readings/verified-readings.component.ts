import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

@Component({
  selector: 'app-verified-readings',
  templateUrl: './verified-readings.component.html',
  styleUrls: ['./verified-readings.component.css']
})
export class VerifiedReadingsComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp1:any;
  resp2:any;
 
  error:any;
  loccode = this.session.get('userlocation');
  billmonth:string="Select Bill Month";
  groupno:string="Select Group";
  rd:string="Select RD No.";
  loading=false;
  showData=false;
  showData1=false;

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private exportService:ExportExcelService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

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

  ActiveGroupsInDC()
  {
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
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
  getRD(event:string)
  {
    this.rd="Select RD No.";
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
  
  getReadingVerification()
  {
    if(this.billmonth=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.groupno=='Select Group')
    {
      alert("Please select Group");
    }
    else
    {
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    //formdata.append("rd",this.rd);
    if(this.rd=='Select RD No.')
    {
      //alert(this.rd); 
      formdata.append("rd",this.enc.encrypt("NA"));
    }
    else{
      formdata.append("rd",this.enc.encrypt(this.rd));
    }
    return this.http.post("api/reading-operations/get-verified-readings", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
      {
        this.loading=false;
        this.showData=true;
        this.showData1=false;
      }
      else
      {
        this.loading=false;
        this.showData1=true;
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error
    this.loading=false;
    alert('Server not responding');
    });
  }
  }
  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, 'CHECK_DATA_'+this.groupno+"_"+this.billmonth);
  
  }

}
