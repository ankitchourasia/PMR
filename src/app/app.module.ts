import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';    
import { FormsModule,ReactiveFormsModule }   from '@angular/forms'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxNavigationWithDataComponent } from "ngx-navigation-with-data";
import {MatNativeDateModule} from '@angular/material';
import { AngularWebStorageModule } from 'angular-web-storage';
import {LightboxModule} from 'ngx-lightbox';
// import { ChartModule } from 'angular2-highcharts';
import {ChartsModule} from 'ng2-charts';
// 
// import {ChartsModule} from 'ng2-charts';
// import { Angular5CsvModule } from 'Angular5-csv';


import { AppComponent } from './app.component';
import { LoginAllComponent } from './login-all/login-all.component';
import { AppRoutingModule } from './app-routing.module';
import { DcinchDashboardComponent } from './DCINCHARGE/dcinch-dashboard/dcinch-dashboard.component';
// import { GroupinchDashboardComponent } from './GROUPINCHARGE/groupinch-dashboard/groupinch-dashboard.component';
import { DcinchChangepassComponent } from './DCINCHARGE/dcinch-changepass/dcinch-changepass.component';
import { DcinchGroupinchComponent } from './DCINCHARGE/dcinch-groupinch/dcinch-groupinch.component';
import { DcinchMeterReaderImageComponent } from './DCINCHARGE/dcinch-meter-reader-image/dcinch-meter-reader-image.component';
import { DcinchNonVerifiedMeterReadersComponent } from './DCINCHARGE/dcinch-non-verified-meter-readers/dcinch-non-verified-meter-readers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DcinchHeaderComponent } from './DCINCHARGE/dcinch-header/dcinch-header.component';
import { DcinchSidebarComponent } from './DCINCHARGE/dcinch-sidebar/dcinch-sidebar.component';
import { DcinchListOfActiveGroupinchComponent } from './DCINCHARGE/dcinch-list-of-active-groupinch/dcinch-list-of-active-groupinch.component';
import { DcinchAddGroupToDcComponent } from './DCINCHARGE/dcinch-add-group-to-dc/dcinch-add-group-to-dc.component';
import { DcinchListOfGroupsInDcComponent } from './DCINCHARGE/dcinch-list-of-groups-in-dc/dcinch-list-of-groups-in-dc.component';
import { DcinchListOfDeactiveGroupsComponent } from './DCINCHARGE/dcinch-list-of-deactive-groups/dcinch-list-of-deactive-groups.component';
import { DcinchAddRdToGroupComponent } from './DCINCHARGE/dcinch-add-rd-to-group/dcinch-add-rd-to-group.component';
import { DcinchListOfRdsInGroupsComponent } from './DCINCHARGE/dcinch-list-of-rds-in-groups/dcinch-list-of-rds-in-groups.component';
import { DcinchListOfDeactiveRdInGroupComponent } from './DCINCHARGE/dcinch-list-of-deactive-rd-in-group/dcinch-list-of-deactive-rd-in-group.component';
import { AssignGroupToGroupinchComponent } from './DCINCHARGE/assign-group-to-groupinch/assign-group-to-groupinch.component';
import { DcinchListOfAllAssignmentsComponent } from './DCINCHARGE/dcinch-list-of-all-assignments/dcinch-list-of-all-assignments.component';
import { DcinchListOfVerifiedMeterReadersComponent } from './DCINCHARGE/dcinch-list-of-verified-meter-readers/dcinch-list-of-verified-meter-readers.component';
import { DcinchListOfRejectedMeterReadersComponent } from './DCINCHARGE/dcinch-list-of-rejected-meter-readers/dcinch-list-of-rejected-meter-readers.component';
import { ScheduleACompleteGroupComponent } from './DCINCHARGE/schedule-a-complete-group/schedule-a-complete-group.component';
import { ScheduledGroupComponent } from './DCINCHARGE/scheduled-group/scheduled-group.component';
import { ScheduleSingleRdInGroupComponent } from './DCINCHARGE/schedule-single-rd-in-group/schedule-single-rd-in-group.component';
import { ScheduledAnRdToGroupComponent } from './DCINCHARGE/scheduled-an-rd-to-group/scheduled-an-rd-to-group.component';
import { AssignScheduledGroupToMeterReaderComponent } from './DCINCHARGE/assign-scheduled-group-to-meter-reader/assign-scheduled-group-to-meter-reader.component';
import { AssignAnRdToReaderComponent } from './DCINCHARGE/assign-an-rd-to-reader/assign-an-rd-to-reader.component';
import { ListOfAllAssignmentsToReaderComponent } from './DCINCHARGE/list-of-all-assignments-to-reader/list-of-all-assignments-to-reader.component';
import { AssignmentsOfMeterReaderComponent } from './DCINCHARGE/assignments-of-meter-reader/assignments-of-meter-reader.component';
import { GiHeaderComponent } from './GRPINCH/gi-header/gi-header.component';
import { GiSidebarComponent } from './GRPINCH/gi-sidebar/gi-sidebar.component';
//import { GiChangePasswordComponent } from './GROUPINCHARGE/gi-change-password/gi-change-password.component';
// import { SchduleGroupComponent } from './GROUPINCHARGE/schdule-group/schdule-group.component';
// import { SchduleRdInGroupComponent } from './GROUPINCHARGE/schdule-rd-in-group/schdule-rd-in-group.component';
// import { ListOfGroupComponent } from './GROUPINCHARGE/list-of-group/list-of-group.component';
// import { ListOfRdInGroupComponent } from './GROUPINCHARGE/list-of-rd-in-group/list-of-rd-in-group.component';
// import { GiAssignScheduledRdToMeterReaderComponent } from './GROUPINCHARGE/gi-assign-scheduled-rd-to-meter-reader/gi-assign-scheduled-rd-to-meter-reader.component';
// import { GiAssignAnRdToReaderComponent } from './GROUPINCHARGE/gi-assign-an-rd-to-reader/gi-assign-an-rd-to-reader.component';
// import { GiScheduleCompleteGroupComponent } from './GROUPINCHARGE/gi-schedule-complete-group/gi-schedule-complete-group.component';
import { GiDashboardComponent } from './GRPINCH/gi-dashboard/gi-dashboard.component';
import { ActiveGroupsInGIComponent } from './GRPINCH/active-groups-in-gi/active-groups-in-gi.component';
import { ScheduleACompleteGroupGIComponent } from './GRPINCH/schedule-a-complete-group-gi/schedule-a-complete-group-gi.component';
import { ScheduleASingleRdInGroupGIComponent } from './GRPINCH/schedule-a-single-rd-in-group-gi/schedule-a-single-rd-in-group-gi.component';
import { ScheduleAGroupGIComponent } from './GRPINCH/schedule-a-group-gi/schedule-a-group-gi.component';
import { ScheduledAnRdToGIComponent } from './GRPINCH/scheduled-an-rd-to-gi/scheduled-an-rd-to-gi.component';
import { AssignScheduledRdToMeterReaderGiComponent } from './GRPINCH/assign-scheduled-rd-to-meter-reader-gi/assign-scheduled-rd-to-meter-reader-gi.component';
import { AssignAnRdToReaderGiComponent } from './GRPINCH/assign-an-rd-to-reader-gi/assign-an-rd-to-reader-gi.component';
import { GroupWiseConsumerComponent } from './DCINCHARGE/group-wise-consumer/group-wise-consumer.component';
import { GroupRdWiseConsumerComponent } from './DCINCHARGE/group-rd-wise-consumer/group-rd-wise-consumer.component';
import { GroupWiseConsumerGIComponent } from './GRPINCH/group-wise-consumer-gi/group-wise-consumer-gi.component';
import { GroupRdWiseConsumerGIComponent } from './GRPINCH/group-rd-wise-consumer-gi/group-rd-wise-consumer-gi.component';
import { ReadingsOfGroupDatewiseComponent } from './DCINCHARGE/readings-of-group-datewise/readings-of-group-datewise.component';
import { ReadingsOfGroupRDDatewiseComponent } from './DCINCHARGE/readings-of-group-rd-datewise/readings-of-group-rd-datewise.component';
import { AllDcReadingsReportComponent } from './DCINCHARGE/all-dc-readings-report/all-dc-readings-report.component';
import { ReadingForSingleConsumerComponent } from './DCINCHARGE/reading-for-single-consumer/reading-for-single-consumer.component';
import { ReadingsOfGroupDatewiseGiComponent } from './GRPINCH/readings-of-group-datewise-gi/readings-of-group-datewise-gi.component';
import { ReadingOfGroupRDDatewiseGiComponent } from './GRPINCH/reading-of-group-rd-datewise-gi/reading-of-group-rd-datewise-gi.component';
import { AllGroupsReadingsGiComponent } from './GRPINCH/all-groups-readings-gi/all-groups-readings-gi.component';
import { ReadingsGorSingleConsumerGiComponent } from './GRPINCH/readings-gor-single-consumer-gi/readings-gor-single-consumer-gi.component';
import { BillFileUploadComponent } from './DCINCHARGE/bill-file-upload/bill-file-upload.component';
import { AssignScheduledCompleteGroupToMeterReaderComponent } from './DCINCHARGE/assign-scheduled-complete-group-to-meter-reader/assign-scheduled-complete-group-to-meter-reader.component';
import { AssignCompleteGroupToReaderComponent } from './DCINCHARGE/assign-complete-group-to-reader/assign-complete-group-to-reader.component';
import { GiNonVerifiedMeterReadersComponent } from './GRPINCH/gi-non-verified-meter-readers/gi-non-verified-meter-readers.component';
import { GiListOfVerifiedMeterReadersComponent } from './GRPINCH/gi-list-of-verified-meter-readers/gi-list-of-verified-meter-readers.component';
import { GiListOfRejectedMeterReadersComponent } from './GRPINCH/gi-list-of-rejected-meter-readers/gi-list-of-rejected-meter-readers.component';
import { AssignSheduledGroupToMeterReaderGIComponent } from './GRPINCH/assign-sheduled-group-to-meter-reader-gi/assign-sheduled-group-to-meter-reader-gi.component';
import { AssignCompleteGroupToReaderGIComponent } from './GRPINCH/assign-complete-group-to-reader-gi/assign-complete-group-to-reader-gi.component';
import { ListOfAllAssignmentsToReaderGIComponent } from './GRPINCH/list-of-all-assignments-to-reader-gi/list-of-all-assignments-to-reader-gi.component';
import { ListOfCreatedScheduleComponent } from './DCINCHARGE/list-of-created-schedule/list-of-created-schedule.component';
import { ExtendScheduleDateComponent } from './DCINCHARGE/extend-schedule-date/extend-schedule-date.component';
import { SelectDateToExtendComponent } from './DCINCHARGE/select-date-to-extend/select-date-to-extend.component';
import { ReadingStatusGroupWiseComponent } from './DCINCHARGE/reading-status-group-wise/reading-status-group-wise.component';
import { ReadingStatusRdWiseComponent } from './DCINCHARGE/reading-status-rd-wise/reading-status-rd-wise.component';
import { EditReadingAssesmentComponent } from './DCINCHARGE/edit-reading-assesment/edit-reading-assesment.component';
import { GetReadingFileComponent } from './DCINCHARGE/get-reading-file/get-reading-file.component';
import { RemainingListConsumersComponent } from './DCINCHARGE/remaining-list-consumers/remaining-list-consumers.component';
import { ViewRemainingListConsumersComponent } from './DCINCHARGE/view-remaining-list-consumers/view-remaining-list-consumers.component';
import { VerifiedListComponent } from './DCINCHARGE/verified-list/verified-list.component';
import { GroupWiseDataOfReadingComponent } from './DCINCHARGE/group-wise-data-of-reading/group-wise-data-of-reading.component';
import { RdWiseDataOfReadingComponent } from './DCINCHARGE/rd-wise-data-of-reading/rd-wise-data-of-reading.component';
import { ReadingFileGroupWiseComponent } from './DCINCHARGE/reading-file-group-wise/reading-file-group-wise.component';
import { ReaderwiseReadingComponent } from './DCINCHARGE/readerwise-reading/readerwise-reading.component';
import { MoreDetailedStatusComponent } from './DCINCHARGE/more-detailed-status/more-detailed-status.component';
import { DownloaderForSpotBillingComponent } from './DCINCHARGE/downloader-for-spot-billing/downloader-for-spot-billing.component';
import { ViewDetailedDashboardListComponent } from './DCINCHARGE/view-detailed-dashboard-list/view-detailed-dashboard-list.component';
import { ViewDetailedDashboardGroupWiseComponent } from './DCINCHARGE/view-detailed-dashboard-group-wise/view-detailed-dashboard-group-wise.component';
import { GroupWiseAssignmentStatusComponent } from './DCINCHARGE/group-wise-assignment-status/group-wise-assignment-status.component';
import { SpotBillDownloaderCcnbComponent } from './DCINCHARGE/spot-bill-downloader-ccnb/spot-bill-downloader-ccnb.component';
import { ReadingForVerificationComponent } from './DCINCHARGE/reading-for-verification/reading-for-verification.component';
import { VerifiedReadingsComponent } from './DCINCHARGE/verified-readings/verified-readings.component';
import { RejectedReadingsComponent } from './DCINCHARGE/rejected-readings/rejected-readings.component';
import { DeleteReadingRemarkComponent } from './DCINCHARGE/delete-reading-remark/delete-reading-remark.component';
import { DownloadScheduleFromNgbComponent } from './DCINCHARGE/download-schedule-from-ngb/download-schedule-from-ngb.component';
import { ViewDownloadedGroupFromNgbComponent } from './DCINCHARGE/view-downloaded-group-from-ngb/view-downloaded-group-from-ngb.component';
import { HighLowConsumptionReportComponent } from './DCINCHARGE/high-low-consumption-report/high-low-consumption-report.component';
import { TimestampReaderWiseReadingComponent } from './DCINCHARGE/timestamp-reader-wise-reading/timestamp-reader-wise-reading.component';
import { ReadingAssesmentDataComponent } from './DCINCHARGE/reading-assesment-data/reading-assesment-data.component';
import { ReadingAssesmentGroupWiseComponent } from './DCINCHARGE/reading-assesment-group-wise/reading-assesment-group-wise.component';
import { Below90ReadingAssesmentComponent } from './DCINCHARGE/below90-reading-assesment/below90-reading-assesment.component';
import { Assesment90To120ReadingComponent } from './DCINCHARGE/assesment90-to120-reading/assesment90-to120-reading.component';
import { MeterdefectiveReadingAssesmentComponent } from './DCINCHARGE/meterdefective-reading-assesment/meterdefective-reading-assesment.component';
import { MeternotfoundReadingAssesmentComponent } from './DCINCHARGE/meternotfound-reading-assesment/meternotfound-reading-assesment.component';
import { DeDashboardComponent } from './DE/de-dashboard/de-dashboard.component';
import { CircleDashboardComponent } from './SE/circle-dashboard/circle-dashboard.component';
import { CeDashboardComponent } from './CE/ce-dashboard/ce-dashboard.component';
import { MdDashboardComponent } from './MD/md-dashboard/md-dashboard.component';
import { DeHeaderComponent } from './DE/de-header/de-header.component';
import { DeSidebarComponent } from './DE/de-sidebar/de-sidebar.component';
import { CircleHeaderComponent } from './SE/circle-header/circle-header.component';
import { CircleSidebarComponent } from './SE/circle-sidebar/circle-sidebar.component';
import { CeHeaderComponent } from './CE/ce-header/ce-header.component';
import { CeSidebarComponent } from './CE/ce-sidebar/ce-sidebar.component';
import { MdHeaderComponent } from './MD/md-header/md-header.component';
import { MdSidebarComponent } from './MD/md-sidebar/md-sidebar.component';
import { ConsumerWiseReadingComponent } from './consumer-wise-reading/consumer-wise-reading.component';
import { ReadersPerformanceReportComponent } from './DCINCHARGE/readers-performance-report/readers-performance-report.component';
import { DivisionDashboardComponent } from './DE/division-dashboard/division-dashboard.component';
import { CircleWiseDashboardComponent } from './SE/circle-wise-dashboard/circle-wise-dashboard.component';
import { CircleDivisionWiseDashboardComponent } from './SE/circle-division-wise-dashboard/circle-division-wise-dashboard.component';
import { CircleDivisionDcwiseDashboardComponent } from './SE/circle-division-dcwise-dashboard/circle-division-dcwise-dashboard.component';
import { ExtendScheduleGroupWiseComponent } from './DCINCHARGE/extend-schedule-group-wise/extend-schedule-group-wise.component';
import { SelectDateToExtendGroupScheduleComponent } from './DCINCHARGE/select-date-to-extend-group-schedule/select-date-to-extend-group-schedule.component';
import { GetMeterChangeFileComponent } from './DCINCHARGE/get-meter-change-file/get-meter-change-file.component';
import { RegionWiseDashboardComponent } from './CE/region-wise-dashboard/region-wise-dashboard.component';
import { CompanyWiseDashboardComponent } from './MD/company-wise-dashboard/company-wise-dashboard.component';
import { CompanyWiseDashboardBillmonthComponent } from './MD/company-wise-dashboard-billmonth/company-wise-dashboard-billmonth.component';
import { RedirectComponent } from './redirect/redirect.component';
import { KucchaPukkaSurveyReportComponent } from './DCINCHARGE/kuccha-pukka-survey-report/kuccha-pukka-survey-report.component';
import { MdKucchaPukkaSurveyReportComponent } from './MD/md-kuccha-pukka-survey-report/md-kuccha-pukka-survey-report.component';
import { SurveyReportOverallCompanyComponent } from './MD/survey-report-overall-company/survey-report-overall-company.component';
import { NoRightClickDirective } from './Util-services/no-right-click.directive';
import { QrReportsReaderwiseComponent } from './DCINCHARGE/qr-reports-readerwise/qr-reports-readerwise.component';
import { DeQrReportsComponent } from './DE/de-qr-reports/de-qr-reports.component';
import { SeQrCodeReportsComponent } from './SE/se-qr-code-reports/se-qr-code-reports.component';
import { CeQrCodeReportsComponent } from './CE/ce-qr-code-reports/ce-qr-code-reports.component';
import { MdQrCodeReportsComponent } from './MD/md-qr-code-reports/md-qr-code-reports.component';
import { ResetMeterReaderPasswordComponent } from './DCINCHARGE/reset-meter-reader-password/reset-meter-reader-password.component';
import { GenerateQrCodeComponent } from './DE/generate-qr-code/generate-qr-code.component';
import { AssignRdsToMeterReaderComponent } from './DCINCHARGE/assign-rds-to-meter-reader/assign-rds-to-meter-reader.component';
import { UpdateReadingToNgbComponent } from './DCINCHARGE/update-reading-to-ngb/update-reading-to-ngb.component';
import { ReaderWiseDailyCountComponent } from './DCINCHARGE/reader-wise-daily-count/reader-wise-daily-count.component';
import { CheckStatusOfUploadedFilesToNgbComponent } from './DCINCHARGE/check-status-of-uploaded-files-to-ngb/check-status-of-uploaded-files-to-ngb.component';
import { ViewRejectedFilesFromNgbComponent } from './DCINCHARGE/view-rejected-files-from-ngb/view-rejected-files-from-ngb.component';
import { MeterReaderConsTypeAssignmentComponent } from './DCINCHARGE/meter-reader-cons-type-assignment/meter-reader-cons-type-assignment.component';
import { RemoveAssignmentsOfMeterReaderComponent } from './DCINCHARGE/remove-assignments-of-meter-reader/remove-assignments-of-meter-reader.component';
import { EditNormalReadingTypeToOtherComponent } from './DCINCHARGE/edit-normal-reading-type-to-other/edit-normal-reading-type-to-other.component';
import { EditNormalReadingTypeComponent } from './DCINCHARGE/edit-normal-reading-type/edit-normal-reading-type.component';
import { DeReadingImageVerificationComponent } from './DE/de-reading-image-verification/de-reading-image-verification.component';
import { DeReadingVerificationDashboardComponent } from './DE/de-reading-verification-dashboard/de-reading-verification-dashboard.component';
import { MdDcWiseFingerPrintScanningActivationComponent } from './MD/md-dc-wise-finger-print-scanning-activation/md-dc-wise-finger-print-scanning-activation.component';
import { DcReadVerificationDataComponent } from './DCINCHARGE/dc-read-verification-data/dc-read-verification-data.component';
import { DeChangePasswordComponent } from './DE/de-change-password/de-change-password.component';
import { DcinchDateWiseSelfPmrComponent } from './DCINCHARGE/dcinch-date-wise-self-pmr/dcinch-date-wise-self-pmr.component';
import { DcinchGroupWiseSelfPmrComponent } from './DCINCHARGE/dcinch-group-wise-self-pmr/dcinch-group-wise-self-pmr.component';
import { DcinchDateBetweenSelfPmrComponent } from './DCINCHARGE/dcinch-date-between-self-pmr/dcinch-date-between-self-pmr.component';
import { DcinchSmartMeterReportComponent } from './DCINCHARGE/dcinch-smart-meter-report/dcinch-smart-meter-report.component';
import { GroupWiseSpotBillCountComponent } from './DCINCHARGE/group-wise-spot-bill-count/group-wise-spot-bill-count.component';
import { GroupWiseSpotBillListComponent } from './DCINCHARGE/group-wise-spot-bill-list/group-wise-spot-bill-list.component';
import { ConsumerWiseSpotBillComponent } from './DCINCHARGE/consumer-wise-spot-bill/consumer-wise-spot-bill.component';
import { AllConsuptionReportComponent } from './DCINCHARGE/all-consuption-report/all-consuption-report.component';
import { UpdateRestartReadingToNgbComponent } from './DCINCHARGE/update-restart-reading-to-ngb/update-restart-reading-to-ngb.component';
import { Above120ReadingAssesmentComponent } from './DCINCHARGE/above120-reading-assesment/above120-reading-assesment.component';
import { DeleteReadingComponent } from './DCINCHARGE/delete-reading/delete-reading.component';
import { AdminComponent } from './ADMIN/admin.component';
import { AdminHomeComponent } from './ADMIN/admin-home/admin-home.component';
import { AdminSidebarComponent } from './ADMIN/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './ADMIN/admin-header/admin-header.component';
import { AdminDeletePmrComponent } from './ADMIN/admin-delete-pmr/admin-delete-pmr.component';
import { DcinchGroupWiseSpotBillComponent } from './DCINCHARGE/dcinch-group-wise-spot-bill/dcinch-group-wise-spot-bill.component';
import { GroupRdWiseReadingComponent } from './DCINCHARGE/group-rd-wise-reading/group-rd-wise-reading.component';
import { ReaderWiseReadingComponent } from './DCINCHARGE/reader-wise-reading/reader-wise-reading.component';
import { ConsumptionComparisonReportComponent } from './DCINCHARGE/consumption-comparison-report/consumption-comparison-report.component';
import { UpdateAndVerifyReadingsComponent } from './DCINCHARGE/update-and-verify-readings/update-and-verify-readings.component';
import { DEUpdateAndVerifyReadingsComponent } from './DE/de-update-and-verify-readings/de-update-and-verify-readings.component';
import { DcinchInstantBillRepushComponent } from './DCINCHARGE/dcinch-instant-bill-repush/dcinch-instant-bill-repush.component';
import { DEReadingCountForVerificationComponent } from './DE/de-reading-count-for-verification/de-reading-count-for-verification.component';
import { ReadingCountForVerificationComponent } from './DCINCHARGE/reading-count-for-verification/reading-count-for-verification.component';
import { DeReaderWiseReadingComponent } from './DE/de-reader-wise-reading/de-reader-wise-reading.component';


