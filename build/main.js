webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game_rules_game_rules__ = __webpack_require__(101);
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
        this.gameRulesPage = __WEBPACK_IMPORTED_MODULE_2__game_rules_game_rules__["a" /* GameRulesPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\home\home.html"*/'<ion-content padding style="\n    background-image: url(\'../../assets/imgs/home.jpg\');\n    background-image: url(\'assets/imgs/home.jpg\');\n    background-size: cover;\n    background-position: center center;\n    background-color: #000000;\n    ">\n\n  <div id="tirpitz-logo">\n    <img src="assets/imgs/tirpitz_yellow.gif">\n  </div>\n\n  <div id="startGameBox" [navPush]="gameRulesPage">\n    <div id="startQuizContainer">\n      <p>Start Quiz</p>\n      <img src="assets/imgs/black-arrow.png" id="blackArrow">\n    </div>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameRulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quiz_quiz__ = __webpack_require__(102);
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
 * Generated class for the GameRulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GameRulesPage = /** @class */ (function () {
    function GameRulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.quizPage = __WEBPACK_IMPORTED_MODULE_2__quiz_quiz__["a" /* QuizPage */];
    }
    GameRulesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GameRulesPage');
    };
    GameRulesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-game-rules',template:/*ion-inline-start:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\game-rules\game-rules.html"*/'<ion-content padding style="\n    background-image: url(\'../../assets/imgs/game-rules.jpg\');\n    background-image: url(\'assets/imgs/game-rules.jpg\');\n    background-size: cover;\n    background-position: center center;\n    background-color: #000000;\n    ">\n\n  <h1 id="spilletsRegler">Spillets Regler</h1>\n\n  <div id="startQuizBox">\n    <div id="startQuizTextContainer">\n      <p>Quizzen går ud på at der ved hvert spørgsmål er 4\n        svarmuligheder, hvortil der er 1 rigtigt svar.\n      </p>\n      <p>\n        Der er i alt 10 spørgsmål, hvor du skal bruge både din logik,\n        høresans og følesansen.\n      </p>\n      <p>\n        Vælg en svarmulighed, og tryk på pilen nederst i højre\n        hjørne for at gå videre til det næste spørgsmål.\n      </p>\n    </div>\n  </div>\n\n  <img src="../../assets/imgs/CommitButton.png" id="commitButton" [navPush]="quizPage">\n\n  <img src="assets/imgs/CommitButton.png" id="commitButton" [navPush]="quizPage">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\game-rules\game-rules.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], GameRulesPage);
    return GameRulesPage;
}());

//# sourceMappingURL=game-rules.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__results_results__ = __webpack_require__(103);
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
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuizPage = /** @class */ (function () {
    function QuizPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.resultsPage = __WEBPACK_IMPORTED_MODULE_2__results_results__["a" /* ResultsPage */];
    }
    QuizPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuizPage');
    };
    QuizPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-quiz',template:/*ion-inline-start:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\quiz\quiz.html"*/'<ion-content padding style="\n    background-image: url(\'../../assets/imgs/quiz.jpg\');\n    background-image: url(\'assets/imgs/quiz.jpg\');\n    background-size: cover;\n    background-position: center center;\n    background-color: #000000;\n    ">\n\n    <div id="questionBox">\n      <h1 id="questionOf">Spørgsmål 1/10:</h1>   <!-- USE HIDE BLOCK?? -->\n      <h1 id="actualQuestion" >Hvilken ting finder du i genstands kasse 1? (mærke)</h1>\n    </div>\n\n  <div id="questionsContainer">\n    <div id="question1">\n      <img src="assets/imgs/Answer.png" onclick="question1()" id="buttonImage1">\n      <p id="answerToQuestion1" onclick="question1()">En pung</p>\n    </div>\n\n    <div id="question2">\n      <img src="assets/imgs/Answer.png" onclick="question2()" id="buttonImage2">\n      <p id="answerToQuestion2" onclick="question2()">En sten fra en bunker</p>\n    </div>\n\n    <div id="question3">\n      <img src="assets/imgs/Answer.png" onclick="question3()" id="buttonImage3">\n      <p id="answerToQuestion3" onclick="question3()">En bog</p>\n    </div>\n\n    <div id="question4">\n      <img src="assets/imgs/Answer.png" onclick="question4()" id="buttonImage4">\n      <p id="answerToQuestion4" onclick="question4()">En lommeregner</p>\n    </div>\n  </div>\n\n  <div>\n    <img src="assets/imgs/CommitButton.png" onclick="changeFunction()" id="confirmButtonQuiz">\n    <img src="assets/imgs/CommitButton.png" onload="hideWinscreenArrow()" onclick="thisSessionStorage()" id="winScreen" [navPush]="resultsPage">\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\quiz\quiz.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], QuizPage);
    return QuizPage;
}());

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_signup_success_email_signup_success__ = __webpack_require__(99);
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
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.emailSignupPage = __WEBPACK_IMPORTED_MODULE_2__email_signup_success_email_signup_success__["a" /* EmailSignupPage */];
    }
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
    };
    ResultsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-results',template:/*ion-inline-start:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\results\results.html"*/'<ion-content padding style="\n    background-image: url(\'../../assets/imgs/results.jpg\');\n    background-image: url(\'assets/imgs/results.jpg\');\n    background-size: cover;\n    background-position: center center;\n    background-color: #000000;\n    ">\n\n  <div id="thanksMessageBox">\n    <h1 id="thanksMessage">Tak fordi du spillede med!</h1>\n  </div>\n\n  <div id="resultsBox">\n    <p id="results">Results Here</p>\n\n    <div id="textBox1">\n      <p>Vi håber du lærte noget spændende om Tirpitz.</p>\n    </div>\n    <div id="textBox2">\n      <p>Du kan skrive din email for at modtage en rabatkupon til dit besøg på museet og nyhedsbreve.</p>\n      <div id="email">\n        <p>Email:</p>\n        <input type="text" name="firstname" value="">\n      </div>\n    </div>\n  </div>\n\n  <img src="assets/imgs/CommitButton.png" onload="winMessage()" onclick="changeFunction()" id="confirmButton" [navPush]="emailSignupPage">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\results\results.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], ResultsPage);
    return ResultsPage;
}());

