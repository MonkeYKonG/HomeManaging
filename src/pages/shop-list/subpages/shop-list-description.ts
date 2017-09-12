import { FirebaseProvider } from './../../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-list-description',
  templateUrl: 'shop-list-description.html',
})
export class ShopListDescriptionPage {
    rootPath: string;
    data: FirebaseObjectObservable<any[]>;
    items: FirebaseListObservable<any[]>;
    commentary: FirebaseListObservable<any[]>;
    
    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public firebaseProvider: FirebaseProvider) {
	this.rootPath = "shop-list/" + this.navParams.data + "/";
	this.data = this.firebaseProvider.getObject(this.rootPath);
	this.items = this.firebaseProvider.getItems(this.rootPath + "items");
	this.commentary = this.firebaseProvider.getItems(this.rootPath + "commentary");
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad CreateShopListPage');
    }

    addNewItem() {
	let prompt = this.alertCtrl.create({
	    title: 'Nouvelle article',
	    inputs: [
		{
		    name: 'name',
		    placeholder: 'Nom de l\'article'
		},
		{
		    name: 'quantity',
		    value: '1',
		    type: 'number'
		}
	    ],
	    buttons: [
		{
		    text: 'Annuler'
		},
		{
		    text: 'Ajouter à la liste',
		    handler: data => {
			if (data.name)
			    this.firebaseProvider.addItem({name: data.name, quantity: data.quantity, isCheck: false}, this.rootPath + "items");
		    }           
		}	      
	    ]
	});
	prompt.present();
    }

    updateItem(item, repository) {
	console.log(item);
	var dataItems = this.firebaseProvider.getObject(this.rootPath + repository + item.$key);
	dataItems.subscribe(() => dataItems.update(item));
    }
}
