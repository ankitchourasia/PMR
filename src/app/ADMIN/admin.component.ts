import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
//   baseurl:BaseUrl= new BaseUrl();
//   loading=false;
//   billmonth:string="Select Bill Month";
//   billMonths = GlobalConstants.billMonths;
//   showData=false;
//   loccode = this.session.get('userlocation');
//   today= new Date();
//   resp:any;
//   resp2:any;
//   resp3:any;
//   showData1=false;
//   jstoday = '';
//   error:any;
//   pieChartData:any = [
//     {
//       data:[]
//     }
//   ];
//   constructor(private enc: EncreptiondecreptionService,private genrateToken:TokengenratorService,public navCtrl: NgxNavigationWithDataComponent,private http: HttpClient,private session:SessionStorageService) 
//   {
//     this.jstoday = formatDate(this.today, 'MMM-yyyy', 'en-US', '+0530');
//     this.billmonth=this.jstoday;
//   }
 
  constructor(){
    console.log("inside admin component");
  }
  ngOnInit() {

  }

//       let formdata : FormData = new FormData();
//       formdata.append("loccode",this.enc.encrypt(this.loccode));
//       formdata.append("billmonth",this.enc.encrypt(this.jstoday));
//       return this.http.post("api/dc-incharge-reports/loc-wise-count-dashboard", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(data=>
//       {
//         this.pieChartData = data as any[];
       
//        this.showpie();

//          },
//   error=>{
//    this.error = error
//      alert('Server not responding');
//   }
// );
//   }

//   getPreviousbillMonthDashboard()
//   {
//     let formdata : FormData = new FormData();
//       formdata.append("loccode",this.enc.encrypt(this.loccode));
//       formdata.append("billmonth",this.enc.encrypt(this.billmonth));
//       return this.http.post("api/dc-incharge-reports/loc-wise-count-dashboard", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(data=>
//       {
//         this.pieChartData = data as any[];
       
//        this.showpie();

//          },
//   error=>{
//    this.error = error
//      alert('Server not responding');
//   }
// );
//   }
//   showpie() 
//   {
//     let dataPoints = [
// 			{ y: this.pieChartData.consumer, label: "Total Consumers", name: "Total Consumers"},
//       { y: this.pieChartData.uploadedreadings, label: "Uploaded Readings", name: "Uploaded Readings" },
//       { y: this.pieChartData.meterDefective, label: "Meter Defective", name: "Meter Defective" },
//       { y: this.pieChartData.premiseLocked, label: "Premise Locked", name: "Premise Locked" }
      
// 			// { y: 50 },
// 			// { y: 65 },
// 			// { y: this.pieChartData.consumer },
// 			// { y: this.pieChartData.uploadedreadings },
// 			// { y: 28 },
// 			// { y: 34 },
// 			// { y: 14 }
// 		];
		
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
//     remainingCount(billmonth)
//     {
//       this.loading=true;
//       let formdata : FormData = new FormData();
//     formdata.append("billmonth",this.enc.encrypt(this.billmonth));
//     formdata.append("loccode",this.enc.encrypt(this.loccode));
    
//     return this.http.post("api/reading-operations/get-group-wise-remaining-count", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
//     {
//       this.resp2=response;

//       if(this.resp2!='')
//       {
//         this.loading=false;
//         this.showData=true;
//         this.showData1=false;
     
//       }
//       else
//       {
//         this.loading=false;
//         // alert(this.resp.msg);
//       }
//     },
//     error=>{
//     this.error = error
//     this.loading=false;
//     alert('Server not responding');
//     });
//     }
    
//     readingStatusCount(billmonth)
//     { this.loading=true;
//       let formdata : FormData = new FormData();
//     formdata.append("billmonth",this.enc.encrypt(this.billmonth));
//     formdata.append("loccode",this.enc.encrypt(this.loccode));
    
//     return this.http.post("api/reading-operations/get-group-wise-Reading-status-count", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
//     {
//       this.resp3=response;
//       if(this.resp3!='')
//       {
//         this.loading=false;
//         this.showData1=true;
//         this.showData=false;
     
//       }
//       else
//       {
//         this.loading=false;
//         // alert(this.resp.msg);
//       }
//     },
//     error=>{
//     this.error = error;
//     this.loading=false;
//     alert('Server not responding');
//     });
//     }
//     viewList(grno)
//     {
//     this.navCtrl.navigate('view-remaining-list-consumers',{grno:grno,billmonth:this.billmonth});
//     }
//     moreDetailedCount(){
//       this.navCtrl.navigate('/more-detailed-status');
//     }

}
