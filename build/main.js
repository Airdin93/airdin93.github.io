webpackJsonp([1],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		269,
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(99);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\emilj\WebstormProjects\Portfolio\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\emilj\WebstormProjects\Portfolio\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\emilj\WebstormProjects\Portfolio\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col id="navAboutMe">\n          <a href="#about-me">Om Mig</a>\n        </ion-col>\n        <ion-col id="navContact">\n          <a href="#contact-infomation">Kontact</a>\n        </ion-col>\n        <ion-col id="navDownloadCV">\n          <a href="assets/downloads/Emils-CV.pdf" target="_blank">Download CV </a>\n        </ion-col>\n        <ion-col id="navSocials">\n          <a href="https://twitter.com/CoolMangoMan42" target="_blank"><ion-icon name="logo-twitter" id="twitterIcon"></ion-icon></a>\n          <b>    </b>\n          <a href="https://www.instagram.com/enchantedmango42/" target="_blank"><ion-icon name="logo-instagram"></ion-icon></a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-navbar>\n</ion-header>\n\n<body>\n  <ion-content>\n    <div id="topFiller">\n    </div>\n    <div id="content">\n      <ion-item no-lines text-center>\n        <a name="contact-infomation"></a>\n        <ion-avatar>\n          <img id="facePicture" src="assets/imgs/facepic.png">\n        </ion-avatar>\n        <div text-wrap id="contactInfomationText">\n          <h1>Emil Johansen</h1>\n          <p>Fødselsdags dato: 18 Marts, 1993</p>\n          <p>Adresse: Tilfældig gade 12</p>\n          <p>E-mail: <a href="mailto:emiljohansen@nomail.com">emiljohansen@nomail.com</a></p>\n          <a name="about-me"></a>\n          <p>Telefonnummer: +45 99 99 99 99</p>\n          <!--<p>Telefonnummer: <a href="tel:99999999">99999999</a></p> -->\n        </div>\n\n      </ion-item>\n      <hr/>\n      <div>\n        <div id="aboutMe">\n          <h1>Om Mig</h1>\n        </div>\n          <h5>Faglig profil:</h5>\n        <p>\n          Jeg har en del erfaring med computer, og har haft en stor interesse inde for\n          computer i mange år, jeg er som reelt god til at få tingene til at fungere og\n          arbejder bedst selv.\n        </p>\n\n        <h5>Kerne kompetencer:</h5>\n        <p>\n          Taler godt engelsk og er god til at løse problemer, jeg er god til IT jeg har\n          været igennem det meste inde for IT, her i blandt opsætning af\n          hjemmesider, programmering, billede behandling film redigering, jeg er\n          ret god til at løse problemer der opstår på computer.\n        </p>\n\n        <h5>Uddannelse:</h5>\n        <p>\n          HF 2013-2015\n        </p>\n        <p>\n          Er i gang med Multimedie Designer 2017-2019\n        </p>\n\n        <h5>Sprogkundskaber:</h5>\n        <p>\n          Dansk og Engelsk, taler og skriver dem begge på omkring samme niveau.\n        </p>\n\n        <h5>Min fritid:</h5>\n        <p>\n          Jeg går til teknologimesser flere gange om året for at se de nyeste\n          trends inde for teknologi, ellers bruger jeg for det meste min tid på bøger,\n          film, serier og video spil.\n        </p>\n      </div>\n      <hr/>\n      <div>\n        <h1>Programmer jeg allerede kender</h1>\n        <h5>\n          Her er de programer jeg har arbejdet med, jeg er ret lærenem og er\n          derfor er åben for at lære nye programmer hvis det bliver nødvendigt.\n        </h5>\n        <h5>Billede behandling:</h5>\n        <p>Photoshop</p>\n        <p>Illustartor</p>\n        <p>Indesign</p>\n\n        <h5>Video Redigering:</h5>\n        <p>Vegas Pro</p>\n\n        <h5>Programering:</h5>\n        <p>Netbeans</p>\n        <p>Visual Studio</p>\n        <p>Webstorm</p>\n      </div>\n      <hr/>\n      <div>\n        <h1>Mine værker</h1>\n        <ion-slides>\n          <ion-slide>\n            <p> </p>\n            <img src="assets/imgs/self-image.png">\n            <p>\n              Et selvportræt lavet i Adobe Illustrator.\n            </p>\n          </ion-slide>\n\n          <ion-slide>\n            <p> </p>\n            <img src="assets/imgs/cat-website.png">\n            <p>\n              En hjemmeside jeg lavede i forbindelse af et skole projekt.\n            </p>\n          </ion-slide>\n\n          <ion-slide>\n            <p> </p>\n            <img src="assets/imgs/mango-is-face.png">\n            <p>\n              Et billede jeg lavede i min fritid, lavet i Adobe Photoshop.\n            </p>\n          </ion-slide>\n\n          <ion-slide>\n            <p> </p>\n            <img src="assets/imgs/logo-for-offshore-wind-energy.png">\n            <p>\n              Et logo jeg lavede i et skole projekt for Offshore Wind Energy, lavet i Adobe Illustartor.\n            </p>\n          </ion-slide>\n\n          <ion-slide>\n            <p> </p>\n            <img src="assets/imgs/tassimo-reimagne-brand.png">\n            <p>\n              En hjemmeside mockup lavet som rebrand af Tassimo, lavet i Adobe Photoshop.\n            </p>\n          </ion-slide>\n\n          <ion-slide>\n            <p> </p>\n            <img src="assets/imgs/preppers-website.png">\n            <p>\n              En hjemmeside lavet for et eksamensprojekt.\n            </p>\n          </ion-slide>\n        </ion-slides>\n\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <div id="showcase1Box">\n                <a href="assets/imgs/self-image.png" target="_blank">\n                  <img id="showcase1" src="assets/imgs/self-image.png">\n                </a>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div id="showcase2Box">\n                <a href="assets/imgs/cat-website.png" target="_blank">\n                  <img id="showcase2" src="assets/imgs/cat-website.png">\n                </a>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div id="showcase3Box">\n                <a href="assets/imgs/mango-is-face.png" target="_blank">\n                  <img id="showcase3" src="assets/imgs/mango-is-face.png">\n                </a>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div id="showcase4Box">\n                <a href="assets/imgs/logo-for-offshore-wind-energy.png" target="_blank">\n                  <img id="showcase4" src="assets/imgs/logo-for-offshore-wind-energy.png">\n                </a>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div id="showcase5Box">\n                <a href="assets/imgs/tassimo-reimagne-brand.png" target="_blank">\n                  <img id="showcase5" src="assets/imgs/tassimo-reimagne-brand.png">\n                </a>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div id="showcase6Box">\n                <a href="assets/imgs/preppers-website.png" target="_blank">\n                  <img id="showcase6" src="assets/imgs/preppers-website.png">\n                </a>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </div>\n  </ion-content>\n</body>\n'/*ion-inline-end:"C:\Users\emilj\WebstormProjects\Portfolio\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map