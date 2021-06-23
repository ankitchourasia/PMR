import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionStorageService } from 'angular-web-storage';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxNavigationWithDataComponent } from 'ngx-navigation-with-data';
import { BaseUrl } from 'src/app/Util-services/base-url';
import { ExportExcelService } from 'src/app/Util-services/export-excel.service';
import { TokengenratorService } from '../../Util-services/tokengenerator-service';
import { EncreptiondecreptionService } from '../../Util-services/encreptiondecreption.service';
import { read } from 'xlsx/types';

declare var $: any;
@Component({
  selector: 'app-above120-reading-assesment',
  templateUrl: './above120-reading-assesment.component.html',
  styleUrls: ['./above120-reading-assesment.component.css']
})
export class Above120ReadingAssesmentComponent implements OnInit {
  baseurl: BaseUrl = new BaseUrl();
  loccode = this.session.get('userlocation');
  groupno: string;
  billmonth: string;
  resp: any;
  resp1: any;
  resp2: any;
  error: any;
  dateofreading: string;
  loading = false;
  showdata = false;
  SelectedList = Array<any>();
  SelectedImageId = Array<any>();
  // custid: string;
  // imageid: string;
  // assesment: string;
  // bilmonthfor: string;
  globalCounter: number = 0;
  public HEADER_MESSAGE : any;
  constructor(private enc: EncreptiondecreptionService, private genrateToken: TokengenratorService, private activeroute: ActivatedRoute, public navCtrl: NgxNavigationWithDataComponent, private http: HttpClient, private session: SessionStorageService, private router: Router, private exportService: ExportExcelService) { }

  ngOnInit() {
    if (this.session.get('check') == "FOUNDOK" && this.session.get('role') == "DCINCHARGE") {
      this.groupno = this.activeroute.snapshot.params.groupno;
      this.billmonth = this.activeroute.snapshot.params.billmonth;
      // this.getGroupReadingAbove120();
      this.activeTab = "BELOW_90";
      this.setHeaderMessage();
      this.getReading();
      this.SelectedList = Array<any>();
      this.SelectedImageId = Array<any>();
    }
    else {
      this.router.navigate(['/login']);
    }
  }

  setHeaderMessage(){
    if (this.activeTab === "ABOVE_120") {
      this.HEADER_MESSAGE = "Assesment Above 120% of Expected Consumption";
    } else if (this.activeTab === "BELOW_90") {
      this.HEADER_MESSAGE = "Assesment Below Then 90% of Expected Consumption";
    } else if (this.activeTab === "BETWEEN_90_AND_120") {
      this.HEADER_MESSAGE = "Assesment Between 90% to 120% of Expected Consumption";
    } else if (this.activeTab === "METER_DEFCTIVE") {
      this.HEADER_MESSAGE = "All Cases Of Meter Defective";
    } else if (this.activeTab === "METER_NOT_FOUND") {
      this.HEADER_MESSAGE = "All Cases of Meter Not Found";
    } else if (this.activeTab === "ALL") {
      this.HEADER_MESSAGE = "All";
    }
  }

