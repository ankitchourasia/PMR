
  import { Component, OnInit, Inject } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { SessionStorageService } from 'angular-web-storage';
  import { Router } from '@angular/router';
  import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
  import { BaseUrl } from 'src/app/Util-services/base-url';
  import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
  import * as CanvasJS from 'canvasjs/dist/canvasjs';
  import { DOCUMENT } from '@angular/common';
  import { TokengenratorService } from '../../Util-services/tokengenerator-service';
  import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

  declare var $ :any;
  
@Component({
  selector: 'app-more-detailed-status',
  templateUrl: './more-detailed-status.component.html',
  styleUrls: ['./more-detailed-status.component.css']
})
export class MoreDetailedStatusComponent implements OnInit {

  
    baseurl:BaseUrl= new BaseUrl();
    resp:any;
    resp1:any;
    resp2:any;
    resp3:any;
    resp4:any;
    resp5:any;
    error:any;
    loccode = this.session.get('userlocation');
    billmonth:string;
    billmonth1:string;
    groupno:string="Select Group";
    rd:string="Select RD No.";
    loading=false;
    showData=false;
    showData1=false;
    showData2=false;
    showData3=false;
    meterreaderid:string;
    pieChartData:any = [
      {
        data:[]
      }
    ];
    pieChartData1:any = [
      {
        data:[]
      }
    ];
    
    constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,private exportService:ExportExcelService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService,  private router:Router,@Inject(DOCUMENT) private document: any) { 
      
    }
  
    ngOnInit() 
    {
      if(this.session.get('check')=="FOUNDOK" && this.session.get('role')=="DCINCHARGE")
      {
        this.pieChartData=[
          {
            data:[]
          }
        ];
        this.pieChartData1=[
          {
            data:[]
          }
        ];
        this.ActiveGroupsInDC();
        this.listOfverifiedMtrrdr();
       
      }
      else  
      {
        this.router.navigate(['/login']);
      }
    }
    ActiveGroupsInDC()
    {
        let formdata : FormData = new FormData();
        formdata.append("loccode",this.enc.encrypt(this.loccode));
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
    
    getReadingsData()
    {
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("billmonth",this.enc.encrypt(this.billmonth));
      formdata.append("grno",this.enc.encrypt(this.groupno));
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      return this.http.post("api/reading-ops/get-formatted-reading-file-for-group", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp2=response;
        if(this.resp2!='')
        {
          this.loading=false;
          this.showData=true;
      
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
      this.loading=false;
      alert('Server not responding');
      });
    }
  
  
    imageDownload()
    {
      let formdata : FormData = new FormData();
      formdata.append("billmonth",this.enc.encrypt(this.billmonth));
      formdata.append("grno",this.enc.encrypt(this.groupno));
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("rdno",this.enc.encrypt(this.rd));
      return this.http.post("api/reading-ops/get-formatted-reading-folder-download", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
      {
        this.resp4=response;
        
          // alert(this.resp4.path);
          this.downloadZip(this.resp4.path);
   
      },
      error=>{
      this.error = error
      alert('Server not responding');
      });
    }
    downloadZip(filepath)
    {
  
    this.document.location.href = "api/mtr-reader/get-meter-reader-image?path="+filepath;
    }
  
  
  
  
    exportAsXsls(): void {
      this.exportService.exportAsExcelFile(this.resp2, this.groupno+"_"+this.billmonth);
    }
  
    listOfverifiedMtrrdr()
    {
      let formdata : FormData = new FormData();
        formdata.append("dccode",this.enc.encrypt(this.loccode));
        return this.http.post("api/mtr-reader/get-verified-readers-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
        {
          this.resp=response;
          if(this.resp.flag==true)
      {
      // alert(this.resp.msg);
      this.router.navigate(['/dcinch_dashboard']);
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
    getMoreReadingData()
    {
      
        //alert(this.pieChartData);
        let formdata : FormData = new FormData();
        formdata.append("loccode",this.enc.encrypt(this.loccode));
        formdata.append("billmonth",this.enc.encrypt(this.billmonth));
        formdata.append("gr",this.enc.encrypt(this.groupno));
        return this.http.post("api/dc-incharge-reports/group-wise-count-dashboard-analysis", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(data=>
        {
          this.pieChartData = data as any[];
          this.showData2=true;
          this.showData3=false;
         // this.showpie();
         
  
           },
    error=>{
     this.error = error
       alert('Server not responding');
    }
  );
    }
    
    getMoreReadingDataMRWise()
    {
     // alert(this.pieChartData1);
      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("billmonth",this.enc.encrypt(this.billmonth1));
      formdata.append("meterreadername",this.enc.encrypt(this.meterreaderid));
      return this.http.post("api/dc-incharge-reports/meter-reader-wise-count-dashboard", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(data=>
      {
        this.pieChartData1 = data as any[];
        this.showData3=true;
        this.showData2=false;
        //this.showpieMR();
        
         },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
    }

// showpie() 
// {
//   let dataPoints = [
//     { y: this.pieChartData.consumer, label: "Total Consumers", name: "total Consumers" },
//     { y: this.pieChartData.uploadedreadings, label: "Uploaded Readings", name: "Uploaded Readings" },
//     { y: this.pieChartData.meterDefective, label: "Meter Defective", name: "Meter Defective" },
//     { y: this.pieChartData.premiseLocked, label: "Premise Locked", name: "Premise Locked" }
    
//   ];
//   alert(this.pieChartData.uploadedreadings);
//   let chart = new CanvasJS.Chart("chartContainer",{
//     //animationEnabled: true,
//     title:{
//       text: ""
//     },
//     data: [{
//       type: "pie",
//       startAngle: 240,
//       showInLegend: true,
//       toolTipContent: "{name}: <strong>{y}</strong>",
//       indexLabel: "{label} {y}",
//       dataPoints : dataPoints
//     }]
//   });
//   chart.render();
  
//   }
  

//   showpieMR() 
//   {
//     let dataPoints = [
// 			{ y: this.pieChartData1.consumer, label: "Total Consumers", name: "Total Consumers"},
//       { y: this.pieChartData1.uploadedreadings, label: "Uploaded Readings", name: "Uploaded Readings" },
//       { y: this.pieChartData1.meterDefective, label: "Meter Defective", name: "Meter Defective" },
//       { y: this.pieChartData1.premiseLocked, label: "Premise Locked", name: "Premise Locked" }

// 		];
//     //alert(this.pieChartData1.uploadedreadings);
// 		let chart = new CanvasJS.Chart("chartContainer",{
// 			//animationEnabled: true,
// 			title:{
// 				text: ""
// 			},
// 			data: [{
//         type: "pie",
//         startAngle: 240,
// 		    showInLegend: true,
// 		    toolTipContent: "{name}: <strong>{y}</strong>",
// 		    indexLabel: "{label} {y}",
// 				dataPoints : dataPoints
// 			}]
// 		});
//     chart.render();
//     }



    remainingCount()
    {
      this.loading=true;
      let formdata : FormData = new FormData();
      formdata.append("billmonth",this.enc.encrypt(this.billmonth));
      formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/reading-operations/get-group-wise-remaining-count", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
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
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error
    this.loading=false;
    alert('Server not responding');
    });
    }
    readingStatusCount(billmonth)
    { this.loading=true;
      let formdata : FormData = new FormData();
    formdata.append("billmonth",this.enc.encrypt(this.billmonth));
    formdata.append("loccode",this.enc.encrypt(this.loccode));
    
    return this.http.post("api/reading-operations/get-group-wise-Reading-status-count", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
    {
      this.resp3=response;
      if(this.resp3!='')
      {
        this.loading=false;
        this.showData1=true;
        this.showData=false;
     
      }
      else
      {
        this.loading=false;
        // alert(this.resp.msg);
      }
    },
    error=>{
    this.error = error;
    this.loading=false;
    alert('Server not responding');
    });
    }
    viewList(grno)
    {
    this.navCtrl.navigate('view-remaining-list-consumers',{grno:grno,billmonth:this.billmonth});
    }
  }
  