import { Component, OnInit } from '@angular/core';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

declare var $ :any;
@Component({
  selector: 'app-group-wise-assignment-status',
  templateUrl: './group-wise-assignment-status.component.html',
  styleUrls: ['./group-wise-assignment-status.component.css']
})
export class GroupWiseAssignmentStatusComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp2:any;
  resp3:any;
  resp4:any;
  error:any;
  loccode = this.session.get('userlocation');
  billmonth:string;
  billMonths = GlobalConstants.billMonths;
  groupno:string="Select Group";
  dateofreading:string;
  loading=false;
  showData=false;
  showData1=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

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
    this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.length>0)
      {
    // alert(this.resp.msg);
    this.loading=false;
    
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {
      this.loading=false;

      // alert(this.resp.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }

  getgroupwiseAssignmentStatus()
  {
    //this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/meter-reader-assignment-ops/get-remaining-for-rd-assignment", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2.length>0)
      {
        //this.loading=false;
        this.showData=true;
     
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
