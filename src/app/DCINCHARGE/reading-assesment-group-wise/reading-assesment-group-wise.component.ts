import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var $ :any;
@Component({
  selector: 'app-reading-assesment-group-wise',
  templateUrl: './reading-assesment-group-wise.component.html',
  styleUrls: ['./reading-assesment-group-wise.component.css']
})
export class ReadingAssesmentGroupWiseComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  groupno:string;
  billmonth:string;
  resp:any;
  error:any;
  dateofreading:string;
  loading=false;
  showdata=false;

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private activeroute:ActivatedRoute,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
  {
    this.groupno=this.activeroute.snapshot.params.groupno;
    this.billmonth=this.activeroute.snapshot.params.billmonth;
    this.getGroupReadingsDatewise();
  }
  else  
  {
    this.router.navigate(['/login']);
  }
  }
  

  getGroupReadingsDatewise()
  {
   
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-for-assesments-only-group-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp.length>0)
      {
        for(let data of this.resp)
      {
        let date = data.datereading;
        //alert(date);
        let n=date.indexOf(' ');
        this.dateofreading=date.substr(0,n);        
      }
        this.showdata=false;
         this.loading=false;
      }
      else
      {
        this.showdata=true;
        this.loading=false;
       
      }
    },
    error=>{
    this.error = error
    this.loading=false;

    alert('Server not responding');
    });
  }

  getGroupReadingBelow90()
  {
    this.router.navigate(['/below90-reading-assesment',this.groupno,this.billmonth])
  }

  getGroupReadingAbove120()
  {
    this.router.navigate(['/above120-reading-assesment',this.groupno,this.billmonth])
  }

  getGroupReadingbetween90to120()
  {
    this.router.navigate(['/assesment90-to120-reading',this.groupno,this.billmonth])
  }

  getGroupReadingMeterDefective()
  {
    this.router.navigate(['/meterdefective-reading-assesment',this.groupno,this.billmonth])
  }

  getGroupReadingMeterNotFound()
  {
    this.router.navigate(['/meternotfound-reading-assesment',this.groupno,this.billmonth])
  }

  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp, 'all assesment'+this.groupno+"_"+this.billmonth);
  
  }
}
