import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FirebaseProvider {

    constructor(public http: Http, public afd: AngularFireDatabase) {
	console.log('Hello FirebaseProvider Provider');
    }

    getItems(path = "/") {
	return this.afd.list(path);
    }

    getObject(path= "/") {
	return this.afd.object(path);
    }
    
    addItem(name, path = "/") {
	return (this.afd.list(path).push(name));
    }

    removeItem(id, path = "/") {
	return (this.afd.list(path).remove(id));
    }

}
