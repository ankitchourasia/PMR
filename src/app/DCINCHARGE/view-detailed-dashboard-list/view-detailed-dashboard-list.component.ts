import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var $ :any;

@Component({
  selector: 'app-view-detailed-dashboard-list',
  templateUrl: './view-detailed-dashboard-list.component.html',
  styleUrls: ['./view-detailed-dashboard-list.component.css']
})
export class ViewDetailedDashboardListComponent implements OnInit {
baseurl:BaseUrl= new BaseUrl();
  resp2:any;
  error:any;
  loading=false;
  loccode:string;
  billmonth:string;
  readingtype:string;
  status:string;
  showData=false;
  
  constructor(private session:SessionStorageService,private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private activeroute:ActivatedRoute,private http: HttpClient) { }

  ngOnInit() 
  {
    this.billmonth=this.activeroute.snapshot.params.billmonth;
    this.loccode=this.activeroute.snapshot.params.loccode;
    this.readingtype=this.activeroute.snapshot.params.readingtype;
    this.status=this.activeroute.snapshot.params.status;
    this.getReadingsDatewiseX();
  }
  imagePopup()
  {
    $(document).ready(function () {
      //                                                                                                                           
         $('img').on('click', function () {
             var image = $(this).attr('src');
             //alert(image);
             $('#myModal').on('show.bs.modal', function () {
                 $(".showimage").attr("src", image);
             });
         });
     });
  }

  getReadingsDatewiseX()
    {
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("billmonth",this.enc.encrypt(this.billmonth));
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("readingtype",this.enc.encrypt(this.readingtype));
      formdata.append("status",this.enc.encrypt(this.status));
      
      return this.http.post("api/dc-incharge-reports/get-list-dashboard-list", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2.length>0)
        {
          this.loading=false;
       
        }
        else
        {
          // alert(this.resp.msg);
          this.loading=false;
 
        }
      },
      error=>{
      this.error = error
      this.loading=false;
  
      alert('Server not responding');
      });
    }
}
