webpackJsonp([5],{

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalendarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var CalendarPage = (function () {
    function CalendarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalendarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalendarPage');
    };
    return CalendarPage;
}());
CalendarPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-calendar',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/calendar/calendar.html"*/'<!--\n  Generated template for the CalendarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>calendar</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/calendar/calendar.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CalendarPage);

//# sourceMappingURL=calendar.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopListDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShopListDescriptionPage = (function () {
    function ShopListDescriptionPage(navCtrl, navParams, alertCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
        this.rootPath = "shop-list/" + this.navParams.data + "/";
        this.data = this.firebaseProvider.getObject(this.rootPath);
        this.items = this.firebaseProvider.getItems(this.rootPath + "items");
        this.commentary = this.firebaseProvider.getItems(this.rootPath + "commentary");
    }
    ShopListDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateShopListPage');
    };
    ShopListDescriptionPage.prototype.updateTitle = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        if (data.title) {
                            _this.updateValue(data.title, "title");
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ShopListDescriptionPage.prototype.addNewItem = function (item) {
        var _this = this;
        if (item === void 0) { item = null; }
        var name = item == null ? "" : item.name;
        var quantity = item == null ? "1" : item.quantity;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        if (data.name) {
                            if (item == null)
                                _this.firebaseProvider.addItem({ name: data.name, quantity: data.quantity, isCheck: false }, _this.rootPath + "items");
                            else {
                                item.name = data.name;
                                item.quantity = data.quantity;
                                _this.updateItem(item, "items/");
                            }
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ShopListDescriptionPage.prototype.updateItem = function (item, repository) {
        var dataItems = this.firebaseProvider.getObject(this.rootPath + repository + item.$key);
        var dataSubscription = dataItems.subscribe(function (snapshot) {
            dataItems.update(item)
                .then(function () { return dataSubscription.unsubscribe(); });
        });
    };
    ShopListDescriptionPage.prototype.updateValue = function (value, repository) {
        var dataItems = this.firebaseProvider.getObject(this.rootPath);
        var updateObj = {};
        updateObj[repository] = value;
        var dataSubscription = dataItems.subscribe(function () {
            dataItems.update(updateObj)
                .then(function () { return dataSubscription.unsubscribe(); });
        });
    };
    ShopListDescriptionPage.prototype.removeItem = function (item) {
        this.firebaseProvider.removeItem(item.$key, this.rootPath + "items");
    };
    return ShopListDescriptionPage;
}());
ShopListDescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-shop-list-description',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/shop-list/subpages/shop-list-description.html"*/'<!--\n  Generated template for the ShopListDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>\n      {{ (data | async)?.title }}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button color="dark" clear (click)="updateTitle(data)" icon-only>\n	<ion-icon name="md-create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2>\n    {{ (data | async)?.title }}\n  </h2>\n  <ion-list>\n    <ion-list-header>	\n      <button ion-button color="dark" clear (click)="addNewItem()" icon-left>\n	<ion-icon name="add"></ion-icon>\n	Liste de course\n      </button>\n    </ion-list-header>\n    <ion-item *ngFor="let item of items | async">\n      <ion-label>\n	{{ item.name }}  x{{ item.quantity }}\n      </ion-label>\n      <div item-right>\n	<button ion-button color="dark" clear (click)="addNewItem(item)">\n	  <ion-icon name="md-create">\n	  </ion-icon>\n	</button>\n	<button ion-button color="dark" clear (click)="removeItem(item)">\n	  <ion-icon name="trash">\n	  </ion-icon>\n	</button>\n      </div>\n      <ion-checkbox [(ngModel)]="item.isCheck" (ionChange)=\'updateItem(item, "items/")\'></ion-checkbox>\n    </ion-item>\n    \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/shop-list/subpages/shop-list-description.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _d || Object])
], ShopListDescriptionPage);

