import { FirebaseProvider } from './../../providers/firebase/firebase';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class MessagesPage {

    messages: FirebaseListObservable<any[]>;
    curMessage: string;

    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public firebaseProvider: FirebaseProvider) {
	this.messages = this.firebaseProvider.getItems("messages");
	this.curMessage = "";
  }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad MessagesPage');
    }
    
    sendMessage() {
	if (this.curMessage){
	    this.firebaseProvider.addItem(
		{
		    author: "auteur",
		    date: "date",
		    text: this.curMessage
		},
		"messages/"
	    ).then(() => this.curMessage = "");
	}
    }   
}
