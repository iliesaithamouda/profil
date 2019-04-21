(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_deprecated_onscroll.directive.ts":
/*!***************************************************!*\
  !*** ./src/app/_deprecated_onscroll.directive.ts ***!
  \***************************************************/
/*! exports provided: OnscrollDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnscrollDirective", function() { return OnscrollDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OnscrollDirective = /** @class */ (function () {
    function OnscrollDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.padding = 20;
    }
    OnscrollDirective.prototype.onscroll = function (event) {
        this.changeMenuHeight();
        this.changeMenuClass();
    };
    OnscrollDirective.prototype.changeMenuHeight = function () {
        if (window.scrollY > 200 && this.padding > 0) {
            this.padding -= 1;
            this.renderer.setStyle(this.el.nativeElement, 'padding-top', this.padding + 'px');
        }
        else if (window.scrollY < 200 && this.padding < 20) {
            this.padding += 2;
            this.renderer.setStyle(this.el.nativeElement, 'padding-top', this.padding + 'px');
        }
    };
    OnscrollDirective.prototype.changeMenuClass = function () {
        if (window.scrollY > 100) {
            this.renderer.addClass(this.el.nativeElement, 'stickyMenu');
        }
        else {
            this.renderer.removeClass(this.el.nativeElement, 'stickyMenu');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OnscrollDirective.prototype, "onscroll", null);
    OnscrollDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appOnscroll]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], OnscrollDirective);
    return OnscrollDirective;
}());



