import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

    title: string;

    //DEBUG
    localCommentary = [
	{name: "banane", quantity: 4, isCheck: true},
	{name: "chocolat", quantity: 12, isCheck: false}
    ];
    localText = [
	{author: "Alexis", date: "Ven 8 sept", text: "prendre un gros paquet de tresor"},
	{author: "Justine", date: "Jeu 7 sept", text: "je sais pas quoi mettre"}
    ]

    constructor(public navCtrl: NavController,
		public navParams: NavParams) {
	this.title = navParams.data;
    }
    
    ionViewDidLoad() {
	console.log('ionViewDidLoad CreateMemoPage');
    }

    createNewMemo() {
	
    }
}
