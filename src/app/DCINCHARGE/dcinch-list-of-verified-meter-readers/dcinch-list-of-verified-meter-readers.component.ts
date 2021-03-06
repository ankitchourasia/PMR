import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dcinch-list-of-verified-meter-readers',
  templateUrl: './dcinch-list-of-verified-meter-readers.component.html',
  styleUrls: ['./dcinch-list-of-verified-meter-readers.component.css']
})
export class DcinchListOfVerifiedMeterReadersComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  dccode = this.session.get('userlocation');
  loginid=this.session.get('loginid');
  resp:any;
  resp1:any;
  error:any;
  resp4:any;
  eneterImei:FormGroup;
  mtrdrid:any;
  loading=false;
  submitted2=false;
  meterreaderid:string;
  constructor(private formBuilder: FormBuilder,private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    this.eneterImei = this.formBuilder.group({
      imeino: ['', Validators.required],
  });

    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      this.listOfverifiedMtrrdr();
  }
  else  
  {
      this.router.navigate(['/login']);
  }
  }

  get f2() { return this.eneterImei.controls; }

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

  listOfverifiedMtrrdr()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.dccode));
      return this.http.post("api/mtr-reader/get-verified-readers-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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

  rejectMeterReader(mtrrdid)
  {
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.dccode));
      formdata.append("loginid",this.enc.encrypt(this.loginid));
      formdata.append("mtrrdid",this.enc.encrypt(mtrrdid));
      
      return this.http.post("api/mtr-reader/remove-a-meter-reader", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp4=response;
        if(this.resp4.flag==true)
    {
    alert(this.resp4.msg);
    this.listOfverifiedMtrrdr();
  
    }
    else
    {
      alert(this.resp4.msg);
    }
  },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }

  updateImei(mtrdrid)
  {
    this.meterreaderid=mtrdrid;
    this.openModalDialog();
  }

  updatedImei()
  {
    this.loading=true;
      this.submitted2 = true;
      
      let formdata: FormData = new FormData();
      let header: HttpHeaders = new HttpHeaders();
      header.append('Content-Type', 'multipart/formdata')
      header.append('Authorization', this.session.get('token'))
    
      formdata.append("meterreaderid",this.enc.encrypt(this.meterreaderid))
      formdata.append("imieno",this.enc.encrypt(this.eneterImei.value.imeino))

      return this.http.post("api/mtr-reader/update-imieno-to-reader", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response => {
        this.resp1 = response;
        if (this.resp1.flag==true) {
            alert(this.resp1.msg);
            this.listOfverifiedMtrrdr();
            this.loading=false;
            $('#imei').modal('hide'); 
        } else {
          this.loading=false;
          alert(this.resp1.msg);
        }
      },
        error => {
          this.error = error
          this.loading = false;
          alert('Something went wrong. Try again later.');
        }
      );
      
  }

  openModalDialog(){
    // alert("modal");
    // this.display='block'; //Set block css

    $('#imei').modal('show'); 
 }

}