@NgModule({
  declarations: [
    
    AppComponent,
    LoginAllComponent,
    DcinchDashboardComponent,
//    GroupinchDashboardComponent,
    DcinchChangepassComponent,
    DcinchGroupinchComponent,
    DcinchMeterReaderImageComponent,
    DcinchNonVerifiedMeterReadersComponent,
    SidebarComponent,
    DcinchHeaderComponent,
    DcinchSidebarComponent,
    DcinchListOfActiveGroupinchComponent,
    DcinchAddGroupToDcComponent,
    DcinchListOfGroupsInDcComponent,
    DcinchListOfDeactiveGroupsComponent,
    DcinchAddRdToGroupComponent,
    DcinchListOfRdsInGroupsComponent,
    DcinchListOfDeactiveRdInGroupComponent,
    AssignGroupToGroupinchComponent,
    DcinchListOfAllAssignmentsComponent,
    DcinchListOfVerifiedMeterReadersComponent,
    DcinchListOfRejectedMeterReadersComponent,
    ScheduleACompleteGroupComponent,
    ScheduledGroupComponent,
    ScheduleSingleRdInGroupComponent,
    ScheduledAnRdToGroupComponent,
    AssignScheduledGroupToMeterReaderComponent,
    AssignAnRdToReaderComponent,
    ListOfAllAssignmentsToReaderComponent,
    AssignmentsOfMeterReaderComponent,

    GiHeaderComponent,
    GiSidebarComponent,
    // GiChangePasswordComponent,
    // SchduleGroupComponent,
    // SchduleRdInGroupComponent,
    // ListOfGroupComponent,
    // ListOfRdInGroupComponent,
    // GiAssignScheduledRdToMeterReaderComponent,
    // GiAssignAnRdToReaderComponent,
    // GiScheduleCompleteGroupComponent,
    GiDashboardComponent,
    ActiveGroupsInGIComponent,
    ScheduleACompleteGroupGIComponent,
    ScheduleASingleRdInGroupGIComponent,
    ScheduleAGroupGIComponent,
    ScheduledAnRdToGIComponent,
    AssignScheduledRdToMeterReaderGiComponent,
    AssignAnRdToReaderGiComponent,
    GroupWiseConsumerComponent,
    GroupRdWiseConsumerComponent,
    GroupWiseConsumerGIComponent,
    GroupRdWiseConsumerGIComponent,
    ReadingsOfGroupDatewiseComponent,
    ReadingsOfGroupRDDatewiseComponent,
    AllDcReadingsReportComponent,
    ReadingForSingleConsumerComponent,
    ReadingsOfGroupDatewiseGiComponent,
    ReadingOfGroupRDDatewiseGiComponent,
    AllGroupsReadingsGiComponent,
    ReadingsGorSingleConsumerGiComponent,
    BillFileUploadComponent,
    AssignScheduledCompleteGroupToMeterReaderComponent,
    AssignCompleteGroupToReaderComponent,
    GiNonVerifiedMeterReadersComponent,
    GiListOfVerifiedMeterReadersComponent,
    GiListOfRejectedMeterReadersComponent,
    AssignSheduledGroupToMeterReaderGIComponent,
    AssignCompleteGroupToReaderGIComponent,
    ListOfAllAssignmentsToReaderGIComponent,
    ListOfCreatedScheduleComponent,
    ExtendScheduleDateComponent,
    SelectDateToExtendComponent,
    ReadingStatusGroupWiseComponent,
    ReadingStatusRdWiseComponent,
    EditReadingAssesmentComponent,
    GetReadingFileComponent,
    RemainingListConsumersComponent,
    ViewRemainingListConsumersComponent,
    VerifiedListComponent,
    GroupWiseDataOfReadingComponent,
    RdWiseDataOfReadingComponent,
    ReadingFileGroupWiseComponent,
    ReaderwiseReadingComponent,
    MoreDetailedStatusComponent,
    DownloaderForSpotBillingComponent,
    ViewDetailedDashboardListComponent,
    ViewDetailedDashboardGroupWiseComponent,
    GroupWiseAssignmentStatusComponent,
    SpotBillDownloaderCcnbComponent,
    ReadingForVerificationComponent,
    VerifiedReadingsComponent,
    RejectedReadingsComponent,
    DeleteReadingRemarkComponent,
    DownloadScheduleFromNgbComponent,
    ViewDownloadedGroupFromNgbComponent,
    HighLowConsumptionReportComponent,
    TimestampReaderWiseReadingComponent,
    ReadingAssesmentDataComponent,
    ReadingAssesmentGroupWiseComponent,
    Below90ReadingAssesmentComponent,
    Assesment90To120ReadingComponent,
    MeterdefectiveReadingAssesmentComponent,
    MeternotfoundReadingAssesmentComponent,
    Above120ReadingAssesmentComponent,
    DeDashboardComponent,
    CircleDashboardComponent,
    CeDashboardComponent,
    MdDashboardComponent,
    DeHeaderComponent,
    DeSidebarComponent,
    CircleHeaderComponent,
    CircleSidebarComponent,
    CeHeaderComponent,
    CeSidebarComponent,
    MdHeaderComponent,
    MdSidebarComponent,
    ConsumerWiseReadingComponent,
    ReadersPerformanceReportComponent,
    DivisionDashboardComponent,
    CircleWiseDashboardComponent,
    CircleDivisionWiseDashboardComponent,
    CircleDivisionDcwiseDashboardComponent,
    ExtendScheduleGroupWiseComponent,
    SelectDateToExtendGroupScheduleComponent,
    GetMeterChangeFileComponent,
    RegionWiseDashboardComponent,
    CompanyWiseDashboardComponent,
    CompanyWiseDashboardBillmonthComponent,
    RedirectComponent,
    KucchaPukkaSurveyReportComponent,
    MdKucchaPukkaSurveyReportComponent,
    SurveyReportOverallCompanyComponent,
    NoRightClickDirective,
    QrReportsReaderwiseComponent,
    DeQrReportsComponent,
    SeQrCodeReportsComponent,
    CeQrCodeReportsComponent,
    MdQrCodeReportsComponent,
    ResetMeterReaderPasswordComponent,
    GenerateQrCodeComponent,
    AssignRdsToMeterReaderComponent,
    UpdateReadingToNgbComponent,
    ReaderWiseDailyCountComponent,
    CheckStatusOfUploadedFilesToNgbComponent,
    ViewRejectedFilesFromNgbComponent,
    MeterReaderConsTypeAssignmentComponent,
    RemoveAssignmentsOfMeterReaderComponent,
    EditNormalReadingTypeToOtherComponent,
    EditNormalReadingTypeComponent,
    DeReadingImageVerificationComponent,
    DeReadingVerificationDashboardComponent,
    MdDcWiseFingerPrintScanningActivationComponent,
    DcReadVerificationDataComponent,
    DeChangePasswordComponent,
    DcinchDateWiseSelfPmrComponent,
    DcinchGroupWiseSelfPmrComponent,
    DcinchDateBetweenSelfPmrComponent,
    DcinchSmartMeterReportComponent,
    GroupWiseSpotBillCountComponent,
    GroupWiseSpotBillListComponent,
    ConsumerWiseSpotBillComponent,
    AllConsuptionReportComponent,
    UpdateRestartReadingToNgbComponent,
    DeleteReadingComponent,
    AdminComponent,
    AdminHomeComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    AdminDeletePmrComponent,
    DcinchGroupWiseSpotBillComponent,
    GroupRdWiseReadingComponent,
    ReaderWiseReadingComponent,
    ConsumptionComparisonReportComponent,
    UpdateAndVerifyReadingsComponent,
    DEUpdateAndVerifyReadingsComponent,
    DcinchInstantBillRepushComponent,
    ReadingCountForVerificationComponent,
    DEReadingCountForVerificationComponent,
    DeReaderWiseReadingComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AngularWebStorageModule,
    LightboxModule,
    // ChartModule.forRoot('highcharts'),
    ChartsModule
  ],
  providers: [NgxNavigationWithDataComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
