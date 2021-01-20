import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-dcinch-list-of-rejected-meter-readers',
  templateUrl: './dcinch-list-of-rejected-meter-readers.component.html',
  styleUrls: ['./dcinch-list-of-rejected-meter-readers.component.css']
})
export class DcinchListOfRejectedMeterReadersComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  dccode = this.session.get('userlocation');
  loginid=this.session.get('loginid');
  resp:any;
  error:any;
 resp4:any;
 mtrdrid:any;
 loading=false;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      this.listOfRemovedMtrrdr();
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



  listOfRemovedMtrrdr()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.dccode));
      return this.http.post("api/mtr-reader/get-removed-readers-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.flag==true)
    {
    // alert(this.resp.msg);
    this.loading=false;
    this.router.navigate(['/dcinch_dashboard']);
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