var _a, _b, _c, _d;
//# sourceMappingURL=shop-list-description.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MemoDescriptionPage = (function () {
    function MemoDescriptionPage(navCtrl, navParams, alertCtrl, firebaseProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
        this.rootPath = "memo/" + navParams.data + "/";
        this.data = this.firebaseProvider.getObject(this.rootPath);
        this.data.subscribe(function (snapshot) {
            _this.title = snapshot.title;
            _this.text = snapshot.text;
            _this.description = snapshot.description;
        });
    }
    MemoDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateMemoPage');
    };
    MemoDescriptionPage.prototype.publishTextUpdate = function () {
        this.data.update({ "text": this.text });
    };
    MemoDescriptionPage.prototype.publishDescriptionUpdate = function () {
        this.data.update({ "description": this.description });
    };
    MemoDescriptionPage.prototype.promptNewTitle = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Nouveau titre',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Titre',
                    value: this.title
                }
            ],
            buttons: [
                {
                    text: 'Annuler'
                },
                {
                    text: 'Mettre à jour',
                    handler: function (data) {
                        if (data.title && data.title != _this.title) {
                            _this.data.update({ "title": data.title });
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    return MemoDescriptionPage;
}());
MemoDescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-memo',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/memo/subpages/memo-description.html"*/'<!--\n  Generated template for the ShopListDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title> {{ (data | async)?.title }} </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="promptNewTitle()">\n	<ion-icon name="md-create">\n	</ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      Description du memo:\n    </ion-card-header>\n    <ion-textarea [(ngModel)]="description" (focusout)="publishDescriptionUpdate()" placeholder="Description" rows="6">     \n    </ion-textarea>\n  </ion-card>\n  <ion-card>\n    <ion-card-header>\n      Corp du memo\n    </ion-card-header>\n    <ion-textarea [(ngModel)]="text" (focusout)="publishTextUpdate()" placeholder="Corp du memo" rows="6">\n    </ion-textarea>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/memo/subpages/memo-description.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], MemoDescriptionPage);

