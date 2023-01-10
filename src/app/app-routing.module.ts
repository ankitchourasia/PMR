import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginAllComponent } from './login-all/login-all.component';
import { DcinchDashboardComponent } from './DCINCHARGE/dcinch-dashboard/dcinch-dashboard.component';
import { DcinchChangepassComponent } from './DCINCHARGE/dcinch-changepass/dcinch-changepass.component';
import { DcinchGroupinchComponent } from './DCINCHARGE/dcinch-groupinch/dcinch-groupinch.component';
import { DcinchMeterReaderImageComponent } from './DCINCHARGE/dcinch-meter-reader-image/dcinch-meter-reader-image.component';
import { DcinchNonVerifiedMeterReadersComponent } from './DCINCHARGE/dcinch-non-verified-meter-readers/dcinch-non-verified-meter-readers.component';
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
import { AssignScheduledGroupToMeterReaderComponent } from './DCINCHARGE/assign-scheduled-group-to-meter-reader/assign-scheduled-group-to-meter-reader.component';
import { AssignAnRdToReaderComponent } from './DCINCHARGE/assign-an-rd-to-reader/assign-an-rd-to-reader.component';
import { ListOfAllAssignmentsToReaderComponent } from './DCINCHARGE/list-of-all-assignments-to-reader/list-of-all-assignments-to-reader.component';
import { AssignmentsOfMeterReaderComponent } from './DCINCHARGE/assignments-of-meter-reader/assignments-of-meter-reader.component';
import { ScheduledAnRdToGroupComponent } from './DCINCHARGE/scheduled-an-rd-to-group/scheduled-an-rd-to-group.component';
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
import { ReadingsOfGroupRDDatewiseComponent} from './DCINCHARGE/readings-of-group-rd-datewise/readings-of-group-rd-datewise.component';
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
import { Above120ReadingAssesmentComponent } from './DCINCHARGE/above120-reading-assesment/above120-reading-assesment.component';
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
import { ReadersPerformanceReportComponent } from './DCINCHARGE/readers-performance-report/readers-performance-report.component';
import { DivisionDashboardComponent } from './DE/division-dashboard/division-dashboard.component';
import { CircleWiseDashboardComponent } from './SE/circle-wise-dashboard/circle-wise-dashboard.component';
import { CircleDivisionDcwiseDashboardComponent } from './SE/circle-division-dcwise-dashboard/circle-division-dcwise-dashboard.component';
import { CircleDivisionWiseDashboardComponent } from './SE/circle-division-wise-dashboard/circle-division-wise-dashboard.component';
import { ExtendScheduleGroupWiseComponent } from './DCINCHARGE/extend-schedule-group-wise/extend-schedule-group-wise.component';
import { SelectDateToExtendGroupScheduleComponent } from './DCINCHARGE/select-date-to-extend-group-schedule/select-date-to-extend-group-schedule.component';
import { ConsumerWiseReadingComponent } from './consumer-wise-reading/consumer-wise-reading.component';
import { GetMeterChangeFileComponent } from './DCINCHARGE/get-meter-change-file/get-meter-change-file.component';
import { RegionWiseDashboardComponent } from './CE/region-wise-dashboard/region-wise-dashboard.component';
import { CompanyWiseDashboardComponent } from './MD/company-wise-dashboard/company-wise-dashboard.component';
import { CompanyWiseDashboardBillmonthComponent } from './MD/company-wise-dashboard-billmonth/company-wise-dashboard-billmonth.component';
import { RedirectComponent } from './redirect/redirect.component';
import { KucchaPukkaSurveyReportComponent } from './DCINCHARGE/kuccha-pukka-survey-report/kuccha-pukka-survey-report.component';
import { MdKucchaPukkaSurveyReportComponent } from './MD/md-kuccha-pukka-survey-report/md-kuccha-pukka-survey-report.component';
import { SurveyReportOverallCompanyComponent } from './MD/survey-report-overall-company/survey-report-overall-company.component';
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
import { DeleteReadingComponent } from './DCINCHARGE/delete-reading/delete-reading.component';
import { AdminHomeComponent } from './ADMIN/admin-home/admin-home.component';
import { AdminComponent } from './ADMIN/admin.component';
import { AdminDeletePmrComponent } from './ADMIN/admin-delete-pmr/admin-delete-pmr.component';
import { DcinchGroupWiseSpotBillComponent } from './DCINCHARGE/dcinch-group-wise-spot-bill/dcinch-group-wise-spot-bill.component';
import { GroupRdWiseReadingComponent } from './DCINCHARGE/group-rd-wise-reading/group-rd-wise-reading.component';
import { ReaderWiseReadingComponent } from './DCINCHARGE/reader-wise-reading/reader-wise-reading.component';
import { ConsumptionComparisonReportComponent } from './DCINCHARGE/consumption-comparison-report/consumption-comparison-report.component';
import { UpdateAndVerifyReadingsComponent } from './DCINCHARGE/update-and-verify-readings/update-and-verify-readings.component';
import { DEUpdateAndVerifyReadingsComponent } from './DE/de-update-and-verify-readings/de-update-and-verify-readings.component';
import { DcinchInstantBillRepushComponent } from './DCINCHARGE/dcinch-instant-bill-repush/dcinch-instant-bill-repush.component';


