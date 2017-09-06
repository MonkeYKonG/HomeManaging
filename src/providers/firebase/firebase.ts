import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

    constructor(public http: Http, public afd: AngularFireDatabase) {
	console.log('Hello FirebaseProvider Provider');
    }

    getItems(path = "/") {
	return this.afd.list(path);
    }
    
    addItem(name, path = "/") {
	this.afd.list(path).push(name);
    }

    removeItem(id, path = "/") {
	this.afd.list(path).remove(id);
    }

}
