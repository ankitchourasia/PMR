import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {formatDate } from '@angular/common';
import { SessionStorageService } from 'angular-web-storage';
  import { BaseUrl } from 'src/app/Util-services/base-url';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import * as CanvasJS from 'canvasjs/dist/canvasjs.min';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';

declare var $ :any;


@Component({
  selector: 'app-dcinch-dashboard',
  templateUrl: './dcinch-dashboard.component.html',
  styleUrls: ['./dcinch-dashboard.component.css']
})
export class DcinchDashboardComponent implements OnInit {
  baseurl:BaseUrl= new BaseUrl();
  loading=false;
  billmonth:string="Select Bill Month";
  showData=false;
  loccode = this.session.get('userlocation');
  token = this.session.get('token');
  today= new Date();
  resp:any;
  resp2:any;
  resp3:any;
  showData1=false;
  jstoday = '';
  error:any;
  pieChartData:any = [
    {
      data:[]
    }
  ];
  constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService) 
  {
    this.jstoday = formatDate(this.today, 'MMM-yyyy', 'en-US', '+0530');
    this.billmonth=this.jstoday;
  }
 
  ngOnInit() 
  {

      let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("billmonth",this.enc.encrypt(this.jstoday));
      return this.http.post("api/dc-incharge-reports/loc-wise-count-dashboard", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(data=>
      {
        this.pieChartData = data as any[];
       
       this.showpie();

         },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
  getPreviousbillMonthDashboard()
  {
    let formdata : FormData = new FormData();
      formdata.append("loccode",this.enc.encrypt(this.loccode));
      formdata.append("billmonth",this.enc.encrypt(this.billmonth));
      return this.http.post("api/dc-incharge-reports/loc-wise-count-dashboard", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(data=>
      {
        this.pieChartData = data as any[];
       
       this.showpie();

         },
  error=>{
   this.error = error
     alert('Server not responding');
  }
);
  }
  showpie() 
  {
    let dataPoints = [
      { y: this.pieChartData.consumer, label: "Total Consumers", name: "Total Consumers"},
      { y: this.pieChartData.uploadedreadings, label: "Uploaded Readings", name: "Uploaded Readings" },
      { y: this.pieChartData.normal, label: "Normal", name: "Normal" },
      { y: this.pieChartData.meterDefective, label: "Meter Defective", name: "Meter Defective" },
      { y: this.pieChartData.meterChange, label: "Meter Change", name: "Meter Change" },
      { y: this.pieChartData.premiseLocked, label: "Premise Locked", name: "Premise Locked" },
      { y: this.pieChartData.meterTheft, label: "Theft cases", name: "Theft cases" },
      { y: this.pieChartData.meterNotFound, label: "Meter Not Found", name: "Meter Not Found" },
      
		];
		
		let chart = new CanvasJS.Chart("chartContainer",{
			//animationEnabled: true,
			title:{
				text: ""
			},
			data: [{
        type: "pie",
        startAngle: 240,
		    showInLegend: true,
		    toolTipContent: "{name}: <strong>{y}</strong>",
		    indexLabel: "{label} {y}",
				dataPoints : dataPoints
			}]
		});
    chart.render();
    
    }
    remainingCount(billmonth)
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
    moreDetailedCount(){
      this.navCtrl.navigate('/more-detailed-status');
    }

    }
  
  



