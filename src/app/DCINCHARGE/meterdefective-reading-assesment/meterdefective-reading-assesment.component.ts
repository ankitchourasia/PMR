import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var $ :any;
@Component({
  selector: 'app-meterdefective-reading-assesment',
  templateUrl: './meterdefective-reading-assesment.component.html',
  styleUrls: ['./meterdefective-reading-assesment.component.css']
})
export class MeterdefectiveReadingAssesmentComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loccode = this.session.get('userlocation');
  groupno:string;
  billmonth:string;
  resp:any;
  resp1:any;
  resp2:any;
  error:any;
  dateofreading:string;
  loading=false;
  showdata=false;
  SelectedList=Array<any>();
  SelectedImageId=Array<any>();
  custid:string;
imageid:string;
assesment:string;
bilmonthfor:string;
globalCounter:number=0;
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private activeroute:ActivatedRoute,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,private exportService:ExportExcelService) { }

  ngOnInit() {
    if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
    {
      this.groupno=this.activeroute.snapshot.params.groupno;
      this.billmonth=this.activeroute.snapshot.params.billmonth;
      this.getGroupReadingMeterDefective();
      this.SelectedList=Array<any>();
      this.SelectedImageId=Array<any>();
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

  getGroupReadingMeterDefective()
  {
   
    this.loading=true;
    let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-meter-defective", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp=response;
      if(this.resp.length>0)
      {
        for(let data of this.resp)
        {
          let date = data.datereading;
          //alert(date);
          let n=date.indexOf(' ');
          this.dateofreading=date.substr(0,n);        
        }
        this.showdata=false;
         this.loading=false;
      }
      else
      {
        this.showdata=true;
        this.loading=false;
       
      }
    },
    error=>{
    this.error = error
    this.loading=false;

    alert('Server not responding');
    });
  }

  getGroupReadingsDatewise()
  {
    this.router.navigate(['/reading-assesment-group-wise',this.groupno,this.billmonth])
  }

  getGroupReadingBelow90()
  {
    this.router.navigate(['/below90-reading-assesment',this.groupno,this.billmonth])
  }

  getGroupReadingAbove120()
  {
    this.router.navigate(['/above120-reading-assesment',this.groupno,this.billmonth])
  }

  getGroupReadingbetween90to120()
  {
    this.router.navigate(['/assesment90-to120-reading',this.groupno,this.billmonth])
  }

  getGroupReadingMeterNotFound()
  {
    this.router.navigate(['/meternotfound-reading-assesment',this.groupno,this.billmonth])
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


verifyReading(custid,imageid)
{
//this.loading=true;
let formdata : FormData = new FormData();
formdata.append("custid",this.enc.encrypt(custid));
formdata.append("billmonth",this.enc.encrypt(this.billmonth));
formdata.append("readingid",this.enc.encrypt(imageid));
formdata.append("userid",this.enc.encrypt(this.loccode));
return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
{
  this.resp1=response;
  if(this.resp1!=null)
  {
  
  alert(this.resp1.msg);
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


OnclickGetvalue(imageid,custid,billmonth,assesment){

this.custid=custid;
this.imageid=imageid;
this.assesment=assesment;
this.bilmonthfor=billmonth;

// console.log(imageid+""+custid+""+billmonth+""+assesment);
}

verifySelectedReading()
{
  
  this.approveMeter(this.globalCounter);

}

approveMeter(counter)
{
//alert("Counter Value "+counter);
let formdata : FormData = new FormData();
formdata.append("custid",this.enc.encrypt(this.SelectedList[counter]));
formdata.append("billmonth",this.enc.encrypt(this.billmonth));
formdata.append("userid",this.enc.encrypt(this.loccode));
formdata.append("readingid",this.enc.encrypt(this.SelectedImageId[counter]));
return this.http.post("api/assesment-records/update-reading-to-approve", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
{
  this.resp2=response;
  if(this.resp2!=null)
  {

  if(this.globalCounter<this.SelectedList.length-1)
  {
    this.globalCounter=this.globalCounter+1;
      //alert("Global Counter "+this.globalCounter + " "+this.SelectedListBelow90.length);
      this.approveMeter(this.globalCounter);

    }
    else{
      alert(this.resp2.msg);
    //     this.SelectedList=Array<any>();
    // this.SelectedImageId=Array<any>();
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
     $("#myModal11").modal("hide");
     this.ngOnInit();
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
    this.session.set("billmonth",this.billmonth);
    this.navCtrl.navigate('delete-reading-remark',{custid:custid,billmonth:this.billmonth});
  }

exportAsXsls(): void {
  this.exportService.exportAsExcelFile(this.resp, 'meterdefective'+this.groupno+"_"+this.billmonth);

}

}