//# sourceMappingURL=memo-description.js.map

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/memo/memo.module": [
		410,
		4
	],
	"../pages/memo/subpages/memo-description.module": [
		409,
		3
	],
	"../pages/messages/messages.module": [
		411,
		2
	],
	"../pages/shop-list/shop-list.module": [
		408,
		1
	],
	"../pages/shop-list/subpages/shop-list-description.module": [
		407,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shop_list_shop_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__memo_memo__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_messages__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.openCalendarPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__calendar_calendar__["a" /* CalendarPage */]);
    };
    HomePage.prototype.openShopListPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__shop_list_shop_list__["a" /* ShopListPage */]);
    };
    HomePage.prototype.openMemoPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__memo_memo__["a" /* MemoPage */]);
    };
    HomePage.prototype.openMessagesPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__messages_messages__["a" /* MessagesPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Accueil</h3>\n  <ion-col>\n    <ion-row>\n      <ion-col>\n	<button ion-button (click)="openCalendarPage()">\n	  Calendrier\n	</button>\n      </ion-col>\n      <ion-col>\n	<button ion-button (click)="openShopListPage()">\n	  Listes de course\n	</button>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n	<button ion-button (click)="openMemoPage()">\n	  Mémos\n	</button>\n      </ion-col>\n      <ion-col>\n	<button ion-button (click)="openMessagesPage()">\n	  Messages\n	</button>\n      </ion-col>\n    </ion-row>\n  </ion-col>\n</ion-content>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/list/list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(295);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_calendar_calendar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shop_list_shop_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_shop_list_subpages_shop_list_description__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_memo_memo__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_memo_subpages_memo_description__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_messages_messages__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_alert_creator_alert_creator__ = __webpack_require__(406);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var firebaseConfig = {
    apiKey: "AIzaSyByKxQ1GchNLJwEyb4o71CyuprbVEKXhr0",
    authDomain: "homemanaging-5cc3f.firebaseapp.com",
    databaseURL: "https://homemanaging-5cc3f.firebaseio.com",
    projectId: "homemanaging-5cc3f",
    storageBucket: "homemanaging-5cc3f.appspot.com",
    messagingSenderId: "830128883789"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_shop_list_shop_list__["a" /* ShopListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shop_list_subpages_shop_list_description__["a" /* ShopListDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_memo_memo__["a" /* MemoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_memo_subpages_memo_description__["a" /* MemoDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_messages_messages__["a" /* MessagesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_14__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/shop-list/subpages/shop-list-description.module#ShopListDescriptionPageModule', name: 'ShopListDescriptionPage', segment: 'shop-list-description', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/shop-list/shop-list.module#ShopListPageModule', name: 'ShopListPage', segment: 'shop-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/memo/subpages/memo-description.module#MemoDescriptionPageModule', name: 'MemoDescriptionPage', segment: 'memo-description', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/memo/memo.module#MemoPageModule', name: 'MemoPage', segment: 'memo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/messages/messages.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_calendar_calendar__["a" /* CalendarPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_shop_list_shop_list__["a" /* ShopListPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_shop_list_subpages_shop_list_description__["a" /* ShopListDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_memo_memo__["a" /* MemoPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_memo_subpages_memo_description__["a" /* MemoDescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_messages_messages__["a" /* MessagesPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_17__providers_firebase_firebase__["a" /* FirebaseProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_alert_creator_alert_creator__["a" /* AlertCreatorProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_calendar_calendar__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_shop_list_shop_list__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_memo_memo__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Accueil', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'List', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Calendrier', component: __WEBPACK_IMPORTED_MODULE_6__pages_calendar_calendar__["a" /* CalendarPage */] },
            { title: 'Listes de courses', component: __WEBPACK_IMPORTED_MODULE_7__pages_shop_list_shop_list__["a" /* ShopListPage */] },
            { title: 'Mémo', component: __WEBPACK_IMPORTED_MODULE_8__pages_memo_memo__["a" /* MemoPage */] },
            { title: 'Messages', component: __WEBPACK_IMPORTED_MODULE_9__pages_messages_messages__["a" /* MessagesPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertCreatorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AlertCreatorProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var AlertCreatorProvider = (function () {
    function AlertCreatorProvider(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        console.log('Hello AlertCreatorProvider Provider');
    }
    return AlertCreatorProvider;
}());
AlertCreatorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], AlertCreatorProvider);

//# sourceMappingURL=alert-creator.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirebaseProvider = (function () {
    function FirebaseProvider(http, afd) {
        this.http = http;
        this.afd = afd;
        console.log('Hello FirebaseProvider Provider');
    }
    FirebaseProvider.prototype.getItems = function (path) {
        if (path === void 0) { path = "/"; }
        return this.afd.list(path);
    };
    FirebaseProvider.prototype.getObject = function (path) {
        if (path === void 0) { path = "/"; }
        return this.afd.object(path);
    };
    FirebaseProvider.prototype.addItem = function (name, path) {
        if (path === void 0) { path = "/"; }
        return (this.afd.list(path).push(name));
    };
    FirebaseProvider.prototype.removeItem = function (id, path) {
        if (path === void 0) { path = "/"; }
        return (this.afd.list(path).remove(id));
    };
    return FirebaseProvider;
}());
FirebaseProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
], FirebaseProvider);

//# sourceMappingURL=firebase.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subpages_shop_list_description__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ShopListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShopListPage = (function () {
    function ShopListPage(navCtrl, navParams, alertCtrl, modalCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.firebaseProvider = firebaseProvider;
        this.shopLists = this.firebaseProvider.getItems("shop-list");
    }
    ShopListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ShopListPage');
    };
    ShopListPage.prototype.promptNewTitle = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        if (data.title)
                            _this.firebaseProvider.addItem({ title: data.title }, "shop-list/")
                                .then(function (data) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subpages_shop_list_description__["a" /* ShopListDescriptionPage */], data.key);
                            })
                                .catch(function (error) {
                                console.error("An error ocured when creating new shop-list", error);
                            });
                    }
                }
            ]
        });
        prompt.present();
    };
    ShopListPage.prototype.openShopList = function (shop_list) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subpages_shop_list_description__["a" /* ShopListDescriptionPage */], shop_list.$key);
    };
    ShopListPage.prototype.deleteList = function (item) {
        this.firebaseProvider.removeItem(item.$key, "shop-list/");
    };
    return ShopListPage;
}());
ShopListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-shop-list',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/shop-list/shop-list.html"*/'<!--\n  Generated template for the ShopListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>shop_list</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="promptNewTitle()">\n	<ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list >\n    <ion-item-sliding *ngFor="let item of shopLists | async">\n      <button ion-item (click)="openShopList(item)">\n	{{ item.title }}\n      </button>\n      <ion-item-options>\n	<button ion-button expandable (click)="deleteList(item)">Supprimer</button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <button ion-item (click)="promptNewTitle()">\n      <ion-icon name="add"></ion-icon>\n      Ajouter une nouvelle liste\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/shop-list/shop-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], ShopListPage);

