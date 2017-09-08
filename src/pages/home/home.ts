import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ShopListPage } from './../shop-list/shop-list';
import { CalendarPage } from './../calendar/calendar';
import { MemoPage } from './../memo/memo';
import { MessagesPage } from './../messages/messages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) { }

    openCalendarPage() {
	this.navCtrl.setRoot(CalendarPage);
    }

    openShopListPage() {
	this.navCtrl.setRoot(ShopListPage);
    }

    openMemoPage() {
	this.navCtrl.setRoot(MemoPage);
    }

    openMessagesPage() {
	this.navCtrl.setRoot(MessagesPage);
    }
}
