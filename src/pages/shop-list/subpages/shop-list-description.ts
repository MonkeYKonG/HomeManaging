import { FirebaseProvider } from './../../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { ShopListItem, ShopItem } from './../../../assets/class/shopList-item';
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
    data: FirebaseObjectObservable<ShopListItem>;
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

    updateTitle() {
	let prompt = this.alertCtrl.create({
	    title: 'Nouveau titre',
	    inputs: [
		{
		    name: 'title',
		    placeholder: 'Titre'
		}
	    ],
	    buttons: [
		{
		    text: 'Annuler'
		},
		{
		    text: 'Mettre à jour',
		    handler: data => {
			if (data.title) {
			    this.updateValue(data.title, "title");
			}
		    }
		}
	    ]
	});
	prompt.present();
    }

    addNewItem(item = null) {
	var name = item == null ? "" : item.name;
	var quantity = item == null ? "1" : item.quantity;
	let prompt = this.alertCtrl.create({
	    title: 'Nouvelle article',
	    inputs: [
		{
		    name: 'name',
		    value: name,
		    placeholder: 'Nom de l\'article'
		},
		{
		    name: 'quantity',
		    value: quantity,
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
			if (data.name){
			    if (item == null)
				this.firebaseProvider.addItem({name: data.name, quantity: data.quantity, isCheck: false}, this.rootPath + "items");
			    else {
				item.name = data.name;
				item.quantity = data.quantity;
				this.updateItem(item, "items/");
			    }
			}
		    }           
		}	      
	    ]
	});
	prompt.present();
    }

    updateItem(item, repository) {
	var dataItems = this.firebaseProvider.getObject(this.rootPath + repository + item.$key);

	var dataSubscription = dataItems.subscribe(snapshot => {
	    dataItems.update(item)
		.then(() => dataSubscription.unsubscribe());
	});
    }

    updateValue(value, repository) {
	var dataItems = this.firebaseProvider.getObject(this.rootPath);
	var updateObj = {};

	updateObj[repository] = value;
	var dataSubscription = dataItems.subscribe(() => {
	    dataItems.update(updateObj)
		.then(() => dataSubscription.unsubscribe());
	});
    }
    
    removeItem(item) {
	this.firebaseProvider.removeItem(item.$key, this.rootPath + "items");
    }
}