//# sourceMappingURL=shop-list.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__subpages_memo_description__ = __webpack_require__(143);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the MemoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MemoPage = (function () {
    function MemoPage(navCtrl, navParams, alertCtrl, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.firebaseProvider = firebaseProvider;
        this.list = this.firebaseProvider.getItems("memo");
    }
    MemoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MemoPage');
    };
    MemoPage.prototype.promptNewTitle = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
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
                    handler: function (data) {
                        if (data.title)
                            _this.firebaseProvider.addItem({ title: data.title }, "memo/")
                                .then(function (snapshot) {
                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subpages_memo_description__["a" /* MemoDescriptionPage */], snapshot.key);
                            });
                    }
                }
            ]
        });
        prompt.present();
    };
    MemoPage.prototype.openMemoDescription = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__subpages_memo_description__["a" /* MemoDescriptionPage */], item.$key);
    };
    MemoPage.prototype.deleteMemo = function (item) {
        this.firebaseProvider.removeItem(item.$key, "memo/");
    };
    return MemoPage;
}());
MemoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-memo',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/memo/memo.html"*/'<!--\n  Generated template for the MemoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mémos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="promptNewTitle()">\n	<ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item-sliding *ngFor="let item of list | async">\n      <button ion-item (click)="openMemoDescription(item)">\n	{{ item.title }}\n      </button>\n      <ion-item-options>\n	<button ion-button expandable (click)="deleteMemo(item)">Supprimer</button>\n      </ion-item-options>\n    </ion-item-sliding>\n    <button ion-item (click)="promptNewTitle()" icon-start>\n      <ion-icon name="add"></ion-icon>\n      Ajouter une nouvelle liste\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/memo/memo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], MemoPage);

//# sourceMappingURL=memo.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MessagesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var MessagesPage = (function () {
    function MessagesPage(navCtrl, navParams, firebaseProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.firebaseProvider = firebaseProvider;
        this.messages = this.firebaseProvider.getItems("messages");
        this.curMessage = "";
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagesPage');
    };
    MessagesPage.prototype.sendMessage = function () {
        var _this = this;
        if (this.curMessage) {
            this.firebaseProvider.addItem({
                author: "auteur",
                date: "date",
                text: this.curMessage
            }, "messages/").then(function () { return _this.curMessage = ""; });
        }
    };
    return MessagesPage;
}());
MessagesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-messages',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/messages/messages.html"*/'<!--\n  Generated template for the MessagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>messages</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let message of messages | async" text-wrap>\n      <h1>{{ message.author }}</h1>\n      <ion-note item-end>{{ message.date }}</ion-note>\n      {{ message.text }}\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-input [(ngModel)]="curMessage" placeholder="Ecrire un message..."></ion-input>\n    <ion-buttons end>\n      <button ion-button (click)="sendMessage()">Envoyer</button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/messages/messages.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__providers_firebase_firebase__["a" /* FirebaseProvider */]) === "function" && _c || Object])
], MessagesPage);

var _a, _b, _c;
//# sourceMappingURL=messages.js.map

/***/ })

},[278]);
//# sourceMappingURL=main.js.map