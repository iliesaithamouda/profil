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

module.exports = "\n<div class=\"box-list\">\n  <div class=\"box\">\n    <h3 class=\"section-subtitle\">Hi There! I'm Ilyes Ait Hamouda</h3>\n    <p class=\"description\">\n      I'm a professional developer from Montréal, Canada.\n      I create beautiful professional websites using best practice accessibility.\n      I enjoy turning complex problems into simple, beautiful and intuitive interface designs.\n    </p>\n    <div class=\"flex-box-container\">\n      <div class=\"flex-box\"><a class=\"effect\" href=\"mailto:iliesaithamouda@gmail.com\"><i class=\"fas fa-envelope\"></i> iliesaithamouda@gmail.com</a></div>\n      <div class=\"flex-box\"><a class=\"effect\" href=\"tel:15144754146\"><i class=\"fas fa-mobile-alt\"></i> +1-514-475-4146</a></div>\n    </div>\n    <div class=\"flex-box-container grid-container-min-1-fr\">  \n      <a href=\"https://www.linkedin.com/in/iliesaithamouda\" target=\"_blank\">\n        <div class=\"flex-box media-icons effect\">\n          <i class=\"fab fa-linkedin-in\"></i>\n        </div>\n      </a>\n      <a href=\"https://medium.com/@iliesaithamouda\" target=\"_blank\">\n        <div class=\"flex-box media-icons effect\">\n          <i class=\"fab fa-medium\"></i>\n        </div>\n      </a>\n    </div>\n    \n\n  </div>\n  <div class=\"box\">\n    <ng-template ngFor let-expertise [ngForOf]=\"expertises\">\n      <app-progressive-bar [title]=\"expertise.domain\" [progress]=\"expertise.percentage\"></app-progressive-bar>\n    </ng-template>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-list {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));\n  text-align: left;\n  padding: 20px; }\n  .box-list .box {\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column; }\n  .box-list .box .section-subtitle {\n      color: #333;\n      font-size: 26px; }\n  .box-list .box .description {\n      color: #484848;\n      font-size: 16px;\n      line-height: 26px; }\n  .box-list .box .flex-box-container {\n      display: grid;\n      grid-gap: 10px;\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      grid-row-gap: 20px; }\n  .box-list .box .flex-box-container .flex-box {\n        display: flex;\n        flex-direction: column;\n        justify-self: left; }\n  .box-list .box .flex-box-container .justify-right {\n        justify-content: right;\n        justify-self: right; }\n  .box-list .box .flex-box-container .media-icons {\n        font-size: 20px;\n        border: 1px solid black;\n        width: 19px;\n        text-align: center;\n        padding: 10px;\n        border-radius: 24px; }\n  .box-list .box .flex-box-container a:hover .media-icons {\n        background-color: #484848;\n        color: #FFF !important; }\n  .box-list .box .grid-container-min-1-fr {\n      grid-template-columns: 1fr 1fr 6fr;\n      margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixjQUFjO0VBQ2QsMkRBQTJEO0VBQzNELGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7RUFMakI7SUFPUSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBVDlCO01BWVksV0FBVztNQUNYLGVBQWUsRUFBQTtFQWIzQjtNQWlCWSxjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQixFQUFBO0VBbkI3QjtNQXVCWSxhQUFhO01BQ2IsY0FBYztNQUNkLDJEQUEwRDtNQUMxRCxrQkFBa0IsRUFBQTtFQTFCOUI7UUE2QmdCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsa0JBQWtCLEVBQUE7RUEvQmxDO1FBbUNnQixzQkFBc0I7UUFDdEIsbUJBQW1CLEVBQUE7RUFwQ25DO1FBd0NnQixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQixFQUFBO0VBN0NuQztRQWtEb0IseUJBQXlCO1FBQ3pCLHNCQUFzQixFQUFBO0VBbkQxQztNQXlEWSxrQ0FBa0M7TUFDbEMsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gtbGlzdCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWdhcDogNDBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMyNXB4LCAxZnIpKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgLmJveCB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAgICAgLnNlY3Rpb24tc3VidGl0bGUge1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLmZsZXgtYm94LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgZ3JpZC1nYXA6IDEwcHg7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCxtaW5tYXgoMjAwcHgsIDFmcikpO1xuICAgICAgICAgICAgZ3JpZC1yb3ctZ2FwOiAyMHB4O1xuXG4gICAgICAgICAgICAuZmxleC1ib3gge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgLmp1c3RpZnktcmlnaHQge1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiByaWdodDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm1lZGlhLWljb25zIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE5cHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYTpob3ZlciB7IFxuICAgICAgICAgICAgICAgIC5tZWRpYS1pY29ucyB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtY29udGFpbmVyLW1pbi0xLWZyIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA2ZnI7Ly9yZXBlYXQoYXV0by1maXQsbWlubWF4KDMwcHgsIDQwcHgpKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICB9XG59XG4gICJdfQ== */"

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-message></app-message>\r\n<div class=\"app\">\r\n  <app-menu></app-menu>\r\n  <app-section id=\"Home\" [sectionType]=\"'Home'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\r\n  <app-section id=\"About\" [sectionType]=\"'About'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\r\n  <app-section id=\"Services\" [sectionType]=\"'Services'\" [backgroundColorClass]=\"'bg-color-medium'\"></app-section>\r\n <!-- <app-section id=\"Quote\" [sectionType]=\"'Quote'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section> -->\r\n  <app-section id=\"Work\" [sectionType]=\"'Work'\" [backgroundColorClass]=\"'bg-color-medium'\"></app-section>\r\n  <app-section id=\"Posts\" [sectionType]=\"'Posts'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\r\n  <app-section id=\"Contact\" [sectionType]=\"'Contact'\" [backgroundColorClass]=\"'bg-color-medium'\"></app-section>\r\n  <app-footer></app-footer>\r\n  <app-scroll-top-button></app-scroll-top-button>\r\n</div>\r\n\r\n"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _section_section_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./section/section.component */ "./src/app/section/section.component.ts");
/* harmony import */ var _scroll_background_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scroll-background.directive */ "./src/app/scroll-background.directive.ts");
/* harmony import */ var _smooth_scrolling_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./smooth-scrolling.directive */ "./src/app/smooth-scrolling.directive.ts");
/* harmony import */ var _deprecated_onscroll_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_deprecated_onscroll.directive */ "./src/app/_deprecated_onscroll.directive.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scroll-button/scroll-button.component */ "./src/app/scroll-button/scroll-button.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _progressive_bar_progressive_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./progressive-bar/progressive-bar.component */ "./src/app/progressive-bar/progressive-bar.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/portfolio/portfolio.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _posts_posts_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./posts/posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _scroll_top_button_scroll_top_button_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./scroll-top-button/scroll-top-button.component */ "./src/app/scroll-top-button/scroll-top-button.component.ts");
/* harmony import */ var _quote_quote_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./quote/quote.component */ "./src/app/quote/quote.component.ts");
/* harmony import */ var _shared_button_button_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/button/button.component */ "./src/app/shared/button/button.component.ts");
/* harmony import */ var _shared_app_message_app_message_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/app-message/app-message.component */ "./src/app/shared/app-message/app-message.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
                _section_section_component__WEBPACK_IMPORTED_MODULE_9__["SectionComponent"],
                _scroll_background_directive__WEBPACK_IMPORTED_MODULE_10__["ScrollBackgroundDirective"],
                _smooth_scrolling_directive__WEBPACK_IMPORTED_MODULE_11__["SmoothScrollingDirective"],
                _deprecated_onscroll_directive__WEBPACK_IMPORTED_MODULE_12__["OnscrollDirective"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _scroll_button_scroll_button_component__WEBPACK_IMPORTED_MODULE_14__["ScrollButtonComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_15__["AboutComponent"],
                _progressive_bar_progressive_bar_component__WEBPACK_IMPORTED_MODULE_16__["ProgressiveBarComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_17__["PortfolioComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_18__["FooterComponent"],
                _posts_posts_component__WEBPACK_IMPORTED_MODULE_19__["PostsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_20__["ContactComponent"],
                _scroll_top_button_scroll_top_button_component__WEBPACK_IMPORTED_MODULE_21__["ScrollTopButtonComponent"],
                _quote_quote_component__WEBPACK_IMPORTED_MODULE_22__["QuoteComponent"],
                _shared_button_button_component__WEBPACK_IMPORTED_MODULE_23__["ButtonComponent"],
                _shared_app_message_app_message_component__WEBPACK_IMPORTED_MODULE_24__["AppMessageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
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

module.exports = "<div class=\"contact-container\">\r\n    <div class=\"title-container\">\r\n      <h2>Contact me</h2>\r\n    </div>\r\n    <div class=\"grid-container contact-icons\">\r\n      <div class=\"box box-glue contact-form-container\">\r\n        <div class=\"circle-wrapper\">\r\n            <i class=\"fas fa-envelope\"></i>\r\n        </div>\r\n        <div class=\"label-wrapper\">Email</div>\r\n        <div class=\"text-wrapper\"><a class=\"effect\" href=\"mailto:iliesaithamouda@gmail.com\">iliesaithamouda@outlook.com</a></div>\r\n      </div>\r\n      <div class=\"box box-glue contact-form-container\">\r\n          <div class=\"circle-wrapper\">\r\n              <i class=\"fas fa-envelope\"></i>\r\n          </div>\r\n          <div class=\"label-wrapper\">Phone number</div>\r\n          <div class=\"text-wrapper\"><a class=\"effect\" href=\"tel:15144754146\">+1 514-475-4146</a></div>\r\n      </div>\r\n  \r\n    </div>\r\n    <div [formGroup]=\"contactForm\" (ngSubmit)=\"submitForm()\" class=\"form-group\">\r\n      <div class=\"grid-container contact-form\">\r\n        <div class=\"box contact-form-container\">\r\n          <input [ngClass]=\"{'error-input': contactF.name.errors?.required && contactF.name.dirty }\" name=\"name\" formControlName=\"name\" type=\"text\" placeholder=\"Name\" />\r\n          <div *ngIf=\"contactF.name.errors?.required && contactF.name.dirty\" class=\"invalid-feedback\">\r\n              please enter a valid name.\r\n          </div>\r\n        </div>\r\n        <div class=\"box contact-form-container\">\r\n          <input name=\"email\" formControlName=\"email\" type=\"text\" placeholder=\"Email\" [ngClass]=\"{'error-input': contactF.email.errors?.required && contactF.email.dirty }\"/>\r\n          <div *ngIf=\"contactF.email.errors?.required && contactF.email.dirty\" class=\"invalid-feedback\">\r\n              please enter a valid email.\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"text-area-container\">\r\n        <textarea formControlName=\"message\" name=\"message\" placeholder=\"Message\" [ngClass]=\"{'error-input': contactF.message.errors?.required && contactF.message.dirty }\"></textarea>\r\n        <div *ngIf=\"contactF.message.errors?.required && contactF.message.dirty\" class=\"invalid-feedback\">\r\n            please enter a message.\r\n        </div>\r\n      </div>\r\n      <div class=\"button-wrapper\">\r\n        <app-button [disabled]=\"onValidation\" (clicked)=\"submitForm()\">Send Message</app-button>\r\n      </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-container {\n  width: 80%;\n  margin: 0 auto;\n  font-size: 15px; }\n  .contact-container .title-container {\n    color: #333;\n    padding-bottom: 40px; }\n  .contact-container .title-container h2 {\n      position: relative;\n      font-weight: 700;\n      line-height: 43px;\n      padding-bottom: 15px;\n      font-size: 36px;\n      margin: 0px;\n      display: inline-block; }\n  .contact-container .title-container h2::after {\n        content: '';\n        position: absolute;\n        background-color: #444444;\n        height: 2px;\n        left: 4px;\n        bottom: 0px;\n        width: 50px;\n        text-align: center; }\n  .contact-container .grid-container {\n    display: grid;\n    grid-column-gap: 70px;\n    grid-row-gap: 40px;\n    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));\n    text-align: left;\n    padding: 40px 0px; }\n  .contact-container .grid-container .box {\n      display: grid;\n      flex-direction: column; }\n  .contact-container .grid-container .box input {\n        width: 100%;\n        border: 1px solid #ddd;\n        color: #232323;\n        padding: 8px 16px;\n        font-size: 15px;\n        width: inherit; }\n  .contact-container .grid-container .box input.error-input {\n          border: 1px solid #CD5C5C; }\n  .contact-container .grid-container .box .invalid-feedback {\n        color: #CD5C5C;\n        text-align: center; }\n  .contact-container .grid-container .box .circle-wrapper {\n        grid-area: logo;\n        width: 50px;\n        height: 50px;\n        background-color: #000000;\n        color: #FFFFFF;\n        text-align: center;\n        line-height: 50px;\n        border-radius: 30px; }\n  .contact-container .grid-container .box .label-wrapper {\n        grid-area: label; }\n  .contact-container .grid-container .box .text-wrapper {\n        grid-area: text; }\n  .contact-container .grid-container .box-glue {\n      grid-template-areas: \"logo label\" \"logo text\";\n      grid-template-columns: 1fr 4fr; }\n  .contact-container .text-area-container {\n    margin-bottom: 40px; }\n  .contact-container .text-area-container textarea {\n      resize: none;\n      width: 96%;\n      height: 190px;\n      padding: 8px 16px;\n      color: #232323;\n      border: 1px solid #ddd;\n      font-size: 15px; }\n  .contact-container .text-area-container textarea.error-input {\n        border: 1px solid #CD5C5C; }\n  .contact-container .button-wrapper {\n    width: 200px;\n    margin: 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFTO0VBQ1QsY0FBYTtFQUNiLGVBQWUsRUFBQTtFQUhuQjtJQU1RLFdBQVc7SUFDWCxvQkFBb0IsRUFBQTtFQVA1QjtNQVNZLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsV0FBVztNQUNYLHFCQUFxQixFQUFBO0VBZmpDO1FBaUJnQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUF4QmxDO0lBOEJRLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFuQ3pCO01BcUNZLGFBQWE7TUFDYixzQkFBc0IsRUFBQTtFQXRDbEM7UUF3Q2dCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixlQUFlO1FBQ2YsY0FBYyxFQUFBO0VBN0M5QjtVQStDb0IseUJBQXdCLEVBQUE7RUEvQzVDO1FBb0RnQixjQUFjO1FBQ2Qsa0JBQWtCLEVBQUE7RUFyRGxDO1FBeURnQixlQUFlO1FBQ2YsV0FBVztRQUNYLFlBQVk7UUFDWix5QkFBeUI7UUFDekIsY0FBYztRQUNkLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsbUJBQW1CLEVBQUE7RUFoRW5DO1FBb0VnQixnQkFBZ0IsRUFBQTtFQXBFaEM7UUF1RWdCLGVBQWUsRUFBQTtFQXZFL0I7TUE0RVksNkNBQytCO01BQ1gsOEJBQThCLEVBQUE7RUE5RTlEO0lBOEZRLG1CQUFtQixFQUFBO0VBOUYzQjtNQW1GWSxZQUFZO01BQ1osVUFBVTtNQUNWLGFBQWE7TUFDYixpQkFBaUI7TUFDakIsY0FBYztNQUNkLHNCQUFzQjtNQUN0QixlQUFlLEVBQUE7RUF6RjNCO1FBMkZnQix5QkFBd0IsRUFBQTtFQTNGeEM7SUFpR1EsWUFBWTtJQUNaLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDo4MCU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICAudGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAmIGgyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogNzBweDtcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyNXB4LCAxZnIpKTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNDBweCAwcHg7XG4gICAgICAgIC5ib3gge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICAgICAgJiBpbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICAgICAgJi5lcnJvci1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkI0NENUM1QztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0NENUM1QztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaXJjbGUtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsb2dvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGFiZWwtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3gtZ2x1ZSB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvZ28gbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvZ28gdGV4dFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRleHQtYXJlYS1jb250YWluZXIge1xuICAgICAgICAmIHRleHRhcmVhIHtcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XG4gICAgICAgICAgICBoZWlnaHQ6IDE5MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAmLmVycm9yLWlucHV0IHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCNDRDVDNUM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICB9XG4gICAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgXG59XG5cbiJdfQ== */"

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
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.service */ "./src/app/contact/contact.service.ts");
/* harmony import */ var _shared_app_message_app_message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/app-message/app-message.service */ "./src/app/shared/app-message/app-message.service.ts");





var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb, contactService, messageService) {
        this.fb = fb;
        this.contactService = contactService;
        this.messageService = messageService;
        this.onValidation = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.fb.group({
            name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            message: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ContactComponent.prototype.submitForm = function () {
        var _this = this;
        if (this.onValidation)
            return;
        if (this.contactForm.invalid)
            return;
        this.onValidation = !this.onValidation;
        this.contactService.sendEmail(this.contactForm.get('email').value, this.contactForm.get('name').value, this.contactForm.get('message').value)
            .subscribe(function (response) {
            _this.contactForm.reset();
            _this.messageService.displayMessage('success', 'your message has been sent successfully, thank you for your interest!');
            _this.onValidation = !_this.onValidation;
        }, function (error) {
            _this.onValidation = !_this.onValidation;
            _this.messageService.displayMessage('error', 'an error occured while trying to send the message, please retry later!');
        }, function () {
            _this.onValidation = !_this.onValidation;
        });
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"], _shared_app_message_app_message_service__WEBPACK_IMPORTED_MODULE_4__["AppMessageService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.service.ts":
/*!********************************************!*\
  !*** ./src/app/contact/contact.service.ts ***!
  \********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var postUrl = 'https://loyal-polymer-253901.appspot.com/messages';
var mailServerUserId = 'JjU7cb91ppja0YqdR6wN';
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.sendEmail = function (email, subject, message) {
        var payload = { id: mailServerUserId, email: email, subject: subject, message: message };
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(postUrl, payload, httpOptions);
    };
    ContactService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactService);
    return ContactService;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\" >\n  <div class=\"footer-title\">\n    Ilyes\n  </div>\n  <div class=\"social-media-links\">\n    <a class=\"icone\" href=\"https://www.linkedin.com/in/iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\n    <a class=\"icone\" href=\"https://medium.com/@iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-medium-m\"></i></a>\n    <a class=\"icone\" href=\"https://github.com/iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-github\"></i></a>\n  </div>\n  <div class=\"copyrights\">\n    Ilies ait hamouda © 2019. all right reserved.\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer-container {\n  padding-top: 60px;\n  padding-bottom: 60px;\n  text-align: center;\n  background-color: #f1f1f1; }\n  .footer-container .footer-title {\n    margin: 8px 0;\n    display: inline-block;\n    margin-bottom: 6px;\n    font-size: 22px;\n    font-weight: 700;\n    color: #111; }\n  .footer-container .social-media-links {\n    padding: 10px 0;\n    color: #000;\n    font-size: 20px; }\n  .footer-container .social-media-links .icone {\n      padding: 0px 10px;\n      color: #000; }\n  .footer-container .copyrights {\n    padding: 10px 0;\n    font-size: 15px;\n    text-transform: capitalize; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIseUJBQXlCLEVBQUE7RUFKN0I7SUFPUSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTtFQVpuQjtJQWdCUSxlQUFlO0lBQ2YsV0FBVztJQUNYLGVBQWUsRUFBQTtFQWxCdkI7TUFvQlksaUJBQWdCO01BQ2hCLFdBQVcsRUFBQTtFQXJCdkI7SUEwQlEsZUFBZTtJQUNmLGVBQWU7SUFDZiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG5cbiAgICAuZm9vdGVyLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMxMTE7XG4gICAgfVxuXG4gICAgLnNvY2lhbC1tZWRpYS1saW5rcyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgY29sb3I6ICMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgLmljb25lIHtcbiAgICAgICAgICAgIHBhZGRpbmc6MHB4IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY29weXJpZ2h0cyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG4iXX0= */"

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

module.exports = "<div class=\"profile-pic-container\">\n  <img src=\"./assets/ilies.jpg\" alt=\"profil-picture\"/>\n</div>\n<div class=\"introduction-container\">\n  <h1>Hi, I'm Ilyes</h1>\n  <span class=\"introduction-phrase\"></span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic-container img {\n  width: 170px;\n  border-radius: 50%;\n  box-shadow: 0px -4px 21px 23px rgba(0, 0, 0, 0.63); }\n\n.introduction-container h1 {\n  font-size: 50px;\n  font-weight: 700;\n  line-height: 60px;\n  color: #FFFFFF; }\n\n.introduction-container .introduction-phrase {\n  font-size: 26px;\n  color: #bfbfbf;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFXO0VBRVgsa0JBQWtCO0VBRzFCLGtEQUErQyxFQUFBOztBQUkvQztFQUVRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFMdEI7RUFTUSxlQUFlO0VBQ2YsY0FBeUI7RUFDekIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWMtY29udGFpbmVyIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDoxNzBweDtcbiAgICAgICAgLy8gYm9yZGVyOiAzcHggc29saWQgcmdiKDIyMywgMjIzLCAyMjMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IC00cHggMjFweCAyM3B4IHJnYmEoMCwwLDAsMC42Myk7XG4tbW96LWJveC1zaGFkb3c6IDBweCAtNHB4IDIxcHggMjNweCByZ2JhKDAsMCwwLDAuNjMpO1xuYm94LXNoYWRvdzogMHB4IC00cHggMjFweCAyM3B4IHJnYmEoMCwwLDAsMC42Myk7XG4gICAgfVxufVxuXG4uaW50cm9kdWN0aW9uLWNvbnRhaW5lciB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB9XG5cbiAgICAuaW50cm9kdWN0aW9uLXBocmFzZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgY29sb3I6IHJnYigxOTEsIDE5MSwgMTkxKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG59Il19 */"

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
            strings: ["A human being", "A Husband", "A Father", "A code lover", "Oh and a Developer :)"],
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

module.exports = "<header [@animateStickyMenu]=\"menuState\" class=\"menu-container\">\n  <nav [@animateColorMenu]=\"menuState\" class=\"menu-grid-container\">\n    <div class=\"logo-container\"><img [src]=\"logoPath\"></div>\n    <div (click)=\"toggleMenu = !toggleMenu\" class=\"ham-menu\"><i class=\"fas fa-bars\"></i></div>\n    <div class=\"menu-item-container\" [ngClass]=\"{'menu-item-container-selected': menuItem.selected, 'menu-item-fixed': menuState === 'fixed'}\" *ngFor=\"let menuItem of menu.items\">\n      <span appSmoothScrolling attr.data-target-link=\"{{menuItem.label}}\" (click)=\"setMenuItemAsSelected(menuItem)\" class=\"menu-item\" >{{ menuItem.label.toUpperCase() }}</span>\n    </div>\n  </nav>\n  <div [@animateColorMenu]=\"menuState\" class=\"menu-items-mobile\" [ngClass]=\"{'block' : toggleMenu, 'hidden': !toggleMenu}\">\n    <div (click)=\"toggleMenu = !toggleMenu\" class=\"menu-item-container-mobile menu-item\" *ngFor=\"let menuItem of menu.items\" appSmoothScrolling attr.data-target-link=\"{{menuItem.label}}\">\n      {{ menuItem.label.toUpperCase() }}\n    </div>\n  </div>\n</header>\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\n  position: fixed;\n  width: 100%;\n  z-index: 2; }\n  .menu-container .menu-grid-container {\n    max-width: 1170px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(1, minmax(150px, 1fr)) repeat(6, minmax(80px, 1fr));\n    grid-template-rows: 50px;\n    grid-column-gap: 10px;\n    color: #FFFFFF;\n    --def: #96B7C4; }\n  .menu-container .menu-grid-container .menu-item-container {\n      align-items: center;\n      display: grid;\n      justify-items: center;\n      transition: all 0.4s cubic-bezier(0.77, 0, 0.175, 1);\n      -webkit-user-select: none;\n         -moz-user-select: none;\n          -ms-user-select: none;\n              user-select: none;\n      position: relative; }\n  .menu-container .menu-grid-container.menu-item-container.menu-item-fixed:before {\n      border: 1px solid #000; }\n  .menu-container .menu-grid-container .menu-item-container:before, .menu-container .menu-grid-container .menu-item-container:after {\n      content: '';\n      position: absolute;\n      transition: inherit;\n      z-index: -1; }\n  .menu-container .menu-grid-container .menu-item-container:before {\n      top: 0;\n      left: 50%;\n      height: 100%;\n      width: 0; }\n  .menu-container .menu-grid-container .menu-item-container-selected, .menu-container .menu-grid-container .menu-item-container:before {\n      border-bottom: 2px solid red; }\n  .menu-container .menu-grid-container .menu-item-container:after {\n      bottom: 0;\n      left: 0;\n      height: 0;\n      width: 100%; }\n  .menu-container .menu-grid-container .menu-item-container:not(.menu-item-container-selected):hover {\n      color: var(--def);\n      transition-delay: .3s; }\n  .menu-container .menu-grid-container .menu-item-container:not(.menu-item-container-selected):hover:before {\n      transition-delay: 0s;\n      left: 0;\n      width: 100%; }\n  .menu-container .menu-grid-container .menu-item-container:not(.menu-item-container-selected):hover:after {\n      transition-delay: .4s;\n      top: 0;\n      height: 100%; }\n  .menu-container .menu-grid-container .logo-container {\n      width: 100px;\n      padding: 5px 10px; }\n  .menu-container .menu-grid-container .logo-container img {\n        width: inherit; }\n  .menu-container .menu-item {\n    font-family: \"Lato\", sans-serif;\n    font-size: 13px;\n    font-weight: 700;\n    cursor: pointer; }\n  .menu-container .menu-item-container:last-child {\n    margin-right: 20px; }\n  @media only screen and (min-width: 390px) {\n    .menu-container .ham-menu {\n      display: none; }\n    .menu-container .menu-item-container {\n      display: flex; }\n    .menu-container .menu-items-mobile {\n      display: none; } }\n  @media only screen and (max-width: 700px) {\n  .menu-container {\n    padding-top: 0px !important; }\n    .menu-container .menu-grid-container {\n      grid-template-columns: 3fr .5fr;\n      justify-items: center;\n      padding-left: 37px; }\n      .menu-container .menu-grid-container .ham-menu {\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        font-size: 30px;\n        cursor: pointer; }\n      .menu-container .menu-grid-container .menu-item-container > span {\n        display: none; }\n      .menu-container .menu-grid-container .logo-container {\n        width: 100px; }\n    .menu-container .menu-items-mobile {\n      overflow: hidden;\n      display: block; }\n      .menu-container .menu-items-mobile.hidden {\n        height: 0px;\n        transition: .5s height ease-in-out; }\n      .menu-container .menu-items-mobile.block {\n        height: 220px;\n        transition: .5s height ease-in-out; }\n    .menu-container .menu-item-container-mobile {\n      padding: 10px 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVUsRUFBQTtFQUhkO0lBS1EsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUZBQWlGO0lBQ2pGLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGNBQU0sRUFBQTtFQVpkO01BZVksbUJBQW1CO01BQ25CLGFBQWE7TUFDYixxQkFBcUI7TUFDckIsb0RBQW1EO01BQ25ELHlCQUFpQjtTQUFqQixzQkFBaUI7VUFBakIscUJBQWlCO2NBQWpCLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtFQXBCOUI7TUF1Qlksc0JBQXNCLEVBQUE7RUF2QmxDO01BMEJZLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLFdBQVcsRUFBQTtFQTdCdkI7TUFpQ1ksTUFBTTtNQUNOLFNBQVM7TUFDVCxZQUFZO01BQ1osUUFBUSxFQUFBO0VBcENwQjtNQXdDWSw0QkFBNEIsRUFBQTtFQXhDeEM7TUE0Q1ksU0FBUztNQUNULE9BQU87TUFDUCxTQUFTO01BQ1QsV0FBVyxFQUFBO0VBL0N2QjtNQW9EWSxpQkFBaUI7TUFDakIscUJBQXFCLEVBQUE7RUFyRGpDO01BeURZLG9CQUFvQjtNQUNwQixPQUFPO01BQ1AsV0FBVyxFQUFBO0VBM0R2QjtNQWdFWSxxQkFBcUI7TUFDckIsTUFBTTtNQUNOLFlBQVksRUFBQTtFQWxFeEI7TUF1RVksWUFBWTtNQUNaLGlCQUFpQixFQUFBO0VBeEU3QjtRQTBFZ0IsY0FBYyxFQUFBO0VBMUU5QjtJQWdGUSwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7RUFuRnZCO0lBdUZRLGtCQUFrQixFQUFBO0VBTXRCO0lBN0ZKO01BK0ZZLGFBQWEsRUFBQTtJQS9GekI7TUFrR1ksYUFBYSxFQUFBO0lBbEd6QjtNQXFHWSxhQUFhLEVBQUEsRUFDaEI7RUFLVDtFQUNJO0lBQ0ksMkJBQTJCLEVBQUE7SUFEL0I7TUFJUSwrQkFBK0I7TUFDL0IscUJBQXFCO01BQ3JCLGtCQUFrQixFQUFBO01BTjFCO1FBUVksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixxQkFBcUI7UUFDckIsZUFBZTtRQUNmLGVBQWUsRUFBQTtNQVozQjtRQWVZLGFBQWEsRUFBQTtNQWZ6QjtRQWtCWSxZQUFZLEVBQUE7SUFsQnhCO01Bc0JRLGdCQUFnQjtNQUNoQixjQUFjLEVBQUE7TUF2QnRCO1FBMEJZLFdBQVc7UUFDWCxrQ0FBa0MsRUFBQTtNQTNCOUM7UUE4QlksYUFBYTtRQUNiLGtDQUFrQyxFQUFBO0lBL0I5QztNQW9DUSxrQkFBa0IsRUFBQSxFQUNyQiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgLm1lbnUtZ3JpZC1jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDExNzBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIG1pbm1heCgxNTBweCwgMWZyKSkgcmVwZWF0KDYsIG1pbm1heCg4MHB4LCAxZnIpKTsgLy8gM2ZyIDJmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1MHB4O1xuICAgICAgICBncmlkLWNvbHVtbi1nYXA6IDEwcHg7XG4gICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAtLWRlZjogIzk2QjdDNDtcbiAgICAgICAgXG4gICAgICAgICYgLm1lbnUtaXRlbS1jb250YWluZXIge1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGN1YmljLWJlemllcigwLjc3LCAwLCAwLjE3NSwgMSk7XG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgICAgICAmLm1lbnUtaXRlbS1jb250YWluZXIubWVudS1pdGVtLWZpeGVkOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xuICAgICAgICB9ICBcbiAgICAgICAgLm1lbnUtaXRlbS1jb250YWluZXI6YmVmb3JlLCAubWVudS1pdGVtLWNvbnRhaW5lcjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gICAgICAgICAgICB6LWluZGV4OiAtMTsgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtaXRlbS1jb250YWluZXI6YmVmb3JlIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtaXRlbS1jb250YWluZXItc2VsZWN0ZWQsIC5tZW51LWl0ZW0tY29udGFpbmVyOmJlZm9yZSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgcmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtaXRlbS1jb250YWluZXI6YWZ0ZXIge1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW52KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWl0ZW0tY29udGFpbmVyOm5vdCgubWVudS1pdGVtLWNvbnRhaW5lci1zZWxlY3RlZCk6aG92ZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWRlZik7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XG4gICAgICAgIH1cblxuICAgICAgICAubWVudS1pdGVtLWNvbnRhaW5lcjpub3QoLm1lbnUtaXRlbS1jb250YWluZXItc2VsZWN0ZWQpOmhvdmVyOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZW51LWl0ZW0tY29udGFpbmVyOm5vdCgubWVudS1pdGVtLWNvbnRhaW5lci1zZWxlY3RlZCk6aG92ZXI6YWZ0ZXIge1xuICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogdmFyKC0taW52KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IC40cztcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAubG9nby1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgICAgICAmIGltZyB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubWVudS1pdGVtIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiTGF0b1wiLCBzYW5zLXNlcmlmO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAubWVudS1pdGVtLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cblxuICAgIFxuXG4gICAgLy8gZGVza3RvcFxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzkwcHgpIHtcbiAgICAgICAgLmhhbS1tZW51IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUtaXRlbS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAubWVudS1pdGVtcy1tb2JpbGUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gbW9iaWxlIGFuZCB0YWJsZXRcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAubWVudS1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgXG4gICAgICAgIC5tZW51LWdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogM2ZyIC41ZnI7XG4gICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDM3cHg7XG4gICAgICAgICAgICAuaGFtLW1lbnUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5tZW51LWl0ZW0tY29udGFpbmVyID4gc3BhbiB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tZW51LWl0ZW1zLW1vYmlsZSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICAgICYuaGlkZGVuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgaGVpZ2h0IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5ibG9jayB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgaGVpZ2h0IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtaXRlbS1jb250YWluZXItbW9iaWxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

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
    Object.defineProperty(MenuComponent.prototype, "logoPath", {
        get: function () {
            return (this.menuState === 'block') ? './assets/logo_v2.png' : './assets/logo_v2_9t.png';
        },
        enumerable: true,
        configurable: true
    });
    MenuComponent.prototype.setMenuItemAsSelected = function (menuItem) {
        this.menu.items.forEach(function (element) {
            element.selected = element.label === menuItem.label;
        });
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('fixed => block', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.3s')
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
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.2s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('fixed => block', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('0.2s')
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
        this.items.push({ label: 'Home', link: '/home', selected: true });
        this.items.push({ label: 'About', link: '/about', selected: false });
        this.items.push({ label: 'Services', link: '/services', selected: false });
        this.items.push({ label: 'Work', link: '/work', selected: false });
        this.items.push({ label: 'Posts', link: '/posts', selected: false });
        this.items.push({ label: 'Contact', link: '/contact', selected: false });
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

module.exports = "<div class=\"portfolio-container\">\n  <div class=\"title-container\">\n    <h2>{{data.title}}</h2>\n  </div>\n  <div class=\"grid-container\" [ngClass]=\"{'grid-container-work': layoutType === 'Work'}\">\n    \n      <ng-template ngFor let-item [ngForOf]=\"data.items\" let-i=\"index\" let-c=\"count\">\n        <div class=\"box\" *ngIf=\"layoutType === 'Services'; else work\" [ngClass]=\"{'middle': i === 1 || i === 4}\">\n          <div class=\"icon\">\n            <i [ngClass]=\"item.imgPath\"></i>\n          </div>\n          <div class=\"title\">\n            <h3>{{ item.title }}</h3>\n          </div>\n          <div class=\"description\">\n            {{ item.description }}\n          </div>\n        </div>\n        <ng-template #work >\n            <div class=\"box image-container\">\n              <img class=\"image\" [src]=\"item.imgPath\" />\n            </div>\n            <div class=\"box info-container\">\n              <div class=\"title\"><h3>{{ item.title }}</h3></div>\n              <div class=\"description\">{{ item.description }}</div>\n              <div class=\"button-wrapper\"><a href=\"https://www.wearefrontend.com\" target=\"_blank\"><app-button>Visit Website</app-button></a></div>\n            </div>\n        </ng-template>\n      </ng-template>\n    \n  </div>\n  <div *ngIf=\"layoutType === 'Services'\" class=\"button-wrapper\">\n    <a href=\"./assets/iliesAitHamouda_cv.pdf\" target=\"_blank\" download=\"iliesAitHamouda-CV\"><app-button size=\"lg\">Download My CV</app-button></a>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-container {\n  padding: 0px 10px; }\n  .portfolio-container .title-container {\n    color: #333;\n    padding-bottom: 40px; }\n  .portfolio-container .title-container h2 {\n      position: relative;\n      font-weight: 700;\n      line-height: 43px;\n      padding-bottom: 15px;\n      font-size: 36px;\n      margin: 0px;\n      display: inline-block; }\n  .portfolio-container .title-container h2::after {\n        content: '';\n        position: absolute;\n        background-color: #444444;\n        height: 2px;\n        left: 4px;\n        bottom: 0px;\n        width: 50px;\n        text-align: center; }\n  .portfolio-container .grid-container {\n    display: grid;\n    grid-gap: 40px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n    text-align: center;\n    padding: 20px; }\n  .portfolio-container .grid-container .box {\n      display: flex;\n      flex-direction: column; }\n  .portfolio-container .grid-container .box .title h3 {\n        font-size: 19px;\n        font-weight: 700;\n        text-transform: uppercase;\n        position: relative;\n        padding-bottom: 15px; }\n  .portfolio-container .grid-container .box .title h3::after {\n          content: '';\n          position: absolute;\n          background-color: #333333;\n          height: 1px;\n          left: 42%;\n          bottom: 0px;\n          width: 55px;\n          text-align: center; }\n  .portfolio-container .grid-container .box .icon {\n        font-size: 44px;\n        line-height: 70px; }\n  .portfolio-container .grid-container .image-container {\n      margin: 10px;\n      position: relative;\n      height: auto; }\n  .portfolio-container .grid-container .image-container .image {\n        width: 100%; }\n  .portfolio-container .grid-container .info-container {\n      text-align: left; }\n  .portfolio-container .grid-container .info-container .title {\n        width: 200px; }\n  .portfolio-container .grid-container .button-wrapper {\n      width: 200px;\n      text-align: center; }\n  .portfolio-container .grid-container-work {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 2fr));\n    padding: 5px; }\n  .portfolio-container .button-wrapper {\n    width: 300px;\n    margin: 40px auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUJBQWlCLEVBQUE7RUFEckI7SUFJUSxXQUFXO0lBQ1gsb0JBQW9CLEVBQUE7RUFMNUI7TUFPWSxrQkFBa0I7TUFDbEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtNQUNqQixvQkFBb0I7TUFDcEIsZUFBZTtNQUNmLFdBQVc7TUFDWCxxQkFBcUIsRUFBQTtFQWJqQztRQWVnQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUF0QmxDO0lBNEJRLGFBQWE7SUFDYixjQUFjO0lBQ2QsMkRBQTJEO0lBQzNELGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7RUFoQ3JCO01Ba0NZLGFBQWE7TUFDYixzQkFBc0IsRUFBQTtFQW5DbEM7UUFxQ2dCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIseUJBQXlCO1FBQ3pCLGtCQUFrQjtRQUNsQixvQkFBb0IsRUFBQTtFQXpDcEM7VUE0Q29CLFdBQVc7VUFDWCxrQkFBa0I7VUFDbEIseUJBQWlDO1VBQ2pDLFdBQVc7VUFDWCxTQUFTO1VBQ1QsV0FBVztVQUNYLFdBQVc7VUFDWCxrQkFBa0IsRUFBQTtFQW5EdEM7UUF1RGdCLGVBQWU7UUFDZixpQkFBaUIsRUFBQTtFQXhEakM7TUE2RFksWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixZQUFZLEVBQUE7RUEvRHhCO1FBaUVnQixXQUFXLEVBQUE7RUFqRTNCO01Bc0VZLGdCQUFnQixFQUFBO0VBdEU1QjtRQXdFZ0IsWUFBWSxFQUFBO0VBeEU1QjtNQTZFWSxZQUFXO01BQ1gsa0JBQWtCLEVBQUE7RUE5RTlCO0lBbUZRLDJEQUEyRDtJQUMzRCxZQUFZLEVBQUE7RUFwRnBCO0lBd0ZRLFlBQVk7SUFDWixpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5wb3J0Zm9saW8tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBcbiAgICAudGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAmIGgyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgZ3JpZC1nYXA6IDQwcHg7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDFmcikpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIC5ib3gge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAudGl0bGUgaDMge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTEsIDUxLCA1MSk7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiA0MiU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQ0cHg7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuaW5mby1jb250YWluZXIge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJ1dHRvbi13cmFwcGVyIHtcbiAgICAgICAgICAgIHdpZHRoOjIwMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdyaWQtY29udGFpbmVyLXdvcmsge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAyZnIpKTtcbiAgICAgICAgcGFkZGluZzogNXB4O1xuICAgIH1cblxuICAgIC5idXR0b24td3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgICAgbWFyZ2luOiA0MHB4IGF1dG87XG4gICAgfVxufSJdfQ== */"

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
        return [
            {
                imgPath: 'fab fa-angular',
                title: 'ANGULAR',
                description: 'Learning this language from the start was a pleasure. To be able to see how far it got is exquisite'
            },
            {
                imgPath: 'fab fa-adobe',
                title: 'AEM & Cold Fusion',
                description: 'slowly but surely, I\'m trying to speak the adobe language, so rich and yet not used that much'
            },
            {
                imgPath: 'fab fa-java',
                title: 'JAVA',
                description: 'What a pleasure to write in Java, my first language and still the one'
            },
            {
                imgPath: 'fab fa-html5',
                title: 'HTML',
                description: 'Althought i spoke so many languages through the years, HTML is a classic that we\'ll never get rid of'
            },
            {
                imgPath: 'fab fa-node-js',
                title: 'Nodejs',
                description: 'I can\'t dream of a better way for a front-end developer to do a back-end job'
            },
            {
                imgPath: 'fas fa-infinity',
                title: 'DevOps',
                description: 'Jenkins, UCD, Ansible, Dockers, GCP, AWS, Azure,  what else ? so many buzzwords, but they have no secret for me'
            }
        ];
    };
    PortfolioService.prototype.getWorkItems = function () {
        return [{
                imgPath: './assets/wearefrontend.png',
                title: 'We Are Frontend',
                link: '',
                description: 'Here I present you our first common fun project that was mainly done by my friends and I. It tooks us about two weeks, it’s a first version/prototype/iteration. There’s a lot to improve, but we wanted to present a vision for the front-end. We’re not different (React vs Angular vs Vue) we’re One, we’re the front'
            }
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

module.exports = "<div class=\"posts-container\">\r\n  <div class=\"title-container\">\r\n    <h2>My Posts</h2>\r\n  </div>\r\n  <div *ngIf=\"response && response.length > 0\" class=\"grid-container\">\r\n    <ng-template ngFor let-item [ngForOf]=\"response\" let-i=\"index\" let-c=\"count\">\r\n      <div class=\"box\">\r\n        <div class=\"sub-box\">\r\n          <div class=\"image\">\r\n            <img class=\"image\" src=\"https://miro.medium.com/max/400/{{item.virtuals.previewImage.imageId}}\"/>\r\n            <div class=\"tag-container\">\r\n              <div *ngFor=\"let tag of item.virtuals.tags | slice:0:3\" class=\"tag\">{{tag.name}}</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"sub-box descr\">\r\n          <div class=\"title\">\r\n            <h3>{{ item.title }}</h3>\r\n          </div>\r\n          <div class=\"description\">\r\n            {{ item.content.subtitle }}\r\n          </div>\r\n          <div class=\"external-link\">\r\n            <a target='_blank' href=\"https://medium.com/@iliesaithamouda/{{item.id}}\"><app-button>read more...</app-button></a>\r\n          </div>\r\n        </div>\r\n      </div>  \r\n    </ng-template>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".posts-container .title-container {\n  color: #333;\n  padding-bottom: 40px; }\n  .posts-container .title-container h2 {\n    position: relative;\n    font-weight: 700;\n    line-height: 43px;\n    padding-bottom: 15px;\n    font-size: 36px;\n    margin: 0px;\n    display: inline-block; }\n  .posts-container .title-container h2::after {\n      content: '';\n      position: absolute;\n      background-color: #444444;\n      height: 2px;\n      left: 4px;\n      bottom: 0px;\n      width: 50px;\n      text-align: center; }\n  .posts-container .grid-container {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  text-align: left;\n  padding: 20px; }\n  .posts-container .grid-container .box {\n    flex-direction: column;\n    display: grid;\n    grid-gap: 40px;\n    grid-template-columns: repeat(auto-fit, minmax(250px, 250px)); }\n  @media only screen and (max-width: 700px) {\n      .posts-container .grid-container .box {\n        justify-self: center;\n        grid-template-columns: repeat(auto-fit, 300px); } }\n  .posts-container .grid-container .box .sub-box {\n      display: flex;\n      flex-direction: column;\n      position: relative;\n      align-items: center;\n      justify-content: center; }\n  .posts-container .grid-container .box .sub-box.descr {\n        max-width: 300px; }\n  .posts-container .grid-container .box .title h3 {\n      font-size: 17px;\n      font-weight: 700;\n      text-transform: uppercase;\n      position: relative;\n      padding-bottom: 15px; }\n  .posts-container .grid-container .box .title h3::after {\n        content: '';\n        position: absolute;\n        background-color: #333333;\n        height: 1px;\n        left: 42%;\n        bottom: 0px;\n        width: 55px;\n        text-align: center; }\n  .posts-container .grid-container .box .image {\n      width: 100%; }\n  .posts-container .grid-container .box .tag {\n      background-color: mistyrose;\n      border-radius: 10px;\n      padding: 2px 8px;\n      margin: 3px 5px;\n      float: left; }\n  .posts-container .grid-container .box .external-link {\n      margin-top: 20px;\n      text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvQzpcXHdvcmtcXHByb2ZpbC9zcmNcXGFwcFxccG9zdHNcXHBvc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRVEsV0FBVztFQUNYLG9CQUFvQixFQUFBO0VBSDVCO0lBS1ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCLEVBQUE7RUFYakM7TUFhZ0IsV0FBVztNQUNYLGtCQUFrQjtNQUNsQix5QkFBaUM7TUFDakMsV0FBVztNQUNYLFNBQVM7TUFDVCxXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBcEJsQztFQTBCUSxhQUFhO0VBQ2IsY0FBYztFQUNkLDJEQUEyRDtFQUMzRCxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0VBOUJyQjtJQWlDWSxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLGNBQWM7SUFDZCw2REFBNkQsRUFBQTtFQUM3RDtNQXJDWjtRQXNDZ0Isb0JBQW9CO1FBQ3BCLDhDQUE4QyxFQUFBLEVBZ0RyRDtFQXZGVDtNQTBDZ0IsYUFBYTtNQUNiLHNCQUFzQjtNQUN0QixrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLHVCQUF1QixFQUFBO0VBOUN2QztRQWlEb0IsZ0JBQWdCLEVBQUE7RUFqRHBDO01Bc0RnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7RUExRHBDO1FBNkRvQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUFwRXRDO01Bd0VnQixXQUFXLEVBQUE7RUF4RTNCO01BNEVnQiwyQkFBMkI7TUFDM0IsbUJBQW1CO01BQ25CLGdCQUFnQjtNQUNoQixlQUFlO01BQ2YsV0FBVyxFQUFBO0VBaEYzQjtNQW9GZ0IsZ0JBQWdCO01BQ2hCLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zdHMtY29udGFpbmVyIHtcclxuICAgIC50aXRsZS1jb250YWluZXIge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICYgaDIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICAgICAgbGVmdDogNHB4O1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZ3JpZC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDIwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjBweCwgMWZyKSk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5ib3gge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICBncmlkLWdhcDogNDBweDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNTBweCwgMjUwcHgpKTtcclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgMzAwcHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdWItYm94IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICYuZGVzY3Ige1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50aXRsZSBoMyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDQyJTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFnIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IG1pc3R5cm9zZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHggOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAzcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5leHRlcm5hbC1saW5rIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

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
        var _this = this;
        var result;
        this.postService.postItems.subscribe(function (successData) { }, function (errors) {
            // this.response = JSON.parse(errors.error.text.replace('])}while(1);</x>',''));
            var jsonString = errors.error.text.replace('])}while(1);</x>', '');
            result = JSON.parse(jsonString);
            _this.changePostKeysToListOfPosts(result);
        });
    };
    PostsComponent.prototype.changePostKeysToListOfPosts = function (result) {
        var arrayCustomKeys = result.payload.references.Post;
        var postList = new Array();
        for (var key in arrayCustomKeys) {
            if (key) {
                postList.push(arrayCustomKeys[key]);
            }
        }
        this.response = postList;
    };
    Object.defineProperty(PostsComponent.prototype, "postItems", {
        get: function () {
            return this.postItems$;
        },
        enumerable: true,
        configurable: true
    });
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var postSource = 'https://data.feedmirror.com/-LoMU0-SeyuREGR2coYc.json';
var PostsService = /** @class */ (function () {
    function PostsService(httpClient) {
        this.httpClient = httpClient;
    }
    Object.defineProperty(PostsService.prototype, "postItems", {
        get: function () {
            var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            //headers.append('origin','medium.com');
            return this.httpClient.get(postSource, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (result) { return result; }));
        },
        enumerable: true,
        configurable: true
    });
    PostsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
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

module.exports = "<div class=\"progress-description\">\n  <div class=\"title\">\n    {{title}}\n  </div>\n  <div class=\"progress-percentage\">\n    {{progressRate}} %\n  </div>\n</div>\n<div class=\"line progressive-line\">\n  <div [@animateProgress]=\"{ value: animate, params : {test : progress}}\" class=\"line progress-skill\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/progressive-bar/progressive-bar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/progressive-bar/progressive-bar.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".progress-description {\n  display: grid;\n  grid-gap: 20px;\n  grid-template-columns: 75% 1fr;\n  text-align: left;\n  padding: 25px 0px 15px 0px;\n  max-width: 95%;\n  font-size: 13px;\n  font-weight: 700;\n  text-transform: uppercase; }\n  .progress-description > * {\n    display: flex;\n    flex-direction: column; }\n  .progress-description .progress-percentage {\n    text-align: right; }\n  .line {\n  height: 6px;\n  border-radius: 4px;\n  margin-right: 10px; }\n  .progressive-line {\n  background-color: lightgray;\n  max-width: 100%; }\n  .progress-skill {\n  background-color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9wcm9ncmVzc2l2ZS1iYXIvcHJvZ3Jlc3NpdmUtYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksYUFBYTtFQUNiLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQix5QkFBeUIsRUFBQTtFQVQ3QjtJQVdRLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQVo5QjtJQWdCUSxpQkFBaUIsRUFBQTtFQUt6QjtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7RUFHdEI7RUFDSSwyQkFBMkI7RUFDM0IsZUFBZSxFQUFBO0VBRW5CO0VBQ0ksc0JBQXNCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wcm9ncmVzc2l2ZS1iYXIvcHJvZ3Jlc3NpdmUtYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucHJvZ3Jlc3MtZGVzY3JpcHRpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDIwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA3NSUgMWZyOy8vIHJlcGVhdChhdXRvLWZpbGwsbWlubWF4KDUwMHB4LCAxZnIpKTtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDI1cHggMHB4IDE1cHggMHB4O1xuICAgIG1heC13aWR0aDogOTUlO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgJiA+ICoge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5wcm9ncmVzcy1wZXJjZW50YWdlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgfVxufVxuXG5cbi5saW5lIHtcbiAgICBoZWlnaHQ6IDZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIFxufVxuLnByb2dyZXNzaXZlLWxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7IFxufVxuLnByb2dyZXNzLXNraWxsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xufVxuIl19 */"

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

/***/ "./src/app/quote/quote.component.html":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quote-container\">\n\n  <div class=\"title-container\">\n    <h2>My Favorite Quote</h2>\n  </div>\n\n  <div class=\"quote\">\n    <blockquote cite=\"https://en.wikipedia.org/wiki/Jack_of_all_trades,_master_of_none\">\n        <p>Jack of all trades, master of none, but oftentimes better than master of one</p>\n        <footer>— Alternate version of Robert Greene, <cite>Greene's Groats-Worth of Wit</cite></footer>\n    </blockquote>\n  </div>\n\n  <div class=\"embedded-video-cont\">\n    <div class=\"embedded-video\">\n        <iframe src=\"https://embed.ted.com/talks/emilie_wapnick_why_some_of_us_don_t_have_one_true_calling\" \n        width=\"854\" \n        height=\"480\" \n        style=\"position:absolute;left:0;top:0;width:100%;height:100%\" \n        frameborder=\"0\" \n        scrolling=\"no\" \n        allowfullscreen></iframe>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/quote/quote.component.scss":
/*!********************************************!*\
  !*** ./src/app/quote/quote.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title-container {\n  color: #333;\n  padding-bottom: 40px; }\n  .title-container h2 {\n    position: relative;\n    font-weight: 700;\n    line-height: 43px;\n    padding-bottom: 15px;\n    font-size: 36px;\n    margin: 0px;\n    display: inline-block; }\n  .title-container h2::after {\n      content: '';\n      position: absolute;\n      background-color: #444444;\n      height: 2px;\n      left: 4px;\n      bottom: 0px;\n      width: 50px;\n      text-align: center; }\n  .quote, .embedded-video-cont {\n  padding: 0px 10px; }\n  blockquote {\n  margin: 0; }\n  blockquote p {\n  padding: 15px;\n  background: #eee;\n  border-radius: 5px;\n  font-size: 2em;\n  font-weight: 900; }\n  .embedded-video-cont {\n  padding-top: 40px; }\n  .embedded-video {\n  position: relative;\n  height: 0;\n  padding-bottom: 56.25%;\n  max-width: 854px;\n  margin: 0 auto; }\n  blockquote p::before {\n  content: '\\201C'; }\n  blockquote p::after {\n  content: '\\201D'; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9xdW90ZS9xdW90ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFdBQVc7RUFDWCxvQkFBb0IsRUFBQTtFQUZ4QjtJQUlRLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztJQUNYLHFCQUFxQixFQUFBO0VBVjdCO01BWVksV0FBVztNQUNYLGtCQUFrQjtNQUNsQix5QkFBaUM7TUFDakMsV0FBVztNQUNYLFNBQVM7TUFDVCxXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBSzlCO0VBQ0ksaUJBQWlCLEVBQUE7RUFHckI7RUFDSSxTQUFTLEVBQUE7RUFHYjtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtFQUVwQjtFQUNJLGlCQUFpQixFQUFBO0VBRXJCO0VBQ0ksa0JBQWlCO0VBQ2pCLFNBQVE7RUFDUixzQkFBcUI7RUFDckIsZ0JBQWU7RUFDZixjQUFjLEVBQUE7RUFHbEI7RUFDSSxnQkFBZ0IsRUFBQTtFQUdwQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcXVvdGUvcXVvdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi50aXRsZS1jb250YWluZXIge1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICYgaDIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0M3B4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnF1b3RlLCAuZW1iZWRkZWQtdmlkZW8tY29udCB7XG4gICAgcGFkZGluZzogMHB4IDEwcHg7XG59XG5cbmJsb2NrcXVvdGUge1xuICAgIG1hcmdpbjogMDtcbn1cblxuYmxvY2txdW90ZSBwIHtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG59XG4uZW1iZWRkZWQtdmlkZW8tY29udCB7XG4gICAgcGFkZGluZy10b3A6IDQwcHg7XG59XG4uZW1iZWRkZWQtdmlkZW8ge1xuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgIGhlaWdodDowO1xuICAgIHBhZGRpbmctYm90dG9tOjU2LjI1JTtcbiAgICBtYXgtd2lkdGg6ODU0cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbmJsb2NrcXVvdGUgcDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnXFwyMDFDJztcbn1cblxuYmxvY2txdW90ZSBwOjphZnRlciB7XG4gICAgY29udGVudDogJ1xcMjAxRCc7XG59Il19 */"

/***/ }),

/***/ "./src/app/quote/quote.component.ts":
/*!******************************************!*\
  !*** ./src/app/quote/quote.component.ts ***!
  \******************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
    }
    QuoteComponent.prototype.ngOnInit = function () {
    };
    QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.scss */ "./src/app/quote/quote.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
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

module.exports = "<div appSmoothScrolling title=\"{{scrollToId}}\" class=\"scroll-button-container\">\n  <div [@fadeOut]=\"animateValue\" class=\"scroll-button\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/scroll-button/scroll-button.component.scss":
/*!************************************************************!*\
  !*** ./src/app/scroll-button/scroll-button.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-button-container {\n  position: absolute;\n  border: 2px solid white;\n  width: 5%;\n  max-width: 20px;\n  height: 6%;\n  max-height: 40px;\n  border-radius: 40px;\n  top: 90%;\n  left: 49%;\n  padding: 5px 2px;\n  cursor: pointer; }\n  .scroll-button-container .scroll-button {\n    width: 3px;\n    height: 3px;\n    background-color: #FFF;\n    border: 3px solid #FFF;\n    border-radius: 5px;\n    left: 7px;\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9zY3JvbGwtYnV0dG9uL3Njcm9sbC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBO0VBWG5CO0lBZVEsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1Qsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zY3JvbGwtYnV0dG9uL3Njcm9sbC1idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsLWJ1dHRvbi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcbiAgICB3aWR0aDogNSU7XG4gICAgbWF4LXdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNiU7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICAgIHRvcDogOTAlO1xuICAgIGxlZnQ6IDQ5JTtcbiAgICBwYWRkaW5nOiA1cHggMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIC5zY3JvbGwtYnV0dG9uIHtcblxuICAgICAgICB3aWR0aDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDNweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgI0ZGRjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBsZWZ0OiA3cHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcbiAgICB9XG59Il19 */"

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

module.exports = "<div id=\"scrollTopButton\" appSmoothScrolling data-target-link=\"Home\" class=\"scroll-top-container effect\">\n    <i class=\"fa fa-angle-up\"></i>\n</div>"

/***/ }),

/***/ "./src/app/scroll-top-button/scroll-top-button.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/scroll-top-button/scroll-top-button.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --color-bg: rgb(51, 51, 51);\n  --color-bg-hover: #FFF; }\n\n.scroll-top-container {\n  display: none;\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  background-color: var(--color-bg);\n  border: 2px solid var(--color-bg);\n  right: 25px;\n  bottom: 25px;\n  font-size: 28px;\n  line-height: 38px;\n  text-align: center;\n  z-index: 5;\n  color: var(--color-bg-hover);\n  cursor: pointer; }\n\n.scroll-top-container:hover {\n    background-color: var(--color-bg-hover);\n    color: var(--color-bg); }\n\n.show-scroll-top-button {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9zY3JvbGwtdG9wLWJ1dHRvbi9zY3JvbGwtdG9wLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFXO0VBQ1gsc0JBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksYUFBYTtFQUNiLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxpQ0FBaUM7RUFDakMsV0FBVTtFQUNWLFlBQVk7RUFDWixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsNEJBQTRCO0VBQzVCLGVBQWUsRUFBQTs7QUFkbkI7SUFnQlEsdUNBQXVDO0lBQ3ZDLHNCQUFzQixFQUFBOztBQUk5QjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbC10b3AtYnV0dG9uL3Njcm9sbC10b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC0tY29sb3ItYmc6IHJnYig1MSwgNTEsIDUxKTtcbiAgICAtLWNvbG9yLWJnLWhvdmVyOiAjRkZGO1xufVxuXG4uc2Nyb2xsLXRvcC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iZyk7XG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tY29sb3ItYmcpO1xuICAgIHJpZ2h0OjI1cHg7XG4gICAgYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogNTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItYmctaG92ZXIpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmctaG92ZXIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYmcpO1xuICAgIH1cbn1cblxuLnNob3ctc2Nyb2xsLXRvcC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

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

module.exports = "<div scrollableBackgroundImage class=\"section-container {{backgroundColorClass}}\" [ngClass]=\"{'background-pic-m low-opacity' : sectionType === 'Home'}\">\n  <div *ngIf=\"sectionType === 'Home'\" class=\"overlay-shadow\"></div>\n  <div class=\"section\">\n    <app-home       *ngIf=\"sectionType === 'Home'\"></app-home>\n    <app-about      *ngIf=\"sectionType === 'About'\"></app-about>\n    <app-portfolio  *ngIf=\"sectionType === 'Services'\" [layoutType]=\"sectionType\"></app-portfolio>\n    <app-quote      *ngIf=\"sectionType === 'Quote'\"></app-quote>\n    <app-portfolio  *ngIf=\"sectionType === 'Work'\" [layoutType]=\"sectionType\"></app-portfolio>\n    <app-posts      *ngIf=\"sectionType === 'Posts'\"></app-posts>\n    <app-contact    *ngIf=\"sectionType === 'Contact'\"></app-contact>\n  </div>\n  <app-scroll-button *ngIf=\"sectionType === 'Home'\"></app-scroll-button>\n</div>\n\n"

/***/ }),

/***/ "./src/app/section/section.component.scss":
/*!************************************************!*\
  !*** ./src/app/section/section.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-container {\n  width: 100%;\n  padding: 100px 0px; }\n  .section-container .section {\n    max-width: 1170px;\n    margin: 0 auto;\n    position: relative;\n    z-index: 1;\n    text-align: center; }\n  .overlay-shadow {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  right: 0; }\n  .background-pic-m {\n  background-image: url('background-2.jpg');\n  background-position: 50% 0px;\n  background-size: cover;\n  height: 100vh;\n  min-height: 530px;\n  position: relative;\n  padding: 0px; }\n  .background-pic-m .section {\n    position: relative;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%);\n    top: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFGdEI7SUFLUSxpQkFBaUI7SUFDakIsY0FBYztJQUVkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7RUFJMUI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsTUFBTTtFQUNOLFFBQVEsRUFBQTtFQUdaO0VBQ0kseUNBQXNEO0VBQ3RELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsWUFBWSxFQUFBO0VBUGhCO0lBU1Esa0JBQWtCO0lBQ2xCLG1DQUEyQjtZQUEzQiwyQkFBMkI7SUFDM0IsUUFBUSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2VjdGlvbi9zZWN0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uc2VjdGlvbi1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDEwMHB4IDBweDtcbiAgICBcbiAgICAuc2VjdGlvbiB7XG4gICAgICAgIG1heC13aWR0aDogMTE3MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgLy8gcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLm92ZXJsYXktc2hhZG93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbn1cblxuLmJhY2tncm91bmQtcGljLW0ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2JhY2tncm91bmQtMi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBtaW4taGVpZ2h0OiA1MzBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC5zZWN0aW9uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgIHRvcDogNTAlO1xuICAgIH1cbn0iXX0= */"

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

/***/ "./src/app/shared/app-message/app-message.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/app-message/app-message.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container>\n  <div [@fadeIn]=\"fadeIn\" *ngIf=\"message$ | async; let message\" class=\"app-message-container {{ message.state }}\">\n    <p >\n      {{ message.description }}\n    </p>\n  </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/shared/app-message/app-message.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/shared/app-message/app-message.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-message-container {\n  position: fixed;\n  max-width: 90%;\n  min-width: 50%;\n  min-height: 4em;\n  top: 10px;\n  z-index: 3;\n  text-align: center;\n  -webkit-transform: translateX(50%);\n          transform: translateX(50%);\n  border-radius: 5px;\n  padding: 10px 20px; }\n\n@media only screen and (max-width: 700px) {\n  .app-message-container {\n    width: 100%;\n    top: 0px;\n    border-radius: 0px;\n    -webkit-transform: none;\n            transform: none; } }\n\n.success {\n  color: #4F8A10;\n  background-color: #DFF2BF; }\n\n.error {\n  color: #D8000C;\n  background-color: #FFBABA; }\n\n.warning {\n  color: #9F6000;\n  background-color: #FEEFB3; }\n\n.info {\n  color: #31708f;\n  background-color: #d9edf7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9zaGFyZWQvYXBwLW1lc3NhZ2UvYXBwLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0NBQTBCO1VBQTFCLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0k7SUFDSSxXQUFXO0lBQ1gsUUFBUTtJQUNSLGtCQUFrQjtJQUNsQix1QkFBZTtZQUFmLGVBQWUsRUFBQSxFQUNsQjs7QUFHTDtFQUNJLGNBQWE7RUFDYix5QkFBd0IsRUFBQTs7QUFHNUI7RUFDSSxjQUFhO0VBQ2IseUJBQXdCLEVBQUE7O0FBRzVCO0VBQ0ksY0FBYztFQUNkLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLGNBQWE7RUFDYix5QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hcHAtbWVzc2FnZS9hcHAtbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtbWVzc2FnZS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBtYXgtd2lkdGg6IDkwJTtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBtaW4taGVpZ2h0OiA0ZW07XG4gICAgdG9wOiAxMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG5cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcbiAgICAuYXBwLW1lc3NhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRvcDogMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG59XG5cbi5zdWNjZXNzIHtcbiAgICBjb2xvcjojNEY4QTEwO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0RGRjJCRjtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjojRDgwMDBDO1xuICAgIGJhY2tncm91bmQtY29sb3I6I0ZGQkFCQTtcbn1cblxuLndhcm5pbmcge1xuICAgIGNvbG9yOiAjOUY2MDAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRUVGQjM7XG59XG5cbi5pbmZvIHtcbiAgICBjb2xvcjojMzE3MDhmO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2Q5ZWRmNztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/app-message/app-message.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/app-message/app-message.component.ts ***!
  \*************************************************************/
/*! exports provided: AppMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMessageComponent", function() { return AppMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-message.service */ "./src/app/shared/app-message/app-message.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");




var AppMessageComponent = /** @class */ (function () {
    function AppMessageComponent(messageService) {
        this.messageService = messageService;
        this.fadeIn = 'out';
    }
    AppMessageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messageService.getMessage().subscribe(function (message) {
            if (message != null) {
                _this.fadeIn = 'in';
            }
            else {
                _this.fadeIn = 'out';
            }
        });
    };
    Object.defineProperty(AppMessageComponent.prototype, "message$", {
        get: function () {
            return this.messageService.getMessage();
        },
        enumerable: true,
        configurable: true
    });
    AppMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./app-message.component.html */ "./src/app/shared/app-message/app-message.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('fadeIn', [
                    // ...
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('out => in', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('in => out', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('1s')
                    ]),
                ]),
            ],
            styles: [__webpack_require__(/*! ./app-message.component.scss */ "./src/app/shared/app-message/app-message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_message_service__WEBPACK_IMPORTED_MODULE_2__["AppMessageService"]])
    ], AppMessageComponent);
    return AppMessageComponent;
}());



/***/ }),