/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"box-list\">\r\n  <div class=\"box\">\r\n    <h3 class=\"section-subtitle\">Hi There! I'm Ilyes Ait Hamouda</h3>\r\n    <p class=\"description\">I'm a professional developer from Montréal, Canada. I create beautiful professional websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs. </p>\r\n    <div class=\"flex-box-container\">\r\n      <div class=\"flex-box\"><a class=\"effect\" href=\"mailto:iliesaithamouda@gmail.com\"><i class=\"fas fa-envelope\"></i> iliesaithamouda@gmail.com</a></div>\r\n      <div class=\"flex-box\"><a class=\"effect\" href=\"tel:15144754146\"><i class=\"fas fa-mobile-alt\"></i> +1-514-475-4146</a></div>\r\n    </div>\r\n    <div class=\"flex-box-container grid-container-min-1-fr\">  \r\n      <a href=\"https://www.linkedin.com/in/iliesaithamouda\" target=\"_blank\">\r\n        <div class=\"flex-box media-icons effect\">\r\n          <i class=\"fab fa-linkedin-in\"></i>\r\n        </div>\r\n      </a>\r\n      <a href=\"https://medium.com/@iliesaithamouda\" target=\"_blank\">\r\n        <div class=\"flex-box media-icons effect\">\r\n          <i class=\"fab fa-medium\"></i>\r\n        </div>\r\n      </a>\r\n    \r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"box\">\r\n    <ng-template ngFor let-expertise [ngForOf]=\"expertises\">\r\n      <app-progressive-bar [title]=\"expertise.domain\" [progress]=\"expertise.percentage\"></app-progressive-bar>\r\n    </ng-template>\r\n  </div>\r\n  \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-list {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));\n  text-align: left;\n  padding: 20px; }\n  .box-list .box {\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column; }\n  .box-list .box .section-subtitle {\n      color: #333;\n      font-size: 26px; }\n  .box-list .box .description {\n      color: #484848;\n      font-size: 16px;\n      line-height: 26px; }\n  .box-list .box .flex-box-container {\n      display: grid;\n      grid-gap: 10px;\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      grid-row-gap: 20px; }\n  .box-list .box .flex-box-container .flex-box {\n        display: flex;\n        flex-direction: column;\n        justify-self: left; }\n  .box-list .box .flex-box-container .media-icons {\n        font-size: 20px;\n        border: 1px solid black;\n        width: 19px;\n        text-align: center;\n        padding: 10px;\n        border-radius: 24px; }\n  .box-list .box .flex-box-container a:hover .media-icons {\n        background-color: #484848;\n        color: #FFF !important; }\n  .box-list .box .grid-container-min-1-fr {\n      grid-template-columns: repeat(auto-fit, minmax(30px, 40px));\n      margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXHdvcmtcXHByb2ZpbC9zcmNcXGFwcFxcYWJvdXRcXGFib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCwyREFBMkQ7RUFDM0QsZ0JBQWdCO0VBQ2hCLGFBQWEsRUFBQTtFQUxqQjtJQU9RLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFUOUI7TUFZWSxXQUFXO01BQ1gsZUFBZSxFQUFBO0VBYjNCO01BaUJZLGNBQWM7TUFDZCxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUFuQjdCO01BdUJZLGFBQWE7TUFDYixjQUFjO01BQ2QsMkRBQTBEO01BQzFELGtCQUFrQixFQUFBO0VBMUI5QjtRQTZCZ0IsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixrQkFBa0IsRUFBQTtFQS9CbEM7UUFtQ2dCLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7RUF4Q25DO1FBNkNvQix5QkFBeUI7UUFDekIsc0JBQXNCLEVBQUE7RUE5QzFDO01Bb0RZLDJEQUEwRDtNQUMxRCxnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgLy8gb3ZlcnJpZGUgY29sb3Igb24gaG92ZXIgb3Igbm9ybWFsIG92ZXIgYW5jaG9yXHJcbiAgICBcclxufVxyXG5cclxuLmJveC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLWdhcDogNDBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzI1cHgsIDFmcikpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAuYm94IHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgXHJcbiAgICAgICAgLnNlY3Rpb24tc3VidGl0bGUge1xyXG4gICAgICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5mbGV4LWJveC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogMTBweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDIwMHB4LCAxZnIpKTtcclxuICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xyXG5cclxuICAgICAgICAgICAgLmZsZXgtYm94IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubWVkaWEtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTlweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhOmhvdmVyIHsgXHJcbiAgICAgICAgICAgICAgICAubWVkaWEtaWNvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQtY29udGFpbmVyLW1pbi0xLWZyIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDMwcHgsIDQwcHgpKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.expertises = new Array();
        this.expertises.push({ domain: 'Angular', percentage: 75 });
        this.expertises.push({ domain: 'Adobe experience manager', percentage: 60 });
        this.expertises.push({ domain: 'Java', percentage: 50 });
        this.expertises.push({ domain: 'React', percentage: 10 });
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"app\">\r\n  <app-menu></app-menu>\r\n  <app-section id=\"Home\" [sectionType]=\"'Home'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\r\n  <app-section id=\"About\" [sectionType]=\"'About'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\r\n  <app-section id=\"Services\" [sectionType]=\"'Services'\" [backgroundColorClass]=\"'bg-color-medium'\"></app-section>\r\n  <app-section id=\"Work\" [sectionType]=\"'Work'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\r\n  <app-section id=\"Posts\" [sectionType]=\"'Posts'\" [backgroundColorClass]=\"'bg-color-medium'\"></app-section>\r\n  <app-section id=\"Contact\" [sectionType]=\"'Contact'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\r\n  <app-footer></app-footer>\r\n  <app-scroll-top-button></app-scroll-top-button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Ilyes Ait Hamouda';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./section/section.component */ "./src/app/section/section.component.ts");
/* harmony import */ var _scroll_background_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scroll-background.directive */ "./src/app/scroll-background.directive.ts");
/* harmony import */ var _smooth_scrolling_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./smooth-scrolling.directive */ "./src/app/smooth-scrolling.directive.ts");
/* harmony import */ var _deprecated_onscroll_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_deprecated_onscroll.directive */ "./src/app/_deprecated_onscroll.directive.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./scroll-button/scroll-button.component */ "./src/app/scroll-button/scroll-button.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _progressive_bar_progressive_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./progressive-bar/progressive-bar.component */ "./src/app/progressive-bar/progressive-bar.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _scroll_top_button_scroll_top_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./scroll-top-button/scroll-top-button.component */ "./src/app/scroll-top-button/scroll-top-button.component.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"],
                _section_section_component__WEBPACK_IMPORTED_MODULE_8__["SectionComponent"],
                _scroll_background_directive__WEBPACK_IMPORTED_MODULE_9__["ScrollBackgroundDirective"],
                _smooth_scrolling_directive__WEBPACK_IMPORTED_MODULE_10__["SmoothScrollingDirective"],
                _deprecated_onscroll_directive__WEBPACK_IMPORTED_MODULE_11__["OnscrollDirective"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_13__["ScrollButtonComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_14__["AboutComponent"],
                _progressive_bar_progressive_bar_component__WEBPACK_IMPORTED_MODULE_15__["ProgressiveBarComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_16__["PortfolioComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_17__["FooterComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_18__["PostsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_19__["ContactComponent"],
                _scroll_top_button_scroll_top_button_component__WEBPACK_IMPORTED_MODULE_20__["ScrollTopButtonComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-container\">\r\n    <div class=\"title-container\">\r\n      <h2>Contact me</h2>\r\n    </div>\r\n    <div class=\"grid-container contact-icons\">\r\n      <div class=\"box box-glue contact-form-container\">\r\n        <div class=\"circle-wrapper\">\r\n            <i class=\"fas fa-envelope\"></i>\r\n        </div>\r\n        <div class=\"label-wrapper\">Email</div>\r\n        <div class=\"text-wrapper\"><a class=\"effect\" href=\"mailto:iliesaithamouda@gmail.com\">iliesaithamouda@outlook.com</a></div>\r\n      </div>\r\n      <div class=\"box box-glue contact-form-container\">\r\n          <div class=\"circle-wrapper\">\r\n              <i class=\"fas fa-envelope\"></i>\r\n          </div>\r\n          <div class=\"label-wrapper\">Phone number</div>\r\n          <div class=\"text-wrapper\"><a class=\"effect\" href=\"tel:15144754146\">+1 514-475-4146</a></div>\r\n      </div>\r\n  \r\n    </div>\r\n    <div [formGroup]=\"contactForm\" (ngSubmit)=\"submitForm()\" class=\"form-group\">\r\n      <div class=\"grid-container contact-form\">\r\n        <div class=\"box contact-form-container\">\r\n          <input [ngClass]=\"{'error-input': contactF.name.errors.required && contactF.name.dirty }\" name=\"name\" formControlName=\"name\" type=\"text\" placeholder=\"Name\" />\r\n          <div *ngIf=\"contactF.name.errors.required && contactF.name.dirty\" class=\"invalid-feedback\">\r\n              please enter a valid name.\r\n          </div>\r\n        </div>\r\n        <div class=\"box contact-form-container\">\r\n          <input name=\"email\" formControlName=\"email\" type=\"text\" placeholder=\"Email\" [ngClass]=\"{'error-input': contactF.email.errors.required && contactF.email.dirty }\"/>\r\n          <div *ngIf=\"contactF.email.errors.required && contactF.email.dirty\" class=\"invalid-feedback\">\r\n              please enter a valid email.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-area-container\">\r\n        <textarea formControlName=\"message\" name=\"message\" placeholder=\"Message\" [ngClass]=\"{'error-input': contactF.message.errors.required && contactF.message.dirty }\"></textarea>\r\n        <div *ngIf=\"contactF.message.errors.required && contactF.message.dirty\" class=\"invalid-feedback\">\r\n            please enter a message.\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <button class=\"send-button\" type=\"submit\">Send Message</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-container {\n  width: 80%;\n  margin: 0 auto;\n  font-size: 15px; }\n  .contact-container .title-container {\n    color: #333;\n    padding-bottom: 40px; }\n  .contact-container .title-container h2 {\n      position: relative;\n      font-weight: 700;\n      line-height: 43px;\n      padding-bottom: 15px;\n      font-size: 36px;\n      margin: 0px;\n      display: inline-block; }\n  .contact-container .title-container h2::after {\n        content: '';\n        position: absolute;\n        background-color: #444444;\n        height: 2px;\n        left: 4px;\n        bottom: 0px;\n        width: 50px;\n        text-align: center; }\n  .contact-container .grid-container {\n    display: grid;\n    grid-column-gap: 70px;\n    grid-row-gap: 40px;\n    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));\n    text-align: left;\n    padding: 40px 0px; }\n  .contact-container .grid-container .box {\n      display: grid;\n      flex-direction: column; }\n  .contact-container .grid-container .box input {\n        width: 100%;\n        border: 1px solid #ddd;\n        color: #232323;\n        padding: 8px 16px;\n        font-size: 15px;\n        width: inherit; }\n  .contact-container .grid-container .box input.error-input {\n          border: 1px solid #CD5C5C; }\n  .contact-container .grid-container .box .invalid-feedback {\n        color: #CD5C5C;\n        text-align: center; }\n  .contact-container .grid-container .box .circle-wrapper {\n        grid-area: logo;\n        width: 50px;\n        height: 50px;\n        background-color: #000000;\n        color: #FFFFFF;\n        text-align: center;\n        line-height: 50px;\n        border-radius: 30px; }\n  .contact-container .grid-container .box .label-wrapper {\n        grid-area: label; }\n  .contact-container .grid-container .box .text-wrapper {\n        grid-area: text; }\n  .contact-container .grid-container .box-glue {\n      grid-template-areas: \"logo label\"\r \"logo text\";\n      grid-template-columns: 1fr 4fr; }\n  .contact-container .text-area-container {\n    margin-bottom: 40px; }\n  .contact-container .text-area-container textarea {\n      resize: none;\n      width: 96%;\n      height: 190px;\n      padding: 8px 16px;\n      color: #232323;\n      border: 1px solid #ddd;\n      font-size: 15px; }\n  .contact-container .text-area-container textarea.error-input {\n        border: 1px solid #CD5C5C; }\n  .contact-container .send-button {\n    margin: 0 auto;\n    padding: 8px 20px;\n    font-size: 16px;\n    font-weight: 700;\n    border: 2px solid #333;\n    outline: none;\n    background-color: #333;\n    color: #fafafa;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9DOlxcd29ya1xccHJvZmlsL3NyY1xcYXBwXFxjb250YWN0XFxjb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFTO0VBQ1QsY0FBYTtFQUNiLGVBQWUsRUFBQTtFQUhuQjtJQU1RLFdBQVc7SUFDWCxvQkFBb0IsRUFBQTtFQVA1QjtNQVNZLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsV0FBVztNQUNYLHFCQUFxQixFQUFBO0VBZmpDO1FBaUJnQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUF4QmxDO0lBOEJRLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFuQ3pCO01BcUNZLGFBQWE7TUFDYixzQkFBc0IsRUFBQTtFQXRDbEM7UUF3Q2dCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FBYyxFQUFBO0VBN0M5QjtVQStDb0IseUJBQXdCLEVBQUE7RUEvQzVDO1FBb0RnQixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUE7RUFyRGxDO1FBeURnQixlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsbUJBQW1CLEVBQUE7RUFoRW5DO1FBb0VnQixnQkFBZ0IsRUFBQTtFQXBFaEM7UUF1RWdCLGVBQWUsRUFBQTtFQXZFL0I7TUE0RVksOENBRW9CO01BOUVoQyw4QkFpRkksRUFBQTtFQ25CRjtJRDlERixtQkFpRkksRUFBQTtFQ2pCQTtNRG9CUSxZQUFVO01BQ1YsVUFBUTtNQUNSLGFBQVM7TUFDVCxpQkFBYztNQUNkLGNBQVE7TUFDUixzQkFJSDtNQTdGVCxlQUFBLEVBQUE7RUN3RU07UUR4RU4seUJBaUdnQixFQUFDO0VDdkJmO0lEeUJNLGNBQVM7SUFDVCxpQkFBZTtJQUNmLGVBQWE7SUFDYixnQkFBUTtJQUNSLHNCQUFhO0lBQ2IsYUFBQTtJQUNBLHNCQUFjO0lBQ2QsY0FBUTtJQ3ZCWixlQUFlLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOjgwJTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcblxyXG4gICAgLnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgJiBoMiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY4LCA2OCwgNjgpO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiA3MHB4O1xyXG4gICAgICAgIGdyaWQtcm93LWdhcDogNDBweDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyNXB4LCAxZnIpKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggMHB4O1xyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgICAgICAgICAgJiBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAmLmVycm9yLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCNDRDVDNUM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjQ0Q1QzVDO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY2lyY2xlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsb2dvO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5sYWJlbC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogbGFiZWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRleHQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6IHRleHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3gtZ2x1ZSB7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibG9nbyBsYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsb2dvIHRleHRcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRleHQtYXJlYS1jb250YWluZXIge1xyXG4gICAgICAgICYgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAmLmVycm9yLWlucHV0IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkI0NENUM1QztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2VuZC1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMzMzM7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xyXG4gICAgICAgIGNvbG9yOiAjZmFmYWZhO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxufVxyXG5cclxuIiwiLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGZvbnQtc2l6ZTogMTVweDsgfVxuICAuY29udGFjdC1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7IH1cbiAgICAuY29udGFjdC1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciBoMiB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAuY29udGFjdC1jb250YWluZXIgLnRpdGxlLWNvbnRhaW5lciBoMjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0O1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuY29udGFjdC1jb250YWluZXIgLmdyaWQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtY29sdW1uLWdhcDogNzBweDtcbiAgICBncmlkLXJvdy1nYXA6IDQwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjVweCwgMWZyKSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiA0MHB4IDBweDsgfVxuICAgIC5jb250YWN0LWNvbnRhaW5lciAuZ3JpZC1jb250YWluZXIgLmJveCB7XG4gICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgICAgLmNvbnRhY3QtY29udGFpbmVyIC5ncmlkLWNvbnRhaW5lciAuYm94IGlucHV0IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIGNvbG9yOiAjMjMyMzIzO1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB3aWR0aDogaW5oZXJpdDsgfVxuICAgICAgICAuY29udGFjdC1jb250YWluZXIgLmdyaWQtY29udGFpbmVyIC5ib3ggaW5wdXQuZXJyb3ItaW5wdXQge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDRDVDNUM7IH1cbiAgICAgIC5jb250YWN0LWNvbnRhaW5lciAuZ3JpZC1jb250YWluZXIgLmJveCAuaW52YWxpZC1mZWVkYmFjayB7XG4gICAgICAgIGNvbG9yOiAjQ0Q1QzVDO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAgIC5jb250YWN0LWNvbnRhaW5lciAuZ3JpZC1jb250YWluZXIgLmJveCAuY2lyY2xlLXdyYXBwZXIge1xuICAgICAgICBncmlkLWFyZWE6IGxvZ287XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4OyB9XG4gICAgICAuY29udGFjdC1jb250YWluZXIgLmdyaWQtY29udGFpbmVyIC5ib3ggLmxhYmVsLXdyYXBwZXIge1xuICAgICAgICBncmlkLWFyZWE6IGxhYmVsOyB9XG4gICAgICAuY29udGFjdC1jb250YWluZXIgLmdyaWQtY29udGFpbmVyIC5ib3ggLnRleHQtd3JhcHBlciB7XG4gICAgICAgIGdyaWQtYXJlYTogdGV4dDsgfVxuICAgIC5jb250YWN0LWNvbnRhaW5lciAuZ3JpZC1jb250YWluZXIgLmJveC1nbHVlIHtcbiAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwibG9nbyBsYWJlbFwiXHIgXCJsb2dvIHRleHRcIjtcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjsgfVxuICAuY29udGFjdC1jb250YWluZXIgLnRleHQtYXJlYS1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7IH1cbiAgICAuY29udGFjdC1jb250YWluZXIgLnRleHQtYXJlYS1jb250YWluZXIgdGV4dGFyZWEge1xuICAgICAgcmVzaXplOiBub25lO1xuICAgICAgd2lkdGg6IDk2JTtcbiAgICAgIGhlaWdodDogMTkwcHg7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGNvbG9yOiAjMjMyMzIzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDsgfVxuICAgICAgLmNvbnRhY3QtY29udGFpbmVyIC50ZXh0LWFyZWEtY29udGFpbmVyIHRleHRhcmVhLmVycm9yLWlucHV0IHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0NENUM1QzsgfVxuICAuY29udGFjdC1jb250YWluZXIgLnNlbmQtYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMztcbiAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ContactComponent.prototype.submitForm = function () {
        if (this.contactForm.invalid) {
            return;
        }
        console.log('trying to submit a contact form');
    };
    Object.defineProperty(ContactComponent.prototype, "contactF", {
        get: function () {
            return this.contactForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\" >\r\n  <div class=\"footer-title\">\r\n    Ilyes\r\n  </div>\r\n  <div class=\"social-media-links\">\r\n    <a class=\"icone\" href=\"https://www.linkedin.com/in/iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\r\n    <a class=\"icone\" href=\"https://medium.com/@iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-medium-m\"></i></a>\r\n    \r\n  </div>\r\n  <div class=\"copyrights\">\r\n    Ilies ait hamouda © 2018. all right reserved.\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  padding-top: 60px;\n  padding-bottom: 60px;\n  text-align: center;\n  background-color: #f1f1f1; }\n  .footer-container .footer-title {\n    margin: 8px 0;\n    display: inline-block;\n    margin-bottom: 6px;\n    font-size: 22px;\n    font-weight: 700;\n    color: #111; }\n  .footer-container .social-media-links {\n    padding: 10px 0;\n    color: #000;\n    font-size: 20px; }\n  .footer-container .social-media-links .icone {\n      padding: 0px 10px;\n      color: #000; }\n  .footer-container .copyrights {\n    padding: 10px 0;\n    font-size: 15px;\n    text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL0M6XFx3b3JrXFxwcm9maWwvc3JjXFxhcHBcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7RUFKN0I7SUFPUSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQVpuQjtJQWdCUSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWUsRUFBQTtFQWxCdkI7TUFvQlksaUJBQWdCO01BQ2hCLFdBQVcsRUFBQTtFQXJCdkI7SUEwQlEsZUFBZTtJQUNmLGVBQWU7SUFDZiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcclxuXHJcbiAgICAuZm9vdGVyLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDhweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgY29sb3I6ICMxMTE7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1tZWRpYS1saW5rcyB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICAuaWNvbmUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOjBweCAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb3B5cmlnaHRzIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-pic-container\">\r\n  <img src=\"./assets/deadpool.png\" alt=\"profil-picture\"/>\r\n</div>\r\n<div class=\"introduction-container\">\r\n  <h1>Hi, I'm Ilyes</h1>\r\n  <span class=\"introduction-phrase\"></span>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic-container img {\n  width: 170px;\n  border: 3px solid #dfdfdf;\n  border-radius: 50%; }\n\n.introduction-container h1 {\n  font-size: 50px;\n  font-weight: 700;\n  line-height: 60px;\n  color: #FFFFFF; }\n\n.introduction-container .introduction-phrase {\n  font-size: 26px;\n  color: #bfbfbf;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcd29ya1xccHJvZmlsL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsWUFBVztFQUNYLHlCQUFvQztFQUNwQyxrQkFBa0IsRUFBQTs7QUFJMUI7RUFFUSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBTHRCO0VBU1EsZUFBZTtFQUNmLGNBQXlCO0VBQ3pCLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2ZpbGUtcGljLWNvbnRhaW5lciB7XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHJnYigyMjMsIDIyMywgMjIzKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnRyb2R1Y3Rpb24tY29udGFpbmVyIHtcclxuICAgIGgxIHtcclxuICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIH1cclxuXHJcbiAgICAuaW50cm9kdWN0aW9uLXBocmFzZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMTkxLCAxOTEsIDE5MSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_2__);



var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Can also be included with a regular script tag
        var options = {
            strings: ["I'm a human being", "I'm a Husband", "I'm a Father", "I'm a Dreamer..", "Oh and i'm a Developer :)"],
            loop: false,
            backSpeed: 1,
            typeSpeed: 100,
            smartBackspace: true,
            startDelay: 0,
        };
        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_2___default.a(".introduction-phrase", options);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header [@animateStickyMenu]=\"menuState\" class=\"menu-container\">\r\n  <nav [@animateColorMenu]=\"menuState\" class=\"menu-grid-container\">\r\n    <div class=\"logo-container\"><img src=\"./assets/logo.svg\"></div>\r\n    <div (click)=\"toggleMenu = !toggleMenu\" class=\"ham-menu\"><i class=\"fas fa-bars\"></i></div>\r\n    <div class=\"menu-item-container\" *ngFor=\"let menuItem of menu.items\">\r\n      <span appSmoothScrolling attr.data-target-link=\"{{menuItem.label}}\" class=\"menu-item\" >{{ menuItem.label.toUpperCase() }}</span>\r\n    </div>\r\n  </nav>\r\n  <div [@animateColorMenu]=\"menuState\" class=\"menu-items-mobile\" [ngClass]=\"{'block' : toggleMenu, 'hidden': !toggleMenu}\">\r\n    <div (click)=\"toggleMenu = !toggleMenu\" class=\"menu-item-container-mobile menu-item\" *ngFor=\"let menuItem of menu.items\" appSmoothScrolling attr.data-target-link=\"{{menuItem.label}}\">\r\n      {{ menuItem.label.toUpperCase() }}\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\n  position: fixed;\n  width: 100%;\n  z-index: 2; }\n  .menu-container .menu-grid-container {\n    max-width: 1170px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(1, minmax(20%, 50%)) repeat(6, minmax(80px, 1fr));\n    grid-template-rows: 50px;\n    grid-column-gap: 10px;\n    color: #FFFFFF; }\n  .menu-container .menu-grid-container .menu-item-container {\n      align-items: center;\n      display: grid;\n      justify-items: center; }\n  .menu-container .menu-grid-container .logo-container {\n      width: 100px; }\n  .menu-container .menu-grid-container .logo-container img {\n        width: inherit;\n        top: -35px;\n        position: absolute; }\n  .menu-container .menu-item {\n    font-family: \"Lato\", sans-serif;\n    font-size: 13px;\n    font-weight: 700;\n    cursor: pointer; }\n  .menu-container .menu-item-container:last-child {\n    margin-right: 20px; }\n  @media only screen and (min-width: 390px) {\n    .menu-container .ham-menu {\n      display: none; }\n    .menu-container .menu-item-container {\n      display: flex; }\n    .menu-container .menu-items-mobile {\n      display: none; } }\n  @media only screen and (max-width: 700px) {\n  .menu-container {\n    padding-top: 0px !important; }\n    .menu-container .menu-grid-container {\n      grid-template-columns: 3fr .5fr;\n      justify-items: center;\n      padding-left: 70px; }\n      .menu-container .menu-grid-container .ham-menu {\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        font-size: 30px;\n        cursor: pointer; }\n      .menu-container .menu-grid-container .menu-item-container {\n        display: none; }\n      .menu-container .menu-grid-container .logo-container {\n        width: 100px; }\n    .menu-container .menu-items-mobile {\n      overflow: hidden;\n      display: block; }\n      .menu-container .menu-items-mobile.hidden {\n        height: 0px;\n        transition: .5s height ease-in-out; }\n      .menu-container .menu-items-mobile.block {\n        height: 220px;\n        transition: .5s height ease-in-out; }\n    .menu-container .menu-item-container-mobile {\n      padding: 10px 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9DOlxcd29ya1xccHJvZmlsL3NyY1xcYXBwXFxtZW51XFxtZW51LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxVQUFVLEVBQUE7RUFIZDtJQUtRLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsYUFBYTtJQUNiLCtFQUErRTtJQUMvRSx3QkFBd0I7SUFDeEIscUJBQXFCO0lBQ3JCLGNBQWMsRUFBQTtFQVh0QjtNQWNZLG1CQUFtQjtNQUNuQixhQUFhO01BQ2IscUJBQXFCLEVBQUE7RUFoQmpDO01Bb0JZLFlBQVksRUFBQTtFQXBCeEI7UUF1QmdCLGNBQWM7UUFDZCxVQUFVO1FBQ1Ysa0JBQWtCLEVBQUE7RUF6QmxDO0lBK0JRLCtCQUErQjtJQUMvQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGVBQWUsRUFBQTtFQWxDdkI7SUFzQ1Esa0JBQWtCLEVBQUE7RUFNdEI7SUE1Q0o7TUE4Q1ksYUFBYSxFQUFBO0lBOUN6QjtNQWlEWSxhQUFhLEVBQUE7SUFqRHpCO01Bb0RZLGFBQWEsRUFBQSxFQUNoQjtFQUtUO0VBQ0k7SUFDSSwyQkFBMkIsRUFBQTtJQUQvQjtNQUlRLCtCQUErQjtNQUMvQixxQkFBcUI7TUFDckIsa0JBQWtCLEVBQUE7TUFOMUI7UUFRWSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHFCQUFxQjtRQUNyQixlQUFlO1FBQ2YsZUFBZSxFQUFBO01BWjNCO1FBZVksYUFBYSxFQUFBO01BZnpCO1FBa0JZLFlBQVksRUFBQTtJQWxCeEI7TUFzQlEsZ0JBQWdCO01BQ2hCLGNBQWMsRUFBQTtNQXZCdEI7UUEwQlksV0FBVztRQUNYLGtDQUFrQyxFQUFBO01BM0I5QztRQThCWSxhQUFhO1FBQ2Isa0NBQWtDLEVBQUE7SUEvQjlDO01Bb0NRLGtCQUFrQixFQUFBLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIC5tZW51LWdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgyMCUsIDUwJSkpIHJlcGVhdCg2LCBtaW5tYXgoODBweCwgMWZyKSk7IC8vIDVmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDUwcHg7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICBcclxuICAgICAgICAmIC5tZW51LWl0ZW0tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG5cclxuICAgICAgICAgICAgJiBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IC0zNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWl0ZW0ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUtaXRlbS1jb250YWluZXI6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIGRlc2t0b3BcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzkwcHgpIHtcclxuICAgICAgICAuaGFtLW1lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubWVudS1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tZW51LWl0ZW1zLW1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBtb2JpbGUgYW5kIHRhYmxldFxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAubWVudS1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHggIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgICAgIC5tZW51LWdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgLjVmcjtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgICAgICAgICAgIC5oYW0tbWVudSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubWVudS1pdGVtLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1lbnUtaXRlbXMtbW9iaWxlIHtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIC8vIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgICAgICAgICAmLmhpZGRlbiB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IC41cyBoZWlnaHQgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5ibG9jayB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogLjVzIGhlaWdodCBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1lbnUtaXRlbS1jb250YWluZXItbW9iaWxlIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/Menu */ "./src/app/menu/models/Menu.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
        this.menuState = 'block'; // 'fixed'
        this.toggleMenu = false;
        this.menu = new _models_Menu__WEBPACK_IMPORTED_MODULE_2__["Menu"]();
    }
    MenuComponent.prototype.onscroll = function (event) {
        if (this.menuState !== 'fixed' && window.scrollY > 200) {
            this.menuState = 'fixed';
        }
        else if (this.menuState !== 'block' && window.scrollY < 200) {
            this.menuState = 'block';
        }
    };
    MenuComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MenuComponent.prototype, "onscroll", null);
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animateStickyMenu', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        paddingTop: '20px',
                        backgroundColor: 'transparent',
                        borderBottom: '0px solid transparent'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('fixed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        paddingTop: '0px',
                        backgroundColor: 'white',
                        borderBottom: '1px solid #f0f0f0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('block => fixed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('fixed => block', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.5s')
                    ]),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('animateColorMenu', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('block', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        color: 'rgb(221, 221, 221)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('fixed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        color: 'rgb(35, 35, 35)',
                        borderBottom: '1px solid #f0f0f0'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('block => fixed', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('fixed => block', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/menu/models/Menu.ts":
/*!*************************************!*\
  !*** ./src/app/menu/models/Menu.ts ***!
  \*************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
var Menu = /** @class */ (function () {
    function Menu() {
        this.items = new Array();
        this.items.push({ label: 'Home', link: '/home' });
        this.items.push({ label: 'About', link: '/about' });
        this.items.push({ label: 'Services', link: '/services' });
        this.items.push({ label: 'Work', link: '/work' });
        this.items.push({ label: 'Posts', link: '/posts' });
        this.items.push({ label: 'Contact', link: '/contact' });
    }
    return Menu;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.component.html":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"portfolio-container\">\r\n  <div class=\"title-container\">\r\n    <h2>{{data.title}}</h2>\r\n  </div>\r\n  <div class=\"grid-container\" [ngClass]=\"{'grid-container-larger': layoutType === 'Work'}\">\r\n    \r\n      <ng-template ngFor let-item [ngForOf]=\"data.items\" let-i=\"index\" let-c=\"count\">\r\n        <div class=\"box\" *ngIf=\"layoutType === 'Services'; else work\" [ngClass]=\"{'middle': i === 1 || i === 4}\">\r\n          <div class=\"icon\">\r\n            <i class=\"fab\" [ngClass]=\"item.imgPath\"></i>\r\n          </div>\r\n          <div class=\"title\">\r\n            <h3>{{ item.title }}</h3>\r\n          </div>\r\n          <div class=\"description\">\r\n            {{ item.description }}\r\n          </div>\r\n        </div>\r\n        <ng-template #work >\r\n\r\n            <div class=\"box\" class=\"image-container\">\r\n              <img class=\"image\" [src]=\"item.imgPath\" />\r\n              <div class=\"overlay-container effect\">\r\n                  <div class=\"border-box\">\r\n                      <div class=\"title\">{{ item.title }}</div>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n            \r\n        </ng-template>\r\n      </ng-template>\r\n    \r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-container .title-container {\n  color: #333;\n  padding-bottom: 40px; }\n  .portfolio-container .title-container h2 {\n    position: relative;\n    font-weight: 700;\n    line-height: 43px;\n    padding-bottom: 15px;\n    font-size: 36px;\n    margin: 0px;\n    display: inline-block; }\n  .portfolio-container .title-container h2::after {\n      content: '';\n      position: absolute;\n      background-color: #444444;\n      height: 2px;\n      left: 4px;\n      bottom: 0px;\n      width: 50px;\n      text-align: center; }\n  .portfolio-container .grid-container {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  text-align: center;\n  padding: 20px; }\n  .portfolio-container .grid-container .box {\n    display: flex;\n    flex-direction: column; }\n  .portfolio-container .grid-container .box .title h3 {\n      font-size: 19px;\n      font-weight: 700;\n      text-transform: uppercase;\n      position: relative;\n      padding-bottom: 15px; }\n  .portfolio-container .grid-container .box .title h3::after {\n        content: '';\n        position: absolute;\n        background-color: #333333;\n        height: 1px;\n        left: 42%;\n        bottom: 0px;\n        width: 55px;\n        text-align: center; }\n  .portfolio-container .grid-container .box .icon {\n      font-size: 44px;\n      line-height: 70px; }\n  .portfolio-container .grid-container .image-container {\n    margin: 10px;\n    position: relative; }\n  .portfolio-container .grid-container .image-container .image {\n      width: 100%;\n      height: 100%; }\n  .portfolio-container .grid-container .image-container .overlay-container {\n      position: absolute;\n      width: 95%;\n      height: 95%;\n      margin: 2.5%;\n      background-color: transparent;\n      top: 0;\n      left: 0;\n      color: transparent; }\n  .portfolio-container .grid-container .image-container .overlay-container:hover {\n        background-color: rgba(0, 0, 0, 0.8);\n        color: #FFF; }\n  .portfolio-container .grid-container .image-container .overlay-container:hover .border-box {\n          border-color: #FFFFFF; }\n  .portfolio-container .grid-container .image-container .overlay-container .border-box {\n        border: 1px solid transparent;\n        width: 90%;\n        height: 90%;\n        margin: 5%;\n        position: relative; }\n  .portfolio-container .grid-container .image-container .overlay-container .border-box .title {\n          position: absolute;\n          bottom: 20px;\n          left: 20px;\n          opacity: 1;\n          text-transform: capitalize; }\n  .portfolio-container .grid-container-larger {\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9ydGZvbGlvL0M6XFx3b3JrXFxwcm9maWwvc3JjXFxhcHBcXHBvcnRmb2xpb1xccG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsV0FBVztFQUNYLG9CQUFvQixFQUFBO0VBSDVCO0lBS1ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCLEVBQUE7RUFYakM7TUFhZ0IsV0FBVztNQUNYLGtCQUFrQjtNQUNsQix5QkFBaUM7TUFDakMsV0FBVztNQUNYLFNBQVM7TUFDVCxXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBcEJsQztFQTBCUSxhQUFhO0VBQ2IsY0FBYztFQUNkLDJEQUEyRDtFQUMzRCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0VBOUJyQjtJQWdDWSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFqQ2xDO01BbUNnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7RUF2Q3BDO1FBMENvQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUFqRHRDO01BcURnQixlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUF0RGpDO0lBMkRZLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQTVEOUI7TUErRGdCLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFoRTVCO01BbUVnQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFdBQVc7TUFDWCxZQUFZO01BQ1osNkJBQTZCO01BQzdCLE1BQU07TUFDTixPQUFNO01BQ04sa0JBQWtCLEVBQUE7RUExRWxDO1FBNEVvQixvQ0FBb0M7UUFDcEMsV0FBVyxFQUFBO0VBN0UvQjtVQStFd0IscUJBQXFCLEVBQUE7RUEvRTdDO1FBb0ZvQiw2QkFBNkI7UUFDN0IsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysa0JBQWtCLEVBQUE7RUF4RnRDO1VBMEZ3QixrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFVBQVU7VUFDVixVQUFVO1VBQ1YsMEJBQTBCLEVBQUE7RUE5RmxEO0VBd0dRLDJEQUEyRDtFQUMzRCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wb3J0Zm9saW8tY29udGFpbmVyIHtcclxuICAgIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICYgaDIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgMWZyKSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgLmJveCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC50aXRsZSBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQyJTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb24ge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NHB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3ZlcmxheS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogOTUlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyLjUlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgLmJvcmRlci1ib3gge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5ib3JkZXItYm94IHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNSU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ncmlkLWNvbnRhaW5lci1sYXJnZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzYwcHgsIDFmcikpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.ts ***!
  \**************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/portfolio/portfolio.service.ts");



var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent(portfolioService) {
        this.portfolioService = portfolioService;
    }
    PortfolioComponent.prototype.ngOnInit = function () {
        this.portfolioService.initializeData(this.layoutType);
        this.data = this.portfolioService.getData();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PortfolioComponent.prototype, "layoutType", void 0);
    PortfolioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/portfolio/portfolio.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/portfolio/portfolio.service.ts":
/*!************************************************!*\
  !*** ./src/app/portfolio/portfolio.service.ts ***!
  \************************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PortfolioService = /** @class */ (function () {
    function PortfolioService() {
    }
    PortfolioService.prototype.initializeData = function (layoutType) {
        this._data = {
            items: layoutType === 'Work' ? this.getWorkItems() : this.getServicesItems(),
            layoutType: layoutType,
            title: layoutType === 'Work' ? 'My Portfolio' : 'My Services'
        };
    };
    PortfolioService.prototype.getData = function () {
        return this._data;
    };
    PortfolioService.prototype.getServicesItems = function () {
        return [{
                imgPath: 'fa-html5',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: 'fa-html5',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: 'fa-html5',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: 'fa-html5',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: 'fa-html5',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: 'fa-html5',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
        ];
    };
    PortfolioService.prototype.getWorkItems = function () {
        return [{
                imgPath: './assets/test.jpg',
                title: 'My first web site',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: './assets/test.jpg',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: './assets/test.jpg',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: './assets/test.jpg',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: './assets/test.jpg',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
            {
                imgPath: './assets/test.jpg',
                title: 'web development',
                description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
            },
        ];
    };
    PortfolioService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"posts-container\">\r\n  <div class=\"title-container\">\r\n    <h2>{{data.title}}</h2>\r\n  </div>\r\n  <div class=\"grid-container\">\r\n    <ng-template ngFor let-item [ngForOf]=\"data.items\" let-i=\"index\" let-c=\"count\">\r\n      <div class=\"box\">\r\n        <div class=\"sub-box\">\r\n          <img class=\"image\" [src]=\"item.imgPath\" />\r\n        </div>\r\n        <div class=\"sub-box\">\r\n          <div class=\"title\">\r\n            <h3>{{ item.title }}</h3>\r\n          </div>\r\n          <div class=\"description\">\r\n            {{ item.description }}\r\n          </div>\r\n          <div class=\"external-link\">\r\n            <a href=\"https://medium.com/@iliesaithamouda/debugging-html-element-attribute-through-the-console-developer-tool-5b238e139857\">read more...</a>\r\n          </div>\r\n        </div>\r\n      </div>  \r\n    </ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".posts-container .title-container {\n  color: #333;\n  padding-bottom: 40px; }\n  .posts-container .title-container h2 {\n    position: relative;\n    font-weight: 700;\n    line-height: 43px;\n    padding-bottom: 15px;\n    font-size: 36px;\n    margin: 0px;\n    display: inline-block; }\n  .posts-container .title-container h2::after {\n      content: '';\n      position: absolute;\n      background-color: #444444;\n      height: 2px;\n      left: 4px;\n      bottom: 0px;\n      width: 50px;\n      text-align: center; }\n  .posts-container .grid-container {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));\n  text-align: left;\n  padding: 20px; }\n  .posts-container .grid-container .box {\n    flex-direction: column;\n    display: grid;\n    grid-gap: 40px;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }\n  .posts-container .grid-container .box .sub-box {\n      display: flex;\n      flex-direction: column;\n      position: relative; }\n  .posts-container .grid-container .box .title h3 {\n      font-size: 19px;\n      font-weight: 700;\n      text-transform: uppercase;\n      position: relative;\n      padding-bottom: 15px; }\n  .posts-container .grid-container .box .title h3::after {\n        content: '';\n        position: absolute;\n        background-color: #333333;\n        height: 1px;\n        left: 42%;\n        bottom: 0px;\n        width: 55px;\n        text-align: center; }\n  .posts-container .grid-container .box .image {\n      width: 100%; }\n  .posts-container .grid-container .box .external-link {\n      position: absolute;\n      bottom: 6px;\n      right: 6px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvQzpcXHdvcmtcXHByb2ZpbC9zcmNcXGFwcFxccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVztFQUNYLG9CQUFvQixFQUFBO0VBSDVCO0lBS1ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCLEVBQUE7RUFYakM7TUFhZ0IsV0FBVztNQUNYLGtCQUFrQjtNQUNsQix5QkFBaUM7TUFDakMsV0FBVztNQUNYLFNBQVM7TUFDVCxXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBcEJsQztFQTBCUSxhQUFhO0VBQ2IsY0FBYztFQUNkLDJEQUEyRDtFQUMzRCxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0VBOUJyQjtJQWdDWSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGNBQWM7SUFDZCwyREFBMkQsRUFBQTtFQW5DdkU7TUFxQ2dCLGFBQWE7TUFDYixzQkFBc0I7TUFDdEIsa0JBQWtCLEVBQUE7RUF2Q2xDO01BMkNnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7RUEvQ3BDO1FBa0RvQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUF6RHRDO01BNkRnQixXQUFXLEVBQUE7RUE3RDNCO01BaUVnQixrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvc3RzLWNvbnRhaW5lciB7XHJcbiAgICAudGl0bGUtY29udGFpbmVyIHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICAmIGgyIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDRweDtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmdyaWQtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtZ2FwOiA0MHB4O1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDIwcHgsIDFmcikpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAuYm94IHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xyXG4gICAgICAgICAgICAuc3ViLWJveCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnRpdGxlIGgzIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNDIlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leHRlcm5hbC1saW5rIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.service */ "./src/app/posts/posts.service.ts");



var PostsComponent = /** @class */ (function () {
    function PostsComponent(postService) {
        this.postService = postService;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.postService.initializeData();
        this.data = this.postService.data;
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_2__["PostsService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PostsService = /** @class */ (function () {
    function PostsService() {
    }
    PostsService.prototype.initializeData = function () {
        this._data = {
            items: this.servicesItems,
            title: 'My Posts'
        };
    };
    Object.defineProperty(PostsService.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PostsService.prototype, "servicesItems", {
        get: function () {
            return [{
                    imgPath: './assets/test.jpg',
                    title: 'web development',
                    description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
                },
                {
                    imgPath: './assets/test.jpg',
                    title: 'web development',
                    description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
                },
                {
                    imgPath: './assets/test.jpg',
                    title: 'web development',
                    description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
                },
                {
                    imgPath: './assets/test.jpg',
                    title: 'web development',
                    description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
                },
                {
                    imgPath: './assets/test.jpg',
                    title: 'web development',
                    description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
                },
                {
                    imgPath: './assets/test.jpg',
                    title: 'web development',
                    description: 'im really strong in web development, in fact, i can code during all night without feeling tired'
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsService);
    return PostsService;
}());



/***/ }),

/***/ "./src/app/progressive-bar/progressive-bar.component.html":
/*!****************************************************************!*\
  !*** ./src/app/progressive-bar/progressive-bar.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"progress-description\">\r\n  <div class=\"title\">\r\n    {{title}}\r\n  </div>\r\n  <div class=\"progress-percentage\">\r\n    {{progressRate}} %\r\n  </div>\r\n</div>\r\n<div class=\"line progressive-line\">\r\n  <div [@animateProgress]=\"{ value: animate, params : {test : progress}}\" class=\"line progress-skill\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/progressive-bar/progressive-bar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/progressive-bar/progressive-bar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-description {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 75% 1fr;\n  text-align: left;\n  padding: 25px 0px 15px 0px;\n  max-width: 95%;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase; }\n  .progress-description > * {\n    display: flex;\n    flex-direction: column; }\n  .progress-description .progress-percentage {\n    text-align: right; }\n  .line {\n  height: 6px;\n  border-radius: 4px;\n  margin-right: 10px; }\n  .progressive-line {\n  background-color: lightgray;\n  max-width: 100%; }\n  .progress-skill {\n  background-color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3NpdmUtYmFyL0M6XFx3b3JrXFxwcm9maWwvc3JjXFxhcHBcXHByb2dyZXNzaXZlLWJhclxccHJvZ3Jlc3NpdmUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTtFQVQ3QjtJQVdRLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQVo5QjtJQWdCUSxpQkFBaUIsRUFBQTtFQUt6QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSwyQkFBMkI7RUFDM0IsZUFBZSxFQUFBO0VBRW5CO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmVzc2l2ZS1iYXIvcHJvZ3Jlc3NpdmUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5wcm9ncmVzcy1kZXNjcmlwdGlvbiB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDc1JSAxZnI7Ly8gcmVwZWF0KGF1dG8tZmlsbCxtaW5tYXgoNTAwcHgsIDFmcikpO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmc6IDI1cHggMHB4IDE1cHggMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICYgPiAqIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2dyZXNzLXBlcmNlbnRhZ2Uge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmxpbmUge1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBcclxufVxyXG4ucHJvZ3Jlc3NpdmUtbGluZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7IFxyXG59XHJcbi5wcm9ncmVzcy1za2lsbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/progressive-bar/progressive-bar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/progressive-bar/progressive-bar.component.ts ***!
  \**************************************************************/
/*! exports provided: ProgressiveBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressiveBarComponent", function() { return ProgressiveBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var ProgressiveBarComponent = /** @class */ (function () {
    function ProgressiveBarComponent() {
        this.progress = 75;
        this.animate = 'empty';
        this.progressRate = 0;
    }
    ProgressiveBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.setTimeout(function () { _this.animate = 'full'; _this.updateProgressPercentage(); }, 2000);
    };
    ProgressiveBarComponent.prototype.updateProgressPercentage = function () {
        var _this = this;
        var progressRateTimer = 2000 / this.progress;
        var progressRateInterval = setInterval(function () {
            if (_this.progress === _this.progressRate) {
                clearInterval(progressRateInterval);
            }
            else {
                _this.progressRate += 1;
            }
        }, progressRateTimer);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ProgressiveBarComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ProgressiveBarComponent.prototype, "progress", void 0);
    ProgressiveBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progressive-bar',
            template: __webpack_require__(/*! ./progressive-bar.component.html */ "./src/app/progressive-bar/progressive-bar.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('animateProgress', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('empty', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '0%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('full', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        width: '{{test}}%'
                    }), { params: { test: 0 } }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('empty => full', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('2s')
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./progressive-bar.component.scss */ "./src/app/progressive-bar/progressive-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressiveBarComponent);
    return ProgressiveBarComponent;
}());



/***/ }),

/***/ "./src/app/scroll-background.directive.ts":
/*!************************************************!*\
  !*** ./src/app/scroll-background.directive.ts ***!
  \************************************************/
/*! exports provided: ScrollBackgroundDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollBackgroundDirective", function() { return ScrollBackgroundDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScrollBackgroundDirective = /** @class */ (function () {
    function ScrollBackgroundDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    ScrollBackgroundDirective.prototype.onScroll = function () {
        this.toggleScrollTopButton();
        var element = this.el.nativeElement;
        var backgroundTop = element.scrollTop;
        var backgroundHeight = element.clientHeight;
        var top = window.scrollY;
        var yPos = ((top - backgroundTop)) / 2;
        if (yPos <= backgroundHeight + backgroundTop) {
            this.renderer.setStyle(element, 'background-position', '50% ' + yPos + 'px');
        }
    };
    ScrollBackgroundDirective.prototype.toggleScrollTopButton = function () {
        if (window.scrollY > 1000)
            this.renderer.addClass(document.getElementById('scrollTopButton'), 'show-scroll-top-button');
        else
            this.renderer.removeClass(document.getElementById('scrollTopButton'), 'show-scroll-top-button');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ScrollBackgroundDirective.prototype, "onScroll", null);
    ScrollBackgroundDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[scrollableBackgroundImage]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], ScrollBackgroundDirective);
    return ScrollBackgroundDirective;
}());



/***/ }),

/***/ "./src/app/scroll-button/scroll-button.component.html":
/*!************************************************************!*\
  !*** ./src/app/scroll-button/scroll-button.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div appSmoothScrolling title=\"{{scrollToId}}\" class=\"scroll-button-container\">\r\n  <div [@fadeOut]=\"animateValue\" class=\"scroll-button\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/scroll-button/scroll-button.component.scss":
/*!************************************************************!*\
  !*** ./src/app/scroll-button/scroll-button.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-button-container {\n  position: absolute;\n  border: 2px solid white;\n  width: 20px;\n  height: 40px;\n  border-radius: 40px;\n  top: 90vh;\n  left: 49vw;\n  padding: 5px 2px;\n  cursor: pointer; }\n  .scroll-button-container .scroll-button {\n    width: 3px;\n    height: 3px;\n    background-color: #FFF;\n    border: 3px solid #FFF;\n    border-radius: 5px;\n    left: 7px;\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsLWJ1dHRvbi9DOlxcd29ya1xccHJvZmlsL3NyY1xcYXBwXFxzY3JvbGwtYnV0dG9uXFxzY3JvbGwtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixlQUFlLEVBQUE7RUFUbkI7SUFhUSxVQUFVO0lBQ1YsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbC1idXR0b24vc2Nyb2xsLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtYnV0dG9uLWNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgIHRvcDogOTB2aDtcclxuICAgIGxlZnQ6IDQ5dnc7XHJcbiAgICBwYWRkaW5nOiA1cHggMnB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgIC5zY3JvbGwtYnV0dG9uIHtcclxuXHJcbiAgICAgICAgd2lkdGg6IDNweDtcclxuICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGxlZnQ6IDdweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/scroll-button/scroll-button.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/scroll-button/scroll-button.component.ts ***!
  \**********************************************************/
/*! exports provided: ScrollButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollButtonComponent", function() { return ScrollButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");



var ScrollButtonComponent = /** @class */ (function () {
    function ScrollButtonComponent() {
        this.animateCounter = 0;
        this.animateValue = 'start';
        this.scrollToId = 'About';
    }
    ScrollButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.setInterval(function () { _this.animateValue = _this.animateCounter % 2 === 0 ? 'end' : 'start'; _this.animateCounter += 1; }, 2000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ScrollButtonComponent.prototype, "scrollToId", void 0);
    ScrollButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scroll-button',
            template: __webpack_require__(/*! ./scroll-button.component.html */ "./src/app/scroll-button/scroll-button.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fadeOut', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('start', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        top: '5px',
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('end', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        top: '30px',
                        opacity: 0.1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('start => end', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1.6s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('end => start', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('0.1s')
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./scroll-button.component.scss */ "./src/app/scroll-button/scroll-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScrollButtonComponent);
    return ScrollButtonComponent;
}());



/***/ }),

/***/ "./src/app/scroll-top-button/scroll-top-button.component.html":
/*!********************************************************************!*\
  !*** ./src/app/scroll-top-button/scroll-top-button.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"scrollTopButton\" appSmoothScrolling data-target-link=\"Home\" class=\"scroll-top-container effect\">\r\n    <i class=\"fa fa-angle-up\"></i>\r\n</div>"

/***/ }),

/***/ "./src/app/scroll-top-button/scroll-top-button.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/scroll-top-button/scroll-top-button.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --color-bg: rgb(51, 51, 51);\n  --color-bg-hover: #FFF; }\n\n.scroll-top-container {\n  display: none;\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  background-color: var(--color-bg);\n  border: 2px solid var(--color-bg);\n  right: 25px;\n  bottom: 25px;\n  font-size: 28px;\n  line-height: 38px;\n  text-align: center;\n  z-index: 5;\n  color: var(--color-bg-hover);\n  cursor: pointer; }\n\n.scroll-top-container:hover {\n    background-color: var(--color-bg-hover);\n    color: var(--color-bg); }\n\n.show-scroll-top-button {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2Nyb2xsLXRvcC1idXR0b24vQzpcXHdvcmtcXHByb2ZpbC9zcmNcXGFwcFxcc2Nyb2xsLXRvcC1idXR0b25cXHNjcm9sbC10b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQVc7RUFDWCxzQkFBaUIsRUFBQTs7QUFHckI7RUFDSSxhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLGlDQUFpQztFQUNqQyxXQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw0QkFBNEI7RUFDNUIsZUFBZSxFQUFBOztBQWRuQjtJQWdCUSx1Q0FBdUM7SUFDdkMsc0JBQXNCLEVBQUE7O0FBSTlCO0VBQ0ksY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2Nyb2xsLXRvcC1idXR0b24vc2Nyb2xsLXRvcC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICAtLWNvbG9yLWJnOiByZ2IoNTEsIDUxLCA1MSk7XHJcbiAgICAtLWNvbG9yLWJnLWhvdmVyOiAjRkZGO1xyXG59XHJcblxyXG4uc2Nyb2xsLXRvcC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYmcpO1xyXG4gICAgcmlnaHQ6MjVweDtcclxuICAgIGJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1iZy1ob3Zlcik7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZy1ob3Zlcik7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWJnKTtcclxuICAgIH1cclxufVxyXG5cclxuLnNob3ctc2Nyb2xsLXRvcC1idXR0b24ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/scroll-top-button/scroll-top-button.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/scroll-top-button/scroll-top-button.component.ts ***!
  \******************************************************************/
/*! exports provided: ScrollTopButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollTopButtonComponent", function() { return ScrollTopButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ScrollTopButtonComponent = /** @class */ (function () {
    function ScrollTopButtonComponent() {
    }
    ScrollTopButtonComponent.prototype.ngOnInit = function () {
    };
    ScrollTopButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scroll-top-button',
            template: __webpack_require__(/*! ./scroll-top-button.component.html */ "./src/app/scroll-top-button/scroll-top-button.component.html"),
            styles: [__webpack_require__(/*! ./scroll-top-button.component.scss */ "./src/app/scroll-top-button/scroll-top-button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ScrollTopButtonComponent);
    return ScrollTopButtonComponent;
}());



/***/ }),

/***/ "./src/app/section/section.component.html":
/*!************************************************!*\
  !*** ./src/app/section/section.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div scrollableBackgroundImage class=\"section-container {{backgroundColorClass}}\" [ngClass]=\"{'background-pic-m low-opacity' : sectionType === 'Home'}\">\r\n  <div *ngIf=\"sectionType === 'Home'\" class=\"overlay-shadow\"></div>\r\n  <div class=\"section\">\r\n    <app-home       *ngIf=\"sectionType === 'Home'\"></app-home>\r\n    <app-about      *ngIf=\"sectionType === 'About'\"></app-about>\r\n    <app-portfolio  *ngIf=\"sectionType === 'Services'\" [layoutType]=\"sectionType\"></app-portfolio>\r\n    <app-portfolio  *ngIf=\"sectionType === 'Work'\" [layoutType]=\"sectionType\"></app-portfolio>\r\n    <app-posts      *ngIf=\"sectionType === 'Posts'\"></app-posts>\r\n    <app-contact    *ngIf=\"sectionType === 'Contact'\"></app-contact>\r\n  </div>\r\n  <app-scroll-button *ngIf=\"sectionType === 'Home'\"></app-scroll-button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/section/section.component.scss":
/*!************************************************!*\
  !*** ./src/app/section/section.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-container {\n  width: 100%;\n  padding: 100px 0px; }\n  .section-container .section {\n    max-width: 1170px;\n    margin: 0 auto;\n    position: relative;\n    z-index: 1;\n    text-align: center; }\n  .overlay-shadow {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  right: 0; }\n  .background-pic-m {\n  background-image: url('background-mountain.jpg');\n  background-position: 50% 0px;\n  background-size: cover;\n  height: 100vh;\n  position: relative;\n  padding: 0px; }\n  .background-pic-m .section {\n    margin: 0 auto;\n    position: relative;\n    top: 35vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbi9DOlxcd29ya1xccHJvZmlsL3NyY1xcYXBwXFxzZWN0aW9uXFxzZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksV0FBVztFQUNYLGtCQUFrQixFQUFBO0VBRnRCO0lBS1EsaUJBQWlCO0lBQ2pCLGNBQWM7SUFFZCxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtCQUFrQixFQUFBO0VBSTFCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVU7RUFDVixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLE1BQU07RUFDTixRQUFRLEVBQUE7RUFHWjtFQUNJLGdEQUE2RDtFQUM3RCw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBTmhCO0lBUVEsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlY3Rpb24tY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTAwcHggMHB4O1xyXG4gICAgXHJcbiAgICAuc2VjdGlvbiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ub3ZlcmxheS1zaGFkb3cge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZC1waWMtbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9iYWNrZ3JvdW5kLW1vdW50YWluLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLnNlY3Rpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDM1dmg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/section/section.component.ts":
/*!**********************************************!*\
  !*** ./src/app/section/section.component.ts ***!
  \**********************************************/
/*! exports provided: SectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionComponent", function() { return SectionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SectionComponent = /** @class */ (function () {
    function SectionComponent() {
    }
    SectionComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionComponent.prototype, "backgroundColorClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], SectionComponent.prototype, "sectionType", void 0);
    SectionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-section',
            template: __webpack_require__(/*! ./section.component.html */ "./src/app/section/section.component.html"),
            styles: [__webpack_require__(/*! ./section.component.scss */ "./src/app/section/section.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SectionComponent);
    return SectionComponent;
}());



/***/ }),

/***/ "./src/app/smooth-scrolling.directive.ts":
/*!***********************************************!*\
  !*** ./src/app/smooth-scrolling.directive.ts ***!
  \***********************************************/
/*! exports provided: SmoothScrollingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmoothScrollingDirective", function() { return SmoothScrollingDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SmoothScrollingDirective = /** @class */ (function () {
    function SmoothScrollingDirective(el) {
        this.el = el;
    }
    SmoothScrollingDirective.prototype.onclick = function () {
        var id = this.el.nativeElement.dataset.targetLink;
        if (!id) {
            var attributes = this.el.nativeElement.attributes;
            id = attributes.name ? attributes.name.value : attributes.title.value;
        }
        var elementToScrollTo = document.getElementById(id);
        elementToScrollTo.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], SmoothScrollingDirective.prototype, "onclick", null);
    SmoothScrollingDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appSmoothScrolling]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], SmoothScrollingDirective);
    return SmoothScrollingDirective;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\work\profil\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map