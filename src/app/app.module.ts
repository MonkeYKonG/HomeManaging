import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from './../providers/firebase/firebase';

const firebaseConfig = {
    apiKey: "AIzaSyByKxQ1GchNLJwEyb4o71CyuprbVEKXhr0",
    authDomain: "homemanaging-5cc3f.firebaseapp.com",
    databaseURL: "https://homemanaging-5cc3f.firebaseio.com",
    projectId: "homemanaging-5cc3f",
    storageBucket: "homemanaging-5cc3f.appspot.com",
    messagingSenderId: "830128883789"
};

@NgModule({
    declarations: [
	MyApp,
	HomePage,
	ListPage
    ],
    imports: [
	BrowserModule,
	HttpModule,
	AngularFireDatabaseModule,
	AngularFireModule.initializeApp(firebaseConfig),
	IonicModule.forRoot(MyApp)
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
	FirebaseProvider,
	{provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {}
