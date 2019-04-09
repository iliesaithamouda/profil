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

module.exports = "\n<div class=\"box-list\">\n  <div class=\"box\">\n    <h3 class=\"section-subtitle\">Hi There! I'm Ilyes Ait Hamouda</h3>\n    <p class=\"description\">I'm a professional developer from Montréal, Canada. I create beautiful professional websites using best practice accessibility. I enjoy turning complex problems into simple, beautiful and intuitive interface designs. </p>\n    <div class=\"flex-box-container\">\n      <div class=\"flex-box\"><a class=\"effect\" href=\"mailto:iliesaithamouda@gmail.com\"><i class=\"fas fa-envelope\"></i> iliesaithamouda@gmail.com</a></div>\n      <div class=\"flex-box\"><a class=\"effect\" href=\"tel:15144754146\"><i class=\"fas fa-mobile-alt\"></i> +1-514-475-4146</a></div>\n    </div>\n    <div class=\"flex-box-container grid-container-min-1-fr\">  \n      <div class=\"flex-box media-icons effect\">\n        <a href=\"https://www.linkedin.com/in/iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\n      </div>\n      <div class=\"flex-box media-icons effect\">\n        <a href=\"https://medium.com/@iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-medium\"></i></a>\n      </div>\n      \n    \n    </div>\n\n  </div>\n  <div class=\"box\">\n    <ng-template ngFor let-expertise [ngForOf]=\"expertises\">\n      <app-progressive-bar [title]=\"expertise.domain\" [progress]=\"expertise.percentage\"></app-progressive-bar>\n    </ng-template>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".box-list {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));\n  text-align: left;\n  padding: 20px; }\n  .box-list .box {\n    border-radius: 5px;\n    display: flex;\n    flex-direction: column; }\n  .box-list .box .section-subtitle {\n      color: #333;\n      font-size: 26px; }\n  .box-list .box .description {\n      color: #484848;\n      font-size: 16px;\n      line-height: 26px; }\n  .box-list .box .flex-box-container {\n      display: grid;\n      grid-gap: 10px;\n      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n      grid-row-gap: 20px; }\n  .box-list .box .flex-box-container .flex-box {\n        display: flex;\n        flex-direction: column;\n        justify-self: left; }\n  .box-list .box .flex-box-container .media-icons {\n        font-size: 20px;\n        border: 1px solid black;\n        width: 24px;\n        text-align: center;\n        padding: 10px;\n        border-radius: 24px; }\n  .box-list .box .flex-box-container .media-icons:hover {\n        background-color: #484848;\n        color: white; }\n  .box-list .box .grid-container-min-1-fr {\n      grid-template-columns: repeat(auto-fit, minmax(30px, 40px));\n      margin-top: 20px; }\n  a {\n  color: #484848;\n  text-decoration: none; }\n  a:hover {\n  color: #FFF;\n  text-decoration: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGFBQWE7RUFDYixjQUFjO0VBQ2QsMkRBQTJEO0VBQzNELGdCQUFnQjtFQUNoQixhQUFhLEVBQUE7RUFOakI7SUFTUSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBWDlCO01BY1ksV0FBVztNQUNYLGVBQWUsRUFBQTtFQWYzQjtNQW1CWSxjQUFjO01BQ2QsZUFBZTtNQUNmLGlCQUFpQixFQUFBO0VBckI3QjtNQXlCWSxhQUFhO01BQ2IsY0FBYztNQUNkLDJEQUEwRDtNQUMxRCxrQkFBa0IsRUFBQTtFQTVCOUI7UUErQmdCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsa0JBQWtCLEVBQUE7RUFqQ2xDO1FBcUNnQixlQUFlO1FBQ2YsdUJBQXVCO1FBQ3ZCLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQixFQUFBO0VBMUNuQztRQThDZ0IseUJBQXlCO1FBQ3pCLFlBQVksRUFBQTtFQS9DNUI7TUFvRFksMkRBQTBEO01BQzFELGdCQUFnQixFQUFBO0VBT3hCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQixFQUFBO0VBRXpCO0VBQ0ksV0FBVztFQUNYLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm94LWxpc3Qge1xuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1nYXA6IDQwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMjVweCwgMWZyKSk7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIC5ib3gge1xuICAgICAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZmZlMDY2O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgICAgIC5zZWN0aW9uLXN1YnRpdGxlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICBjb2xvcjogIzQ4NDg0ODtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC5mbGV4LWJveC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtZ2FwOiAxMHB4O1xuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsbWlubWF4KDIwMHB4LCAxZnIpKTtcbiAgICAgICAgICAgIGdyaWQtcm93LWdhcDogMjBweDtcblxuICAgICAgICAgICAgLmZsZXgtYm94IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAganVzdGlmeS1zZWxmOiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVkaWEtaWNvbnMge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyNHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVkaWEtaWNvbnM6aG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0ODQ4NDg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQtY29udGFpbmVyLW1pbi0xLWZyIHtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LG1pbm1heCgzMHB4LCA0MHB4KSk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfVxufVxuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiAjNDg0ODQ4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICAgIGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgIl19 */"

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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app\">\n  <app-menu></app-menu>\n  <app-section id=\"Home\" [sectionType]=\"'Home'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\n  <app-section id=\"About\" [sectionType]=\"'About'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\n  <app-section id=\"Services\" [sectionType]=\"'Services'\" [backgroundColorClass]=\"'bg-color-medium'\"></app-section>\n  <app-section id=\"Work\" [sectionType]=\"'Work'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\n  <app-section id=\"Posts\" [sectionType]=\"'Posts'\" [backgroundColorClass]=\"'bg-color-medium'\"></app-section>\n  <app-section id=\"Contact\" [sectionType]=\"'Contact'\" [backgroundColorClass]=\"'bg-color-light'\"></app-section>\n  <app-footer></app-footer>\n  <app-scroll-top-button></app-scroll-top-button>\n</div>\n\n"

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

module.exports = "<div class=\"contact-container\">\n    <div class=\"title-container\">\n      <h2>Contact me</h2>\n    </div>\n    <div class=\"grid-container contact-icons\">\n      <div class=\"box box-glue contact-form-container\">\n        <div class=\"circle-wrapper\">\n            <i class=\"fas fa-envelope\"></i>\n        </div>\n        <div class=\"label-wrapper\">Email</div>\n        <div class=\"text-wrapper\">iliesaithamouda@outlook.com</div>\n      </div>\n      <div class=\"box box-glue contact-form-container\">\n          <div class=\"circle-wrapper\">\n              <i class=\"fas fa-envelope\"></i>\n          </div>\n          <div class=\"label-wrapper\">Phone number</div>\n          <div class=\"text-wrapper\">+1 514-475-4146</div>\n      </div>\n  \n    </div>\n    <div [formGroup]=\"contactForm\" (ngSubmit)=\"submitForm()\" class=\"form-group\">\n      <div class=\"grid-container contact-form\">\n        <div class=\"box contact-form-container\">\n          <input [ngClass]=\"{'error-input': contactF.name.errors.required && contactF.name.dirty }\" name=\"name\" formControlName=\"name\" type=\"text\" placeholder=\"Name\" />\n          <div *ngIf=\"contactF.name.errors.required && contactF.name.dirty\" class=\"invalid-feedback\">\n              please enter a valid name.\n          </div>\n        </div>\n        <div class=\"box contact-form-container\">\n          <input name=\"email\" formControlName=\"email\" type=\"text\" placeholder=\"Email\" [ngClass]=\"{'error-input': contactF.email.errors.required && contactF.email.dirty }\"/>\n          <div *ngIf=\"contactF.email.errors.required && contactF.email.dirty\" class=\"invalid-feedback\">\n              please enter a valid email.\n          </div>\n        </div>\n      </div>\n      <div class=\"text-area-container\">\n        <textarea formControlName=\"message\" name=\"message\" placeholder=\"Message\" [ngClass]=\"{'error-input': contactF.message.errors.required && contactF.message.dirty }\"></textarea>\n        <div *ngIf=\"contactF.message.errors.required && contactF.message.dirty\" class=\"invalid-feedback\">\n            please enter a message.\n        </div>\n      </div>\n      <div>\n        <button class=\"send-button\" type=\"submit\">Send Message</button>\n      </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-container {\n  width: 80%;\n  margin: 0 auto;\n  font-size: 15px; }\n  .contact-container .title-container {\n    color: #333;\n    padding-bottom: 40px; }\n  .contact-container .title-container h2 {\n      position: relative;\n      font-weight: 700;\n      line-height: 43px;\n      padding-bottom: 15px;\n      font-size: 36px;\n      margin: 0px;\n      display: inline-block; }\n  .contact-container .title-container h2::after {\n        content: '';\n        position: absolute;\n        background-color: #444444;\n        height: 2px;\n        left: 4px;\n        bottom: 0px;\n        width: 50px;\n        text-align: center; }\n  .contact-container .grid-container {\n    display: grid;\n    grid-column-gap: 70px;\n    grid-row-gap: 40px;\n    grid-template-columns: repeat(auto-fit, minmax(225px, 1fr));\n    text-align: left;\n    padding: 40px 0px; }\n  .contact-container .grid-container .box {\n      display: grid;\n      flex-direction: column; }\n  .contact-container .grid-container .box input {\n        width: 100%;\n        border: 1px solid #ddd;\n        color: #232323;\n        padding: 8px 16px;\n        font-size: 15px; }\n  .contact-container .grid-container .box input.error-input {\n          border: 1px solid #CD5C5C; }\n  .contact-container .grid-container .box .invalid-feedback {\n        color: #CD5C5C;\n        text-align: center; }\n  .contact-container .grid-container .box .circle-wrapper {\n        grid-area: logo;\n        width: 50px;\n        height: 50px;\n        background-color: #000000;\n        color: #FFFFFF;\n        text-align: center;\n        line-height: 50px;\n        border-radius: 30px; }\n  .contact-container .grid-container .box .label-wrapper {\n        grid-area: label; }\n  .contact-container .grid-container .box .text-wrapper {\n        grid-area: text; }\n  .contact-container .grid-container .box-glue {\n      grid-template-areas: \"logo label\" \"logo text\";\n      grid-template-columns: 1fr 4fr; }\n  .contact-container .text-area-container {\n    margin-bottom: 40px; }\n  .contact-container .text-area-container textarea {\n      resize: none;\n      width: 100%;\n      height: 190px;\n      padding: 8px 16px;\n      color: #232323;\n      border: 1px solid #ddd;\n      font-size: 15px; }\n  .contact-container .text-area-container textarea.error-input {\n        border: 1px solid #CD5C5C; }\n  .contact-container .send-button {\n    margin: 0 auto;\n    padding: 8px 20px;\n    font-size: 16px;\n    font-weight: 700;\n    border: 2px solid #333;\n    outline: none;\n    background-color: #333;\n    color: #fafafa;\n    cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxVQUFTO0VBQ1QsY0FBYTtFQUNiLGVBQWUsRUFBQTtFQUhuQjtJQU1RLFdBQVc7SUFDWCxvQkFBb0IsRUFBQTtFQVA1QjtNQVNZLGtCQUFrQjtNQUNsQixnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsV0FBVztNQUNYLHFCQUFxQixFQUFBO0VBZmpDO1FBaUJnQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUF4QmxDO0lBOEJRLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCxnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7RUFuQ3pCO01BcUNZLGFBQWE7TUFDYixzQkFBc0IsRUFBQTtFQXRDbEM7UUF3Q2dCLFdBQVc7UUFDWCxzQkFBc0I7UUFDdEIsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7RUE1Qy9CO1VBOENvQix5QkFBd0IsRUFBQTtFQTlDNUM7UUFtRGdCLGNBQWM7UUFDZCxrQkFBa0IsRUFBQTtFQXBEbEM7UUF3RGdCLGVBQWU7UUFDZixXQUFXO1FBQ1gsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixtQkFBbUIsRUFBQTtFQS9EbkM7UUFtRWdCLGdCQUFnQixFQUFBO0VBbkVoQztRQXNFZ0IsZUFBZSxFQUFBO0VBdEUvQjtNQTJFWSw2Q0FDK0I7TUFDWCw4QkFBOEIsRUFBQTtFQTdFOUQ7SUE2RlEsbUJBQW1CLEVBQUE7RUE3RjNCO01Ba0ZZLFlBQVk7TUFDWixXQUFXO01BQ1gsYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixjQUFjO01BQ2Qsc0JBQXNCO01BQ3RCLGVBQWUsRUFBQTtFQXhGM0I7UUEwRmdCLHlCQUF3QixFQUFBO0VBMUZ4QztJQWlHUSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsY0FBYztJQUNkLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmNvbnRhY3QtY29udGFpbmVyIHtcbiAgICB3aWR0aDo4MCU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBmb250LXNpemU6IDE1cHg7XG5cbiAgICAudGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgICAmIGgyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDNweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgNjgsIDY4KTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtY29sdW1uLWdhcDogNzBweDtcbiAgICAgICAgZ3JpZC1yb3ctZ2FwOiA0MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIyNXB4LCAxZnIpKTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogNDBweCAwcHg7XG4gICAgICAgIC5ib3gge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxuICAgICAgICAgICAgJiBpbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzIzMjMyMztcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgJi5lcnJvci1pbnB1dCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkI0NENUM1QztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI0NENUM1QztcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jaXJjbGUtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsb2dvO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubGFiZWwtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZ3JpZC1hcmVhOiBsYWJlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50ZXh0LXdyYXBwZXIge1xuICAgICAgICAgICAgICAgIGdyaWQtYXJlYTogdGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3gtZ2x1ZSB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcImxvZ28gbGFiZWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxvZ28gdGV4dFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRleHQtYXJlYS1jb250YWluZXIge1xuICAgICAgICAmIHRleHRhcmVhIHtcbiAgICAgICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxOTBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICMyMzIzMjM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgJi5lcnJvci1pbnB1dCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQjQ0Q1QzVDO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG4gICAgfVxuICAgIFxuICAgIC5zZW5kLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMzMzO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICAgICAgICBjb2xvcjogI2ZhZmFmYTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbn1cblxuIl19 */"

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

module.exports = "<div class=\"footer-container\" >\n  <div class=\"footer-title\">\n    Ilyes\n  </div>\n  <div class=\"social-media-links\">\n    <a class=\"icone\" href=\"https://www.linkedin.com/in/iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-linkedin-in\"></i></a>\n    <a class=\"icone\" href=\"https://medium.com/@iliesaithamouda\" target=\"_blank\"><i class=\"fab fa-medium-m\"></i></a>\n    \n  </div>\n  <div class=\"copyrights\">\n    Ilies ait hamouda © 2018. all right reserved.\n  </div>\n</div>\n"

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

module.exports = "<div class=\"profile-pic-container\">\n  <img src=\"./assets/deadpool.png\" alt=\"profil-picture\"/>\n</div>\n<div class=\"introduction-container\">\n  <h1>Hi, I'm Ilyes</h1>\n  <span class=\"introduction-phrase\"></span>\n</div>\n<app-scroll-button></app-scroll-button>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-pic-container img {\n  width: 170px;\n  border: 3px solid #dfdfdf;\n  border-radius: 50%; }\n\n.introduction-container h1 {\n  font-size: 50px;\n  font-weight: 700;\n  line-height: 60px;\n  color: #FFFFFF; }\n\n.introduction-container .introduction-phrase {\n  font-size: 26px;\n  color: #bfbfbf;\n  font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxZQUFXO0VBQ1gseUJBQW9DO0VBQ3BDLGtCQUFrQixFQUFBOztBQUkxQjtFQUVRLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFMdEI7RUFTUSxlQUFlO0VBQ2YsY0FBeUI7RUFDekIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1waWMtY29udGFpbmVyIHtcbiAgICBpbWcge1xuICAgICAgICB3aWR0aDoxNzBweDtcbiAgICAgICAgYm9yZGVyOiAzcHggc29saWQgcmdiKDIyMywgMjIzLCAyMjMpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxufVxuXG4uaW50cm9kdWN0aW9uLWNvbnRhaW5lciB7XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDUwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICB9XG5cbiAgICAuaW50cm9kdWN0aW9uLXBocmFzZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgY29sb3I6IHJnYigxOTEsIDE5MSwgMTkxKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG59Il19 */"

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

module.exports = "<header [@animateStickyMenu]=\"menuState\" class=\"menu-container\">\n  <nav [@animateColorMenu]=\"menuState\" class=\"menu-grid-container\">\n    <div class=\"logo-container\"><img src=\"./assets/logo.svg\"></div>\n    <div (click)=\"toggleMenu = !toggleMenu\" class=\"ham-menu\"><i class=\"fas fa-bars\"></i></div>\n    <div class=\"menu-item-container\" *ngFor=\"let menuItem of menu.items\">\n      <span appSmoothScrolling attr.data-target-link=\"{{menuItem.label}}\" class=\"menu-item\" >{{ menuItem.label.toUpperCase() }}</span>\n    </div>\n  </nav>\n  <div [@animateColorMenu]=\"menuState\" class=\"menu-items-mobile\" [ngClass]=\"{'block' : toggleMenu, 'hidden': !toggleMenu}\">\n    <div (click)=\"toggleMenu = !toggleMenu\" class=\"menu-item-container-mobile menu-item\" *ngFor=\"let menuItem of menu.items\" appSmoothScrolling attr.data-target-link=\"{{menuItem.label}}\">\n      {{ menuItem.label.toUpperCase() }}\n    </div>\n  </div>\n</header>\n\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\n  position: fixed;\n  width: 100%;\n  z-index: 2; }\n  .menu-container .menu-grid-container {\n    max-width: 1170px;\n    margin: 0 auto;\n    display: grid;\n    grid-template-columns: repeat(1, minmax(20%, 50%)) repeat(6, minmax(80px, 1fr));\n    grid-template-rows: 50px;\n    grid-column-gap: 10px;\n    color: #FFFFFF; }\n  .menu-container .menu-grid-container .menu-item-container {\n      align-items: center;\n      display: grid;\n      justify-items: center; }\n  .menu-container .menu-grid-container .logo-container {\n      width: 100px; }\n  .menu-container .menu-grid-container .logo-container img {\n        width: inherit;\n        top: -35px;\n        position: absolute; }\n  .menu-container .menu-item {\n    font-family: \"Lato\", sans-serif;\n    font-size: 13px;\n    font-weight: 700;\n    cursor: pointer; }\n  .menu-container .menu-item-container:last-child {\n    margin-right: 20px; }\n  @media only screen and (min-width: 390px) {\n    .menu-container .ham-menu {\n      display: none; }\n    .menu-container .menu-item-container {\n      display: flex; }\n    .menu-container .menu-items-mobile {\n      display: none; } }\n  @media only screen and (max-width: 700px) {\n  .menu-container {\n    padding-top: 0px !important; }\n    .menu-container .menu-grid-container {\n      grid-template-columns: 3fr .5fr;\n      justify-items: center;\n      padding-left: 70px; }\n      .menu-container .menu-grid-container .ham-menu {\n        display: grid;\n        align-items: center;\n        justify-items: center;\n        font-size: 30px;\n        cursor: pointer; }\n      .menu-container .menu-grid-container .menu-item-container {\n        display: none; }\n      .menu-container .menu-grid-container .logo-container {\n        width: 100px; }\n    .menu-container .menu-items-mobile {\n      overflow: hidden;\n      display: block; }\n      .menu-container .menu-items-mobile.hidden {\n        height: 0px;\n        transition: .5s height ease-in-out; }\n      .menu-container .menu-items-mobile.block {\n        height: 220px;\n        transition: .5s height ease-in-out; }\n    .menu-container .menu-item-container-mobile {\n      padding: 10px 20px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVUsRUFBQTtFQUhkO0lBS1EsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsK0VBQStFO0lBQy9FLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsY0FBYyxFQUFBO0VBWHRCO01BY1ksbUJBQW1CO01BQ25CLGFBQWE7TUFDYixxQkFBcUIsRUFBQTtFQWhCakM7TUFvQlksWUFBWSxFQUFBO0VBcEJ4QjtRQXVCZ0IsY0FBYztRQUNkLFVBQVU7UUFDVixrQkFBa0IsRUFBQTtFQXpCbEM7SUErQlEsK0JBQStCO0lBQy9CLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0VBbEN2QjtJQXNDUSxrQkFBa0IsRUFBQTtFQU10QjtJQTVDSjtNQThDWSxhQUFhLEVBQUE7SUE5Q3pCO01BaURZLGFBQWEsRUFBQTtJQWpEekI7TUFvRFksYUFBYSxFQUFBLEVBQ2hCO0VBS1Q7RUFDSTtJQUNJLDJCQUEyQixFQUFBO0lBRC9CO01BSVEsK0JBQStCO01BQy9CLHFCQUFxQjtNQUNyQixrQkFBa0IsRUFBQTtNQU4xQjtRQVFZLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIscUJBQXFCO1FBQ3JCLGVBQWU7UUFDZixlQUFlLEVBQUE7TUFaM0I7UUFlWSxhQUFhLEVBQUE7TUFmekI7UUFrQlksWUFBWSxFQUFBO0lBbEJ4QjtNQXNCUSxnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBO01BdkJ0QjtRQTBCWSxXQUFXO1FBQ1gsa0NBQWtDLEVBQUE7TUEzQjlDO1FBOEJZLGFBQWE7UUFDYixrQ0FBa0MsRUFBQTtJQS9COUM7TUFvQ1Esa0JBQWtCLEVBQUEsRUFDckIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAyO1xuICAgIC5tZW51LWdyaWQtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCBtaW5tYXgoMjAlLCA1MCUpKSByZXBlYXQoNiwgbWlubWF4KDgwcHgsIDFmcikpOyAvLyA1ZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNTBweDtcbiAgICAgICAgZ3JpZC1jb2x1bW4tZ2FwOiAxMHB4O1xuICAgICAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgIFxuICAgICAgICAmIC5tZW51LWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28tY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcblxuICAgICAgICAgICAgJiBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIHRvcDogLTM1cHg7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbS1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICB9XG5cbiAgICBcblxuICAgIC8vIGRlc2t0b3BcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM5MHB4KSB7XG4gICAgICAgIC5oYW0tbWVudSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5tZW51LWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbnUtaXRlbXMtbW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIG1vYmlsZSBhbmQgdGFibGV0XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLm1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xuICAgIFxuICAgICAgICAubWVudS1ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAuNWZyO1xuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA3MHB4O1xuICAgICAgICAgICAgLmhhbS1tZW51IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAubWVudS1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5sb2dvLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tZW51LWl0ZW1zLW1vYmlsZSB7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAvLyBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICAgICYuaGlkZGVuIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgaGVpZ2h0IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5ibG9jayB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjBweDtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAuNXMgaGVpZ2h0IGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1lbnUtaXRlbS1jb250YWluZXItbW9iaWxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"

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

module.exports = "<div class=\"portfolio-container\">\n  <div class=\"title-container\">\n    <h2>{{data.title}}</h2>\n  </div>\n  <div class=\"grid-container\" [ngClass]=\"{'grid-container-larger': layoutType === 'Work'}\">\n    \n      <ng-template ngFor let-item [ngForOf]=\"data.items\" let-i=\"index\" let-c=\"count\">\n        <div class=\"box\" *ngIf=\"layoutType === 'Services'; else work\" [ngClass]=\"{'middle': i === 1 || i === 4}\">\n          <div class=\"icon\">\n            <i class=\"fab\" [ngClass]=\"item.imgPath\"></i>\n          </div>\n          <div class=\"title\">\n            <h3>{{ item.title }}</h3>\n          </div>\n          <div class=\"description\">\n            {{ item.description }}\n          </div>\n        </div>\n        <ng-template #work >\n\n            <div class=\"box\" class=\"image-container\">\n              <img class=\"image\" [src]=\"item.imgPath\" />\n              <div class=\"overlay-container effect\">\n                  <div class=\"border-box\">\n                      <div class=\"title\">{{ item.title }}</div>\n                  </div>\n              </div>\n            </div>\n            \n        </ng-template>\n      </ng-template>\n    \n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/portfolio/portfolio.component.scss":
/*!****************************************************!*\
  !*** ./src/app/portfolio/portfolio.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".portfolio-container .title-container {\n  color: #333;\n  padding-bottom: 40px; }\n  .portfolio-container .title-container h2 {\n    position: relative;\n    font-weight: 700;\n    line-height: 43px;\n    padding-bottom: 15px;\n    font-size: 36px;\n    margin: 0px;\n    display: inline-block; }\n  .portfolio-container .title-container h2::after {\n      content: '';\n      position: absolute;\n      background-color: #444444;\n      height: 2px;\n      left: 4px;\n      bottom: 0px;\n      width: 50px;\n      text-align: center; }\n  .portfolio-container .grid-container {\n  display: grid;\n  grid-gap: 40px;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  text-align: center;\n  padding: 20px; }\n  .portfolio-container .grid-container .box {\n    display: flex;\n    flex-direction: column; }\n  .portfolio-container .grid-container .box .title h3 {\n      font-size: 19px;\n      font-weight: 700;\n      text-transform: uppercase;\n      position: relative;\n      padding-bottom: 15px; }\n  .portfolio-container .grid-container .box .title h3::after {\n        content: '';\n        position: absolute;\n        background-color: #333333;\n        height: 1px;\n        left: 42%;\n        bottom: 0px;\n        width: 55px;\n        text-align: center; }\n  .portfolio-container .grid-container .box .icon {\n      font-size: 44px;\n      line-height: 70px; }\n  .portfolio-container .grid-container .image-container {\n    margin: 10px;\n    position: relative; }\n  .portfolio-container .grid-container .image-container .image {\n      width: 100%;\n      height: 100%; }\n  .portfolio-container .grid-container .image-container .overlay-container {\n      position: absolute;\n      width: 95%;\n      height: 95%;\n      margin: 2.5%;\n      background-color: transparent;\n      top: 0;\n      left: 0;\n      color: transparent; }\n  .portfolio-container .grid-container .image-container .overlay-container:hover {\n        background-color: rgba(0, 0, 0, 0.8);\n        color: #FFF; }\n  .portfolio-container .grid-container .image-container .overlay-container:hover .border-box {\n          border-color: #FFFFFF; }\n  .portfolio-container .grid-container .image-container .overlay-container .border-box {\n        border: 1px solid transparent;\n        width: 90%;\n        height: 90%;\n        margin: 5%;\n        position: relative; }\n  .portfolio-container .grid-container .image-container .overlay-container .border-box .title {\n          position: absolute;\n          bottom: 20px;\n          left: 20px;\n          opacity: 1;\n          text-transform: capitalize; }\n  .portfolio-container .grid-container-larger {\n  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));\n  padding: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVEsV0FBVztFQUNYLG9CQUFvQixFQUFBO0VBSDVCO0lBS1ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCLEVBQUE7RUFYakM7TUFhZ0IsV0FBVztNQUNYLGtCQUFrQjtNQUNsQix5QkFBaUM7TUFDakMsV0FBVztNQUNYLFNBQVM7TUFDVCxXQUFXO01BQ1gsV0FBVztNQUNYLGtCQUFrQixFQUFBO0VBcEJsQztFQTBCUSxhQUFhO0VBQ2IsY0FBYztFQUNkLDJEQUEyRDtFQUMzRCxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0VBOUJyQjtJQWdDWSxhQUFhO0lBQ2Isc0JBQXNCLEVBQUE7RUFqQ2xDO01BbUNnQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsb0JBQW9CLEVBQUE7RUF2Q3BDO1FBMENvQixXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLHlCQUFpQztRQUNqQyxXQUFXO1FBQ1gsU0FBUztRQUNULFdBQVc7UUFDWCxXQUFXO1FBQ1gsa0JBQWtCLEVBQUE7RUFqRHRDO01BcURnQixlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUF0RGpDO0lBMkRZLFlBQVk7SUFDWixrQkFBa0IsRUFBQTtFQTVEOUI7TUErRGdCLFdBQVc7TUFDWCxZQUFZLEVBQUE7RUFoRTVCO01BbUVnQixrQkFBa0I7TUFDbEIsVUFBVTtNQUNWLFdBQVc7TUFDWCxZQUFZO01BQ1osNkJBQTZCO01BQzdCLE1BQU07TUFDTixPQUFNO01BQ04sa0JBQWtCLEVBQUE7RUExRWxDO1FBNEVvQixvQ0FBb0M7UUFDcEMsV0FBVyxFQUFBO0VBN0UvQjtVQStFd0IscUJBQXFCLEVBQUE7RUEvRTdDO1FBb0ZvQiw2QkFBNkI7UUFDN0IsVUFBVTtRQUNWLFdBQVc7UUFDWCxVQUFVO1FBQ1Ysa0JBQWtCLEVBQUE7RUF4RnRDO1VBMEZ3QixrQkFBa0I7VUFDbEIsWUFBWTtVQUNaLFVBQVU7VUFDVixVQUFVO1VBQ1YsMEJBQTBCLEVBQUE7RUE5RmxEO0VBd0dRLDJEQUEyRDtFQUMzRCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wb3J0Zm9saW8vcG9ydGZvbGlvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucG9ydGZvbGlvLWNvbnRhaW5lciB7XG4gICAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgICAgJiBoMiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQzcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDY4LCA2OCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgbGVmdDogNHB4O1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ncmlkLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtZ2FwOiA0MHB4O1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAuYm94IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLnRpdGxlIGgzIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcblxuICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUxLCA1MSwgNTEpO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNDIlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0NHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm92ZXJsYXktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk1JTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIuNSU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgIGxlZnQ6MDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgICAgICAgICAgIC5ib3JkZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5ib3JkZXItYm94IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUlO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdyaWQtY29udGFpbmVyLWxhcmdlciB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzYwcHgsIDFmcikpO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgfVxufSJdfQ== */"

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

module.exports = "<div class=\"posts-container\">\n    this is a post section \n  </div>"

/***/ }),

