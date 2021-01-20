import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-rd-wise-data-of-reading',
  templateUrl: './rd-wise-data-of-reading.component.html',
  styleUrls: ['./rd-wise-data-of-reading.component.css']
})
export class RdWiseDataOfReadingComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  resp:any;
  resp1:any;
  resp2:any;
  resp3:any;
  resp4:any;
  resp11:any;
  resp12:any;
  resp13:any;
  resp14:any;
  resp15:any;
  resp16:any;
  resp17:any;
  error:any;


  loccode = this.session.get('userlocation');
  billmonth:string="Select Bill Month";
  groupno:string="Select Group";
  rd:string="Select RD No.";
  tabtype:string;
  loading=false;
  showData=false;
  showData1=false;
  showData11=false;
  showData2=true;
  showData3=true;
  showData4=true;
  showData5=true;

  data=Array<any>();
  data2=Array<any>();

  SelectedList: Array<any>;
  SelectedImageId: Array<any>;
  
  SelectedListBelow90: Array<any>;
  SelectedImageIdBelow90: Array<any>;

  SelectedListAbove120: Array<any>;
  SelectedImageIdAbove120: Array<any>;
  
  SelectedListBet90to120: Array<any>;
  SelectedImageIdBet90to120: Array<any>;

  SelectedListMeterDef: Array<any>;
  SelectedImageIdMeterDef: Array<any>;

  SelectedListMeterNotFound: Array<any>;
  SelectedImageIdMeterNotFound: Array<any>;

  custid:string;
  imageid:string;
  colortype:string;
  readingtype:string;
  assesment:string;
  bilmonthfor:string;
  showdata2=true;
  showSelectAll=true;
  multipleCustid:string;
  checkedCustid:string;
  globalCounter:number=0;
  imageidCounter:number;
  showExport=false;
  showExport1=false;

  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService) { }
  
ngOnInit() 
{
  
  if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
  {
    this.ActiveGroupsInDC();
    // this.globalCounter=0;
    // this.imageidCounter=0;

    this.SelectedList=Array<any>();
    this.SelectedImageId=Array<any>();

    this.SelectedListBelow90=Array<any>();
    this.SelectedImageIdBelow90=Array<any>();

    this.SelectedListAbove120=Array<any>();
    this.SelectedImageIdAbove120=Array<any>();

    this.SelectedListBet90to120=Array<any>();
    this.SelectedImageIdBet90to120=Array<any>();

    this.SelectedListMeterDef=Array<any>();
    this.SelectedImageIdMeterDef=Array<any>();

    this.SelectedListMeterNotFound=Array<any>();
    this.SelectedImageIdMeterNotFound=Array<any>();
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
    this.data=Array<any>();
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
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-for-assesments-only-group-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2.length>0)
      {
        //alert("yes");
        this.tabtype="All Data";
         this.loading=false;
        this.showData=true;
        this.showData11=true;
        this.showData2=false;
        this.showExport1=true;
        this.showExport=false;
        this.showData1=false;
        this.showdata2=false;
        this.showSelectAll=false;
        for(let data of this.resp2){
            
          this.data.push(data);
        }
      this.ActiveGroupsInDC();
      }
      else
      {
        // alert(this.resp.msg);
        this.loading=false;
        //this.showData1=true;
        // this.showdata2=false;
       // this.showSelectAll=false;
      }
    },
    error=>{
    this.error = error
    this.loading=false;

    alert('Server not responding');
    });
  }
}


  getGroupReadingBelow90()
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
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-below-then-90", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp11=response;
      if(this.resp11.length>0)
      {
        //alert("yes");
         this.tabtype="Below 90%";
         this.loading=false;
         this.showData2=true;
         this.showData11=false;
         //this.showData=false;
         this.showExport1=false;
         this.showExport=true;
        // this.showData1=false;
         this.showdata2=true;
         this.showSelectAll=false;
        //  this.getGroupReadingBelow90();
       
      }
      else
      {
        // alert(this.resp.msg);
        this.loading=false;
        this.showData1=false;
        // this.showdata2=false;
        //this.showSelectAll=false;
      }
    },
    error=>{
    this.error = error
    this.loading=false;

    alert('Server not responding');
    });
  }
}

