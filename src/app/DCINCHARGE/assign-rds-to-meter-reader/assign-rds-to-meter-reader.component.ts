import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { Arrayremove } from 'src/app/Util-Services/arrayremove';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-assign-rds-to-meter-reader',
  templateUrl: './assign-rds-to-meter-reader.component.html',
  styleUrls: ['./assign-rds-to-meter-reader.component.css']
})
export class AssignRdsToMeterReaderComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  dccode = this.session.get('userlocation');
  billmon:string="Select Bill Month";
billMonths = GlobalConstants.billMonths;
  groupno:string="Select Group";
  meterreaderid:string="Select Meter Reader";
  userid=this.session.get('loginid');
  resp:any;
  resp1:any;
  resp2:any;
  resp3:any;
  error:any;
  SelectedList=Array<any>();
  SelectedRds=Array<any>();
  showData=false;
  length: number = 0;
  loading=false;
  tosend:string="";
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService, private router:Router,private exportService:ExportExcelService) { }

  ngOnInit() 
  {
    this.listOfverifiedMtrrdr();
    this.ActiveGroupsInDC();
  }
  listOfverifiedMtrrdr()
  {
    
    let formdata : FormData = new FormData();
      formdata.append("dccode",this.enc.encrypt(this.dccode));
      return this.http.post("api/mtr-reader/get-verified-readers-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp=response;
        if(this.resp!=null)
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

  ActiveGroupsInDC()
  {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.dccode));
      return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp1=response;
        if(this.resp1!=null)
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
  else  
  {
      this.router.navigate(['/login']);
  }
}

getScheduleGroupWise()
  {
    if(this.billmon=='Select Bill Month')
    {
      alert("Please select bill month");
    }
    else if(this.meterreaderid=='Select Meter Reader')
    {
      alert("Please select meter reader id");
    }
    else
    {
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.dccode));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
      formdata.append("groupno",this.enc.encrypt(this.groupno));
      return this.http.post("api/schedule-ops/get-schedule-of-a-group-for-billmonth", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!=null)
    {
      this.tosend="";
      this.showData=true;
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
     alert('Server not responding');
  }
);
  }
}

// VerifyClick(rdno,srno)
// {
//   if(this.SelectedList.length>0 && this.SelectedRds.length>0)
//   { 
//     this.removeArray(rdno,srno);
//     let index=0;
//     for(let data of this.SelectedList)
//     {
//           index++;
//           alert("DATA : "+data+" RDNO "+rdno);
//       if(data==rdno)
//       {
//         //alert(data+"Custid "+custid);
//        // alert(index-1);
//         if (srno != null) {
//           this.SelectedList.splice(this.SelectedList.indexOf(data),1);
//           console.log(this.SelectedList);
//           // this.SelectedList.push(data);
//         }
    
//         return;
//       }
//     }
//     this.SelectedList.push(srno);
//     this.SelectedRds.push(rdno);

//  }
//   else
//   {
    
//     this.SelectedList.push(srno);
//     this.SelectedRds.push(rdno);
//   }

//   console.log(this.SelectedList);
//   console.log(this.SelectedRds);
  
// }

VerifyClick(rdno,srno)
{
  
  let rdnos = new Arrayremove();
  rdnos.rdno = rdno;
  if (this.SelectedRds.length > 0) {
    for (let data of this.SelectedRds) {
      if (data.rdno == rdnos.rdno) {
        if (srno != null) {
          this.SelectedRds.splice(this.SelectedRds.indexOf(data), 1);
          console.log("Removed array "+JSON.stringify(this.SelectedRds));
          this.length = this.SelectedRds.length;
        }
        return;
      }
    }
    this.SelectedRds.push(rdnos);
    // this.totalAmount1=this.totalAmount + datamdl.amount;   
    console.log("Affter Check Data "+JSON.stringify(this.SelectedRds));
  }
  else {
    this.SelectedRds.push(rdnos);
    console.log("First Time "+JSON.stringify(this.SelectedRds))
  }
  this.length = this.SelectedRds.length;
  console.log("Current Size "+this.SelectedRds.length)
  
}

assignSelectedRds()
{
  this.loading=true;
  if(this.SelectedRds.length>0)
     { 
      for(let data2 of this.SelectedRds)
      {
        this.tosend = this.tosend+data2.rdno+"||";
      }
      // alert(this.tosend); 
      if(this.meterreaderid=='Select Meter Reader')
    {
      alert("Please select meter reader id");
    }
    else
    {
    let formdata : FormData = new FormData();
      formdata.append("meterreaderid",this.enc.encrypt(this.meterreaderid));
      formdata.append("loccode",this.enc.encrypt(this.dccode));
      formdata.append("assgroup",this.enc.encrypt(this.groupno));
      formdata.append("rd",this.enc.encrypt(this.tosend));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
      formdata.append("userid",this.enc.encrypt(this.userid));
      // alert(this.userid);
      return this.http.post("api/meter-reader-assignment-ops/assigned-a-rd-in-group-to-reader", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp3=response;
        if(this.resp3.flag==true)
        {
          this.loading=false;
        alert(this.resp3.msg);
        this.SelectedRds.length=0;
        // alert(this.SelectedRds.length);
        this.getScheduleGroupWise();
        // this.router.navigate(['/assign-scheduled-group-to-meter-reader']);
        }
        else
        {
          // alert(this.resp.msg);
        }
  },
  error=>{
   this.error = error
   alert('This RD is already assigned to the meter reader '+this.meterreaderid);
   this.loading=false;
     
  }
);
  }

    }
    else
    {
      alert("Please select RD's to assign");
      this.loading=false;
    }
}

exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp2, 'all-assignments-to-reader');
  
  }

}