  imagePopup() {
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

  // getGroupReadingAbove120()
  // {

  //   this.loading=true;
  //   let formdata : FormData = new FormData();
  //   formdata.append("billmonth",this.enc.encrypt(this.billmonth));
  //   formdata.append("groupno",this.enc.encrypt(this.groupno));
  //   formdata.append("loccode",this.enc.encrypt(this.loccode));

  //   return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-above-120", formdata, {headers:new HttpHeaders().set('Authorization',this.session.get('token'))}).subscribe(response=>
  //   {
  //     this.resp=response;
  //     if(this.resp.length>0)
  //     {
  //       for(let data of this.resp)
  //   {
  //     let date = data.datereading;
  //     //alert(date);
  //     let n=date.indexOf(' ');
  //     this.dateofreading=date.substr(0,n);        
  //   }
  //       this.showdata=false;
  //        this.loading=false;
  //     }
  //     else
  //     {
  //       this.showdata=true;
  //       this.loading=false;

  //     }
  //   },
  //   error=>{
  //   this.error = error
  //   this.loading=false;

  //   alert('Server not responding');
  //   });
  // }

  activeTab: String;
  getReadingsDatewise() {
    this.activeTab = "ALL";
    this.router.navigate(['/reading-assesment-group-wise', this.groupno, this.billmonth])
  }

  getReadingBelow90() {
    this.activeTab = "BELOW_90";
    // this.router.navigate(['/below90-reading-assesment',this.groupno,this.billmonth])
    this.getReading();
  }

  getReadingbetween90to120() {
    this.activeTab = "BETWEEN_90_AND_120";
    // this.router.navigate(['/assesment90-to120-reading',this.groupno,this.billmonth])
    this.getReading();
  }

  getReadingMeterDefective() {
    this.activeTab = "METER_DEFCTIVE";
    // this.router.navigate(['/meterdefective-reading-assesment',this.groupno,this.billmonth])
    this.getReading();
  }

  getReadingMeterNotFound() {
    this.activeTab = "METER_NOT_FOUND";
    // this.router.navigate(['/meternotfound-reading-assesment',this.groupno,this.billmonth])
    this.getReading();
  }

  getReadingAbove120() {
    this.activeTab = "ABOVE_120";
    this.getReading();
  }

  getReading() {
    this.readingsToVerify = [];
    let formData: FormData = new FormData();
    formData.append("billmonth", this.enc.encrypt(this.billmonth));
    formData.append("groupno", this.enc.encrypt(this.groupno));
    formData.append("loccode", this.enc.encrypt(this.loccode));
    this.setHeaderMessage();
    if (this.activeTab === "ABOVE_120") {
      this.getReadingsAbove120(formData);
    } else if (this.activeTab === "BELOW_90") {
      this.getReadingsBelow90(formData);
    } else if (this.activeTab === "BETWEEN_90_AND_120") {
      this.getReadingsBetween90And120(formData);
    } else if (this.activeTab === "METER_DEFCTIVE") {
      this.getReadingsMeterDefective(formData);
    } else if (this.activeTab === "METER_NOT_FOUND") {
      this.getReadingsMeterNotFound(formData);
    } else if (this.activeTab === "ALL") {
      this.getReadingsDatewise();
    }
  }

  getReadingsAbove120(formData) {
    this.loading = true;
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-above-120", formData, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.resp = response;
      if (this.resp.length > 0) {
        for (let data of this.resp) {
          let date = data.datereading;
          //alert(date);
          let n = date.indexOf(' ');
          this.dateofreading = date.substr(0, n);
        }
        this.showdata = false;
        this.loading = false;
      }
      else {
        this.showdata = true;
        this.loading = false;
      }
    }, error => {
      this.error = error
      this.loading = false;
      alert('Server not responding');
    });
  }

  getReadingsBelow90(formData) {
    this.loading = true;
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-below-then-90", formData, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.resp = response;
      if (this.resp.length > 0) {
        for (let data of this.resp) {
          let date = data.datereading;
          //alert(date);
          let n = date.indexOf(' ');
          this.dateofreading = date.substr(0, n);
        }
        this.showdata = false;
        this.loading = false;
      }
      else {
        this.showdata = true;
        this.loading = false;
      }
    }, error => {
      this.error = error
      this.loading = false;
      alert('Server not responding');
    });
  }

  getReadingsBetween90And120(formData) {
    this.loading = true;
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-in-90-to-120", formData, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.resp = response;
      if (this.resp.length > 0) {
        for (let data of this.resp) {
          let date = data.datereading;
          //alert(date);
          let n = date.indexOf(' ');
          this.dateofreading = date.substr(0, n);
        }
        this.showdata = false;
        this.loading = false;
      }
      else {
        this.showdata = true;
        this.loading = false;
      }
    }, error => {
      this.error = error
      this.loading = false;
      alert('Server not responding');
    });
  }

  getReadingsMeterDefective(formData) {
    this.loading = true;
    return this.http.post("api/assesment-records/get-record-group-wise-for-assesment-meter-defective", formData, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.resp = response;
      if (this.resp.length > 0) {
        for (let data of this.resp) {
          let date = data.datereading;
          //alert(date);
          let n = date.indexOf(' ');
          this.dateofreading = date.substr(0, n);
        }
        this.showdata = false;
        this.loading = false;
      }
      else {
        this.showdata = true;
        this.loading = false;
      }
    }, error => {
      this.error = error
      this.loading = false;
      alert('Server not responding');
    });
  }

  getReadingsMeterNotFound(formData) {
    this.loading = true;
    return this.http.post("api/assesment-records/get-record-for-group-wise-for-assesment-meter-notfound", formData, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.resp = response;
      if (this.resp.length > 0) {
        for (let data of this.resp) {
          let date = data.datereading;
          //alert(date);
          let n = date.indexOf(' ');
          this.dateofreading = date.substr(0, n);
        }
        this.showdata = false;
        this.loading = false;
      }
      else {
        this.showdata = true;
        this.loading = false;
      }
    }, error => {
      this.error = error
      this.loading = false;
      alert('Server not responding');
    });
  }

  VerifyClick(custid, imageid, srno) {

    if (this.SelectedList.length > 0 && this.SelectedImageId.length > 0) {
      let index = 0;
      this.removeArray(imageid, srno);

      for (let data of this.SelectedList) {
        index++;
        //alert(index);
        if (data == custid) {
          //alert(data+"Custid "+custid);
          // alert(index-1);
          if (srno != null) {
            this.SelectedList.splice(this.SelectedList.indexOf(data), 1);
            console.log(this.SelectedList);
          }

          return;
        }
      }

      this.SelectedList.push(custid);
      this.SelectedImageId.push(imageid);

    }
    else {

      this.SelectedList.push(custid);
      this.SelectedImageId.push(imageid);
    }

    console.log(this.SelectedList);
    console.log(this.SelectedImageId);

  }

  removeArray(imageid, srno) {
    let index = 0;
    for (let data01 of this.SelectedImageId) {
      index++;
      console.log(data01);
      //alert(index);
      if (data01 == imageid) {
        console.log("match");

        //alert(data+"Custid "+custid);
        // alert(index-1);
        if (srno != null) {
          this.SelectedImageId.splice(this.SelectedImageId.indexOf(data01), 1);
          console.log(this.SelectedImageId);
        }

        return;
      }

    }
  }


  verifyReading(custid, imageid) {
    //this.loading=true;
    let formdata: FormData = new FormData();
    formdata.append("custid", this.enc.encrypt(custid));
    formdata.append("billmonth", this.enc.encrypt(this.billmonth));
    formdata.append("readingid", this.enc.encrypt(imageid));
    formdata.append("userid", this.enc.encrypt(this.loccode));
    return this.http.post("api/assesment-records/update-reading-to-approve", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.resp1 = response;
      if (this.resp1 != null) {

        alert(this.resp1.msg);
        // $("#myModal11").modal("hide");
        this.getReading();
        this.nextClicked();
      }
      else {
        // alert(this.resp.msg);
      }
    },
      error => {
        this.error = error
        alert('Server not responding');
      });
  }

  index: any;
  selectedData : any = {};
  OnclickGetvalue(data) {
    this.selectedData = data;
    console.log(this.selectedData);
    this.index = this.resp.indexOf(data);
    this.getImage1(data.imagepath);
    this.getImage2(data.image2path);
    // this.custid = data.custid;
    // this.imageid = data.imageid;
    // this.assesment = data.assesment;
    // this.bilmonthfor = data.billmonth;

    // console.log(imageid+""+custid+""+billmonth+""+assesment);
  }

  image1: any;
  getImage1(imagePath) {
    console.log("inside get image");
    this.http.get("api/mtr-reader/get-meter-reader-image?path=" + imagePath, { responseType: 'blob' }).subscribe(success => {
      console.log(success);
      this.createImage1FromBlob(success);
    }, error => {
      console.log(error);
    })
  }

  image2: any;
  getImage2(imagePath) {
    console.log("inside get image");
    this.http.get("api/mtr-reader/get-meter-reader-image?path=" + imagePath, { responseType: 'blob' }).subscribe(success => {
      console.log(success);
      this.createImage2FromBlob(success);
    }, error => {
      console.log(error);
    })
  }

  createImage1FromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image1 = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  createImage2FromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image2 = reader.result;
    }, false);

    if (image) {
      reader.readAsDataURL(image);
    }
  }

  verifySelectedReading() {

    this.approveMeter(this.globalCounter);

  }

  approveMeter(counter) {
    //alert("Counter Value "+counter);
    let formdata: FormData = new FormData();
    formdata.append("custid", this.enc.encrypt(this.SelectedList[counter]));
    formdata.append("billmonth", this.enc.encrypt(this.billmonth));
    formdata.append("userid", this.enc.encrypt(this.loccode));
    formdata.append("readingid", this.enc.encrypt(this.SelectedImageId[counter]));
    return this.http.post("api/assesment-records/update-reading-to-approve", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.resp2 = response;
      if (this.resp2 != null) {

        if (this.globalCounter < this.SelectedList.length - 1) {
          this.globalCounter = this.globalCounter + 1;
          //alert("Global Counter "+this.globalCounter + " "+this.SelectedListBelow90.length);
          this.approveMeter(this.globalCounter);

        }
        else {
          alert(this.resp2.msg);
          //     this.SelectedList=Array<any>();
          // this.SelectedImageId=Array<any>();
          this.getReading();
        }
      }

      else {
        // alert(this.resp.msg);
      }

    },
      error => {
        this.error = error
        alert('Server not responding');
      });
  }

  editAssesment() {
    let formdata: FormData = new FormData();
    formdata.append("readingid", this.enc.encrypt(this.selectedData.imageid));
    formdata.append("ivrs", this.enc.encrypt(this.selectedData.custid));
    formdata.append("billmonth", this.enc.encrypt(this.billmonth));
    formdata.append("assesment", this.enc.encrypt(this.selectedData.assesment));
    return this.http.post("api/reading-ops/edit-readings-for-assesment", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      this.resp = response;
      if (this.resp.flag == true) {
        alert(this.resp.msg);
        $("#myModal11").modal("hide");
        this.ngOnInit();
      }
      else {
        // alert(this.resp.msg);
      }
    },
      error => {
        this.error = error
        alert('Server not responding');
      });
  }

  // deleteReading(custid)
  // {
  //   $("#myModal11").modal("hide");
  //   this.session.set("custid",custid);
  //   this.session.set("billmonth",this.billmonth);
  //   this.navCtrl.navigate('delete-reading-remark',{custid:custid,billmonth:this.billmonth});
  // }

  deleteReading() {
    let formdata: FormData = new FormData();
    formdata.append("custid", this.enc.encrypt(this.selectedData.custid));
    formdata.append("billmonth", this.enc.encrypt(this.billmonth));
    formdata.append("userid", this.enc.encrypt(this.loccode));
    formdata.append("loccode", this.enc.encrypt(this.loccode));
    formdata.append("remark", this.enc.encrypt("Deleted by DC"));

    return this.http.post("api/reading-operations/delete-a-reading", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
      let successResponse: any = <any>response;
      if (successResponse) {
        alert(successResponse.msg);
        // this.router.navigateByUrl('/dcinch_dashboard', {skipLocationChange: true}).then(()=>
        // this.router.navigate(["/reading-for-verification"])); 
        // this.router.navigate(['/']);
        this.resp.splice(this.index, 1);
        this.OnclickGetvalue(this.resp[this.index]);
      }
    },
      error => {
        this.error = error
        alert('Server not responding');
      });
  }

  exportAsXsls(): void {
    this.exportService.exportAsExcelFile(this.resp, this.activeTab + '_' + this.groupno + "_" + this.billmonth);

  }

  readingsToVerify : any = [];
  checkBoxClicked(readToVerify){
    console.log(readToVerify);
    if(readToVerify.selected){
      this.readingsToVerify.push(readToVerify);
    } else {
      this.readingsToVerify.splice(this.readingsToVerify.indexOf(readToVerify), 1);
    }
    console.log(this.readingsToVerify);
  }

  allSelected : boolean;
  selectAllClicked(){
    this.readingsToVerify = [];
    this.resp.forEach(element => {
      if(element.status=='-1'){
        if(this.allSelected){
          this.readingsToVerify.push(element);
        }
        element.selected = this.allSelected;
      }
      
    });
    console.log(this.readingsToVerify);
  }

  verifyMultipleReadClicked : boolean;
  verifyMultipleRead(){
    this.verifyMultipleReadClicked = true;
    if(this.readingsToVerify.length > 0){
      this.readingsToVerify.forEach(element => {
        let formdata: FormData = new FormData();
        formdata.append("custid", this.enc.encrypt(element.custid));
        formdata.append("billmonth", this.enc.encrypt(this.billmonth));
        formdata.append("readingid", this.enc.encrypt(element.imageid));
        formdata.append("userid", this.enc.encrypt(this.loccode));
        return this.http.post("api/assesment-records/update-reading-to-approve", formdata, { headers: new HttpHeaders().set('Authorization', this.session.get('token')) }).subscribe(response => {
          console.log(response);
        },error => {
          console.log(error);
        });
      });
      alert("Readings Verified successfully");
      this.verifyMultipleReadClicked = false;
      this.getReading();
    }
  }

  nextClicked() {
    let data1 = this.resp[this.index + 1];
    this.OnclickGetvalue(data1);
  }

  previousButtonClicked() {
    let data1 = this.resp[this.index - 1];
    this.OnclickGetvalue(data1);
  }
}
