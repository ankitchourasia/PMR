import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var $ :any;

@Component({
  selector: 'app-reading-assesment-data',
  templateUrl: './reading-assesment-data.component.html',
  styleUrls: ['./reading-assesment-data.component.css']
})
export class ReadingAssesmentDataComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  billmonth:string="Select Bill Month";
  groupno:string="Select Group";
  resp:any;
  resp1:any;
  error:any;
  loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService) { }

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
  imagePopup()
  {
    $(document).ready(function () {
      //                                                                                                                           
         $('a').on('click', function () {
             var image = $(this).attr('href');
             //alert(image);
             $('#myModal').on('show.bs.modal', function () {
                 $(".showimage").attr("src", image);
             });
         });
     });
  }
  ActiveGroupsInDC()
  {
    // this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
    },
  error=>{
   this.error = error
     alert('Server not responding');
  }
  );
  }

  getGroupReadingsDatewise()
  {
    this.router.navigate(['/reading-assesment-group-wise',this.groupno,this.billmonth])
  }
}
