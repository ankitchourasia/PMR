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
  selector: 'app-reading-for-single-consumer',
  templateUrl: './reading-for-single-consumer.component.html',
  styleUrls: ['./reading-for-single-consumer.component.css']
})
export class ReadingForSingleConsumerComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp3:any;
  resp4:any;
  error:any;
  loccode = this.session.get('userlocation');
  billmonth:string="Select Bill Month";
  consumerno:string;
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }


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
    
    if(this.billmonth=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.consumerno==null)
    {
      alert("Please enter consumer no.");
    }
    else
    {
    this.loading=true;
    alert(this.consumerno);
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("consumerno",this.enc.encrypt(this.consumerno));
    return this.http.post("api/reading-operations/get-for-single-consumer", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!='')
      {
        this.loading=false;
        this.showData=true;
        this.showData1=false;
      // alert(this.resp.msg);
      // this.router.navigate(['/']);
      // $(document).ready(function () {
      //   //                                                                                                                           
      //      $('img').on('click', function () {
      //          var image = $(this).attr('src');
      //          //alert(image);
      //          $('#myModal').on('show.bs.modal', function () {
      //              $(".showimage").attr("src", image);
      //          });
      //      });
      //  });
      }
      else
      {     this.loading=false;
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
  verifyReading(custid)
  {
    let formdata : FormData = new FormData();
    formdata.append("custid",this.enc.encrypt(custid));
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("userid",this.enc.encrypt(this.loccode));
    return this.http.post("api/reading-operations/approve-a-reading", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp3=response;
      if(this.resp3!=null)
      {
        this.showData=true;
      alert(this.resp3.msg);
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

  rejectReading(custid)
  {
    let formdata : FormData = new FormData();
    formdata.append("custid",this.enc.encrypt(custid));
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("userid",this.enc.encrypt(this.loccode));
    return this.http.post("api/reading-operations/reject-a-reading", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp4=response;
      if(this.resp4!=null)
      {
        this.showData=true;
      alert(this.resp4.msg);
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