/***/ "./src/app/posts/posts.component.scss":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RzL3Bvc3RzLmNvbXBvbmVudC5zY3NzIn0= */"

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


var PostsComponent = /** @class */ (function () {
    function PostsComponent() {
    }
    PostsComponent.prototype.ngOnInit = function () {
    };
    PostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html"),
            styles: [__webpack_require__(/*! ./posts.component.scss */ "./src/app/posts/posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PostsComponent);
    return PostsComponent;
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

module.exports = ".scroll-button-container {\n  position: absolute;\n  border: 2px solid white;\n  width: 20px;\n  height: 40px;\n  border-radius: 40px;\n  top: 90vh;\n  left: 49vw;\n  padding: 5px 2px;\n  cursor: pointer; }\n  .scroll-button-container .scroll-button {\n    width: 3px;\n    height: 3px;\n    background-color: #FFF;\n    border: 3px solid #FFF;\n    border-radius: 5px;\n    left: 7px;\n    position: absolute; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9zY3JvbGwtYnV0dG9uL3Njcm9sbC1idXR0b24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtFQVRuQjtJQWFRLFVBQVU7SUFDVixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsU0FBUztJQUNULGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2Nyb2xsLWJ1dHRvbi9zY3JvbGwtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1idXR0b24tY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gICAgdG9wOiA5MHZoO1xuICAgIGxlZnQ6IDQ5dnc7XG4gICAgcGFkZGluZzogNXB4IDJweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAuc2Nyb2xsLWJ1dHRvbiB7XG5cbiAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgbGVmdDogN3B4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgXG4gICAgfVxufSJdfQ== */"

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

module.exports = ".scroll-top-container {\n  display: none;\n  position: fixed;\n  width: 40px;\n  height: 40px;\n  background-color: #000000;\n  border: 2px solid #000000;\n  right: 25px;\n  bottom: 25px;\n  font-size: 28px;\n  line-height: 38px;\n  text-align: center;\n  z-index: 5;\n  color: #FFFFFF;\n  cursor: pointer; }\n  .scroll-top-container:hover {\n    background-color: #FFFFFF;\n    color: #000000; }\n  .show-scroll-top-button {\n  display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9zY3JvbGwtdG9wLWJ1dHRvbi9zY3JvbGwtdG9wLWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGNBQWM7RUFDZCxlQUFlLEVBQUE7RUFkbkI7SUFnQlEseUJBQXlCO0lBQ3pCLGNBQWMsRUFBQTtFQUl0QjtFQUNJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbC10b3AtYnV0dG9uL3Njcm9sbC10b3AtYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC10b3AtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDAwMDAwO1xuICAgIHJpZ2h0OjI1cHg7XG4gICAgYm90dG9tOiAyNXB4O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBsaW5lLWhlaWdodDogMzhweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogNTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbn1cblxuLnNob3ctc2Nyb2xsLXRvcC1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */"

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

module.exports = "<div scrollableBackgroundImage class=\"section-container {{backgroundColorClass}}\" [ngClass]=\"{'background-pic-m low-opacity' : sectionType === 'Home'}\">\n  <div *ngIf=\"sectionType === 'Home'\" class=\"overlay-shadow\"></div>\n  <div class=\"section\">\n    <app-home       *ngIf=\"sectionType === 'Home'\"></app-home>\n    <app-about      *ngIf=\"sectionType === 'About'\"></app-about>\n    <app-portfolio  *ngIf=\"sectionType === 'Services'\" [layoutType]=\"sectionType\"></app-portfolio>\n    <app-portfolio  *ngIf=\"sectionType === 'Work'\" [layoutType]=\"sectionType\"></app-portfolio>\n    <app-posts      *ngIf=\"sectionType === 'Posts'\"></app-posts>\n    <app-contact    *ngIf=\"sectionType === 'Contact'\"></app-contact>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/section/section.component.scss":
/*!************************************************!*\
  !*** ./src/app/section/section.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section-container {\n  width: 100%;\n  padding: 100px 0px; }\n  .section-container .section {\n    max-width: 1170px;\n    margin: 0 auto;\n    position: relative;\n    z-index: 1;\n    text-align: center; }\n  .overlay-shadow {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.6);\n  top: 0;\n  right: 0; }\n  .background-pic-m {\n  background-image: url('background-mountain.jpg');\n  background-position: 50% 0px;\n  background-size: cover;\n  height: 100vh;\n  position: relative;\n  padding: 0px; }\n  .background-pic-m .section {\n    padding: 20%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy96ODU4MzEvRG9jdW1lbnRzL3BlcnNvbmFsL3BlcnNvbmFsV29yay9wcm9maWwvc3JjL2FwcC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7RUFGdEI7SUFLUSxpQkFBaUI7SUFDakIsY0FBYztJQUVkLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1Ysa0JBQWtCLEVBQUE7RUFJMUI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVk7RUFDWixvQ0FBb0M7RUFDcEMsTUFBTTtFQUNOLFFBQVEsRUFBQTtFQUdaO0VBQ0ksZ0RBQTZEO0VBQzdELDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7RUFOaEI7SUFRUSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zZWN0aW9uL3NlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5zZWN0aW9uLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTAwcHggMHB4O1xuICAgIFxuICAgIC5zZWN0aW9uIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAvLyBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4ub3ZlcmxheS1zaGFkb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDoxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuXG4uYmFja2dyb3VuZC1waWMtbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvYmFja2dyb3VuZC1tb3VudGFpbi5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgMHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC5zZWN0aW9uIHtcbiAgICAgICAgcGFkZGluZzogMjAlO1xuICAgIH1cbn0iXX0= */"

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

module.exports = __webpack_require__(/*! /Users/z85831/Documents/personal/personalWork/profil/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map