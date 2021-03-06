import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Geolocation } from '@ionic-native/geolocation';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChangeSchedulePage } from '../pages/change-schedule/change-schedule';
import { EntryexitPage } from '../pages/entryexit/entryexit';
import { ChangeScheduleDonePage } from '../pages/change-schedule-done/change-schedule-done';
import { GtamenuPage } from '../pages/gtamenu/gtamenu';
import { WelcomeLoginPage } from '../pages/welcome-login/welcome-login';
import { NewHomePage } from '../pages/new-home/new-home';
import { WeeklySchedulePage } from '../pages/weekly-schedule/weekly-schedule';
import { PersonalDataPage } from '../pages/personal-data/personal-data';
import { ChangeShiftModalPage } from '../pages/change-shift-modal/change-shift-modal';
import { AssociateService } from '../services/associate.service';
import { ShiftDayPage } from '../pages/shift-day/shift-day';
import { VoiceEnablePage } from '../pages/voice-enable/voice-enable';
import { ApiProvider } from '../providers/api/api';
import { PunchMissedPage } from '../pages/punch-missed/punch-missed';
//import { GeoLocationServiceProvider } from '../providers/geo-location-service/geo-location-service';
import { DashboardService } from '../services/dashboard.service';
import { PunchOutModalPage } from '../pages/punch-out-modal/punch-out-modal';
import { LNotificationProvider } from '../providers/l-notification/l-notification';
import { LateShiftEndmodalPage } from '../pages/late-shift-endmodal/late-shift-endmodal';
import { BenefitsPage } from '../pages/benefits/benefits';
import { PerformancePage } from '../pages/performance/performance';
import { UnderconPage } from '../pages/undercon/undercon';
import { TrainingPage } from '../pages/training/training';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChangeSchedulePage,
    EntryexitPage,
    ChangeScheduleDonePage,
    GtamenuPage,
    WelcomeLoginPage,
    NewHomePage,
    WeeklySchedulePage,
    PersonalDataPage,
    ChangeShiftModalPage,
    ShiftDayPage,
    VoiceEnablePage,
    PunchMissedPage,
    PunchOutModalPage,
    LateShiftEndmodalPage,
    BenefitsPage,
    PerformancePage,
    TrainingPage,
    UnderconPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    NgbModule.forRoot(),
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChangeSchedulePage,
    EntryexitPage,
    ChangeScheduleDonePage,
    GtamenuPage,
    WelcomeLoginPage,
    NewHomePage,
    WeeklySchedulePage,
    PersonalDataPage,
    ChangeShiftModalPage,
    ShiftDayPage,
    VoiceEnablePage,
    PunchMissedPage,
    PunchOutModalPage,
    LateShiftEndmodalPage,
    BenefitsPage,
    PerformancePage,
    TrainingPage,
    UnderconPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    AssociateService,
    Geolocation,
    DashboardService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    LNotificationProvider
    //GeoLocationServiceProvider
  ]
})
export class AppModule {}
