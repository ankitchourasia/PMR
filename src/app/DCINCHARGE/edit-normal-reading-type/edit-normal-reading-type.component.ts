import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit-normal-reading-type',
  templateUrl: './edit-normal-reading-type.component.html',
  styleUrls: ['./edit-normal-reading-type.component.css']
})
export class EditNormalReadingTypeComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp1:any;
  resp2:any;
  editReadingType:FormGroup;
 submitted=false;
  error:any;
  loccode = this.session.get('userlocation');
  consno:string;
  md:string;
  pf:string;
  readingtype:string;
  billmonth:string;
  lastmonthbilledunits:string;
  lastmonthbilledunits1:string;
  lastmonthbilledunits2:string;
  expectedcons:string;
  loading=false;
  constructor(private activeroute:ActivatedRoute,private formBuilder: FormBuilder,private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private exportService:ExportExcelService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router) { }

  ngOnInit() 
  {
    
    this.consno=this.activeroute.snapshot.params.consno;
    this.md=this.activeroute.snapshot.params.md;
    this.pf=this.activeroute.snapshot.params.pf;
    this.readingtype=this.activeroute.snapshot.params.readingtype;
    this.billmonth=this.activeroute.snapshot.params.billmonth;
    this.expectedCons();
    this.editReadingType = this.formBuilder.group({
      md:[''],
      pf:[''],
      readingtype: ['', Validators.required],
      assesment: ['',Validators.required],
  
  });
  }
  get f() { return this.editReadingType.controls; }

  expectedCons()
  {
    let formdata : FormData = new FormData();
    formdata.append("consno",this.enc.encrypt(this.consno));
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    
    return this.http.post("api/pmr-edit-ops/pmr-read-for-assesment", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp!=null)
      {
        this.lastmonthbilledunits=this.resp.lastmonthbilledunits;
        this.lastmonthbilledunits1=this.resp.lastmonthbilledunits1;
        this.lastmonthbilledunits2=this.resp.lastmonthbilledunits2;
        this.expectedcons=this.resp.expectedcons;
        // alert(this.resp.msg);
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

  onSubmit()
  {
    this.loading=true;
  this.submitted=true;
  if(this.editReadingType.invalid)
  {
    return;
  }
  if(this.editReadingType.value.md==null)
  {
   
    alert("Please Enter MD value.");
    return;
  
  }
  let pattern = '^0\.[0-9]$';
  if(this.editReadingType.value.pf=='' || this.editReadingType.value.pf==null)
  {
    alert("Please enter PF Value");
    return;
  }
  if( !this.editReadingType.value.pf.match(pattern))
        {
          alert("PF should be in range 0.1 to 0.9");
          return;
        }
      
     
  let formdata : FormData = new FormData();
    formdata.append("consumerno",this.enc.encrypt(this.consno));
    formdata.append("oldreadtype",this.enc.encrypt(this.readingtype));
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("newreadtype",this.enc.encrypt(this.editReadingType.value.readingtype));
    formdata.append("assesment",this.enc.encrypt(this.editReadingType.value.assesment));
    if(this.md=='null' || this.md=='' || this.editReadingType.value.md)
      {
      formdata.append("md",this.enc.encrypt(this.editReadingType.value.md));
      }
      else
      {
        formdata.append("md",this.enc.encrypt(this.md));
      }
      if(this.pf=='null' || this.pf=='' || this.editReadingType.value.pf)
      {
          formdata.append("pf",this.enc.encrypt(this.editReadingType.value.pf));
      }
      else
      {
        formdata.append("pf",this.enc.encrypt(this.pf));
      }
    return this.http.post("api/pmr-edit-ops/edit-reading-type", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp1=response;
      if(this.resp1!=null)
      {
        this.loading=false;
        alert(this.resp1.msg);
        this.router.navigate(['/edit-normal-reading-type-to-other']);
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
