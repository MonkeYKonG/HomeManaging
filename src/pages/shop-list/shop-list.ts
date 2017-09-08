import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController, ModalController } from 'ionic-angular';

import { FirebaseListObservable } from 'angularfire2/database';
import { ShopListDescriptionPage } from './subpages/shop-list-description';

/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-list',
  templateUrl: 'shop-list.html',
})
export class ShopListPage {

    items: FirebaseListObservable<any[]>;
    test = [
	{key: "test"},
	{key: "test2"}
    ];
    
    constructor(public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public modalCtrl: ModalController,
		public firebaseProvider: FirebaseProvider) {
	this.items = this.firebaseProvider.getItems("shop-list");
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad ShopListPage');
    }
    
    removeItem(id) {
	this.firebaseProvider.removeItem(id);
    }

    private selectNewTitle() {
	let prompt = this.alertCtrl.create({
	    title: 'Nouvelle liste',
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
		    text: 'Créer la liste',
		    handler: data => {
			this.navCtrl.push(ShopListDescriptionPage);
		    }           
		}	      
	    ]
	});
	prompt.present();
    }

    openShopList(shop_list) {
	console.log(shop_list);
	this.navCtrl.push(ShopListDescriptionPage);
    }

    presentModal() {
	let modal = this.modalCtrl.create(ShopListDescriptionPage);
	modal.present();
    }
}