/***/ "./src/app/shared/app-message/app-message.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/app-message/app-message.service.ts ***!
  \***********************************************************/
/*! exports provided: AppMessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMessageService", function() { return AppMessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var AppMessageService = /** @class */ (function () {
    function AppMessageService() {
        this._message = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    AppMessageService.prototype.displayMessage = function (state, description) {
        var _this = this;
        this._message.next({ state: state, description: description });
        setTimeout(function () {
            _this._message.next();
        }, 5000);
    };
    AppMessageService.prototype.getMessage = function () {
        return this._message;
    };
    AppMessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppMessageService);
    return AppMessageService;
}());



/***/ }),

/***/ "./src/app/shared/button/button.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/button/button.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"btn btn-{{size}}\" [ngClass]=\"{'disabled': disabled }\" (click)=\"buttonClicked()\"><ng-content></ng-content></div>\n"

/***/ }),

/***/ "./src/app/shared/button/button.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/button/button.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ~~~~~~~ INIT. BTN ~~~~~~~ */\n:host {\n  --def: white;\n  --inv: #333; }\n.btn:not(.disabled) {\n  border: 1px solid var(--inv);\n  position: relative;\n  color: var(--inv);\n  font-weight: 700;\n  text-transform: uppercase;\n  transition: all 600ms cubic-bezier(0.77, 0, 0.175, 1);\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n.btn-sm {\n  font-size: 12px;\n  padding: 8px 20px; }\n.btn-md {\n  font-size: 14px;\n  padding: 10px 25px; }\n.btn-lg {\n  font-size: 16px;\n  padding: 20px 30px; }\n.btn:before, .btn:after {\n  content: '';\n  position: absolute;\n  transition: inherit;\n  z-index: -1; }\n.btn:not(.disabled):hover {\n  color: var(--def);\n  transition-delay: .6s; }\n.btn:not(.disabled):hover a:hover {\n    color: var(--def); }\n.btn:not(.disabled):hover:before {\n  transition-delay: 0s;\n  left: 0;\n  width: 100%; }\n.btn:not(.disabled):hover:after {\n  background: var(--inv);\n  transition-delay: .4s;\n  top: 0;\n  height: 100%; }\n/* From Middle */\n.btn:not(.disabled):before {\n  top: 0;\n  left: 50%;\n  height: 100%;\n  width: 0;\n  border: 1px solid var(--inv);\n  border-left: 0;\n  border-right: 0; }\n.btn:not(.disabled):after {\n  bottom: 0;\n  left: 0;\n  height: 0;\n  width: 100%;\n  background: var(--inv); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2J1dHRvbi9DOlxcd29ya1xccHJvZmlsL3NyY1xcYXBwXFxzaGFyZWRcXGJ1dHRvblxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUFBO0FBQ0E7RUFDSSxZQUFNO0VBQ04sV0FBTSxFQUFBO0FBRVY7RUFDSSw0QkFBNEI7RUFDL0Isa0JBQWtCO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNuQix5QkFBeUI7RUFDekIscURBQXFEO0VBQ3JELGVBQWU7RUFDWix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTtBQUlyQjtFQUNJLGVBQWU7RUFDZixpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUd0QjtFQUNJLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUd0QjtFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtBQUdaO0VBQ0MsaUJBQWlCO0VBQ2QscUJBQXFCLEVBQUE7QUFGekI7SUFJUSxpQkFBaUIsRUFBQTtBQUt6QjtFQUNJLG9CQUFvQjtFQUNwQixPQUFPO0VBQ1YsV0FBVyxFQUFBO0FBR1o7RUFDQyxzQkFBc0I7RUFDbkIscUJBQXFCO0VBQ3JCLE1BQU07RUFDVCxZQUFZLEVBQUE7QUFHYixnQkFBQTtBQUVBO0VBQ0MsTUFBTTtFQUNOLFNBQVM7RUFDVCxZQUFZO0VBQ1osUUFBUTtFQUNSLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsZUFBZSxFQUFBO0FBR2hCO0VBQ0MsU0FBUztFQUNULE9BQU87RUFDUCxTQUFTO0VBQ1QsV0FBVztFQUNYLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2J1dHRvbi9idXR0b24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiB+fn5+fn5+IElOSVQuIEJUTiB+fn5+fn5+ICovXHJcbjpob3N0IHtcclxuICAgIC0tZGVmOiB3aGl0ZTtcclxuICAgIC0taW52OiAjMzMzO1xyXG59XHJcbi5idG46bm90KC5kaXNhYmxlZCkge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW52KTtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBjb2xvcjogdmFyKC0taW52KTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgNjAwbXMgY3ViaWMtYmV6aWVyKDAuNzcsIDAsIDAuMTc1LCAxKTtcdFxyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgXHJcbn1cclxuXHJcbi5idG4tc20ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbn1cclxuXHJcbi5idG4tbWQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgcGFkZGluZzogMTBweCAyNXB4O1xyXG59XHJcblxyXG4uYnRuLWxnIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDIwcHggMzBweDtcclxufVxyXG5cclxuLmJ0bjpiZWZvcmUsIC5idG46YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcdFxyXG5cdHRyYW5zaXRpb246IGluaGVyaXQ7XHJcblx0ei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5idG46bm90KC5kaXNhYmxlZCk6aG92ZXIge1xyXG5cdGNvbG9yOiB2YXIoLS1kZWYpO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjZzO1xyXG4gICAgJiBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tZGVmKTsgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmJ0bjpub3QoLmRpc2FibGVkKTpob3ZlcjpiZWZvcmUge1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgICBsZWZ0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYnRuOm5vdCguZGlzYWJsZWQpOmhvdmVyOmFmdGVyIHtcclxuXHRiYWNrZ3JvdW5kOiB2YXIoLS1pbnYpO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogLjRzO1xyXG4gICAgdG9wOiAwO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLyogRnJvbSBNaWRkbGUgKi9cclxuXHJcbi5idG46bm90KC5kaXNhYmxlZCk6YmVmb3JlIHtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogNTAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pbnYpO1xyXG5cdGJvcmRlci1sZWZ0OiAwO1xyXG5cdGJvcmRlci1yaWdodDogMDtcclxufVxyXG5cclxuLmJ0bjpub3QoLmRpc2FibGVkKTphZnRlciB7XHJcblx0Ym90dG9tOiAwO1xyXG5cdGxlZnQ6IDA7XHJcblx0aGVpZ2h0OiAwO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGJhY2tncm91bmQ6IHZhcigtLWludik7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/button/button.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/button/button.component.ts ***!
  \***************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.size = 'md';
        this.disabled = false;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ButtonComponent.prototype.buttonClicked = function () {
        this.clicked.emit(true);
    };
    ButtonComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ButtonComponent.prototype, "size", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], ButtonComponent.prototype, "disabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ButtonComponent.prototype, "clicked", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/shared/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.scss */ "./src/app/shared/button/button.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
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

module.exports = __webpack_require__(/*! /Users/z85831/Documents/personal/personalWork/profil/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map