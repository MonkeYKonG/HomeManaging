import { FirebaseProvider } from './../../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { MemoItem } from './../../../assets/class/memo-item';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memo',
  templateUrl: 'memo-description.html',
})
export class MemoDescriptionPage {
    rootPath: string;
    data: FirebaseObjectObservable<MemoItem>;
    title: string;
    text: string;
    description: string;

    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public firebaseProvider: FirebaseProvider) {
	this.rootPath = "memo/" + navParams.data + "/";
	this.data = this.firebaseProvider.getObject(this.rootPath);
	this.data.subscribe(snapshot => {
	    this.title = snapshot.title;
	    this.text = snapshot.text;
	    this.description = snapshot.description;
	});
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad CreateMemoPage');
    }

    publishTextUpdate() {
	this.data.update({"text": this.text});
    }

    publishDescriptionUpdate() {
	this.data.update({"description": this.description});
    }

    promptNewTitle() {
	let prompt = this.alertCtrl.create({
	    title: 'Nouveau titre',
	    inputs: [
		{
		    name: 'title',
		    placeholder: 'Titre',
		    value: this.title
		}
	    ],
	    buttons: [
		{
		    text: 'Annuler'
		},
		{
		    text: 'Mettre à jour',
		    handler: data => {
			if (data.title && data.title != this.title) {
			    this.data.update({"title": data.title});
			}
		    }
		}
	    ]
	});
	prompt.present();
    }
}