getGroupReadingAbove120()
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
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-above-120", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp12=response;
      if(this.resp12.length>0)
      {
        //alert("yes");
        this.tabtype="Above 120%";
         this.loading=false;
         this.showData3=true;
         this.showData2=false;
         this.showData11=false;
         //this.showData=false;
         this.showExport1=false;
         this.showExport=true;
        // this.showData1=false;
         this.showdata2=true;
         this.showSelectAll=false;
       
      }
      else
      {
        // alert(this.resp.msg);
        this.loading=false;
        this.showData1=false;
        // this.showdata2=false;
        this.showSelectAll=false;
      }
    },
    error=>{
    this.error = error
    this.loading=false;

    alert('Server not responding');
    });
  }
}

getGroupReadingbetween90to120()
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
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-in-90-to-120", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp13=response;
      if(this.resp13.length>0)
      {
        //alert("yes");
        this.tabtype="Between 90% to 120%";
         this.loading=false;
         this.showSelectAll=true;
        this.showExport=true;
        this.showExport1=false;
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


getGroupReadingMeterDefective()
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
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-meter-defective", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp14=response;
      if(this.resp14.length>0)
      {
        //alert("yes");
        this.tabtype="Meter Defective";
         this.loading=false;
         this.showData2=false;
         this.showData3=false;
         this.showData4=true;
         this.showData5=false;
         this.showData11=false;
         //this.showData=false;
         this.showExport1=false;
         this.showExport=true;
        // this.showData1=false;
         this.showdata2=true;
         this.showSelectAll=false;
       
      }
      else
      {
        // alert(this.resp.msg);
        this.loading=false;
        this.showData1=false;
        // this.showdata2=false;
        this.showSelectAll=false;
      }
    },
    error=>{
    this.error = error
    this.loading=false;

    alert('Server not responding');
    });
  }
}

getGroupReadingMeterNotFound()
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
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-for-group-wise-for-assesment-meter-notfound", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp15=response;
      if(this.resp15.length>0)
      {
        //alert("yes");
        this.tabtype="Meter Not Found";
         this.loading=false;
         this.showData2=false;
         this.showData3=false;
         this.showData4=false;
         this.showData11=false;
         this.showData5=true;
         //this.showData=false;
         this.showExport1=false;
         this.showExport=true;
        // this.showData1=false;
         this.showdata2=true;
         this.showSelectAll=false;
       
      }
      else
      {
        // alert(this.resp.msg);
        this.loading=false;
        this.showData1=false;
        // this.showdata2=false;
        this.showSelectAll=false;
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
    this.data=Array<any>();
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
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("rdno",this.enc.encrypt(this.rd));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-for-assesments-only-rd-wise", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp2=response;
      if(this.resp2.length>0)
      {
        //alert("yes");
        this.loading=false;
        this.showData=true;
        this.showData2=false;
        this.showExport1=true;
        this.showExport=false;
        this.showData1=false;
        this.showdata2=false;
        this.showSelectAll=false;
        for(let data of this.resp2){
            
          this.data.push(data);
        }
      this.ActiveGroupsInDC();
      }
      else
      {
        // alert(this.resp.msg);
        this.loading=false;
        this.showData1=true;
        this.showdata2=false;
        this.showSelectAll=false;
      }
    },
    error=>{
    this.error = error
    this.loading=false;

    alert('Server not responding');
    });
  }
}