//# sourceMappingURL=results.js.map

/***/ }),

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/email-signup-success/email-signup-success.module": [
		273,
		4
	],
	"../pages/game-rules/game-rules.module": [
		275,
		3
	],
	"../pages/home/home.module": [
		274,
		2
	],
	"../pages/quiz/quiz.module": [
		276,
		1
	],
	"../pages/results/results.module": [
		277,
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
webpackAsyncContext.id = 154;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(221);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_game_rules_game_rules__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_quiz_quiz__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_results_results__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_email_signup_success_email_signup_success__ = __webpack_require__(99);
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
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_game_rules_game_rules__["a" /* GameRulesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_email_signup_success_email_signup_success__["a" /* EmailSignupPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/email-signup-success/email-signup-success.module#EmailSignupPageModule', name: 'EmailSignupPage', segment: 'email-signup-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/game-rules/game-rules.module#GameRulesPageModule', name: 'GameRulesPage', segment: 'game-rules', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/quiz/quiz.module#QuizPageModule', name: 'QuizPage', segment: 'quiz', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/results/results.module#ResultsPageModule', name: 'ResultsPage', segment: 'results', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_game_rules_game_rules__["a" /* GameRulesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_quiz_quiz__["a" /* QuizPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_results_results__["a" /* ResultsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_email_signup_success_email_signup_success__["a" /* EmailSignupPage */]
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

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\emilj\Documents\GitHub\Teampitz\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\emilj\Documents\GitHub\Teampitz\src\app\app.html"*/
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailSignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
 * Generated class for the EmailSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailSignupPage = /** @class */ (function () {
    function EmailSignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    EmailSignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmailSignupPage');
    };
    EmailSignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-email-signup',template:/*ion-inline-start:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\email-signup-success\email-signup-success.html"*/'<ion-content padding style="\n    background-image: url(\'../../assets/imgs/results.jpg\');\n    background-image: url(\'assets/imgs/results-new1.jpg\');\n    background-size: cover;\n    background-position: center center;\n    background-color: #000000;\n    ">\n\n  <div id="signupBox">\n    <div id="signUpTextBox">\n      <p>Du er nu tilmeldt.</p>\n      <p>Vi håber at se dig på Tirpitz museet!</p>\n    </div>\n  </div>\n\n  <img src="assets/imgs/CommitButton.png" id="commitButtonEmailSignUp" onclick="reloadQuiz()">\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\emilj\Documents\GitHub\Teampitz\src\pages\email-signup-success\email-signup-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], EmailSignupPage);
    return EmailSignupPage;
}());

//# sourceMappingURL=email-signup-success.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map