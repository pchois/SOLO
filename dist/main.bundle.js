webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"plugins\":[null,null,null],\"sourceMap\":false}!../../../material/prebuilt-themes/pink-bluegrey.css"), "");

// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Base Class Finder </h1>\n<div>\n<app-car-data></app-car-data>\n</div>\n<div>\n<p><b>Hello World</b></p>\n<p>Thank you for visiting the site. </p>\n<p>This tool is meant to help you find your base class for autox based on SCCA rules, I have always found that process to be cumbersome so I created this tool to help the community.\nI have tried to simplify the user experience as much as I can, the design might change based on your feedback.</p>\n<p>I am not a developer by trade, but I do work in software QA. I learned what I needed in order to make this tool, I'm using it as a learning opportunity.\n  If you're a developer and want to contribute send me a message and I'll share it with you (APIs were written in Nodejs\\Javascript and the front end using Angular 5). </p>\n<p>I am linking this to my personal site, but the actual app lives in a different environment. At the moment that environment runs on a free instance, which means that the app\n  goes to sleep after a certain period of inactivity. If it took a while for the link to load, this is why. The app will wake up when someone tries to use it. If the tool is well received, I'll eventually look into paying for the\n  hosting so it runs uninterrupted.</p>\n\n<p><b>Design</b></p>\n<p>- The design is based on my user experience when browsing the PDF for the Rule Book: search for a brand, find your\nmodel, trim and\\or year (when available), then find your class.</p>\n<p>- A design where you select a year, then you get available brands for that year, etc. was considered but it was\ndiscarded because it implies a different data structure that is not easily available. Also, note that up to this point\nthe SCCA has not provided any input, feedback or support for this tool. It is not official in any way. All the data\nhas been extracted manually from the SCCA Rule Book PDF and manipulated to suit the purpose of this tool and my current knowledge of database management.</p>\n<p>There might be some spelling mistakes or other incorrect information. If you find something, please send me a comment in the link below.</p>\n\n<p><b>Improvements</b></p>\n<p>I appreciate any feedback you can provide, ultimately this will help you. However, before you submit any comments please see the improvements that are currently planned:</p>\n\n<p>- Update data to be current (at the moment, it's valid up to mid 2016).</p>\n<p>- Given the current design, if a model only has 1 trim or year available then present the options and the class. Do not make the user click only 1 option to get the result.</p>\n<p>- Add data for excluded vehicles.</p>\n<p>- Add an option for modified classes (based on the BASE class and/or other criteria).</p>\n<p>- Improved navigation using only the keyboard.</p>\n<p>- Make sure the site is mobile friendly.</p>\n<p>- Review and update model\\trim information. Right now you will see either (other) or (NOC) when there is no specific data provided in the Rule Book, I'd like to make this consistent.</p>\n<p>- Potentially get support from the SCCA to handle\\maintain the data, provide updates and manage rules for the modified classes.</p>\n\n<form>\n<input type=\"button\" value=\"Submit feedback\" onclick=\"window.location.href='https://peachesmotorsports.com/contact'\" />\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DemoMaterialModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__car_data_car_data_component__ = __webpack_require__("../../../../../src/app/car-data/car-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__car_data_service__ = __webpack_require__("../../../../../src/app/car-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material_card__ = __webpack_require__("../../../material/esm5/card.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var DemoMaterialModule = (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_material_card__["a" /* MatCardModule */]
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__car_data_car_data_component__["a" /* CarDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["h" /* ReactiveFormsModule */],
                DemoMaterialModule
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__car_data_service__["a" /* CarDataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/car-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarDataService = (function () {
    //  private classS4Url = 'http://localhost:8080/api/solo/s4';  // URL to web api to retrieve class (scenario 4)
    function CarDataService(http) {
        this.http = http;
        this.makesUrl = 'https://solo-api-pms.herokuapp.com/api/solo/makes'; // URL to web api to retrieve makes
        this.modelsUrl = 'https://solo-api-pms.herokuapp.com/api/solo/models'; // URL to web api to retrieve models
        this.trimsUrl = 'https://solo-api-pms.herokuapp.com/api/solo/trims'; // URL to web api to retrieve trims
        this.yearsUrl = 'https://solo-api-pms.herokuapp.com/api/solo/years'; // URL to web api to retrieve years (scenarios 1, 2, and 4)
        this.yearsS3Url = 'https://solo-api-pms.herokuapp.com/api/solo/yearss3'; // URL to web api to retrieve years (scenario 3)
        this.classS1Url = 'https://solo-api-pms.herokuapp.com/api/solo/s1'; // URL to web api to retrieve class (scenario 1)
        this.classS2Url = 'https://solo-api-pms.herokuapp.com/api/solo/s2'; // URL to web api to retrieve class (scenario 2)
        this.classS3Url = 'https://solo-api-pms.herokuapp.com/api/solo/s3'; // URL to web api to retrieve class (scenario 3)
        this.classS4Url = 'https://solo-api-pms.herokuapp.com/api/solo/s4'; // URL to web api to retrieve class (scenario 4)
    }
    // functions to call the different URLs, introducing the required elements in the URL query
    CarDataService.prototype.getMake = function () {
        return this.http.get(this.makesUrl);
    };
    CarDataService.prototype.getModel = function (make_id) {
        var url = this.modelsUrl + "/?makeId=" + make_id;
        return this.http.get(url);
    };
    CarDataService.prototype.getTrim = function (make_id, model_id) {
        var url = this.trimsUrl + "/?makeId=" + make_id + "&modelId=" + model_id;
        return this.http.get(url);
    };
    CarDataService.prototype.getYear = function (make_id, model_id, trim_id) {
        var url = this.yearsUrl + "/?makeId=" + make_id + "&modelId=" + model_id + "&trimId=" + trim_id;
        return this.http.get(url);
    };
    CarDataService.prototype.getYearS3 = function (make_id, model_id) {
        var url = this.yearsS3Url + "/?makeId=" + make_id + "&modelId=" + model_id;
        return this.http.get(url);
    };
    CarDataService.prototype.getScenario1 = function (make_id, model_id) {
        var url = this.classS1Url + "/?makeId=" + make_id + "&modelId=" + model_id;
        return this.http.get(url);
    };
    CarDataService.prototype.getScenario2 = function (make_id, model_id, trim_id) {
        var url = this.classS2Url + "/?makeId=" + make_id + "&modelId=" + model_id + "&trimId=" + trim_id;
        return this.http.get(url);
    };
    CarDataService.prototype.getScenario3 = function (make_id, model_id, year_id) {
        var url = this.classS3Url + "/?makeId=" + make_id + "&modelId=" + model_id + "&yearId=" + year_id;
        return this.http.get(url);
    };
    CarDataService.prototype.getScenario4 = function (make_id, model_id, trim_id, year_id) {
        var url = this.classS4Url + "/?makeId=" + make_id + "&modelId=" + model_id + "&trimId=" + trim_id + "&yearId=" + year_id;
        return this.http.get(url);
    };
    CarDataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CarDataService);
    return CarDataService;
}());



/***/ }),

