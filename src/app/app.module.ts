import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ChangeSchedulePage } from '../pages/change-schedule/change-schedule';
import { EntryexitPage } from '../pages/entryexit/entryexit';
import { ChangeScheduleDonePage } from '../pages/change-schedule-done/change-schedule-done';
import { GtamenuPage } from '../pages/gtamenu/gtamenu';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ChangeSchedulePage,
    EntryexitPage,
    ChangeScheduleDonePage,
    GtamenuPage
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
    GtamenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