verifyReadingBelow90(custid,imageid)
{
  //this.loading=true;
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(custid));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("readingid",this.enc.encrypt(imageid));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp4=response;
    if(this.resp4!=null)
    {
    
    this.showData=true;
    alert(this.resp4.msg);
    this.getGroupReadingBelow90();
      
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

verifyReadingAbove120(custid,imageid)
{
  //this.loading=true;
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(custid));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("readingid",this.enc.encrypt(imageid));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp4=response;
    if(this.resp4!=null)
    {
    
    this.showData=true;
    alert(this.resp4.msg);
    this.getGroupReadingAbove120();
      
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

verifyReadingBet90to120(custid,imageid)
{
  //this.loading=true;
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(custid));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("readingid",this.enc.encrypt(imageid));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp4=response;
    if(this.resp4!=null)
    {
    
    this.showData=true;
    alert(this.resp4.msg);
    this.getGroupReadingbetween90to120();
      
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

verifyReadingMeterDef(custid,imageid)
{
  //this.loading=true;
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(custid));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("readingid",this.enc.encrypt(imageid));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp4=response;
    if(this.resp4!=null)
    {
    
    this.showData=true;
    alert(this.resp4.msg);
    this.getGroupReadingMeterDefective();
      
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

verifyReadingMeterNotFound(custid,imageid)
{
  //this.loading=true;
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(custid));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("readingid",this.enc.encrypt(imageid));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp4=response;
    if(this.resp4!=null)
    {
    
    this.showData=true;
    alert(this.resp4.msg);
    this.getGroupReadingMeterNotFound();
      
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

verifySelectedReading()
  {
    //alert(this.tabtype);
    if(this.tabtype=='Below 90%')
    {
    this.approveBelow90(this.globalCounter);
  }
  if(this.tabtype=='Above 120%')
    {
    this.approveAbove120(this.globalCounter);
  }
  if(this.tabtype=='Between 90% to 120%')
    {
    this.approveBet90to120(this.globalCounter);
  }
  if(this.tabtype=='Meter Defective')
    {
    this.approveMeterDef(this.globalCounter);
  }
  if(this.tabtype=='Meter Not Found')
    {
    this.approveMeterNotFound(this.globalCounter);
  }
 }
 
 approveBelow90(counter)
 {
  //alert("Counter Value "+counter);
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(this.SelectedListBelow90[counter]));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  formdata.append("readingid",this.enc.encrypt(this.SelectedImageIdBelow90[counter]));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp3=response;
    if(this.resp3!=null)
    {
      this.showData=true;
      //alert(this.resp3.msg);
    if(this.globalCounter<this.SelectedListBelow90.length-1)
    {
      this.globalCounter=this.globalCounter+1;
        //alert("Global Counter "+this.globalCounter + " "+this.SelectedListBelow90.length);
        this.approveBelow90(this.globalCounter);

      }
      else{
        alert(this.resp3.msg);
          this.SelectedListBelow90=Array<any>();
      this.SelectedImageIdBelow90=Array<any>();
        this.getGroupReadingBelow90();
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


 approveAbove120(counter)
 {
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(this.SelectedListAbove120[counter]));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  formdata.append("readingid",this.enc.encrypt(this.SelectedImageIdAbove120[counter]));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp3=response;
    if(this.resp3!=null)
    {
      this.showData=true;
      //alert(this.resp3.msg);
    if(this.globalCounter<this.SelectedListAbove120.length-1)
    {
      this.globalCounter=this.globalCounter+1;
      //this.imageidCounter=this.imageidCounter+1;
      this.approveAbove120(this.globalCounter);
      
      
      }
      else
      {
        alert(this.resp3.msg);
        this.SelectedListAbove120=Array<any>();
      this.SelectedImageIdAbove120=Array<any>();
        this.getGroupReadingAbove120();
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


 approveBet90to120(counter)
 {
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(this.SelectedList[counter]));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  formdata.append("readingid",this.enc.encrypt(this.SelectedImageId[counter]));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp3=response;
    if(this.resp3!=null)
    {
      this.showData=true;
      //alert(this.resp3.msg);
    if(this.globalCounter<this.SelectedList.length-1)
    {
      this.globalCounter=this.globalCounter+1;
     // this.imageidCounter=this.imageidCounter+1;
      this.approveBet90to120(this.globalCounter);     
      }
      else{
        alert(this.resp3.msg);
        this.SelectedList=Array<any>();
        this.SelectedImageId=Array<any>();
          this.getGroupReadingbetween90to120();
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


 approveMeterDef(counter)
 {
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(this.SelectedListMeterDef[counter]));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  formdata.append("readingid",this.enc.encrypt(this.SelectedImageIdMeterDef[counter]));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp3=response;
    if(this.resp3!=null)
    {
      this.showData=true;
      //alert(this.resp3.msg);
    if(this.globalCounter<this.SelectedListMeterDef.length-1)
    {
      this.globalCounter=this.globalCounter+1;
      //this.imageidCounter=this.imageidCounter+1;
      this.approveMeterDef(this.globalCounter);      
      }
      else{
        alert(this.resp3.msg);
        this.SelectedListMeterDef=Array<any>();
      this.SelectedImageIdMeterDef=Array<any>();
        this.getGroupReadingMeterDefective();
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


 approveMeterNotFound(counter)
 {
  let formdata : FormData = new FormData();
  formdata.append("custid",this.enc.encrypt(this.SelectedListMeterNotFound[counter]));
  formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  formdata.append("userid",this.enc.encrypt(this.loccode));
  formdata.append("readingid",this.enc.encrypt(this.SelectedImageIdMeterNotFound[counter]));
  return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  {
    this.resp3=response;
    if(this.resp3!=null)
    {
      this.showData=true;
      //alert(this.resp3.msg);
    if(this.globalCounter<this.SelectedListMeterNotFound.length-1)
    {
      this.globalCounter=this.globalCounter+1;
      //this.imageidCounter=this.imageidCounter+1;
      this.approveMeterNotFound(this.globalCounter);     
      }
      else
      {
        alert(this.resp3.msg);
        this.SelectedListMeterNotFound=Array<any>();
        this.SelectedImageIdMeterNotFound=Array<any>();
          this.getGroupReadingMeterNotFound();
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
// rejectReading(custid)
// {
//   let formdata : FormData = new FormData();
//   formdata.append("custid",custid);
//   formdata.append("billmonth",this.billmonth);
//   formdata.append("userid",this.loccode);
  
//   return this.http.post("api/reading-operations/reject-a-reading", formdata).subscribe(response=>
//   {
//     this.resp4=response;
//     if(this.resp4!=null)
//     {
//       this.showData=true;
//     alert(this.resp4.msg);
//     // this.router.navigate(['/']);
//     }
//     else
//     {
//       // alert(this.resp.msg);
//     }
//   },
//   error=>{
//   this.error = error
//   alert('Server not responding');
//   });
// }

// EditReading(readingid,ivrs,billmonth,assesment)
// {
//   this.navCtrl.navigate('edit-reading-assesment',{readingid:readingid,ivrs:ivrs,billmonth:billmonth,assesment:assesment});
// }


true(){
  this.showdata2=true;
}


selectAll(data2)
{ 
  let count=0;
  for(let item of data2)
  {
    count++;
    this.VerifyClick(item.custid,item.imageid,count);

    //alert(item.custid);

  }
}

VerifyClick(custid,imageid,srno)
{

  if(this.SelectedList.length>0 && this.SelectedImageId.length>0)
  { 
    let index=0;
    this.removeArray(imageid,srno);

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
    this.SelectedImageId.push(imageid);

 }
  else
  {
   
    this.SelectedList.push(custid);
    this.SelectedImageId.push(imageid);
  }

  console.log(this.SelectedList);
  console.log(this.SelectedImageId);
  
}

VerifyClickBelow90(custid,imageid,srno)
{

  if(this.SelectedListBelow90.length>0 && this.SelectedImageIdBelow90.length>0)
  { 
    let index=0;
    this.removeArrayBelow90(imageid,srno);

    for(let data of this.SelectedListBelow90)
    {
          index++;
          //alert(index);
      if(data==custid)
      {
        //alert(data+"Custid "+custid);
       // alert(index-1);
        if (srno != null) {
          this.SelectedListBelow90.splice(this.SelectedListBelow90.indexOf(data),1);
          console.log(this.SelectedListBelow90);
        }
    
        return;
      }
    }
    
    this.SelectedListBelow90.push(custid);
    this.SelectedImageIdBelow90.push(imageid);

 }
  else
  {
   
    this.SelectedListBelow90.push(custid);
    this.SelectedImageIdBelow90.push(imageid);
  }

  console.log(this.SelectedListBelow90);
  console.log(this.SelectedImageIdBelow90);
  
}

VerifyClickAbove120(custid,imageid,srno)
{

  if(this.SelectedListAbove120.length>0 && this.SelectedImageIdAbove120.length>0)
  { 
    let index=0;
    this.removeArrayAbove120(imageid,srno);

    for(let data of this.SelectedListAbove120)
    {
          index++;
          //alert(index);
      if(data==custid)
      {
        //alert(data+"Custid "+custid);
       // alert(index-1);
        if (srno != null) {
          this.SelectedListAbove120.splice(this.SelectedListAbove120.indexOf(data),1);
          console.log(this.SelectedListAbove120);
        }
    
        return;
      }
    }
    
    this.SelectedListAbove120.push(custid);
    this.SelectedImageIdAbove120.push(imageid);

 }
  else
  {
   
    this.SelectedListAbove120.push(custid);
    this.SelectedImageIdAbove120.push(imageid);
  }

  console.log(this.SelectedListAbove120);
  console.log(this.SelectedImageIdAbove120);
  
}


VerifyClickMeterDef(custid,imageid,srno)
{

  if(this.SelectedListMeterDef.length>0 && this.SelectedImageIdMeterDef.length>0)
  { 
    let index=0;
    this.removeArrayMeterDef(imageid,srno);

    for(let data of this.SelectedListMeterDef)
    {
          index++;
          //alert(index);
      if(data==custid)
      {
        //alert(data+"Custid "+custid);
       // alert(index-1);
        if (srno != null) {
          this.SelectedListMeterDef.splice(this.SelectedListMeterDef.indexOf(data),1);
          console.log(this.SelectedListMeterDef);
        }
    
        return;
      }
    }
    
    this.SelectedListMeterDef.push(custid);
    this.SelectedImageIdMeterDef.push(imageid);

 }
  else
  {
   
    this.SelectedListMeterDef.push(custid);
    this.SelectedImageIdMeterDef.push(imageid);
  }

  console.log(this.SelectedListMeterDef);
  console.log(this.SelectedImageIdMeterDef);
  
}

VerifyClickMeterNotfound(custid,imageid,srno)
{

  if(this.SelectedListMeterNotFound.length>0 && this.SelectedImageIdMeterNotFound.length>0)
  { 
    let index=0;
    this.removeArrayMeterDef(imageid,srno);

    for(let data of this.SelectedListMeterNotFound)
    {
          index++;
          //alert(index);
      if(data==custid)
      {
        //alert(data+"Custid "+custid);
       // alert(index-1);
        if (srno != null) {
          this.SelectedListMeterNotFound.splice(this.SelectedListMeterNotFound.indexOf(data),1);
          console.log(this.SelectedListMeterNotFound);
        }
    
        return;
      }
    }
    
    this.SelectedListMeterNotFound.push(custid);
    this.SelectedImageIdMeterNotFound.push(imageid);

 }
  else
  {
   
    this.SelectedListMeterNotFound.push(custid);
    this.SelectedImageIdMeterNotFound.push(imageid);
  }

  console.log(this.SelectedListMeterNotFound);
  console.log(this.SelectedImageIdMeterNotFound);
  
}

removeArray(imageid,srno)
{
  let index=0;
  for(let data01 of this.SelectedImageId)
  {
        index++;
        console.log(data01);
        //alert(index);
    if(data01==imageid)
    {
      console.log("match");

      //alert(data+"Custid "+custid);
      // alert(index-1);
      if (srno != null) {
        this.SelectedImageId.splice(this.SelectedImageId.indexOf(data01),1);
        console.log(this.SelectedImageId);
      }
  
      return;
    }
    
  }
}
removeArrayBelow90(imageid,srno)
{
  let index=0;
  for(let data01 of this.SelectedImageIdBelow90)
  {
        index++;
        console.log(data01);
        //alert(index);
    if(data01==imageid)
    {
      console.log("match");

      //alert(data+"Custid "+custid);
     // alert(index-1);
      if (srno != null) {
        this.SelectedImageIdBelow90.splice(this.SelectedImageIdBelow90.indexOf(data01),1);
        console.log(this.SelectedImageIdBelow90);
      }
  
      return;
    }
    
  }
}
removeArrayAbove120(imageid,srno)
{
  let index=0;
  for(let data01 of this.SelectedImageIdAbove120)
  {
        index++;
        console.log(data01);
        //alert(index);
    if(data01==imageid)
    {
      console.log("match");

      //alert(data+"Custid "+custid);
     // alert(index-1);
      if (srno != null) {
        this.SelectedImageIdAbove120.splice(this.SelectedImageIdAbove120.indexOf(data01),1);
        console.log(this.SelectedImageIdAbove120);
      }
  
      return;
    }
    
  }
}

removeArrayMeterDef(imageid,srno)
{
  let index=0;
  for(let data01 of this.SelectedImageIdMeterDef)
  {
        index++;
        console.log(data01);
        //alert(index);
    if(data01==imageid)
    {
      console.log("match");

      //alert(data+"Custid "+custid);
     // alert(index-1);
      if (srno != null) {
        this.SelectedImageIdMeterDef.splice(this.SelectedImageIdMeterDef.indexOf(data01),1);
        console.log(this.SelectedImageIdMeterDef);
      }
  
      return;
    }
    
  }
}

removeArrayMeterNotfound(imageid,srno)
{
  let index=0;
  for(let data01 of this.SelectedImageIdMeterNotFound)
  {
        index++;
        console.log(data01);
        //alert(index);
    if(data01==imageid)
    {
      console.log("match");

      //alert(data+"Custid "+custid);
     // alert(index-1);
      if (srno != null) {
        this.SelectedImageIdMeterNotFound.splice(this.SelectedImageIdMeterNotFound.indexOf(data01),1);
        console.log(this.SelectedImageIdMeterNotFound);
      }
  
      return;
    }
    
  }
}

editAssesment()
  {
    let formdata : FormData = new FormData();
    formdata.append("readingid",this.enc.encrypt(this.imageid));
    formdata.append("ivrs",this.enc.encrypt(this.custid));
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("assesment",this.enc.encrypt(this.assesment));
    return this.http.post("api/reading-ops/edit-readings-for-assesment", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp.flag==true)
      {
        alert(this.resp.msg);
        // this.router.navigateByUrl('/dcinch_dashboard', {skipLocationChange: true}).then(()=>
        // this.router.navigate(["/rd-wise-data-of-reading"])); 
        this.datarefresh();
       //this.router.navigate(['/rd-wise-data-of-reading']);
      //  $("#myModal11").modal("hide");
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
  // getBelow90Page()
  // {
  //   this.getGroupReadingBelow90();
  // }
  OnclickGetvalue(imageid,custid,billmonth,assesment){

    this.custid=custid;
    this.imageid=imageid;
    this.assesment=assesment;
    this.bilmonthfor=billmonth;
   
// console.log(imageid+""+custid+""+billmonth+""+assesment);
  }

  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, 'Export Reading And Assesment');
  
  }
  exportAsXsls1(): void {
    this.exportService.exportAsExcelFile(this.resp11, 'Export Reading And Assesment');
  }
  datarefresh(){
    
       $("#myModal11").modal("hide");
       if(this.tabtype=='Below 90%')
       {
         this.getGroupReadingBelow90();
       }
       if(this.tabtype=='Above 120%')
       {
         this.getGroupReadingAbove120();
       }
       if(this.tabtype=='Between 90% to 120%')
       {
         this.getGroupReadingbetween90to120();
       }
       if(this.tabtype=='Meter Defective')
       {
         this.getGroupReadingMeterDefective();
       }
       if(this.tabtype=='Meter Not Found')
       {
         this.getGroupReadingMeterNotFound();
       }      

  }
}
