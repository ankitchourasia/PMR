import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from '../Util-services/export-excel.service';
import { TokengenratorService } from '../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../Util-services/encreptiondecreption.service';
import { GlobalConstants } from '../Util-services/global-constants';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-consumer-wise-reading',
  templateUrl: './consumer-wise-reading.component.html',
  styleUrls: ['./consumer-wise-reading.component.css']
})
export class ConsumerWiseReadingComponent implements OnInit {
  
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp3:any;
  resp4:any;
  error:any;
  billmonth:string="Select Bill Month";
  billMonths = GlobalConstants.billMonths;
  consumerno:string;
  downloader:FileList;
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private export1:ExportExcelService) { }


  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
    }
    else  
    {
      this.router.navigate(['/login']);
    }
  }

  checkfile(event):void
  {
    this.downloader=event.target.files;
    // alert("called to file"+this.billfile.item(0));
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
  getReadingsDatewise()
  {
    // if(this.billmonth=='Select Bill Month')
    // {
    //   alert("Please select bill month");
    // }
    // else if(this.consumerno==null)
    // {
    //   alert("Please enter consumer no.");
    // }
    // else
    // {
    // this.loading=true;
    console.log("Consno:: "+this.consumerno+"")
    this.export1.downloadFile(this.consumerno,this.billmonth);
    
    // error=>{
    // this.error = error
    // this.loading=false;
    // alert('Server not responding');
    // }
  // }
}
  
}
