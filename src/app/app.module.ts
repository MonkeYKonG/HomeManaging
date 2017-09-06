import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

export const firebaseConfig = {
    apiKey: "AIzaSyByKxQ1GchNLJwEyb4o71CyuprbVEKXhr0",
    authDomain: "homemanaging-5cc3f.firebaseapp.com",
    databaseUrl: "https://homemanaging-5cc3f.firebaseio.com",
    storageBucket: "",
    messagingSenderId: '830128883789'
};

@NgModule({
    declarations: [
	MyApp,
	HomePage,
	ListPage
    ],
    imports: [
	BrowserModule,
	IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
	MyApp,
	HomePage,
	ListPage
    ],
    providers: [
	StatusBar,
	SplashScreen,
	{provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider
    ]
})
export class AppModule {}
