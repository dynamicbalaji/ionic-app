import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChangeSchedulePage } from '../pages/change-schedule/change-schedule';
import { EntryexitPage } from '../pages/entryexit/entryexit';
import { ChangeScheduleDonePage } from '../pages/change-schedule-done/change-schedule-done';
import { GtamenuPage } from '../pages/gtamenu/gtamenu';
import { WelcomeLoginPage } from '../pages/welcome-login/welcome-login';
import { NewHomePage } from '../pages/new-home/new-home';
import { WeeklySchedulePage } from '../pages/weekly-schedule/weekly-schedule';
import { PersonalDataPage } from '../pages/personal-data/personal-data';
import { AssociateService } from '../services/associate.service.mock';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChangeSchedulePage,
    EntryexitPage,
    ChangeScheduleDonePage,
    GtamenuPage,
    WelcomeLoginPage,
    NewHomePage,
    WeeklySchedulePage,
    PersonalDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ChangeSchedulePage,
    EntryexitPage,
    ChangeScheduleDonePage,
    GtamenuPage,
    WelcomeLoginPage,
    NewHomePage,
    WeeklySchedulePage,
    PersonalDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    AssociateService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