const routes: Routes = [

{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginAllComponent},
{path:'consumer-wise-reading',component:ConsumerWiseReadingComponent},
{path:'dcinch_dashboard',component:DcinchDashboardComponent},
{path:'dcinch_change-pass',component:DcinchChangepassComponent},
{path:'dcinch_create-groupinch',component:DcinchGroupinchComponent},
{path:'dcinch_meter-reader-image',component:DcinchMeterReaderImageComponent},
{path:'dcinch_non-verified-meter-readers',component:DcinchNonVerifiedMeterReadersComponent},
{path:'dcinch_list-of-active-groupinch',component:DcinchListOfActiveGroupinchComponent},
{path:'dcinch_add-group-to-dc',component:DcinchAddGroupToDcComponent},
{path:'dcinch_list-of-groups-in-dc',component:DcinchListOfGroupsInDcComponent},
{path:'dcinch_list-of-deactive-groups',component:DcinchListOfDeactiveGroupsComponent},
{path:'dcinch_add-rd-to-group',component:DcinchAddRdToGroupComponent},
{path:'dcinch_list-of-rds-in-groups',component:DcinchListOfRdsInGroupsComponent},
{path:'dcinch_list-of-deactive-rds-in-groups',component:DcinchListOfDeactiveRdInGroupComponent},
{path:'assign-group-to-groupinch',component:AssignGroupToGroupinchComponent},
{path:'dcinch-list-of-all-assignments',component:DcinchListOfAllAssignmentsComponent},
{path:'dcinch-list-of-verified-meter-readers',component:DcinchListOfVerifiedMeterReadersComponent},
{path:'dcinch-list-of-rejected-meter-readers',component:DcinchListOfRejectedMeterReadersComponent},
{path:'schedule-a-complete-group',component:ScheduleACompleteGroupComponent},
{path:'scheduled-a-group',component:ScheduledGroupComponent},
{path:'schedule-a-single-rd-in-group',component:ScheduleSingleRdInGroupComponent},
{path:'scheduled-an-rd-to-group',component:ScheduledAnRdToGroupComponent},
{path:'assign-scheduled-group-to-meter-reader',component:AssignScheduledGroupToMeterReaderComponent},
{path:'assign-an-rd-to-reader',component:AssignAnRdToReaderComponent},
{path:'all-assignments-to-reader',component:ListOfAllAssignmentsToReaderComponent},
{path:'assignments-of-meter-reader',component:AssignmentsOfMeterReaderComponent},
{path:'group-wise-consumer',component:GroupWiseConsumerComponent},
{path:'group-rd-wise-consumer',component:GroupRdWiseConsumerComponent},
{path:'readings-of-group-datewise',component:ReadingsOfGroupDatewiseComponent},
{path:'readings-of-group-RD-datewise',component:ReadingsOfGroupRDDatewiseComponent},
{path:'all-dc-readings',component:AllDcReadingsReportComponent},
{path:'readings-for-single-consumer',component:ReadingForSingleConsumerComponent},
{path:'bill-file-upload',component:BillFileUploadComponent},
{path:'assign-scheduled-complete-group-to-meter-reader',component:AssignScheduledCompleteGroupToMeterReaderComponent},
{path:'assign-complete-group-to-reader',component:AssignCompleteGroupToReaderComponent},
{path:'list-of-created-schedule',component:ListOfCreatedScheduleComponent},
{path:'extend-schedule-date',component:ExtendScheduleDateComponent},
{path:'select-date-to-extend',component:SelectDateToExtendComponent},
{path:'reading-status-group-wise',component:ReadingStatusGroupWiseComponent},
{path:'reading-status-rd-wise',component:ReadingStatusRdWiseComponent},
{path:'edit-reading-assesment', component:EditReadingAssesmentComponent},
{path:'get-reading-file', component:GetReadingFileComponent},
{path:'remaining-list-consumers', component:RemainingListConsumersComponent},
{path: 'view-remaining-list-consumers', component:ViewRemainingListConsumersComponent},
{path: 'verified-list', component:VerifiedListComponent},
{path: 'group-wise-data-of-reading', component:GroupWiseDataOfReadingComponent},
{path: 'rd-wise-data-of-reading', component:RdWiseDataOfReadingComponent},
{path: 'reading-file-group-wise', component:ReadingFileGroupWiseComponent},
{path: 'readerwise-reading', component:ReaderwiseReadingComponent},
{path: 'more-detailed-status', component:MoreDetailedStatusComponent},
{path: 'downloader-for-spot-billing', component:DownloaderForSpotBillingComponent},
{path: 'view-detailed-dashboard-list/:billmonth/:loccode/:status/:readingtype', component:ViewDetailedDashboardListComponent},
{path: 'view-detailed-dashboard-group-wise/:billmonth/:loccode/:status/:readingtype/:grno', component:ViewDetailedDashboardGroupWiseComponent},
{path: 'group-wise-assignment-status', component:GroupWiseAssignmentStatusComponent},
{path: 'spot-bill-downloader-ccnb', component:SpotBillDownloaderCcnbComponent},
{path: 'reading-for-verification', component:ReadingForVerificationComponent},
{path: 'verified-readings', component:VerifiedReadingsComponent},
{path: 'rejected-readings', component:RejectedReadingsComponent},
{path: 'delete-reading-remark', component:DeleteReadingRemarkComponent},
{path: 'view-downloaded-group-from-ngb', component:ViewDownloadedGroupFromNgbComponent},
{path: 'reading-assesment-data', component:ReadingAssesmentDataComponent},
{path: 'reading-assesment-group-wise/:groupno/:billmonth', component:ReadingAssesmentGroupWiseComponent},
{path: 'below90-reading-assesment/:groupno/:billmonth',component:Below90ReadingAssesmentComponent},
{path: 'above120-reading-assesment/:groupno/:billmonth', component:Above120ReadingAssesmentComponent},
{path: 'assesment90-to120-reading/:groupno/:billmonth',component:Assesment90To120ReadingComponent},
{path: 'meterdefective-reading-assesment/:groupno/:billmonth', component:MeterdefectiveReadingAssesmentComponent},
{path: 'meternotfound-reading-assesment/:groupno/:billmonth', component:MeternotfoundReadingAssesmentComponent},
{path: 'extend-schedule-group-wise', component:ExtendScheduleGroupWiseComponent},
{path: 'select-date-to-extend-group-schedule', component:SelectDateToExtendGroupScheduleComponent},
{path: 'get-meter-change-file', component:GetMeterChangeFileComponent},
{path: 'kuccha-pukka-survey-report', component:KucchaPukkaSurveyReportComponent},
{path: 'qr-reports-readerwise', component:QrReportsReaderwiseComponent},
{path: 'reset-meter-reader-password', component:ResetMeterReaderPasswordComponent},
{path:'assign-rds-to-meter-reader',component:AssignRdsToMeterReaderComponent},
{path:'update-reading-to-ngb', component:UpdateReadingToNgbComponent},
{path:'reader-wise-daily-count',component:ReaderWiseDailyCountComponent},
{path:'check-status-of-uploaded-files-to-ngb',component:CheckStatusOfUploadedFilesToNgbComponent},
{path:'view-rejected-files-from-ngb',component:ViewRejectedFilesFromNgbComponent},
{path:'meter-reader-cons-type-assignment',component:MeterReaderConsTypeAssignmentComponent},
{path:'remove-assignments-of-meter-reader',component:RemoveAssignmentsOfMeterReaderComponent},
{path:'edit-normal-reading-type-to-other',component:EditNormalReadingTypeToOtherComponent},
{path:'edit-normal-reading-type/:consno/:md/:pf/:readingtype/:billmonth',component:EditNormalReadingTypeComponent},
{path:'dc-read-verification-data',component:DcReadVerificationDataComponent},
{path:'date-wise-self-pmr-by-consumer',component:DcinchDateWiseSelfPmrComponent},
{path:'group-wise-self-pmr-by-consumer',component:DcinchGroupWiseSelfPmrComponent},
{path:'date-between-self-pmr',component:DcinchDateBetweenSelfPmrComponent},
// {path:'smart-meter-report',component:DcinchSmartMeterReportComponent},

{path:'group-wise-spot-bill-count',component:GroupWiseSpotBillCountComponent},
{path:'group-wise-spot-bill-list',component:GroupWiseSpotBillListComponent},
{path:'consumer-wise-spot-bill',component:ConsumerWiseSpotBillComponent},
{path:'consumption-report',component:AllConsuptionReportComponent},
{path:'update-restart-reading-to-ngb',component:UpdateRestartReadingToNgbComponent},
{path:'delete-reading',component:DeleteReadingComponent},
{path:'group-wise-spot-bill',component:DcinchGroupWiseSpotBillComponent},
{path:'group-rd-wise-reading',component:GroupRdWiseReadingComponent},
{path:'reader-wise-reading',component:ReaderWiseReadingComponent},
{path:'consumption-comparison-report',component:ConsumptionComparisonReportComponent},
{path:'update-and-verify-reading',component:UpdateAndVerifyReadingsComponent},
{path:'instant-bill-repush',component:DcinchInstantBillRepushComponent},

// GrouIncharge

{path:'gi-dashboard',component:GiDashboardComponent},
{path:'gi-active-groups',component:ActiveGroupsInGIComponent},
{path:'schedule-a-complete-group-GI',component:ScheduleACompleteGroupGIComponent},
{path:'schedule-a-single-rd-in-group-GI',component:ScheduleASingleRdInGroupGIComponent},
{path:'schedule-a-group-GI',component:ScheduleAGroupGIComponent},
{path:'scheduled-an-rd-to-GI',component:ScheduledAnRdToGIComponent},
{path:'assign-scheduled-rd-to-meter-reader-GI',component:AssignScheduledRdToMeterReaderGiComponent},
{path:'assign-an-rd-to-reader-GI',component:AssignAnRdToReaderGiComponent},
{path:'group-wise-consumer-GI',component:GroupWiseConsumerGIComponent},
{path:'group-rd-wise-consumer-GI',component:GroupRdWiseConsumerGIComponent},
{path:'readings-of-group-datewise-GI',component:ReadingsOfGroupDatewiseGiComponent},
{path:'readings-of-group-RD-datewise-GI',component:ReadingOfGroupRDDatewiseGiComponent},
{path:'all-groups-reading-GI',component:AllGroupsReadingsGiComponent},
{path:'readings-gor-single-consumer-GI',component:ReadingsGorSingleConsumerGiComponent},
{path:'gi-non-verified-meter-readers',component:GiNonVerifiedMeterReadersComponent},
{path:'gi-list-of-verified-meter-readers',component:GiListOfVerifiedMeterReadersComponent},
{path:'gi-list-of-rejected-meter-readers',component:GiListOfRejectedMeterReadersComponent},
{path:'assign-scheduled-group-to-meter-reader-GI',component:AssignSheduledGroupToMeterReaderGIComponent},
{path:'all-assignments-to-reader-GI', component:ListOfAllAssignmentsToReaderGIComponent},
{path:'download-schedule-from-ngb', component:DownloadScheduleFromNgbComponent},
{path:'high-low-consumption-report', component:HighLowConsumptionReportComponent},
{path:'timestamp-reader-wise-reading', component:TimestampReaderWiseReadingComponent},
{path:'readers-performance-report', component:ReadersPerformanceReportComponent},

// DE USER

{path:'de_dashboard', component:DeDashboardComponent},
{path:'de-header', component:DeHeaderComponent},
{path:'de-change-password',component:DeChangePasswordComponent},
{path:'de-sidebar', component:DeSidebarComponent},
{path:'division-dashboard',component:DivisionDashboardComponent},
{path:'de_qr_reports', component:DeQrReportsComponent},
{path:'generate-qr-code',component:GenerateQrCodeComponent},
{path:'de-read-image-verification',component:DeReadingImageVerificationComponent},
{path:'de-read-verification-dashboard',component:DeReadingVerificationDashboardComponent},

{path:'de-update-and-verify-reading',component:DEUpdateAndVerifyReadingsComponent},
// circle USER

{path:'circle_dashboard', component:CircleDashboardComponent},
{path:'circle-header', component:CircleHeaderComponent},
{path:'circle-sidebar', component:CircleSidebarComponent},
{path:'circle-wise-dashboard',component:CircleWiseDashboardComponent},
{path:'circle-division-wise-dashboard',component:CircleDivisionWiseDashboardComponent},
{path:'circle-division-dc-wise-dashboard',component:CircleDivisionDcwiseDashboardComponent},
{path:'se_qr_code-reports', component:SeQrCodeReportsComponent},
// CE USER

{path:'ce_dashboard', component:CeDashboardComponent},
{path:'ce-header', component:CeHeaderComponent},
{path:'ce-sidebar', component:CeSidebarComponent},
{path:'region-wise-dashboard',component:RegionWiseDashboardComponent},
{path:'ce_qr_code_reports', component:CeQrCodeReportsComponent},

// MD USER

{path:'md_dashboard', component:MdDashboardComponent},
{path:'md-header', component:MdHeaderComponent},
{path:'md-sidebar', component:MdSidebarComponent},
{path:'company-wise-dashboard', component:CompanyWiseDashboardComponent},
{path:'company-wise-dashboard-billmonth', component:CompanyWiseDashboardBillmonthComponent},
{path: 'md-kuccha-pukka-survey-report', component:MdKucchaPukkaSurveyReportComponent},
{path: 'survey-report-overall-company', component:SurveyReportOverallCompanyComponent},
{path: 'md_qr_code_reports', component:MdQrCodeReportsComponent},
{path: 'md_dc_wise_finger_print_scanning_activation', component:MdDcWiseFingerPrintScanningActivationComponent},
//redirect

{path:'redirect/:uid/:pass', component:RedirectComponent},

{path:'admin', component: AdminComponent},
{path:'admin-delete-pmr', component: AdminDeletePmrComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
