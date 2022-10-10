import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SessionStorageService } from 'angular-web-storage';
import { EncreptiondecreptionService } from 'src/app/Util-services/encreptiondecreption.service';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { GlobalConstants } from 'src/app/Util-services/global-constants';

@Component({
  selector: 'app-group-wise-spot-bill-list',
  templateUrl: './group-wise-spot-bill-list.component.html',
  styleUrls: ['./group-wise-spot-bill-list.component.css']
})
export class GroupWiseSpotBillListComponent implements OnInit {

  billmon : any;
  loading : boolean;
  billMonths = GlobalConstants.billMonths;
  locationCode = this.session.get('userlocation');
  groups : any = [];
  spotBillList : any = [];
  groupno;
  status = 'ALL';
  constructor(private session : SessionStorageService, private http: HttpClient, 
    private enc: EncreptiondecreptionService, private exportService : ExportExcelService) { }

  ngOnInit() {
    this.getGroupsByLocationCode();
  }

  getGroupsByLocationCode(){
    this.groups = [];
    this.loading = true;
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    return this.http.post("api/master-rec/get-list-of-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.groups = success;
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  rdNumbers : any = [];
  rdNo : string;
  getRDByGroupNo(){
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("grno",this.enc.encrypt(this.groupno));
    return this.http.post("api/master-rec/get-list-of-rds-in-groups-in-dc", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      console.log(success);
      this.rdNumbers = success;
    },
    error=>{
      console.log(error);
    });
  }

  getGroupWiseSpotBill(){
    this.spotBillList = [];
    this.listToShow = [];
    this.successList = [];
    this.errorList = [];
    this.loading = true;
    this.status = 'ALL';
    let formdata : FormData = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("groupno",this.enc.encrypt(this.groupno));
    formdata.append("rdno",this.enc.encrypt(this.rdNo));
    return this.http.post("api/spot-bill-reporter/get-list-for-group", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.spotBillList = success;
      this.listToShow = Object.assign([], this.spotBillList);
      this.separateByStatus();
    }, error=>{
      this.loading = false;
      console.log(error);
    });
  }

  listToShow = [];
  successList = [];
  errorList = [];
  separateByStatus(){
    this.spotBillList.forEach(element => {
      if(element.ngbuploadstatus === "UPLOADEDSUCCESSFULLY"){ 
        this.successList.push(element);
      } else if(element.ngbuploadstatus === "ERRORINUPLOAD"){
        this.errorList.push(element);
      }
    });
  }

  statusChanged(){
    if(this.status === "SUCCESS"){
      this.listToShow = Object.assign([], this.successList);
    } else if(this.status === "ERROR"){
      this.listToShow = Object.assign([], this.errorList);
    } else if(this.status === "ALL"){
      this.listToShow = Object.assign([], this.spotBillList);
    }
  }

  repushREes
  rePush(consno){

    let formdata = new FormData();
    formdata.append("loccode",this.enc.encrypt(this.locationCode));
    formdata.append("billmonth",this.enc.encrypt(this.billmon));
    formdata.append("conumerno",this.enc.encrypt(consno));
    this.loading = true;
    return this.http.post("api/spotbill-uploader/re-push-spot-bill", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
      this.loading = false;
      this.repushREes =success
      alert(this.repushREes.msg)
      this.getGroupWiseSpotBill();
    }, error=>{
      this.loading = false;
      console.log(error);
      alert(this.repushREes.msg)
    });
  }

  deleteReading(data){
    if(confirm("Are you sure, you want to delete Read ?")){
      if(data.ngbuploadstatus !== "ERRORINUPLOAD"){
        return;
      }
      let formdata = new FormData();
      formdata.append("consno",this.enc.encrypt(data.consumerno));
      formdata.append("billmon",this.enc.encrypt(this.billmon));
  
      return this.http.post("api/spot-bill-reporter/delete-spot-bill", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(success=>{
        this.loading = false;
        alert("Deleted Successfully");
        this.getGroupWiseSpotBill();
      }, error=>{
        this.loading = false;
        console.log(error);
        alert("Unable to delete");
      });
    }
  }

  exportButtonClicked(){
    this.exportService.exportAsExcelFile(this.spotBillList, "SPOT_BILL_" + this.groupno + "_" + this.rdNo);
  }
  
}
