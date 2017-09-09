webpackJsonp([6],{

/***/ 409:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemoDescriptionPageModule", function() { return MemoDescriptionPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__memo_description__ = __webpack_require__(410);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MemoDescriptionPageModule = (function () {
    function MemoDescriptionPageModule() {
    }
    return MemoDescriptionPageModule;
}());
MemoDescriptionPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__memo_description__["a" /* MemoDescriptionPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__memo_description__["a" /* MemoDescriptionPage */]),
        ],
    })
], MemoDescriptionPageModule);

//# sourceMappingURL=memo-description.module.js.map

/***/ }),

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoDescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(22);
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
    function MemoDescriptionPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        //DEBUG
        this.localCommentary = [
            { name: "banane", quantity: 4, isCheck: true },
            { name: "chocolat", quantity: 12, isCheck: false }
        ];
        this.localText = [
            { author: "Alexis", date: "Ven 8 sept", text: "prendre un gros paquet de tresor" },
            { author: "Justine", date: "Jeu 7 sept", text: "je sais pas quoi mettre" }
        ];
        this.title = navParams.data;
    }
    MemoDescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateMemoPage');
    };
    MemoDescriptionPage.prototype.createNewMemo = function () {
    };
    return MemoDescriptionPage;
}());
MemoDescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-memo',template:/*ion-inline-start:"/home/alexis/Perso/home/HomeManaging/src/pages/memo/subpages/memo-description.html"*/'<!--\n  Generated template for the ShopListDescriptionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>shop_list</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <h2> {{ title }} </h2>\n  <ion-card>\n    <ion-list>\n      <ion-list-header>\n	Liste de course\n      </ion-list-header>\n      <ion-item *ngFor="let item of test">\n	<ion-label>{{ item.name }}: x{{ item.quantity }}</ion-label>\n	<ion-checkbox value="secondary" checked="false"></ion-checkbox>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n  <ion-card>\n    <ion-list>\n      <ion-list-header>\n	Commentaires\n      </ion-list-header>\n      <ion-card *ngFor="let comment of commentary | async">\n	<ion-card-header>\n	  {{ comment.author }} le {{ comment.date }}\n	</ion-card-header>\n	{{ comment.text }}\n      </ion-card>\n    </ion-list>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/alexis/Perso/home/HomeManaging/src/pages/memo/subpages/memo-description.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]) === "function" && _b || Object])
], MemoDescriptionPage);

var _a, _b;
//# sourceMappingURL=memo-description.js.map

/***/ })

});
//# sourceMappingURL=6.js.map