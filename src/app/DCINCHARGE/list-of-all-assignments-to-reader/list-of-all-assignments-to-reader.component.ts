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
  selector: 'app-list-of-all-assignments-to-reader',
  templateUrl: './list-of-all-assignments-to-reader.component.html',
  styleUrls: ['./list-of-all-assignments-to-reader.component.css']
})
export class ListOfAllAssignmentsToReaderComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  billmon:string="Select Bill Month";
  resp:any;
  error:any;
  showData=false;
  loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService) { }

  ngOnInit() 
  {

  }
  getAllAssignmentsToReader()
  {
    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else
    {
      this.loading=true;
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
      return this.http.post("api/meter-reader-assignment-ops/get-dc-all-reader-assignments", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
    {
      this.showData=true;
      this.loading=false;
    // alert(this.resp.msg);
    // this.router.navigate(['/dcinch_dashboard']);
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
  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp, 'list-of-all-assignments-to-reader');
  
  }
}

