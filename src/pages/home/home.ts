import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ShopListPage } from './../shop-list/shop-list';
import { CalendarPage } from './../calendar/calendar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) { }

    openCalendarPage() {
	
    }

    openShopListPage() {
	
    }

    openMemoPage() {
	
    }

    openMessagesPage() {
	
    }
}
