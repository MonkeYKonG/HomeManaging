import { FirebaseProvider } from './../../providers/firebase/firebase';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { MemoItem } from './../../assets/class/memo-item';
import { MemoDescriptionPage } from './subpages/memo-description';

import { FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the MemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-memo',
  templateUrl: 'memo.html',
})
export class MemoPage {
    list: FirebaseListObservable<any[]>;
    
    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public firebaseProvider: FirebaseProvider) {
	this.list = this.firebaseProvider.getItems("memo");
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad MemoPage');
    }

    promptNewTitle() {
	let prompt = this.alertCtrl.create({
	    title: 'Nouveau mémo',
	    inputs: [
		{
		    name: 'title',
		    placeholder: 'Titre'
		},
	    ],
	    buttons: [
		{
		    text: 'Annuler'
		},
		{
		    text: 'Créer le mémo',
		    handler: data => {
			if (data.title)
			    this.firebaseProvider.addItem({title: data.title}, "memo/")
			    .then(snapshot => {
				this.navCtrl.push(MemoDescriptionPage, snapshot.key);
			    })
		    }           
		}	      
	    ]
	});
	prompt.present();
    }

    openMemoDescription(item) {
	this.navCtrl.push(MemoDescriptionPage, item.$key);
    }
    
}
