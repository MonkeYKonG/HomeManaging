import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AlertController } from 'ionic-angular';

/*
  Generated class for the AlertCreatorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AlertCreatorProvider {

    constructor(public http: Http,
		public alertCtrl: AlertController) {
	console.log('Hello AlertCreatorProvider Provider');
    }
}
