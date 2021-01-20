import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-readings-of-group-rd-datewise',
  templateUrl: './readings-of-group-rd-datewise.component.html',
  styleUrls: ['./readings-of-group-rd-datewise.component.css']
})
  export class ReadingsOfGroupRDDatewiseComponent implements OnInit {
    baseurl:BaseUrl= new BaseUrl();
    resp:any;
    resp1:any;
    resp2:any;
    resp3:any;
    resp4:any;
    error:any;
    loccode = this.session.get('userlocation');
    billmonth:string="Select Bill Month";
    groupno:string="Select Group";
    rd:string="Select RD No.";
    dateofreading:string;
    loading=false;
    showData=false;
    showData1=false;

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
         $('img').on('click', function () {
             var image = $(this).attr('src');
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
        if(this.resp!=null)
      {
    // alert(this.resp.msg);
    // this.loading=false;
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      // this.loading=false;
      this.showData1=true;
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

    getGroupReadingsDatewise()
    {
      if(this.billmonth=='Select Bill Month')
      {
        alert("Please select bill month");
      }
      
      else if(this.groupno=='Select Group')
      {
        alert("Please select group");
      }
      else
      {
      this.loading=true;
      this.dateofreading = $("#from").val().toUpperCase();
      let formdata : FormData = new FormData();
      formdata.append("billmonth",this.enc.encrypt(this.billmonth));
      formdata.append("dateofreading",this.enc.encrypt(this.dateofreading));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      
      return this.http.post("api/reading-operations/get-readings-of-group-date-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2.length>0)
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
        {
          // alert(this.resp.msg);
          this.loading=false;
          this.showData1=true;
  
        }
      },
      error=>{
      this.error = error
      this.loading=false;
  
      alert('Server not responding');
      });
    }
    }
  getRDReadingsDatewise()
  {
    if(this.billmonth=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.groupno=='Select Group')
    {
      alert("Please select group");
    }
    else if(this.rd=='Select RD No.')
    {
      alert("Please select RD");
    }
    else
    {
    this.loading=true;
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
      if(this.resp2!='')
      {
        this.loading=false;
        this.showData=true;
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
      {
        this.loading=false;
        this.showData1=true;
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error
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

  EditReading(readingid,ivrs,billmonth,assesment)
  {
    this.navCtrl.navigate('edit-reading-assesment',{readingid:readingid,ivrs:ivrs,billmonth:billmonth,assesment:assesment});
  }
}