/***/ "../../../../../src/app/car-data/car-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.base-class {\n  width: 300px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/car-data/car-data.component.html":
/***/ (function(module, exports) {

module.exports = "<h2> Select the available data that matches your vehicle. </h2>\n\n<mat-form-field>\n  <mat-select placeholder=\"Select a make\" (change)=\"getModels($event)\" [(ngModel)]=\"selectedMake\">\n    <mat-option *ngFor=\"let make of makes\" [value]=\"make.id\">{{ make.name }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"models.length > 0\">\n  <mat-select placeholder=\"Select a model\" (change)=\"getTrims($event)\" [(ngModel)]=\"selectedModel\">\n    <mat-option *ngFor=\"let model of models\" [value]=\"model.model_id\">{{ model.name }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"trims.length > 0\">\n  <mat-select placeholder=\"Select a trim\" (change)=\"getYears($event)\" [(ngModel)]=\"selectedTrim\">\n    <mat-option *ngFor=\"let trim of trims\" [value]=\"trim.trim_id\">{{ trim.name }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"years.length > 0\">\n  <mat-select placeholder=\"Select a year\" (change)=\"getScenario4Class($event)\" [(ngModel)]=\"selectedYear\">\n    <mat-option *ngFor=\"let year of years\" [value]=\"year.year_id\">{{ year.name }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<mat-form-field *ngIf=\"yearsS3.length > 0\">\n  <mat-select placeholder=\"Select a year\" (change)=\"getScenario3Class($event)\" [(ngModel)]=\"selectedYearS3\">\n    <mat-option *ngFor=\"let years3 of yearsS3\" [value]=\"years3.year_id\">{{ years3.name }}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n<div *ngIf=\"scenario1.length > 0\">\n<mat-card *ngFor=\"let s1 of scenario1\" [(ngModel)]=\"selectedClassS1\" class=\"base-class\">Your base class is: {{s1.name}}</mat-card>\n</div>\n\n<div *ngIf=\"scenario2.length > 0\">\n<mat-card *ngFor=\"let s2 of scenario2\" [(ngModel)]=\"selectedClassS2\" class=\"base-class\">Your base class is: {{s2.name}}</mat-card>\n</div>\n\n<div *ngIf=\"scenario3.length > 0\">\n<mat-card *ngFor=\"let s3 of scenario3\" [(ngModel)]=\"selectedClassS3\" class=\"base-class\">Your base class is: {{s3.name}}</mat-card>\n</div>\n\n<div *ngIf=\"scenario4.length > 0\">\n<mat-card *ngFor=\"let s4 of scenario4\" [(ngModel)]=\"selectedClassS4\" class=\"base-class\">Your base class is: {{s4.name}}</mat-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/car-data/car-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__car_data_service__ = __webpack_require__("../../../../../src/app/car-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarDataComponent = (function () {
    function CarDataComponent(cardataService) {
        this.cardataService = cardataService;
        // define the models tied to the HTML
        this.selectedModel = '';
        this.selectedTrim = '';
        this.selectedYear = '';
        this.selectedYearS3 = '';
        this.selectedClassS1 = '';
        this.selectedClassS2 = '';
        this.selectedClassS3 = '';
        this.selectedClassS4 = '';
        // define the elements that will store the data coming back from the APIs
        this.makes = [];
        this.models = [];
        this.trims = [];
        this.years = [];
        this.yearsS3 = [];
        this.scenario1 = [];
        this.scenario2 = [];
        this.scenario3 = [];
        this.scenario4 = [];
        // define an element that will hold the parameters required to make an API call
        // it will be "reset" depending on the user's actions
        this.query_data = {
            make_id: 0,
            model_id: 0,
            trim_id: 0,
            year_id: 0
        };
    }
    // call get makes by default, as it is the first thing the user will select
    CarDataComponent.prototype.ngOnInit = function () {
        this.getMakes();
    };
    // reset values for selected\displayed classes to provide empty selections when a user starts a new flow
    CarDataComponent.prototype.resetClasses = function () {
        this.selectedClassS1 = '';
        this.selectedClassS2 = '';
        this.selectedClassS3 = '';
        this.selectedClassS4 = '';
        this.scenario1 = [];
        this.scenario2 = [];
        this.scenario3 = [];
        this.scenario4 = [];
    };
    // reset values for selected\displayed models to provide empty selections when a user starts a new flow
    CarDataComponent.prototype.resetModels = function () {
        this.selectedModel = '';
        this.models = [];
    };
    // reset values for selected\displayed trims to provide empty selections when a user starts a new flow
    CarDataComponent.prototype.resetTrims = function () {
        this.selectedTrim = '';
        this.trims = [];
    };
    // reset values for selected\displayed years to provide empty selections when a user starts a new flow
    CarDataComponent.prototype.resetYears = function () {
        this.selectedYear = '';
        this.years = [];
    };
    // reset values for selected\displayed years scenario 3 to provide empty selections when a user starts a new flow
    CarDataComponent.prototype.resetYearsS3 = function () {
        this.selectedYearS3 = '';
        this.yearsS3 = [];
    };
    // get makes function, assigns result to the makes element
    CarDataComponent.prototype.getMakes = function () {
        var _this = this;
        this.cardataService.getMake()
            .subscribe(function (makes) { return _this.makes = makes; });
    };
    // get models function, assigns result to the models element
    // resets values for models, trims, years and classes when the user starts a new flow
    // resets the value of the query parameters
    CarDataComponent.prototype.getModels = function (item) {
        var _this = this;
        this.resetModels();
        this.resetTrims();
        this.resetYears();
        this.resetYearsS3();
        this.resetClasses();
        this.query_data = {
            make_id: item.value,
            model_id: 0,
            trim_id: 0,
            year_id: 0
        };
        this.cardataService.getModel(this.query_data.make_id)
            .subscribe(function (models) { return _this.models = models; });
    };
    // get trims function, assigns result to the trims element
    // resets values for trims, years and classes when the user starts a new flow
    // resets the value of the query parameters
    // if there are no trims, triggers scenario 3(YearsS3)
    // if scenario 3 is false, triggers secenario 1
    CarDataComponent.prototype.getTrims = function (item) {
        var _this = this;
        this.resetTrims();
        this.resetYears();
        this.resetYearsS3();
        this.resetClasses();
        var make_id = this.query_data.make_id;
        this.query_data = {
            make_id: make_id,
            model_id: item.value,
            trim_id: 0,
            year_id: 0
        };
        this.cardataService.getTrim(this.query_data.make_id, this.query_data.model_id)
            .subscribe(function (trims) {
            _this.trims = trims;
            if (_this.trims.length == 0) {
                _this.getYearsS3(_this.query_data.model_id);
                if (_this.yearsS3.length == 0) {
                    _this.getScenario1Class(_this.query_data.make_id, _this.query_data.model_id);
                }
            }
        });
    };
    // get years function, assigns result to the years element
    // resets values for years and classes when the user starts a new flow
    // resets the value of the query parameters
    // if there are no years, triggers scenario 2
    CarDataComponent.prototype.getYears = function (item) {
        var _this = this;
        this.resetYears();
        this.resetYearsS3();
        this.resetClasses();
        var make_id = this.query_data.make_id;
        var model_id = this.query_data.model_id;
        this.query_data = {
            make_id: make_id,
            model_id: model_id,
            trim_id: item.value,
            year_id: 0
        };
        this.cardataService.getYear(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id)
            .subscribe(function (years) {
            _this.years = years;
            if (_this.years.length == 0) {
                _this.getScenario2Class(_this.query_data.make_id, _this.query_data.model_id, _this.query_data.trim_id);
            }
        });
    };
    // get years for scenario 3 function, assigns result to the yearss3 element
    // resets values for years and classes when the user starts a new flow
    // resets the value of the query parameters
    CarDataComponent.prototype.getYearsS3 = function (model_id) {
        var _this = this;
        this.resetYears();
        this.resetYearsS3();
        this.resetClasses();
        var make_id = this.query_data.make_id;
        this.query_data = {
            make_id: make_id,
            model_id: model_id,
            trim_id: 0,
            year_id: 0
        };
        this.cardataService.getYearS3(this.query_data.make_id, this.query_data.model_id)
            .subscribe(function (yearsS3) { return _this.yearsS3 = yearsS3; });
    };
    // get the class for scenario 1, assigns the result to the scenario1 element
    // resets values for classes
    // doesn't reset values for the query parameter because they are passed in
    CarDataComponent.prototype.getScenario1Class = function (make_id, model_id) {
        var _this = this;
        this.resetClasses();
        this.cardataService.getScenario1(this.query_data.make_id, this.query_data.model_id)
            .subscribe(function (scenario1) { return _this.scenario1 = scenario1; });
    };
    // get the class for scenario 2, assigns the result to the scenario2 element
    // resets values for classes
    // doesn't reset values for the query parameter because they are passed in
    CarDataComponent.prototype.getScenario2Class = function (make_id, model_id, trim_id) {
        var _this = this;
        this.resetClasses();
        this.cardataService.getScenario2(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id)
            .subscribe(function (scenario2) { return _this.scenario2 = scenario2; });
    };
    // get the class for scenario 3, assigns the result to the scenario3 element
    // resets values for classes
    // resets the value of the query parameters
    CarDataComponent.prototype.getScenario3Class = function (item) {
        var _this = this;
        this.resetClasses();
        var make_id = this.query_data.make_id;
        var model_id = this.query_data.model_id;
        this.query_data = {
            make_id: make_id,
            model_id: model_id,
            trim_id: 0,
            year_id: item.value
        };
        this.cardataService.getScenario3(this.query_data.make_id, this.query_data.model_id, this.query_data.year_id)
            .subscribe(function (scenario3) { return _this.scenario3 = scenario3; });
    };
    // get the class for scenario 4, assigns the result to the scenario4 element
    // resets values for classes
    // resets the value of the query parameters
    CarDataComponent.prototype.getScenario4Class = function (item) {
        var _this = this;
        this.resetClasses();
        var make_id = this.query_data.make_id;
        var model_id = this.query_data.model_id;
        var trim_id = this.query_data.trim_id;
        this.query_data = {
            make_id: make_id,
            model_id: model_id,
            trim_id: trim_id,
            year_id: item.value
        };
        this.cardataService.getScenario4(this.query_data.make_id, this.query_data.model_id, this.query_data.trim_id, this.query_data.year_id)
            .subscribe(function (scenario4) { return _this.scenario4 = scenario4; });
    };
    CarDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-car-data',
            template: __webpack_require__("../../../../../src/app/car-data/car-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/car-data/car-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__car_data_service__["a" /* CarDataService */]])
    ], CarDataComponent);
    return CarDataComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map