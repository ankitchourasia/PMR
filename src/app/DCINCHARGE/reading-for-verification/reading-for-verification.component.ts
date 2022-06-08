import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService,LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import {formatDate } from '@angular/common';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { BillFileUploadComponent } from '../bill-file-upload/bill-file-upload.component';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-reading-for-verification',
  templateUrl: './reading-for-verification.component.html',
  styleUrls: ['./reading-for-verification.component.css']
})
export class ReadingForVerificationComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  usertype=this.session.get('role');
  loginid=this.session.get('loginid');
  meterreaderid:string;
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
  groupno:string="Select Group";
  rd:string="Select RD No.";
  resp:any;
  resp1:any;
  resp2:any;
  resp3:any;
  resp4:any;
  error:any;
  dataArray:Array<any>;
  dateofreading:string;
  loading=false;
  showData=false;
  showData1=false;
  multipleCustid:string;
  SelectedList: Array<any>;
  indexList: Array<any>;
  checkedCustid:string;
  globalCounter:number;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService,private localStorage:LocalStorageService) { }

  ngOnInit() 
  {

  if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
      {
        this.ActiveGroupsInDC();
        if(this.localStorage.get('billmonth1')!=null){
          this.getReadingVerification();
          this.globalCounter=0;
        }
        this.SelectedList=Array<any>();
        this.indexList=Array<any>();
       // this.checkedCustid=Array<any>();
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
   
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp.length>0)
      {

    // alert(this.resp.msg);
    
    // this.router.navigate(['/dcinch_dashboard']);
    }
    else
    {

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
      if(this.resp1.length>0)

  {     
      //  this.localStorage.remove('billmonth1');
  //       this.localStorage.remove('groupno1');
  //       this.localStorage.remove('rd1');

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

  getReadingVerification()
  {
    this.loading=true;
    let formdata : FormData = new FormData();
    if(this.loccode!=null && this.billmon!=null && this.groupno!=null && this.rd!=null)
    {
      this.localStorage.set('billmonth1',this.billmon);
      this.localStorage.set('groupno1',this.groupno);
      this.localStorage.set('rd1',this.rd);
        formdata.append("billmonth",this.enc.encrypt(this.billmon));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
    }
    else if (this.loccode!=null)
    {
     
      this.billmon=this.localStorage.get('billmonth1');
      this.groupno=this.localStorage.get('groupno1');
      this.rd=this.localStorage.get('rd1');
      formdata.append("billmonth",this.enc.encrypt(this.billmon));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      // formdata.append("rd",this.rd);
    }
    else
    {
      alert("Problem");
    }
    
    formdata.append("loccode",this.enc.encrypt(this.loccode));
  

    //formdata.append("rd",this.rd);
    if(this.rd=='Select RD No.')
    {
      //alert(this.rd); 
      formdata.append("rd",this.enc.encrypt("NA"));
    }
    else{
      formdata.append("rd",this.enc.encrypt(this.rd));
    }
    return this.http.post("api/reading-operations/get-readings-for-varification", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2.length>0)
    {
      for(let data of this.resp2)
      {
        let date = data.datereading;
      //  alert(date);
       // let n=date.indexOf(' ');
        this.dateofreading=date;
        
      }
    this.loading=false;
    this.showData=true;
    this.showData1=false;
    this.dataArray.push(this.billmon,this.groupno);
  
  }
  else
  {
    this.loading=false;
      this.showData1=true;
      this.showData=false;
  }
},
error=>{
 this.error = error
   alert('Server not responding');
}
);
  }

  reloadData(){
    this.loading=true;
    alert(this.billmon +" Billl      "+this.groupno);
    if(this.loccode!=null && this.billmon!=null && this.groupno!=null){
      this.loccode=localStorage.get('loccode');
      this.billmon =localStorage.get('billmonth');
      this.groupno=localStorage.get('groupno');
    }
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("groupno",this.enc.encrypt(this.groupno));


    //formdata.append("rd",this.rd);
    if(this.rd!=null)
    {
      //alert(this.rd); 
      formdata.append("rd",this.enc.encrypt(this.rd));
    }
    else{
      formdata.append("rd",this.enc.encrypt("NA"));
    }
    return this.http.post("api/reading-operations/get-readings-for-varification", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2!='')
  {
    this.loading=false;
    this.showData=true;
    this.showData1=false;
  }
  else
  {
    this.loading=false;
      this.showData1=true;
      this.showData=false;
  }
},
error=>{
 this.error = error
   alert('Server not responding');
}
);

  }

  verifyReading(custid)
  {
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(custid));
  formdata.append("billmonth",this.enc.encrypt(this.billmon));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  return this.http.post("api/reading-operations/approve-a-reading", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp3=response;
    if(this.resp3!=null)
    {
      this.showData=true;
    alert(this.resp3.msg);
    this.router.navigateByUrl('/dcinch_dashboard', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/reading-for-verification"])); 
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
  formdata.append("billmonth",this.enc.encrypt(this.billmon));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  
  return this.http.post("api/reading-operations/reject-a-reading", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp4=response;
    if(this.resp4!=null)
    {
     // this.showData=true;
    alert(this.resp4.msg);
    this.router.navigateByUrl('/dcinch_dashboard', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/reading-for-verification"])); 
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


deleteReading(custid)
{
  this.session.set("custid",custid);
  this.session.set("billmonth",this.billmon);
  this.navCtrl.navigate('delete-reading-remark',{custid:custid,billmonth:this.billmon});
}


onclick(custid,srno)
{
 //alert(srno);
  if(this.SelectedList.length>0)
  { 
    let index=0;
    for(let data of this.SelectedList)
    {
          index++;
          //alert(index);
      if(data==custid)
      {
        //alert(data+"Custid "+custid);
       // alert(index-1);
        if (srno != null) {
          this.SelectedList.splice(this.SelectedList.indexOf(data),1);
          console.log(this.SelectedList);
        }
    
        return;
      }
      
    }
    this.SelectedList.push(custid);
  }
  else
  {
    this.SelectedList.push(custid);
  }

  console.log(this.SelectedList);
  
}
verifySelectedReading()
  {
    
    this.approve(this.globalCounter);
  
 }
 
 approve(counter:number)
 {
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(this.SelectedList[counter]));
  formdata.append("billmonth",this.enc.encrypt(this.billmon));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  return this.http.post("api/reading-operations/approve-a-reading", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp3=response;
    if(this.resp3!=null)
    {
      this.showData=true;
    
    if(this.globalCounter<this.SelectedList.length-1)
    {
      this.globalCounter=this.globalCounter+1;
      this.approve(this.globalCounter);
      alert(this.resp3.msg);
      this.router.navigateByUrl('/dcinch_dashboard', {skipLocationChange: true}).then(()=>
    this.router.navigate(["/reading-for-verification"])); 
      //window.location.reload();
    }
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

 rejectSelectedReading()
 {
  this.reject(this.globalCounter);
 }

 reject(counter:number)
 {
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(this.SelectedList[counter]));
  formdata.append("billmonth",this.enc.encrypt(this.billmon));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  
  return this.http.post("api/reading-operations/reject-a-reading", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp4=response;
    if(this.resp4!=null)
    {
      this.showData=true;
    
    if(this.globalCounter<this.SelectedList.length-1)
    {
      this.globalCounter=this.globalCounter+1;
      this.reject(this.globalCounter);
      // alert(this.resp4.msg);
      this.router.navigateByUrl('/dcinch_dashboard', {skipLocationChange: true}).then(()=>
      this.router.navigate(["/reading-for-verification"])); 
      //window.location.reload();
    }
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

