import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { IonicAudioModule, AudioProvider, WebAudioProvider, defaultAudioProviderFactory } from 'ionic-audio';
import { NativeAudio } from '@ionic-native/native-audio';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {DetailBeritaPage} from '../pages/detail-berita/detail-berita';
import {DetailLaguWajibPage} from '../pages/detail-lagu-wajib/detail-lagu-wajib';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailBeritaPage,
    DetailLaguWajibPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailBeritaPage,
    DetailLaguWajibPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeAudio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
