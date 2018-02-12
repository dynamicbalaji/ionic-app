import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HttpModule } from '@angular/http';

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
import { DashboardService } from '../services/dashboard.service';
import { PunchOutModalPage } from '../pages/punch-out-modal/punch-out-modal';

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
    PunchOutModalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300
    })
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
    PunchOutModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    AssociateService,
    DashboardService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
