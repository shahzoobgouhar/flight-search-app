(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" [ngClass]=\"isRoundTrip && returnResult ? 'two-way' : 'one-way'\">\r\n  <header>\r\n    <h2>Flight Search App</h2>\r\n  </header>\r\n  <section>\r\n    <form [formGroup]=\"searchForm\" (ngSubmit)=\"searchFlight()\">\r\n      <div class=\"journeyType\">\r\n        <button type=\"button\" (click)=\"selectJourneyType('oneWay')\" class=\"btn\" [ngClass]=\"{'active': !isRoundTrip}\">One\r\n          Way</button>\r\n        <button type=\"button\" (click)=\"selectJourneyType('roundTrip')\" class=\"btn\"\r\n          [ngClass]=\"{'active': isRoundTrip}\">Return</button>\r\n      </div>\r\n      <div class=\"userInputs\">\r\n        <input list=\"cities\" formControlName=\"origin\" placeholder=\"Enter Origin City\">\r\n        <div class=\"hasError\"\r\n          *ngIf=\"searchForm.get('origin').invalid && (searchForm.get('origin').touched || showErrorsIfAny)\">\r\n          Please provide origin city\r\n        </div>\r\n        <input list=\"cities\" formControlName=\"destination\" placeholder=\"Enter Destination City\">\r\n        <div class=\"hasError\"\r\n          *ngIf=\"searchForm.get('destination').invalid && (searchForm.get('destination').touched || showErrorsIfAny)\">\r\n          Please provide destination city\r\n        </div>\r\n        <datalist id=\"cities\">\r\n          <option value=\"Mumbai (BOM)\">\r\n          <option value=\"Bengaluru (BLR)\"></option>\r\n          <option value=\"Delhi (DEL)\">\r\n          <option value=\"Pune (PNQ)\"></option>          \r\n        </datalist>\r\n        <input class='journey-date' type=\"date\" formControlName=\"departureDate\" placeholder=\"Enter Departure Date\">\r\n        <div class=\"hasError\"\r\n          *ngIf=\"searchForm.get('departureDate').invalid && (searchForm.get('departureDate').touched || showErrorsIfAny)\">\r\n          Please provide departure date\r\n        </div>\r\n        <input *ngIf=\"isRoundTrip\" class='return-date' type=\"date\" formControlName=\"returnDate\"\r\n          placeholder=\"Enter Return Date\">\r\n        <div class=\"hasError\"\r\n          *ngIf=\"isRoundTrip && searchForm.get('returnDate').invalid && (searchForm.get('returnDate').touched || showErrorsIfAny)\">\r\n          Please provide return date\r\n        </div>\r\n        <select class=\"custom-select\" formControlName=\"noOfTravellers\">\r\n          <option value=\"\" disabled>Select passengers</option>\r\n          <option *ngFor=\"let passenger of passengers\" [ngValue]=\"passenger\">{{passenger}}</option>\r\n        </select>\r\n        <div class=\"hasError\"\r\n          *ngIf=\"searchForm.get('noOfTravellers').invalid && (searchForm.get('noOfTravellers').touched || showErrorsIfAny)\">\r\n          Please select number of travellers\r\n        </div>\r\n        <button id=\"submit\" type=\"submit\" class=\"btn active\">\r\n          Search\r\n        </button>\r\n      </div>\r\n      <div class=\"refine-search\" *ngIf=\"onwardResult\">\r\n        <h3>Refine Flight Search</h3>\r\n        <div class=\"range\">\r\n          <span>0</span>\r\n          <span>{{searchForm.get('maxPrice').value}}</span>\r\n        </div>\r\n        <!-- <input type=\"range\" min=\"0\" max=\"100000\" value=\"100000\" step=\"5000\" formControlName=\"maxPrice\" (input)=\"filterFlight()\" (change)=\"filterFlight()\"/> -->\r\n        <input type=\"range\" min=\"0\" max=\"50000\" value=\"50000\" formControlName=\"maxPrice\" />\r\n\r\n      </div>\r\n    </form>\r\n  </section>\r\n  <ng-container>\r\n    <div class=\"onward-result\" *ngIf=\"onwardResult\">\r\n      <img src=\"../assets/flight.jpg\" alt=\"onward\">\r\n      <div>\r\n        <h3>{{origin}} to {{destination}}</h3>\r\n        <p>{{totalOnwardFlights}} flights found &nbsp;&nbsp;{{departureDateH | date: 'EEEE, d MMMM'}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"return-result\" *ngIf=\"isRoundTrip && returnResult\">\r\n      <img src=\"../assets/flight.jpg\" alt=\"return\">\r\n      <div>\r\n        <h3>{{destination}} to {{origin}}</h3>\r\n        <p>{{totalReturnFlights}} flights found &nbsp;&nbsp;{{returnDateH | date: 'EEEE, d MMMM'}}</p>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container>\r\n    <div class=\"onward-flights\" *ngIf=\"onwardResult\">\r\n      <ng-container *ngFor=\"let directFlight of onwardDirectFlights; trackBy:trackByFlightNo\">\r\n        <div class=\"onward-direct-flight wrap-flex\" [ngClass]=\"{'wrap-flex-two-way': isRoundTrip && returnResult}\"\r\n          *ngIf=\"filterDirectFlight(directFlight)\">\r\n          <img class=\"img-display\" [ngClass]=\"{'img-display-two-way': isRoundTrip && returnResult}\"\r\n            src=\"../assets/card.jpg\" alt=\"direct\">\r\n          <div>\r\n            <h3>{{directFlight.flight.name}}</h3>\r\n            <p>{{directFlight.flight.flightNo}}</p>\r\n          </div>\r\n          <div>\r\n            <h3>{{directFlight.flight.departureTime}}</h3>\r\n            <p>{{directFlight.flight.originCity}}</p>\r\n          </div>\r\n          <div>\r\n            <h3>{{directFlight.flight.arrivalTime}}</h3>\r\n            <p>{{directFlight.flight.destinationCity}}</p>\r\n          </div>\r\n          <div>\r\n            <h3>{{directFlight.totalDuration}}</h3>\r\n            <p>Non stop</p>\r\n          </div>\r\n          <div>\r\n            <h3 class=\"book\">\r\n              {{directFlight.flight.price * searchForm.get('noOfTravellers').value | currency: 'INR': true: '1.0-0'}}\r\n            </h3>\r\n          </div>\r\n          <button class=\"btn\">Book</button>\r\n        </div>\r\n      </ng-container>\r\n      <div *ngFor=\"let multipleFlight of onwardMultipleFlights; let i = index; trackBy:trackByMultipleFlightNo\">\r\n        <ng-container *ngIf=\"filterMultipleFlight(multipleFlight)\">\r\n          <div class=\"onward-multiple-flight wrap-flex\" [ngClass]=\"{'wrap-flex-two-way': isRoundTrip && returnResult}\">\r\n            <img class=\"img-display\" [ngClass]=\"{'img-display-two-way': isRoundTrip && returnResult}\"\r\n              src=\"../assets/multiple.jpg\" alt=\"Connected\">\r\n            <div>\r\n              <h3>Multiple</h3>\r\n              <p>\r\n                <a href=\"javascript:void(0)\" (click)=\"toggleOnwardDetails(i)\">\r\n                  <span *ngIf=\"!showDetails[i]\">Show Details</span>\r\n                  <span *ngIf=\"showDetails[i]\">Hide Details</span>\r\n                </a>\r\n              </p>\r\n            </div>\r\n            <div>\r\n              <h3>{{multipleFlight.flights[0].departureTime}}</h3>\r\n              <p>{{multipleFlight.flights[0].originCity}}</p>\r\n            </div>\r\n            <div>\r\n              <h3>{{multipleFlight.flights[1].arrivalTime}}</h3>\r\n              <p>{{multipleFlight.flights[1].destinationCity}}</p>\r\n            </div>\r\n            <div>\r\n              <h3 style=\"color: rgb(58, 117, 58);\">{{multipleFlight.totalDuration}}</h3>\r\n              <p>Total Duration</p>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"book\">\r\n                {{(multipleFlight.flights[0].price + multipleFlight.flights[1].price) * searchForm.get('noOfTravellers').value | currency: 'INR': true: '1.0-0'}}\r\n              </h3>\r\n            </div>\r\n            <button class=\"btn\">Book</button>\r\n          </div>\r\n          <ng-container *ngIf=\"showDetails[i]\">\r\n            <div class=\"onward-connected-flight wrap-flex\"\r\n              [ngClass]=\"{'wrap-flex-two-way': isRoundTrip && returnResult}\"\r\n              *ngFor=\"let connectedFlight of multipleFlight.flights; let index = index; trackBy:trackByConnectedFlightNo\"\r\n              [class.dotted-border]=\"index == 0\">\r\n              <img class=\"img-display\" [ngClass]=\"{'img-display-two-way': isRoundTrip && returnResult}\"\r\n                src=\"../assets/card.jpg\" alt=\"direct\">\r\n              <div>\r\n                <h3>{{connectedFlight.name}}</h3>\r\n                <p>{{connectedFlight.flightNo}}</p>\r\n              </div>\r\n              <div>\r\n                <h3>{{connectedFlight.departureTime}}</h3>\r\n                <p>{{connectedFlight.originCity}}</p>\r\n              </div>\r\n              <div>\r\n                <h3>{{connectedFlight.arrivalTime}}</h3>\r\n                <p>{{connectedFlight.destinationCity}}</p>\r\n              </div>\r\n              <div>\r\n                <h3>{{connectedFlight.duration}}</h3>\r\n                <p>&nbsp;</p>\r\n              </div>\r\n            </div>\r\n            <span class=\"layover-span\">Layover Time {{multipleFlight.layover}}</span>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    <div class=\"return-flights\" *ngIf=\"isRoundTrip && returnResult\">\r\n      <ng-container *ngFor=\"let returnFlight of returnDirectFlights; trackBy:trackByFlightNo\">\r\n        <div class=\"return-direct-flight wrap-flex-two-way wrap-flex\" *ngIf=\"filterDirectFlight(returnFlight)\">\r\n          <img class=\"img-display img-display-two-way\" src=\"../assets/card.jpg\" alt=\"direct\">\r\n          <div>\r\n            <h3>{{returnFlight.flight.name}}</h3>\r\n            <p>{{returnFlight.flight.flightNo}}</p>\r\n          </div>\r\n          <div>\r\n            <h3>{{returnFlight.flight.departureTime}}</h3>\r\n            <p>{{returnFlight.flight.originCity}}</p>\r\n          </div>\r\n          <div>\r\n            <h3>{{returnFlight.flight.arrivalTime}}</h3>\r\n            <p>{{returnFlight.flight.destinationCity}}</p>\r\n          </div>\r\n          <div>\r\n            <h3>{{returnFlight.totalDuration}}</h3>\r\n            <p>Non stop</p>\r\n          </div>\r\n          <div>\r\n            <h3 class=\"book\">\r\n              {{returnFlight.flight.price * searchForm.get('noOfTravellers').value | currency: 'INR': true: '1.0-0'}}\r\n            </h3>\r\n          </div>\r\n          <button class=\"btn\">Book</button>\r\n        </div>\r\n      </ng-container>\r\n      <div *ngFor=\"let multipleFlight of returnMultipleFlights; let i = index; trackBy:trackByMultipleFlightNo\">\r\n        <ng-container *ngIf=\"filterMultipleFlight(multipleFlight)\">\r\n          <div class=\"return-multiple-flight wrap-flex-two-way wrap-flex\">\r\n            <img class=\"img-display img-display-two-way\" src=\"../assets/multiple.jpg\" alt=\"connected\">\r\n            <div>\r\n              <h3>Multiple</h3>\r\n              <p>\r\n                <a href=\"javascript:void(0)\" (click)=\"toggleReturnDetails(i)\">\r\n                  <span *ngIf=\"!showReturnDetails[i]\">Show Details</span>\r\n                  <span *ngIf=\"showReturnDetails[i]\">Hide Details</span>\r\n                </a>\r\n              </p>\r\n            </div>\r\n            <div>\r\n              <h3>{{multipleFlight.flights[0].departureTime}}</h3>\r\n              <p>{{multipleFlight.flights[0].originCity}}</p>\r\n            </div>\r\n            <div>\r\n              <h3>{{multipleFlight.flights[1].arrivalTime}}</h3>\r\n              <p>{{multipleFlight.flights[1].destinationCity}}</p>\r\n            </div>\r\n            <div>\r\n              <h3 style=\"color: rgb(58, 117, 58);\">{{multipleFlight.totalDuration}}</h3>\r\n              <p>Total Duration</p>\r\n            </div>\r\n            <div>\r\n              <h3 class=\"book\">\r\n                {{(multipleFlight.flights[0].price + multipleFlight.flights[1].price) * searchForm.get('noOfTravellers').value | currency: 'INR': true: '1.0-0'}}\r\n              </h3>\r\n            </div>\r\n            <button class=\"btn\">Book</button>\r\n          </div>\r\n          <ng-container *ngIf=\"showReturnDetails[i]\">\r\n            <div class=\"return-connected-flight wrap-flex-two-way wrap-flex\"\r\n              *ngFor=\"let connectedFlight of multipleFlight.flights; let index = index; trackBy:trackByConnectedFlightNo\"\r\n              [class.dotted-border]=\"index == 0\">\r\n              <img class=\"img-display img-display-two-way\" src=\"../assets/card.jpg\" alt=\"direct\">\r\n              <div>\r\n                <h3>{{connectedFlight.name}}</h3>\r\n                <p>{{connectedFlight.flightNo}}</p>\r\n              </div>\r\n              <div>\r\n                <h3>{{connectedFlight.departureTime}}</h3>\r\n                <p>{{connectedFlight.originCity}}</p>\r\n              </div>\r\n              <div>\r\n                <h3>{{connectedFlight.arrivalTime}}</h3>\r\n                <p>{{connectedFlight.destinationCity}}</p>\r\n              </div>\r\n              <div>\r\n                <h3>{{connectedFlight.duration}}</h3>\r\n                <p>&nbsp;</p>\r\n              </div>\r\n            </div>\r\n            <span class=\"layover-span\">Layover Time {{multipleFlight.layover}}</span>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* layout styles */\r\n.container {\r\n  font-family: sans-serif;\r\n  display: grid;\r\n  display: -ms-grid;\r\n  height: auto;\r\n  border: 1.6px solid #404040;\r\n}\r\n.two-way {\r\n  grid-template-rows: auto auto auto;\r\n  grid-template-columns: 0.5fr 2fr 2fr;\r\n  -ms-grid-columns: 1fr 2fr 2fr;\r\n}\r\n.one-way {\r\n  grid-template-rows: auto auto auto;\r\n  grid-template-columns: 0.5fr 4fr;\r\n  -ms-grid-columns: 2fr 4fr;\r\n}\r\nheader {\r\n  grid-row: 1;\r\n  grid-column: 1 / span 3;\r\n  -ms-grid-row: 1;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-column-span: 3;\r\n  border-bottom: 1.6px solid #404040;\r\n  padding: 0px 10px;\r\n}\r\nsection {\r\n  border-right: 1.6px solid #404040;\r\n  grid-row: 2 / span 2;\r\n  grid-column: 1;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 1;\r\n  -ms-grid-row-span: 2;\r\n}\r\n/* error message class */\r\n.hasError {\r\n  font-size: 14px !important;\r\n  color: red;\r\n  margin-top: 2px !important;\r\n}\r\n.onward-result {\r\n  display: flex;\r\n  border-bottom: 1.6px solid #404040;\r\n  grid-row: 2;\r\n  grid-column: 2;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 2;\r\n}\r\n.return-result {\r\n  display: flex;\r\n  border-bottom: 1.6px solid #404040;\r\n  grid-row: 2;\r\n  grid-column: 3;\r\n  -ms-grid-row: 2;\r\n  -ms-grid-column: 3;\r\n}\r\n.onward-flights {\r\n  grid-row: 3;\r\n  grid-column: 2;\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 2;\r\n}\r\n.return-flights {\r\n  grid-row: 3;\r\n  grid-column: 3;\r\n  -ms-grid-row: 3;\r\n  -ms-grid-column: 3;\r\n  border-left: 1px dashed;\r\n}\r\n.onward-result > img,\r\n.onward-result > div,\r\n.return-result > img,\r\n.return-result > div {\r\n  align-self: center;\r\n}\r\n.onward-result > img,\r\n.return-result > img {\r\n  width: 50px;\r\n  height: 50px;\r\n  margin: 10px;\r\n}\r\n.return-result > img {\r\n  transform: rotate(180deg);\r\n}\r\n.onward-result p,\r\n.return-result p,\r\n.onward-direct-flight p,\r\n.onward-multiple-flight p,\r\n.onward-connected-flight p,\r\n.return-direct-flight p,\r\n.return-multiple-flight p,\r\n.return-connected-flight p {\r\n  margin-top: 0.1em;\r\n  color: #7c7c7c;\r\n}\r\n.onward-result h3,\r\n.return-result h3,\r\n.onward-direct-flight h3,\r\n.onward-multiple-flight h3,\r\n.onward-connected-flight h3,\r\n.return-direct-flight h3,\r\n.return-multiple-flight h3,\r\n.return-connected-flight h3 {\r\n  margin-bottom: 0.1em;\r\n  font-weight: 500;\r\n}\r\n.onward-direct-flight,\r\n.onward-multiple-flight,\r\n.return-direct-flight,\r\n.return-multiple-flight {\r\n  display: flex;\r\n  margin: 10px;\r\n  border: 1.6px solid #404040;\r\n  padding: 10px 5px;\r\n  justify-content: space-between;\r\n}\r\n.onward-connected-flight,\r\n.return-connected-flight {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  margin: -10px 10px 10px;\r\n  padding: 10px 5px;\r\n  border-left: 1.6px solid #404040;\r\n  border-right: 1.6px solid #404040;\r\n  border-bottom: 1.6px solid #404040;\r\n}\r\n.dotted-border {\r\n  border-bottom: 1.6px dashed #404040;\r\n}\r\n.onward-connected-flight > div:last-child,\r\n.return-connected-flight > div:last-child {\r\n  margin-right: 35%;\r\n}\r\n.onward-direct-flight > img,\r\n.onward-multiple-flight > img,\r\n.onward-connected-flight > img,\r\n.return-direct-flight > img,\r\n.return-multiple-flight > img,\r\n.return-connected-flight > img {\r\n  height: auto;\r\n  max-width: 100%;\r\n  align-self: center;\r\n}\r\n.onward-direct-flight > button,\r\n.onward-multiple-flight > button,\r\n.return-direct-flight > button,\r\n.return-multiple-flight > button {\r\n  align-self: center;\r\n  width: auto;\r\n  margin: 0;\r\n  font-size: 16px;\r\n  padding: 0.4rem 1.5rem;\r\n  color: #fff;\r\n  background-color: #bd5252;\r\n}\r\n.onward-direct-flight > div,\r\n.onward-multiple-flight > div,\r\n.return-direct-flight > div,\r\n.return-multiple-flight > div {\r\n  align-self: center;\r\n}\r\n.layover-span {\r\n  position: relative;\r\n  left: 40%;\r\n  bottom: 7.4rem;\r\n  background: white;\r\n  padding: 0.4rem;\r\n  border: 1.6px dashed #404040;\r\n}\r\n.book {\r\n  color: #bd5252;\r\n  margin-top: 0.1em;\r\n}\r\n/* logical styles */\r\n.no-display {\r\n  display: none;\r\n}\r\nform {\r\n  margin: 0.1rem;\r\n}\r\n.active {\r\n  color: #fff;\r\n  background-color: #337ab7;\r\n  border-color: #2e6da4;\r\n}\r\n.btn {\r\n  cursor: pointer;\r\n  width: 40%;\r\n  border: 1px solid transparent;\r\n  border-radius: 4px;\r\n}\r\n.userInputs {\r\n  display: flex;\r\n  flex-direction: column;\r\n  border: 1px solid black;\r\n  margin: 0px 5px 5px 5px;\r\n}\r\n.userInputs > * {\r\n  margin: 12px 12px 0px;\r\n  font-size: 16px;\r\n  line-height: 1.5;\r\n}\r\n.userInputs > button {\r\n  padding: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n.journeyType {\r\n  display: flex;\r\n  justify-content: left;\r\n}\r\n.journeyType > button {\r\n  padding: 0.5rem;\r\n}\r\n.journeyType > button:nth-child(1) {\r\n  margin: 2rem 0 0 5px;\r\n}\r\n.journeyType > button:nth-child(2) {\r\n  margin: 2rem 5px 0 0;\r\n}\r\n.journey-date,\r\n.return-date {\r\n  width: auto;\r\n  line-height: 2;\r\n}\r\nselect {\r\n  height: 2rem;\r\n}\r\n.refine-search {\r\n  border: 1px solid;\r\n  margin: 20px 5px;\r\n  padding: 0px 5px;\r\n}\r\n.refine-search > div {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.refine-search > input {\r\n  width: 100%;\r\n}\r\n@media only screen and (max-width: 650px) {\r\n  .one-way {\r\n    grid-template-rows: auto auto auto auto;\r\n    grid-template-columns: 1fr;\r\n    -ms-grid-columns: 1fr;\r\n  }\r\n\r\n  .two-way {\r\n    grid-template-rows: auto auto auto auto auto auto;\r\n    grid-template-columns: 1fr;\r\n    -ms-grid-columns: 1fr;\r\n  }\r\n\r\n  section {\r\n    grid-row: 2;\r\n    grid-column: 1;\r\n    -ms-grid-row: 2;\r\n    -ms-grid-column: 1;\r\n    -ms-grid-row-span: 1;\r\n    border-right: 0px;\r\n    border-bottom: 1.6px solid #404040;\r\n  }\r\n\r\n  .onward-result {\r\n    grid-row: 3;\r\n    grid-column: 1;\r\n    -ms-grid-row: 3;\r\n    -ms-grid-column: 1;\r\n  }\r\n\r\n  .onward-flights {\r\n    grid-row: 4;\r\n    grid-column: 1;\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 1;\r\n    border-bottom: 1.6px solid #404040;\r\n  }\r\n\r\n  .return-result {\r\n    grid-row: 5;\r\n    grid-column: 1;\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 1;\r\n  }\r\n\r\n  .return-flights {\r\n    grid-row: 6;\r\n    grid-column: 1;\r\n    -ms-grid-row: 6;\r\n    -ms-grid-column: 1;\r\n  }\r\n}\r\n@media only screen and (max-width: 1400px) and (min-width: 1076px) {\r\n  .img-display-two-way {\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (max-width: 850px) {\r\n  .img-display {\r\n    display: none;\r\n  }\r\n}\r\n@media only screen and (max-width: 750px) and (min-width: 651px) {\r\n  .wrap-flex {\r\n    flex-wrap: wrap;\r\n  }\r\n  .wrap-flex > button {\r\n    flex-basis: 100%;\r\n  }\r\n\r\n  .onward-connected-flight > div:last-child,\r\n  .return-connected-flight > div:last-child {\r\n    margin-right: 25%;\r\n  }\r\n}\r\n@media only screen and (max-width: 550px) {\r\n  /* making a flex box to block element and aligning */\r\n  .wrap-flex {\r\n    display: block;\r\n  }\r\n  .wrap-flex div {\r\n    display: inline-block;\r\n    width: 20%;\r\n  }\r\n  .wrap-flex > button {\r\n    width: 100%;\r\n  }\r\n\r\n  .onward-connected-flight > div:last-child,\r\n  .return-connected-flight > div:last-child {\r\n    margin-right: 10%;\r\n  }\r\n}\r\n@media only screen and (max-width: 1250px) and (min-width: 1076px) {\r\n  .wrap-flex-two-way {\r\n    flex-wrap: wrap;\r\n  }\r\n  .wrap-flex-two-way > button {\r\n    flex-basis: 100%;\r\n  }\r\n  .onward-connected-flight > div:last-child,\r\n  .return-connected-flight > div:last-child {\r\n    margin-right: 25%;\r\n  }\r\n}\r\n@media only screen and (max-width: 1075px) and (min-width: 651px) {\r\n  .two-way {\r\n    grid-template-rows: auto auto auto auto auto;\r\n    grid-template-columns: 0.5fr 4fr;\r\n    -ms-grid-columns: 2fr 4fr;\r\n  }\r\n\r\n  .onward-flights {\r\n    border-bottom: 1.6px solid #404040;\r\n  }\r\n\r\n  .return-result {\r\n    grid-row: 4;\r\n    grid-column: 2;\r\n    -ms-grid-row: 4;\r\n    -ms-grid-column: 2;\r\n    border-bottom: 0;\r\n    margin: 1rem 0;\r\n  }\r\n\r\n  .return-flights {\r\n    grid-row: 5;\r\n    grid-column: 2;\r\n    -ms-grid-row: 5;\r\n    -ms-grid-column: 2;\r\n    border-left: 1.6px solid #404040;\r\n    border-top: 1.6px solid #404040;\r\n  }\r\n}\r\n@media only screen and (max-width: 417px) {\r\n  .layover-span {\r\n    left: 30%;\r\n    bottom: 8.7rem;\r\n  }\r\n  .onward-connected-flight > div:last-child,\r\n  .return-connected-flight > div:last-child {\r\n    margin-right: 0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0VBQ0UsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLDJCQUEyQjtBQUM3QjtBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG9DQUFvQztFQUNwQyw2QkFBNkI7QUFDL0I7QUFFQTtFQUNFLGtDQUFrQztFQUNsQyxnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGtDQUFrQztFQUNsQyxpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsb0JBQW9CO0FBQ3RCO0FBRUEsd0JBQXdCO0FBQ3hCO0VBQ0UsMEJBQTBCO0VBQzFCLFVBQVU7RUFDViwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBRUE7Ozs7RUFJRSxrQkFBa0I7QUFDcEI7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7Ozs7Ozs7O0VBUUUsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDaEI7QUFFQTs7Ozs7Ozs7RUFRRSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0FBQ2xCO0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsOEJBQThCO0FBQ2hDO0FBRUE7O0VBRUUsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qix1QkFBdUI7RUFDdkIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxpQ0FBaUM7RUFDakMsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFFQTs7Ozs7O0VBTUUsWUFBWTtFQUNaLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTs7OztFQUlFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjtBQUNBOzs7O0VBSUUsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjtBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRTtJQUNFLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsaURBQWlEO0lBQ2pELDBCQUEwQjtJQUMxQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0NBQWtDO0VBQ3BDOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsYUFBYTtFQUNmO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCOztFQUVBOztJQUVFLGlCQUFpQjtFQUNuQjtBQUNGO0FBRUE7RUFDRSxvREFBb0Q7RUFDcEQ7SUFDRSxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7O0lBRUUsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7O0lBRUUsaUJBQWlCO0VBQ25CO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsNENBQTRDO0lBQzVDLGdDQUFnQztJQUNoQyx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0NBQWdDO0lBQ2hDLCtCQUErQjtFQUNqQztBQUNGO0FBRUE7RUFDRTtJQUNFLFNBQVM7SUFDVCxjQUFjO0VBQ2hCO0VBQ0E7O0lBRUUsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBsYXlvdXQgc3R5bGVzICovXHJcbi5jb250YWluZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZGlzcGxheTogLW1zLWdyaWQ7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlcjogMS42cHggc29saWQgIzQwNDA0MDtcclxufVxyXG5cclxuLnR3by13YXkge1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciAyZnIgMmZyO1xyXG4gIC1tcy1ncmlkLWNvbHVtbnM6IDFmciAyZnIgMmZyO1xyXG59XHJcblxyXG4ub25lLXdheSB7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG8gYXV0bztcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDRmcjtcclxuICAtbXMtZ3JpZC1jb2x1bW5zOiAyZnIgNGZyO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIGdyaWQtcm93OiAxO1xyXG4gIGdyaWQtY29sdW1uOiAxIC8gc3BhbiAzO1xyXG4gIC1tcy1ncmlkLXJvdzogMTtcclxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XHJcbiAgLW1zLWdyaWQtY29sdW1uLXNwYW46IDM7XHJcbiAgYm9yZGVyLWJvdHRvbTogMS42cHggc29saWQgIzQwNDA0MDtcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxLjZweCBzb2xpZCAjNDA0MDQwO1xyXG4gIGdyaWQtcm93OiAyIC8gc3BhbiAyO1xyXG4gIGdyaWQtY29sdW1uOiAxO1xyXG4gIC1tcy1ncmlkLXJvdzogMjtcclxuICAtbXMtZ3JpZC1jb2x1bW46IDE7XHJcbiAgLW1zLWdyaWQtcm93LXNwYW46IDI7XHJcbn1cclxuXHJcbi8qIGVycm9yIG1lc3NhZ2UgY2xhc3MgKi9cclxuLmhhc0Vycm9yIHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi10b3A6IDJweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub253YXJkLXJlc3VsdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBib3JkZXItYm90dG9tOiAxLjZweCBzb2xpZCAjNDA0MDQwO1xyXG4gIGdyaWQtcm93OiAyO1xyXG4gIGdyaWQtY29sdW1uOiAyO1xyXG4gIC1tcy1ncmlkLXJvdzogMjtcclxuICAtbXMtZ3JpZC1jb2x1bW46IDI7XHJcbn1cclxuXHJcbi5yZXR1cm4tcmVzdWx0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGJvcmRlci1ib3R0b206IDEuNnB4IHNvbGlkICM0MDQwNDA7XHJcbiAgZ3JpZC1yb3c6IDI7XHJcbiAgZ3JpZC1jb2x1bW46IDM7XHJcbiAgLW1zLWdyaWQtcm93OiAyO1xyXG4gIC1tcy1ncmlkLWNvbHVtbjogMztcclxufVxyXG5cclxuLm9ud2FyZC1mbGlnaHRzIHtcclxuICBncmlkLXJvdzogMztcclxuICBncmlkLWNvbHVtbjogMjtcclxuICAtbXMtZ3JpZC1yb3c6IDM7XHJcbiAgLW1zLWdyaWQtY29sdW1uOiAyO1xyXG59XHJcblxyXG4ucmV0dXJuLWZsaWdodHMge1xyXG4gIGdyaWQtcm93OiAzO1xyXG4gIGdyaWQtY29sdW1uOiAzO1xyXG4gIC1tcy1ncmlkLXJvdzogMztcclxuICAtbXMtZ3JpZC1jb2x1bW46IDM7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQ7XHJcbn1cclxuXHJcbi5vbndhcmQtcmVzdWx0ID4gaW1nLFxyXG4ub253YXJkLXJlc3VsdCA+IGRpdixcclxuLnJldHVybi1yZXN1bHQgPiBpbWcsXHJcbi5yZXR1cm4tcmVzdWx0ID4gZGl2IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vbndhcmQtcmVzdWx0ID4gaW1nLFxyXG4ucmV0dXJuLXJlc3VsdCA+IGltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbjogMTBweDtcclxufVxyXG4ucmV0dXJuLXJlc3VsdCA+IGltZyB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLm9ud2FyZC1yZXN1bHQgcCxcclxuLnJldHVybi1yZXN1bHQgcCxcclxuLm9ud2FyZC1kaXJlY3QtZmxpZ2h0IHAsXHJcbi5vbndhcmQtbXVsdGlwbGUtZmxpZ2h0IHAsXHJcbi5vbndhcmQtY29ubmVjdGVkLWZsaWdodCBwLFxyXG4ucmV0dXJuLWRpcmVjdC1mbGlnaHQgcCxcclxuLnJldHVybi1tdWx0aXBsZS1mbGlnaHQgcCxcclxuLnJldHVybi1jb25uZWN0ZWQtZmxpZ2h0IHAge1xyXG4gIG1hcmdpbi10b3A6IDAuMWVtO1xyXG4gIGNvbG9yOiAjN2M3YzdjO1xyXG59XHJcblxyXG4ub253YXJkLXJlc3VsdCBoMyxcclxuLnJldHVybi1yZXN1bHQgaDMsXHJcbi5vbndhcmQtZGlyZWN0LWZsaWdodCBoMyxcclxuLm9ud2FyZC1tdWx0aXBsZS1mbGlnaHQgaDMsXHJcbi5vbndhcmQtY29ubmVjdGVkLWZsaWdodCBoMyxcclxuLnJldHVybi1kaXJlY3QtZmxpZ2h0IGgzLFxyXG4ucmV0dXJuLW11bHRpcGxlLWZsaWdodCBoMyxcclxuLnJldHVybi1jb25uZWN0ZWQtZmxpZ2h0IGgzIHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjFlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4ub253YXJkLWRpcmVjdC1mbGlnaHQsXHJcbi5vbndhcmQtbXVsdGlwbGUtZmxpZ2h0LFxyXG4ucmV0dXJuLWRpcmVjdC1mbGlnaHQsXHJcbi5yZXR1cm4tbXVsdGlwbGUtZmxpZ2h0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXI6IDEuNnB4IHNvbGlkICM0MDQwNDA7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ub253YXJkLWNvbm5lY3RlZC1mbGlnaHQsXHJcbi5yZXR1cm4tY29ubmVjdGVkLWZsaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luOiAtMTBweCAxMHB4IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm9yZGVyLWxlZnQ6IDEuNnB4IHNvbGlkICM0MDQwNDA7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxLjZweCBzb2xpZCAjNDA0MDQwO1xyXG4gIGJvcmRlci1ib3R0b206IDEuNnB4IHNvbGlkICM0MDQwNDA7XHJcbn1cclxuXHJcbi5kb3R0ZWQtYm9yZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxLjZweCBkYXNoZWQgIzQwNDA0MDtcclxufVxyXG4ub253YXJkLWNvbm5lY3RlZC1mbGlnaHQgPiBkaXY6bGFzdC1jaGlsZCxcclxuLnJldHVybi1jb25uZWN0ZWQtZmxpZ2h0ID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMzUlO1xyXG59XHJcblxyXG4ub253YXJkLWRpcmVjdC1mbGlnaHQgPiBpbWcsXHJcbi5vbndhcmQtbXVsdGlwbGUtZmxpZ2h0ID4gaW1nLFxyXG4ub253YXJkLWNvbm5lY3RlZC1mbGlnaHQgPiBpbWcsXHJcbi5yZXR1cm4tZGlyZWN0LWZsaWdodCA+IGltZyxcclxuLnJldHVybi1tdWx0aXBsZS1mbGlnaHQgPiBpbWcsXHJcbi5yZXR1cm4tY29ubmVjdGVkLWZsaWdodCA+IGltZyB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5vbndhcmQtZGlyZWN0LWZsaWdodCA+IGJ1dHRvbixcclxuLm9ud2FyZC1tdWx0aXBsZS1mbGlnaHQgPiBidXR0b24sXHJcbi5yZXR1cm4tZGlyZWN0LWZsaWdodCA+IGJ1dHRvbixcclxuLnJldHVybi1tdWx0aXBsZS1mbGlnaHQgPiBidXR0b24ge1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICB3aWR0aDogYXV0bztcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAxLjVyZW07XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkNTI1MjtcclxufVxyXG4ub253YXJkLWRpcmVjdC1mbGlnaHQgPiBkaXYsXHJcbi5vbndhcmQtbXVsdGlwbGUtZmxpZ2h0ID4gZGl2LFxyXG4ucmV0dXJuLWRpcmVjdC1mbGlnaHQgPiBkaXYsXHJcbi5yZXR1cm4tbXVsdGlwbGUtZmxpZ2h0ID4gZGl2IHtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmxheW92ZXItc3BhbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDQwJTtcclxuICBib3R0b206IDcuNHJlbTtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBwYWRkaW5nOiAwLjRyZW07XHJcbiAgYm9yZGVyOiAxLjZweCBkYXNoZWQgIzQwNDA0MDtcclxufVxyXG5cclxuLmJvb2sge1xyXG4gIGNvbG9yOiAjYmQ1MjUyO1xyXG4gIG1hcmdpbi10b3A6IDAuMWVtO1xyXG59XHJcblxyXG4vKiBsb2dpY2FsIHN0eWxlcyAqL1xyXG4ubm8tZGlzcGxheSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5mb3JtIHtcclxuICBtYXJnaW46IDAuMXJlbTtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzN2FiNztcclxuICBib3JkZXItY29sb3I6ICMyZTZkYTQ7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnVzZXJJbnB1dHMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBtYXJnaW46IDBweCA1cHggNXB4IDVweDtcclxufVxyXG4udXNlcklucHV0cyA+ICoge1xyXG4gIG1hcmdpbjogMTJweCAxMnB4IDBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLnVzZXJJbnB1dHMgPiBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uam91cm5leVR5cGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG59XHJcblxyXG4uam91cm5leVR5cGUgPiBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxufVxyXG4uam91cm5leVR5cGUgPiBidXR0b246bnRoLWNoaWxkKDEpIHtcclxuICBtYXJnaW46IDJyZW0gMCAwIDVweDtcclxufVxyXG4uam91cm5leVR5cGUgPiBidXR0b246bnRoLWNoaWxkKDIpIHtcclxuICBtYXJnaW46IDJyZW0gNXB4IDAgMDtcclxufVxyXG5cclxuLmpvdXJuZXktZGF0ZSxcclxuLnJldHVybi1kYXRlIHtcclxuICB3aWR0aDogYXV0bztcclxuICBsaW5lLWhlaWdodDogMjtcclxufVxyXG5zZWxlY3Qge1xyXG4gIGhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLnJlZmluZS1zZWFyY2gge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIG1hcmdpbjogMjBweCA1cHg7XHJcbiAgcGFkZGluZzogMHB4IDVweDtcclxufVxyXG4ucmVmaW5lLXNlYXJjaCA+IGRpdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLnJlZmluZS1zZWFyY2ggPiBpbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAub25lLXdheSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIC1tcy1ncmlkLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC50d28td2F5IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIC1tcy1ncmlkLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIHNlY3Rpb24ge1xyXG4gICAgZ3JpZC1yb3c6IDI7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIC1tcy1ncmlkLXJvdzogMjtcclxuICAgIC1tcy1ncmlkLWNvbHVtbjogMTtcclxuICAgIC1tcy1ncmlkLXJvdy1zcGFuOiAxO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxLjZweCBzb2xpZCAjNDA0MDQwO1xyXG4gIH1cclxuXHJcbiAgLm9ud2FyZC1yZXN1bHQge1xyXG4gICAgZ3JpZC1yb3c6IDM7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIC1tcy1ncmlkLXJvdzogMztcclxuICAgIC1tcy1ncmlkLWNvbHVtbjogMTtcclxuICB9XHJcblxyXG4gIC5vbndhcmQtZmxpZ2h0cyB7XHJcbiAgICBncmlkLXJvdzogNDtcclxuICAgIGdyaWQtY29sdW1uOiAxO1xyXG4gICAgLW1zLWdyaWQtcm93OiA0O1xyXG4gICAgLW1zLWdyaWQtY29sdW1uOiAxO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMS42cHggc29saWQgIzQwNDA0MDtcclxuICB9XHJcblxyXG4gIC5yZXR1cm4tcmVzdWx0IHtcclxuICAgIGdyaWQtcm93OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDE7XHJcbiAgICAtbXMtZ3JpZC1yb3c6IDU7XHJcbiAgICAtbXMtZ3JpZC1jb2x1bW46IDE7XHJcbiAgfVxyXG5cclxuICAucmV0dXJuLWZsaWdodHMge1xyXG4gICAgZ3JpZC1yb3c6IDY7XHJcbiAgICBncmlkLWNvbHVtbjogMTtcclxuICAgIC1tcy1ncmlkLXJvdzogNjtcclxuICAgIC1tcy1ncmlkLWNvbHVtbjogMTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQwMHB4KSBhbmQgKG1pbi13aWR0aDogMTA3NnB4KSB7XHJcbiAgLmltZy1kaXNwbGF5LXR3by13YXkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAuaW1nLWRpc3BsYXkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIGFuZCAobWluLXdpZHRoOiA2NTFweCkge1xyXG4gIC53cmFwLWZsZXgge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuICAud3JhcC1mbGV4ID4gYnV0dG9uIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAub253YXJkLWNvbm5lY3RlZC1mbGlnaHQgPiBkaXY6bGFzdC1jaGlsZCxcclxuICAucmV0dXJuLWNvbm5lY3RlZC1mbGlnaHQgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAvKiBtYWtpbmcgYSBmbGV4IGJveCB0byBibG9jayBlbGVtZW50IGFuZCBhbGlnbmluZyAqL1xyXG4gIC53cmFwLWZsZXgge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC53cmFwLWZsZXggZGl2IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG4gIC53cmFwLWZsZXggPiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAub253YXJkLWNvbm5lY3RlZC1mbGlnaHQgPiBkaXY6bGFzdC1jaGlsZCxcclxuICAucmV0dXJuLWNvbm5lY3RlZC1mbGlnaHQgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI1MHB4KSBhbmQgKG1pbi13aWR0aDogMTA3NnB4KSB7XHJcbiAgLndyYXAtZmxleC10d28td2F5IHtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLndyYXAtZmxleC10d28td2F5ID4gYnV0dG9uIHtcclxuICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgfVxyXG4gIC5vbndhcmQtY29ubmVjdGVkLWZsaWdodCA+IGRpdjpsYXN0LWNoaWxkLFxyXG4gIC5yZXR1cm4tY29ubmVjdGVkLWZsaWdodCA+IGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1yaWdodDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDc1cHgpIGFuZCAobWluLXdpZHRoOiA2NTFweCkge1xyXG4gIC50d28td2F5IHtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjVmciA0ZnI7XHJcbiAgICAtbXMtZ3JpZC1jb2x1bW5zOiAyZnIgNGZyO1xyXG4gIH1cclxuXHJcbiAgLm9ud2FyZC1mbGlnaHRzIHtcclxuICAgIGJvcmRlci1ib3R0b206IDEuNnB4IHNvbGlkICM0MDQwNDA7XHJcbiAgfVxyXG5cclxuICAucmV0dXJuLXJlc3VsdCB7XHJcbiAgICBncmlkLXJvdzogNDtcclxuICAgIGdyaWQtY29sdW1uOiAyO1xyXG4gICAgLW1zLWdyaWQtcm93OiA0O1xyXG4gICAgLW1zLWdyaWQtY29sdW1uOiAyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIG1hcmdpbjogMXJlbSAwO1xyXG4gIH1cclxuXHJcbiAgLnJldHVybi1mbGlnaHRzIHtcclxuICAgIGdyaWQtcm93OiA1O1xyXG4gICAgZ3JpZC1jb2x1bW46IDI7XHJcbiAgICAtbXMtZ3JpZC1yb3c6IDU7XHJcbiAgICAtbXMtZ3JpZC1jb2x1bW46IDI7XHJcbiAgICBib3JkZXItbGVmdDogMS42cHggc29saWQgIzQwNDA0MDtcclxuICAgIGJvcmRlci10b3A6IDEuNnB4IHNvbGlkICM0MDQwNDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxN3B4KSB7XHJcbiAgLmxheW92ZXItc3BhbiB7XHJcbiAgICBsZWZ0OiAzMCU7XHJcbiAgICBib3R0b206IDguN3JlbTtcclxuICB9XHJcbiAgLm9ud2FyZC1jb25uZWN0ZWQtZmxpZ2h0ID4gZGl2Omxhc3QtY2hpbGQsXHJcbiAgLnJldHVybi1jb25uZWN0ZWQtZmxpZ2h0ID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _flight_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flight.service */ "./src/app/flight.service.ts");




var AppComponent = /** @class */ (function () {
    // filterFlight: () => void;
    function AppComponent(fb, _flightService) {
        // this.flights = flight;
        var _this = this;
        this.fb = fb;
        this._flightService = _flightService;
        this.passengers = new Array(5).fill("x").map(function (x, i) { return i + 1; });
        this.isRoundTrip = false;
        this.showDetails = [];
        this.showReturnDetails = [];
        this.onwardResult = false;
        this.returnResult = false;
        //searching direct flights
        this.directFlights = function (origin, destination, date) {
            var directFlights = [];
            _this.flights.forEach(function (flight) {
                if (flight.origin.includes(origin) &&
                    flight.destination.includes(destination) &&
                    flight.date === date) {
                    var totalDuration = _this.getMinuteDifference(flight.date, flight.arrivalTime, flight.date, flight.departureTime);
                    totalDuration = _this.formatInHHmm(totalDuration);
                    directFlights.push({
                        flight: flight,
                        totalDuration: totalDuration,
                    });
                }
            });
            return directFlights;
        };
        this._onwardDirectFlights = function (origin, destination, date) {
            return _this.directFlights(origin, destination, date);
        };
        this._returnDirectFlights = function (origin, destination, date) {
            return _this.directFlights(destination, origin, date);
        };
        //searching multiple flights
        this.multipleFlights = function (origin, destination, date) {
            var minLayover = 30;
            var multipleFlights = [];
            _this.flights.forEach(function (flight1) {
                if (flight1.origin.includes(origin) && flight1.date == date) {
                    _this.flights.forEach(function (flight2) {
                        if (flight2.origin.includes(flight1.destination) &&
                            flight2.destination.includes(destination)) {
                            var flight1Duration = _this.getMinuteDifference(flight1.date, flight1.arrivalTime, flight1.date, flight1.departureTime);
                            var flight2Duration = _this.getMinuteDifference(flight2.date, flight2.arrivalTime, flight2.date, flight2.departureTime);
                            var flightDuration = flight1Duration + flight2Duration;
                            flight1Duration = _this.formatInHHmm(flight1Duration);
                            flight1.duration = flight1Duration;
                            flight2Duration = _this.formatInHHmm(flight2Duration);
                            flight2.duration = flight2Duration;
                            var layover = _this.getLayover(flight1, flight2);
                            var totalDuration = flightDuration + layover;
                            totalDuration = _this.formatInHHmm(totalDuration);
                            if (layover >= minLayover) {
                                layover = _this.formatInHHmm(layover);
                                multipleFlights.push({
                                    flights: [flight1, flight2],
                                    layover: layover,
                                    totalDuration: totalDuration,
                                });
                            }
                        }
                    });
                }
            });
            return multipleFlights;
        };
        this._onwardMultipleFlights = function (origin, destination, date) {
            return _this.multipleFlights(origin, destination, date);
        };
        this._returnMultipleFlights = function (origin, destination, date) {
            return _this.multipleFlights(destination, origin, date);
        };
        //utility function: converting (date+time) to misliseconds
        this.convertDateToMs = function (date, time) {
            var dateArr = date.split("/");
            var timeArr = time.split(":");
            var _a = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](dateArr, timeArr), 5), year = _a[0], month = _a[1], day = _a[2], hour = _a[3], minute = _a[4];
            var dateTime = [
                year,
                month,
                day,
                hour,
                minute,
            ];
            var timeinMs = new (Date.bind.apply(Date, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"]([void 0], dateTime)))().getTime();
            return timeinMs;
        };
        //utility function : returning minutes difference between two dates
        this.getMinuteDifference = function (date1, time1, date2, time2) {
            var timeinMs1 = _this.convertDateToMs(date1, time1);
            var timeinMs2 = _this.convertDateToMs(date2, time2);
            var minutes = (timeinMs1 - timeinMs2) / 1000 / 60;
            return minutes;
        };
        // utility function to get layover time between connected flights
        this.getLayover = function (flight1, flight2) {
            var layover = _this.getMinuteDifference(flight2.date, flight2.departureTime, flight1.date, flight1.arrivalTime);
            return layover;
        };
        this.searchForm = this.fb.group({
            origin: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            destination: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            departureDate: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            returnDate: [""],
            noOfTravellers: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            maxPrice: [50000],
        });
        this.selectJourneyType = function (journeyType) {
            //set isRoundTrip flag[also a template variable] to specify type of journey
            if (journeyType === "oneWay") {
                _this.isRoundTrip = false;
            }
            else if (journeyType === "roundTrip") {
                _this.isRoundTrip = true;
            }
            //updating validation based on type of journey
            setTimeout(function () {
                if (_this.isRoundTrip) {
                    _this.searchForm.get("returnDate").setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
                    _this.searchForm.get("returnDate").updateValueAndValidity();
                }
                else {
                    _this.searchForm.get("returnDate").setValidators(null);
                    _this.searchForm.get("returnDate").updateValueAndValidity();
                }
            }, 0);
            return _this.isRoundTrip;
        };
        //show hide connected flights data
        this.toggleOnwardDetails = function (index) {
            if (typeof _this.showDetails[index] === "undefined") {
                _this.showDetails[index] = false;
            }
            _this.showDetails[index] = !_this.showDetails[index];
        };
        this.toggleReturnDetails = function (index) {
            if (typeof _this.showReturnDetails[index] === "undefined") {
                _this.showReturnDetails[index] = false;
            }
            _this.showReturnDetails[index] = !_this.showReturnDetails[index];
        };
        // filter flight based on price
        this.filterDirectFlight = function (directFlight) {
            if (directFlight.flight.price *
                _this.searchForm.get("noOfTravellers").value <=
                _this.searchForm.get("maxPrice").value) {
                return true;
            }
            return false;
        };
        this.filterMultipleFlight = function (multipleFlight) {
            if ((multipleFlight.flights[0].price + multipleFlight.flights[1].price) *
                _this.searchForm.get("noOfTravellers").value <=
                _this.searchForm.get("maxPrice").value) {
                return true;
            }
            return false;
        };
        //search flight based on form data
        this.searchFlight = function () {
            if (_this.searchForm.valid) {
                var origin_1 = _this.searchForm.get("origin").value;
                var destination = _this.searchForm.get("destination").value;
                //set origin and destination city with code to display on flight summary section
                _this.setOriginAndDestination(origin_1, destination);
                _this.departureDateH = _this.searchForm.get("departureDate").value;
                _this.departureDate = '2020/11/01';
                // this.departureDate = this.departureDate.split("-").join("/");
                _this.returnDateH = _this.searchForm.get("returnDate").value;
                _this.returnDate = '2020/11/01';
                //search direct and connected flight for onward journey
                _this.onwardDirectFlights = _this._onwardDirectFlights(origin_1, destination, _this.departureDate);
                // console.log('onwardDirectFlight', this.onwardDirectFlights);
                _this.onwardMultipleFlights = _this._onwardMultipleFlights(origin_1, destination, _this.departureDate);
                // console.log('onwardMultipleFlights', this.onwardMultipleFlights);
                _this.totalOnwardFlights =
                    _this.onwardDirectFlights.length + _this.onwardMultipleFlights.length;
                //template variable to display onward result (flight and summary)
                _this.onwardResult = true;
                if (_this.isRoundTrip) {
                    //search direct and connected flight for return journey
                    _this.returnDirectFlights = _this._returnDirectFlights(origin_1, destination, _this.returnDate);
                    // console.log('returnDirectFlights', this.returnDirectFlights);
                    _this.returnMultipleFlights = _this._returnMultipleFlights(origin_1, destination, _this.returnDate);
                    // console.log('returnMultipleFlights', this.returnMultipleFlights);
                    _this.totalReturnFlights =
                        _this.returnDirectFlights.length + _this.returnMultipleFlights.length;
                    //template variable to display onward flight summary: [origin, destination and number of flights]
                    _this.returnResult = true;
                }
            }
            else if (_this.searchForm.invalid) {
                _this.showErrorsIfAny = true;
            }
        };
        //optimize ngFor loop with trackBy
        this.trackByFlightNo = function (index, directFlight) {
            return directFlight.flight.flightNo;
        };
        this.trackByConnectedFlightNo = function (index, connectedFlight) {
            return connectedFlight.flightNo;
        };
        this.trackByMultipleFlightNo = function (index, multipleFlight) {
            return (multipleFlight.flights[0].flightNo || multipleFlight.flights[1].flightNo);
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._flightService.getData().subscribe(function (data) {
            _this.flights = data;
            //add origin and destination city without code
            _this.addCity();
            //create unique city set
            _this.createCitySet();
        });
    };
    AppComponent.prototype.createCitySet = function () {
        var citySet = new Set();
        this.flights.forEach(function (flight) {
            citySet.add(flight.origin);
            citySet.add(flight.destination);
        });
        this.citySet = citySet;
    };
    AppComponent.prototype.addCity = function () {
        this.flights.forEach(function (flight) {
            var originCity = flight.origin;
            originCity = originCity.substring(0, originCity.indexOf(" "));
            flight.originCity = originCity;
            var destinationCity = flight.destination;
            destinationCity = destinationCity.substring(0, destinationCity.indexOf(" "));
            flight.destinationCity = destinationCity;
        });
    };
    AppComponent.prototype.setOriginAndDestination = function (origin, destination) {
        var _this = this;
        this.citySet.forEach(function (city) {
            if (city.includes(origin)) {
                _this.origin = city;
            }
            if (city.includes(destination)) {
                _this.destination = city;
            }
        });
    };
    //utility function to format minute in HHmm
    AppComponent.prototype.formatInHHmm = function (duration) {
        var hours = Math.floor(duration / 60);
        var minutes = duration % 60;
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return hours + "h " + minutes + "m";
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _flight_service__WEBPACK_IMPORTED_MODULE_3__["FlightService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/flight.service.ts":
/*!***********************************!*\
  !*** ./src/app/flight.service.ts ***!
  \***********************************/
/*! exports provided: FlightService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlightService", function() { return FlightService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var FlightService = /** @class */ (function () {
    function FlightService(http) {
        this.http = http;
    }
    FlightService.prototype.getData = function () {
        // return this.http.get<IFlight[]>(
        //   'https://tw-frontenders.firebaseio.com/advFlightSearch.json'
        // );
        var mockData = [
            {
                arrivalTime: '7:00',
                date: '2020/11/01',
                departureTime: '6:00',
                destination: 'Mumbai (BOM)',
                flightNo: 'AI-101',
                name: 'Air India',
                origin: 'Delhi (DEL)',
                price: 3525,
            },
            {
                arrivalTime: '7:00',
                date: '2020/11/01',
                departureTime: '6:00',
                destination: 'Mumbai (BOM)',
                flightNo: 'AI-101',
                name: 'Air India',
                origin: 'Delhi (DEL)',
                price: 3525,
            },
            {
                arrivalTime: '9:50',
                date: '2020/11/01',
                departureTime: '7:20',
                destination: 'Delhi (DEL)',
                flightNo: 'AI-102',
                name: 'Air India',
                origin: 'Mumbai (BOM)',
                price: 5635,
            },
            {
                arrivalTime: '03:50',
                date: '2020/11/01',
                departureTime: '01:20',
                destination: 'Delhi (DEL)',
                flightNo: 'AI-102',
                name: 'Air India',
                origin: 'Mumbai (BOM)',
                price: 5635,
            },
            {
                arrivalTime: '8:20',
                date: '2020/11/01',
                departureTime: '7:20',
                destination: 'Pune (PNQ)',
                flightNo: 'AI-102',
                name: 'Air India',
                origin: 'Mumbai (BOM)',
                price: 5635,
            },
            {
                arrivalTime: '3:50',
                date: '2020/11/01',
                departureTime: '1:20',
                destination: 'Bengaluru (BLR)',
                flightNo: 'AI-102',
                name: 'Air India',
                origin: 'Mumbai (BOM)',
                price: 5635,
            },
            {
                arrivalTime: '7:50',
                date: '2020/11/01',
                departureTime: '5:20',
                destination: 'Bengaluru (BLR)',
                flightNo: 'AI-102',
                name: 'Air India',
                origin: 'Mumbai (BOM)',
                price: 5635,
            },
            {
                arrivalTime: '7:10',
                date: '2020/11/01',
                departureTime: '5:10',
                destination: 'Delhi (DEL)',
                flightNo: 'AI-103',
                name: 'Air India',
                origin: 'Pune (PNQ)',
                price: 2537,
            },
            {
                arrivalTime: '10:20',
                date: '2020/11/01',
                departureTime: '8:10',
                destination: 'Delhi (DEL)',
                flightNo: 'AI-104',
                name: 'Air India',
                origin: 'Pune (PNQ)',
                price: 4681,
            },
            {
                arrivalTime: '9:15',
                date: '2020/11/01',
                departureTime: '8:15',
                destination: 'Bengaluru (BLR)',
                flightNo: 'SJ-105',
                name: 'SpiceJet',
                origin: 'Pune (PNQ)',
                price: 3549,
            },
            {
                arrivalTime: '3:30',
                date: '2020/11/01',
                departureTime: '01:00',
                destination: 'Delhi (DEL)',
                flightNo: 'SJ-106',
                name: 'SpiceJet',
                origin: 'Bengaluru (BLR)',
                price: 5645,
            },
            {
                arrivalTime: '4:30',
                date: '2020/11/01',
                departureTime: '2:00',
                destination: 'Delhi (DEL)',
                flightNo: 'AI-101',
                name: 'Air India',
                origin: 'Pune (PNQ)',
                price: 3525,
            },
            {
                arrivalTime: '04:50',
                date: '2020/11/01',
                departureTime: '02:20',
                destination: 'Bengaluru (BLR)',
                flightNo: 'AI-102',
                name: 'Air India',
                origin: 'Mumbai (BOM)',
                price: 5635,
            },
            {
                arrivalTime: '7:40',
                date: '2020/11/01',
                departureTime: '6:10',
                destination: 'Bengaluru (BLR)',
                flightNo: 'AI-103',
                name: 'Air India',
                origin: 'Pune (PNQ)',
                price: 2537,
            },
            {
                arrivalTime: '10:20',
                date: '2020/11/01',
                departureTime: '8:10',
                destination: 'Delhi (DEL)',
                flightNo: 'AI-104',
                name: 'Air India',
                origin: 'Pune (PNQ)',
                price: 6681,
            },
            {
                arrivalTime: '9:15',
                date: '2020/11/01',
                departureTime: '8:15',
                destination: 'Bengaluru (BLR)',
                flightNo: 'SJ-105',
                name: 'SpiceJet',
                origin: 'Pune (PNQ)',
                price: 7549,
            },
            {
                arrivalTime: '13:00',
                date: '2020/11/01',
                departureTime: '11:00',
                destination: 'Delhi (DEL)',
                flightNo: 'SJ-106',
                name: 'SpiceJet',
                origin: 'Bengaluru (BLR)',
                price: 8645,
            },
            {
                arrivalTime: '13:00',
                date: '2020/11/01',
                departureTime: '11:00',
                destination: 'Bengaluru (BLR)',
                flightNo: 'SJ-106',
                name: 'SpiceJet',
                origin: 'Bengaluru (BLR)',
                price: 8645,
            },
            {
                arrivalTime: '7:00',
                date: '2020/11/01',
                departureTime: '6:00',
                destination: 'Mumbai (BOM)',
                flightNo: 'AI-201',
                name: 'Air India',
                origin: 'Pune (PNQ)',
                price: 3525,
            },
            {
                arrivalTime: '7:00',
                date: '2020/11/01',
                departureTime: '05:00',
                destination: 'Mumbai (BOM)',
                flightNo: 'GE-401',
                name: 'Indigo',
                origin: 'Bengaluru (BLR)',
                price: 4525,
            },
            {
                arrivalTime: '4:20',
                date: '2020/11/01',
                departureTime: '3:10',
                origin: 'Mumbai (BOM)',
                flightNo: 'GE-102',
                name: 'Indigo',
                destination: 'Pune (PNQ)',
                price: 3825,
            },
            {
                arrivalTime: '8:10',
                date: '2020/11/01',
                departureTime: '7:40',
                origin: 'Mumbai (BOM)',
                flightNo: 'SJ-375',
                name: 'Spicejet',
                destination: 'Bengaluru (BLR)',
                price: 4913,
            },
            {
                arrivalTime: '04:00',
                date: '2020/11/01',
                departureTime: '02:00',
                destination: 'Delhi (DEL)',
                flightNo: 'AI-203',
                name: 'Air India',
                origin: 'Pune (PNQ)',
                price: 6500,
            },
            {
                arrivalTime: '08:00',
                date: '2020/11/01',
                departureTime: '06:00',
                destination: 'Delhi (DEL)',
                flightNo: 'GE-103',
                name: 'Indigo',
                origin: 'Mumbai (BOM)',
                price: 5960,
            },
            {
                arrivalTime: '04:00',
                date: '2020/11/01',
                departureTime: '02:00',
                origin: 'Delhi (DEL)',
                flightNo: 'SG-475',
                name: 'Spicejet',
                destination: 'Pune (PNQ)',
                price: 6200,
            },
            {
                arrivalTime: '08:00',
                date: '2020/11/01',
                departureTime: '06:00',
                origin: 'Delhi (DEL)',
                flightNo: 'GE-301',
                name: 'Indigo',
                destination: 'Mumbai (BOM)',
                price: 5900,
            },
            {
                arrivalTime: '11:00',
                date: '2020/11/01',
                departureTime: '09:00',
                destination: 'Delhi (DEL)',
                flightNo: 'AI-103',
                name: 'Air India',
                origin: 'Mumbai (BOM)',
                price: 5230,
            },
            {
                arrivalTime: '10:50',
                date: '2020/11/01',
                departureTime: '08:30',
                destination: 'Delhi (DEL)',
                flightNo: 'GE-304',
                name: 'Indigo',
                origin: 'Bengaluru (BLR)',
                price: 4960,
            },
            {
                arrivalTime: '11:00',
                date: '2020/11/01',
                departureTime: '09:00',
                origin: 'Delhi (DEL)',
                flightNo: 'AI-103',
                name: 'Air India',
                destination: 'Mumbai (BOM)',
                price: 5100,
            },
            {
                arrivalTime: '10:50',
                date: '2020/11/01',
                departureTime: '08:30',
                origin: 'Bengaluru (BLR)',
                flightNo: 'GE-104',
                name: 'Indigo',
                destination: 'Mumbai (BOM)',
                price: 4940,
            },
            {
                arrivalTime: '10:30',
                date: '2020/11/01',
                departureTime: '09:00',
                destination: 'Pune (PNQ)',
                flightNo: 'AI-402',
                name: 'Air India',
                origin: 'Bengaluru (BLR)',
                price: 5630,
            },
            {
                arrivalTime: '8:40',
                date: '2020/11/01',
                departureTime: '07:00',
                destination: 'Mumbai (BOM)',
                flightNo: 'GE-401',
                name: 'Indigo',
                origin: 'Bengaluru (BLR)',
                price: 5930,
            },
            {
                arrivalTime: '10:30',
                date: '2020/11/01',
                departureTime: '09:00',
                origin: 'Mumbai (BOM)',
                flightNo: 'AI-204',
                name: 'Air India',
                destination: 'Bengaluru (BLR)',
                price: 5130,
            },
            {
                arrivalTime: '8:40',
                date: '2020/11/01',
                departureTime: '07:00',
                origin: 'Delhi (DEL)',
                flightNo: 'GE-304',
                name: 'Indigo',
                destination: 'Bengaluru (BLR)',
                price: 7820,
            },
            {
                arrivalTime: '8:40',
                date: '2020/11/01',
                departureTime: '07:00',
                destination: 'Delhi (DEL)',
                flightNo: 'GE-403',
                name: 'Indigo',
                origin: 'Bengaluru (BLR)',
                price: 5120,
            }
        ];
        var simpleObservable = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            observer.next(mockData);
            observer.complete();
        });
        return simpleObservable;
    };
    FlightService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    FlightService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root',
        })
    ], FlightService);
    return FlightService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\I554518\Documents\Personal\flight-search-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map