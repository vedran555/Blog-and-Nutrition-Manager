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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_login_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/login-guard.service */ "./src/app/services/login-guard.service.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/blog/delete-blog/delete-blog.component */ "./src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_nutrition_manager_nutrition_manager_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/nutrition-manager/nutrition-manager.component */ "./src/app/components/nutrition-manager/nutrition-manager.component.ts");
/* harmony import */ var src_app_components_edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/components/edit-meal/edit-meal.component */ "./src/app/components/edit-meal/edit-meal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'dashboard', component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'blog', component: _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'edit-blog/:id', component: _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_10__["EditBlogComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'delete-blog/:id', component: _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_11__["DeleteBlogComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'profile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'user/:username', component: _components_user_user_component__WEBPACK_IMPORTED_MODULE_12__["UserComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'nutritionmanager', component: _components_nutrition_manager_nutrition_manager_component__WEBPACK_IMPORTED_MODULE_13__["NutritionManagerComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'edit-meal/:date', component: src_app_components_edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_14__["EditMealComponent"], canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"]] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"], canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["LoginGuardService"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"], canActivate: [_services_login_guard_service__WEBPACK_IMPORTED_MODULE_9__["LoginGuardService"]] },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
            providers: [],
            bootstrap: [],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flash {\r\n    text-align: center;\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container flash\">\n    <flash-messages></flash-messages>\n</div>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(configService) {
        this.configService = configService;
    }
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/navbar-item/navbar-item.component */ "./src/app/components/navbar-item/navbar-item.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/screen.service */ "./src/app/services/screen.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_login_guard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/login-guard.service */ "./src/app/services/login-guard.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/blog/edit-blog/edit-blog.component */ "./src/app/components/blog/edit-blog/edit-blog.component.ts");
/* harmony import */ var _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/blog/delete-blog/delete-blog.component */ "./src/app/components/blog/delete-blog/delete-blog.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _services_comment_validator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/comment-validator */ "./src/app/services/comment-validator.ts");
/* harmony import */ var _services_dropdown_directive__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/dropdown.directive */ "./src/app/services/dropdown.directive.ts");
/* harmony import */ var _services_dropdown_item_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/dropdown-item.directive */ "./src/app/services/dropdown-item.directive.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _components_nutrition_manager_nutrition_manager_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/nutrition-manager/nutrition-manager.component */ "./src/app/components/nutrition-manager/nutrition-manager.component.ts");
/* harmony import */ var src_app_material_components_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! src/app/material-components.module */ "./src/app/material-components.module.ts");
/* harmony import */ var src_app_components_meals_meals_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! src/app/components/meals/meals.component */ "./src/app/components/meals/meals.component.ts");
/* harmony import */ var src_app_components_earlier_days_earlier_days_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! src/app/components/earlier-days/earlier-days.component */ "./src/app/components/earlier-days/earlier-days.component.ts");
/* harmony import */ var src_app_components_edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! src/app/components/edit-meal/edit-meal.component */ "./src/app/components/edit-meal/edit-meal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_10__["BlogComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_navbar_item_navbar_item_component__WEBPACK_IMPORTED_MODULE_14__["NavbarItemComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"],
                _components_blog_edit_blog_edit_blog_component__WEBPACK_IMPORTED_MODULE_22__["EditBlogComponent"],
                _components_blog_delete_blog_delete_blog_component__WEBPACK_IMPORTED_MODULE_23__["DeleteBlogComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_24__["UserComponent"],
                _services_comment_validator__WEBPACK_IMPORTED_MODULE_25__["ValidateComment"],
                _services_dropdown_directive__WEBPACK_IMPORTED_MODULE_26__["ClickOutsideDirective"],
                _services_dropdown_item_directive__WEBPACK_IMPORTED_MODULE_27__["KeydownEventDirective"],
                _components_nutrition_manager_nutrition_manager_component__WEBPACK_IMPORTED_MODULE_30__["NutritionManagerComponent"],
                src_app_components_meals_meals_component__WEBPACK_IMPORTED_MODULE_32__["MealsComponent"],
                src_app_components_earlier_days_earlier_days_component__WEBPACK_IMPORTED_MODULE_33__["EarlierDaysComponent"],
                src_app_components_edit_meal_edit_meal_component__WEBPACK_IMPORTED_MODULE_34__["EditMealComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_28__["BrowserAnimationsModule"],
                src_app_material_components_module__WEBPACK_IMPORTED_MODULE_31__["MaterialComponentsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_18__["FlashMessagesModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatNativeDateModule"]
            ],
            providers: [
                _services_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"],
                _services_screen_service__WEBPACK_IMPORTED_MODULE_16__["ScreenService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"],
                _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuardService"],
                _services_login_guard_service__WEBPACK_IMPORTED_MODULE_20__["LoginGuardService"],
                _services_blog_service__WEBPACK_IMPORTED_MODULE_21__["BlogService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dropbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n}\r\n\r\n/* The container <div> - needed to position the dropdown content */\r\n\r\n.dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin-top: 5px;\r\n}\r\n\r\n/* Dropdown Content (Hidden by Default) */\r\n\r\n.dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n}\r\n\r\n/* Links inside the dropdown */\r\n\r\n.dropdown-content a {\r\n    color: black;\r\n    padding: 6px 8px;\r\n    text-decoration: none;\r\n    display: block;\r\n}\r\n\r\n/* Change color of dropdown links on hover */\r\n\r\n.dropdown-content a:hover {background-color: #ddd}\r\n\r\n/* Show the dropdown menu on hover */\r\n\r\n.dropdown:hover .dropdown-content {\r\n    display: block;\r\n}\r\n\r\n/* Change the background color of the dropdown button when the dropdown content is shown */\r\n\r\n.dropdown:hover .dropbtn {\r\n    background-color: #3e8e41;\r\n}\r\n\r\n/* ///////////////// */\r\n\r\nul {\r\n    list-style-type: none;\r\n    padding-left: 0px;\r\n}\r\n\r\nul li {\r\n    margin-left: 5px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.like-disabled:disabled {\r\n    background-color: #dff0df;\r\n    color: #09ac09;\r\n    cursor: default;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    border: 2px solid #06f506;\r\n}\r\n\r\n.dislike-disabled:disabled {\r\n    background-color: #f0e2ce;\r\n    color: #f1920c;\r\n    cursor: default;\r\n    font-size: 15px;\r\n    font-weight: 700;\r\n    border: 2px solid #f1920c;\r\n}\r\n\r\n.profile {\r\n    position: absolute;\r\n    top: 200;\r\n    bottom: 200;\r\n    left: 400;\r\n    right: 400;\r\n    background-color: white;\r\n    color: black;\r\n    z-index: 1;\r\n}\r\n\r\n.reload {\r\n    z-index: 0;\r\n}\r\n\r\n.search {\r\n    float: right;\r\n}\r\n\r\n.row-main {\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    margin: 10px 0 0 0;\r\n}\r\n\r\n.second {\r\n    border-radius: 10px;\r\n    border: 1px #dddddd solid;\r\n}\r\n\r\n.col-md-2 {\r\n    height: 30px;\r\n    line-height: 30px;\r\n    text-align: center;\r\n}\r\n\r\n.row-search {\r\n    margin: 5px 0 5px 0;\r\n}\r\n\r\n.searchbox-wrapper-small {\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-bottom: 8px;\r\n}\r\n\r\n.searchbox {\r\n    border-radius: 10px;\r\n    border: 1px #dddddd solid;\r\n    width: 50%;\r\n    padding: 10px;\r\n    float: right;\r\n}\r\n\r\n.searchbox-small {\r\n    border-radius: 10px;\r\n    border: 1px #dddddd solid;\r\n    padding: 10px;\r\n}\r\n\r\n.input-box {\r\n    display: flex;\r\n    margin-top: 5px;\r\n}\r\n\r\n.description {\r\n    width: 100px;\r\n    text-align: center;\r\n}\r\n\r\n.description-small {\r\n    width: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.inp {\r\n    width: 300px;\r\n}\r\n\r\n.inp-small {\r\n    width: 200px;\r\n}\r\n\r\n.go {\r\n    margin-top: 5px;\r\n    float: right;\r\n}\r\n\r\n.dropdown-container {\r\n    position: absolute;\r\n    z-index: 1;\r\n    background-color: #f6f6f6;\r\n    width: 300px;\r\n    /* border-left: 1px solid #7741f7;\r\n    border-bottom: 1px solid #7741f7;\r\n    border-right: 1px solid #7741f7;*/\r\n}\r\n\r\n.dropdown-container-small {\r\n    position: absolute;\r\n    z-index: 1;\r\n    background-color: #f6f6f6;\r\n    width: 200px;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.top-buttons {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.searchbox-wrapper {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.dropdown-list {\r\n    list-style-type: none;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.dropdown-list li {\r\n    margin-left: 0px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.mouseover-drodown-item {\r\n    background-color: #d4cbcb;\r\n    cursor: default;\r\n}\r\n\r\n.warning {\r\n    margin: 5px 0 0 23px;\r\n    font-size: 12px;\r\n    color: #adacac;\r\n}\r\n\r\n.warning-small {\r\n    margin: 5px 0 0 0;\r\n    font-size: 12px;\r\n    color: #adacac;\r\n}"

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">\n    Blog Feed\n  </h2>\n\n  <div class=\"top-buttons\">\n    <button type=\"button\" name=\"button\" class=\"btn btn-warning\" *ngIf=\"!newPost\" (click)=\"newBlogForm()\"\n    [ngClass]=\"{'btn-sm': !screenService.isLarge()}\">\n      New Post\n    </button>\n    <button [disabled]=\"loadingBlogs\" type=\"button\" name=\"button\" class=\"btn btn-default reload\" \n    *ngIf=\"!newPost\" (click)=\"reloadBlogs()\" [ngClass]=\"{'btn-sm': !screenService.isLarge()}\">\n      <span class=\"glyphicon glyphicon-repeat\"></span>Reload\n    </button>\n    \n    <button class=\"btn btn-default search\" (click)=\"showSearchBox=true\" *ngIf=\"!newPost && !showSearchBox\"\n    [ngClass]=\"{'btn-sm': !screenService.isLarge()}\">\n      <span class=\"glyphicon glyphicon-chevron-down\"></span> Search \n    </button>\n    <button class=\"btn btn-default search\" (click)=\"showSearchBox=false\" *ngIf=\"!newPost && showSearchBox\"\n    [ngClass]=\"{'btn-sm': !screenService.isLarge()}\">\n      <span class=\"glyphicon glyphicon-chevron-up\"></span> Hide Search</button>\n  </div>\n\n  <!-- search box --> <!-- make search box responsive $##########-->\n  <div *ngIf=\"showSearchBox && !newPost && !loadingBlogs\"\n  [ngClass]=\"{'searchbox-wrapper': screenService.isLarge(), 'searchbox-wrapper-small': !screenService.isLarge()}\">\n    <div [ngClass]=\"{'searchbox': screenService.isLarge(), 'searchbox-small': !screenService.isLarge()}\">\n      <div class=\"input-box\">\n        <div [ngClass]=\"{'description': screenService.isLarge(), 'description-small': !screenService.isLarge()}\">title:</div>\n        <div class=\"input-div\">\n          <div>\n            <input type=\"text\" placeholder=\"Enter title\" (input)=\"titleSearch()\" \n            [ngClass]=\"{'inp': screenService.isLarge(), 'inp-small': !screenService.isLarge()}\"\n            [(ngModel)]=\"titleInput\" name=\"titleInput\" keydownEvent (keydownEvent)=\"onKeydown($event)\" \n            (keyup.enter)=\"onEnter()\">\n          </div>\n          <div *ngIf=\"!isValidTitle()\" [style.font-size.px]=\"12\" [style.color]=\"'#adacac'\">\n            <span class=\"glyphicon glyphicon-info-sign\"></span> provide some characters\n          </div>\n          <div *ngIf=\"titleCond\" clickOutside (clickOutside)=\"toggleDropdown()\"\n          [ngClass]=\"{'dropdown-container': screenService.isLarge(), 'dropdown-container-small': !screenService.isLarge()}\">\n            <ul class=\"dropdown-list\">\n              <li class=\"dropdown-item\" *ngFor=\"let item of titleItems; let i=index\"\n                (click)=\"titleItemClick(item.title)\" #itemm (mouseover)=\"mouseOver(i, item.title)\"\n                (mouseout)=\"mouseOut()\"\n                [ngClass]=\"{'mouseover-drodown-item': ind===i}\">{{item.title}}\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n      <div class=\"input-box\">\n        <div [ngClass]=\"{'description': screenService.isLarge(), 'description-small': !screenService.isLarge()}\">author:</div>\n        <div class=\"input-div\">\n          <div>\n              <input type=\"text\" placeholder=\"Enter author\" (input)=\"authorSearch()\" \n              [ngClass]=\"{'inp': screenService.isLarge(), 'inp-small': !screenService.isLarge()}\"\n              [(ngModel)]=\"authorInput\" name=\"authorInput\" keydownEvent (keydownEvent)=\"onKeydownAuthor($event)\" \n              (keyup.enter)=\"onEnterAuthor()\">\n          </div>\n          <div *ngIf=\"!isValidAuthor()\" [style.font-size.px]=\"12\" [style.color]=\"'#adacac'\">\n              <span class=\"glyphicon glyphicon-info-sign\"></span> provide some characters\n            </div>\n          <div *ngIf=\"authorCond\" clickOutside (clickOutside)=\"toggleDropdownAuthor()\"\n          [ngClass]=\"{'dropdown-container': screenService.isLarge(), 'dropdown-container-small': !screenService.isLarge()}\">\n            <ul class=\"dropdown-list\">\n              <li class=\"dropdown-item\" *ngFor=\"let item of authorItems; let i=index\"\n                (click)=\"authorItemClick(item)\" (mouseover)=\"mouseOverAuthor(i, item)\"\n                (mouseout)=\"mouseOutAuthor()\"\n                [ngClass]=\"{'mouseover-drodown-item': indAuthor===i}\">{{item}}\n              </li>\n            </ul>\n          </div>\n          <button [disabled]=\"!isValidTitle() || !isValidAuthor() || (titleInput==='' && authorInput==='')\" \n          class=\"btn btn-sm btn-primary go\" (click)=\"searchBlogs()\">\n          Go\n        </button>\n        </div>\n      </div>\n      <div [ngClass]=\"{'warning': screenService.isLarge(), 'warning-small': !screenService.isLarge()}\">\n        *leaving field empty will not filter search with it\n      </div>\n    </div>\n  </div>\n  <!-- end of search box -->\n\n  <br /><br />\n\n  \n  <form [formGroup]=\"form\" (ngSubmit)=\"onBlogSubmit()\" *ngIf=\"newPost\">\n      <div class=\"form-group\">\n        <label class=\"center-block\">Title:</label>\n        <div [ngClass]=\"{'has-error': (form.controls.title.errors && form.controls.title.dirty), \n          'has-success': !form.controls.title.errors }\">\n          <input class=\"form-control\" name=\"title\" placeholder=\"*Enter title\" formControlName=\"title\">\n          <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.title.errors?.required && form.controls.title.dirty\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> Title is required\n                </li>\n                <li *ngIf=\"(form.controls.title.errors?.minlength && form.controls.title.dirty) || \n              (form.controls.title.errors?.maxlength && form.controls.title.dirty)\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n            Title has to be between 5 and 50 characters long\n          </li>\n          <li *ngIf=\"form.controls.title.errors?.validateTitle && form.controls.title.dirty && !form.controls.title.errors?.required\">\n              <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n              Title can contain only alphanumerical characters\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label class=\"center-block\">Body:</label>\n          <div [ngClass]=\"{'has-error': (form.controls.body.errors && form.controls.body.dirty), \n            'has-success': !form.controls.body.errors }\">\n            <textarea name=\"body\" class=\"form-control\" rows=\"8\" cols=\"80\" placeholder=\"*Enter body\" formControlName=\"body\">\n              </textarea>\n            <ul class=\"help-block\">\n              <li *ngIf=\"form.controls.body.errors?.required && form.controls.body.dirty\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> Body is required\n              </li>\n              <li *ngIf=\"(form.controls.body.errors?.minlength && form.controls.body.dirty) || \n                  (form.controls.body.errors?.maxlength && form.controls.body.dirty)\">\n                <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n                Body has to be between 2 and 500 characters long\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <button [disabled]=\"processing\" type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning\" (click)=\"goBack()\">Go Back</button>\n        <button [disabled]=\"processing || !form.valid\" type=\"submit\" name=\"button\" class=\"btn btn-sm btn-success\">Submit</button>\n  \n    </form>\n<!-- ################### all blog posts ################### -->\n  <div *ngIf=\"!newPost && !loadingBlogs && !searchPerformed\">\n    <div class=\"panel panel-primary\" *ngFor=\"let blog of blogPosts\">\n      <div class=\"panel-heading\">\n        <h3 class=\"panel-title\">{{blog.title}}\n          <span [style.float]=\"'right'\" [style.font-size.px]=\"14\" *ngIf=\"screenService.isLarge()\">\n            {{blog.createdAt | date:'medium'}}\n          </span>\n        </h3>\n      </div>\n      <div class=\"panel-body\">{{blog.body}}</div>\n      <div class=\"panel-footer\">\n        <strong>Posted by:</strong> {{blog.createdBy}}\n        <br  *ngIf=\"!screenService.isLarge()\" />\n        <span *ngIf=\"!screenService.isLarge()\"><strong>Date:</strong> {{blog.createdAt | date:'medium'}}</span>\n        <div *ngIf=\"username === blog.createdBy\"> <!-- only user who created this can see this div -->\n          <strong>Likes:</strong> {{blog.likes}}\n          <strong>Dislikes:</strong> {{blog.dislikes}}\n        </div>\n        \n        <a [routerLink]=\"['/edit-blog/', blog._id ]\" *ngIf=\"username === blog.createdBy\"> <!-- only user who created this can see this div -->\n          <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button>\n        </a>\n        <a [routerLink]=\"['/delete-blog/', blog._id ]\" *ngIf=\"username === blog.createdBy\"> <!-- only user who created this can see this div -->\n          <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button>\n        </a>\n        <br />\n        <div class=\"dropdown\">\n          <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-success drop-btn like-disabled\" *ngIf=\"username !== blog.createdBy\"\n            (click)=\"onLike(blog._id)\" [disabled]=\"blog.likedBy.Array.includes(username)\"> \n            <!-- alternative way to check if user already liked: [disabled]=\"blog.likedBy.Array.indexOf(username) > -1\" -->\n            <span class=\"glyphicon glyphicon-thumbs-up\"></span> {{blog.likes}}\n          </button>\n          <div class=\"dropdown-content\">\n            <a [routerLink]=\"['/user', liker]\" *ngFor=\"let liker of blog.likedBy.Array\">{{liker}}</a>\n          </div>\n        </div>\n        <div class=\"dropdown\">\n          <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning drop-btn dislike-disabled\" \n          *ngIf=\"username !== blog.createdBy\" (click)=\"onDislike(blog._id)\" [disabled]=\"blog.dislikedBy.Array.includes(username)\">\n            <span class=\"glyphicon glyphicon-thumbs-down\"></span> {{blog.dislikes}}\n          </button>\n          <div class=\"dropdown-content\">\n            <a [routerLink]=\"['/user', disliker]\" *ngFor=\"let disliker of blog.dislikedBy.Array\">{{disliker}}</a>\n          </div>\n        </div>\n      </div> <!-- footer end -->\n      <!-- comments section -->\n      <div class=\"panel panel-default\" \n        [style.margin-bottom.px]=\"0\" *ngFor=\"let comm of blog.comments\">\n        <div class=\"panel panel-body\" \n          [style.margin-bottom.px]=\"0\" *ngIf=\"enabledIds.includes(blog._id)\">\n          <strong>{{comm.commentator}}:</strong> {{comm.comment}}\n          <br />\n          <span [style.font-size.px]=\"13\"><strong>Date:</strong> {{comm.createdAt | date:'medium'}}</span>\n          <br />\n          <button class=\"btn btn-sm btn-primary\" *ngIf=\"comm.commentator === username\" \n          data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"getComment(comm._id)\">\n            Edit\n          </button>\n          <!-- Edit Modal -->\n          <div id=\"editModal\" class=\"modal fade\" role=\"dialog\">\n              <div class=\"modal-dialog\">\n            \n                <!-- Modal content-->\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Edit Comment</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                      <form #formEditComm=\"ngForm\">\n                          <div class=\"form-group\" [ngClass]=\"{'has-error': (editCommentBody1.errors && editCommentBody1.dirty),\n                            'has-success': (!editCommentBody1.errors && editCommentBody1.dirty)}\">\n                            <textarea class=\"form-control\" rows=\"2\" cols=\"15\" name=\"editCommentBody\" [style.margin-bottom.px]=\"5\"\n                                [(ngModel)]=\"editCommentBody\" #editCommentBody1=\"ngModel\" \n                                required validateComment>\n                            </textarea>\n                            <ul class=\"help-block\">\n                              <li *ngIf=\"editCommentBody1.errors?.required && editCommentBody1.dirty\">\n                                <span class=\"glyphicon glyphicon-exclamation-sign\"></span> This field is required\n                              </li>\n                              <li *ngIf=\"editCommentBody1.errors?.validateComment && editCommentBody1.dirty\">\n                                <span class=\"glyphicon glyphicon-exclamation-sign\"></span> \n                                Comment must contain at least one character which is not space,new line,...\n                              </li>\n                            </ul>\n                          </div>\n                          \n                        </form>\n                  </div> <!-- end of modal body --> \n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                    <button type=\"submit\" id=\"submit\" [disabled]=\"!formEditComm.valid\" class=\"btn btn-primary\"\n                      data-dismiss=\"modal\" (click)=\"editComment()\">Save</button>\n                  </div>\n                </div> <!-- end of modal content --> \n              </div> <!-- end of modal dialog --> \n          </div> <!-- end of edit modal --> \n          <button class=\"btn btn-sm btn-warning\" *ngIf=\"comm.commentator === username\"\n          data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"toDelete=comm._id\">\n            Delete\n          </button>\n          <!-- Delete Modal -->\n          <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n              <div class=\"modal-dialog\">\n            \n                <!-- Modal content-->\n                <div class=\"modal-content\">\n                  <div class=\"modal-header\">\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    <h4 class=\"modal-title\">Delete Comment</h4>\n                  </div>\n                  <div class=\"modal-body\">\n                    <p>Are you sure you want to delete this comment?</p>\n                  </div>\n                  <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" \n                    (click)=\"deleteComment()\">Yes</button>\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n                  </div>\n                </div>\n            \n              </div>\n          </div>\n        </div>\n      </div>\n      <ul [hidden]=\"editingComments.includes(blog._id)\" class=\"list-group\">\n        <li class=\"list-group-item\">\n          <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\"\n          *ngIf=\"!commentsIds.includes(blog._id)\" (click)=\"commentsIds.push(blog._id)\">\n            Post Comment\n          </button>\n          <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"enabledIds.push(blog._id)\" \n            *ngIf=\"blog.comments.length>0 && !enabledIds.includes(blog._id)\" [style.font-weight]=\"600\">\n            Show comments\n          </button>\n          <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"enabledIds.splice(enabledIds.indexOf(blog._id), 1)\" \n            *ngIf=\"enabledIds.includes(blog._id) && blog.comments.length>0\" [style.font-weight]=\"600\"> <!-- blog.comments.length>0 to hide button \"Hide Comments\" when last comment is deleted by the user -->\n            Hide comments\n          </button>\n          <span *ngIf=\"id===blog._id\">{{id}}</span>\n          <br />\n        </li>\n        <li class=\"list-group-item\" *ngIf=\"commentsIds.includes(blog._id)\">\n          <form #form=\"ngForm\" (ngSubmit)=\"postComment(blog._id)\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': (commentBody1.errors && commentBody1.dirty),\n             'has-success': (!commentBody1.errors && commentBody1.dirty)}\">\n              <textarea class=\"form-control\" rows=\"5\" cols=\"15\" name=\"commentBody\" [style.margin-bottom.px]=\"5\"\n                placeholder=\"*Enter Your comment\" [(ngModel)]=\"commentBody\" #commentBody1=\"ngModel\" \n                required validateComment>\n              </textarea>\n              <ul class=\"help-block\">\n                <li *ngIf=\"commentBody1.errors?.required && commentBody1.dirty\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\"></span> This field is required\n                </li>\n                <li *ngIf=\"commentBody1.errors?.validateComment && commentBody1.dirty\">\n                  <span class=\"glyphicon glyphicon-exclamation-sign\"></span> \n                  Comment must contain at least one character which is not space,new line,...\n                </li>\n              </ul>\n            </div>\n            <button type=\"button\" class=\"btn btn-default\" (click)=\"commentsIds.splice(commentsIds.indexOf(blog._id), 1)\">\n              Cancel\n            </button>\n            <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-primary\">Comment!</button>\n          </form>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n<!-- ################   result of search   #########################-->\n  <div *ngIf=\"!newPost && !loadingBlogs && searchPerformed\">\n      <div class=\"panel panel-primary\" *ngFor=\"let blog of searchedBlogs\">\n        <div class=\"panel-heading\">\n          <h3 class=\"panel-title\">{{blog.title}}\n            <span [style.float]=\"'right'\" [style.font-size.px]=\"14\" *ngIf=\"screenService.isLarge()\">\n              {{blog.createdAt | date:'medium'}}\n            </span>\n          </h3>\n        </div>\n        <div class=\"panel-body\">{{blog.body}}</div>\n        <div class=\"panel-footer\">\n          <strong>Posted by:</strong> {{blog.createdBy}}\n          <br  *ngIf=\"!screenService.isLarge()\" />\n          <span *ngIf=\"!screenService.isLarge()\"><strong>Date:</strong> {{blog.createdAt | date:'medium'}}</span>\n          <div *ngIf=\"username === blog.createdBy\"> <!-- only user who created this can see this div -->\n            <strong>Likes:</strong> {{blog.likes}}\n            <strong>Dislikes:</strong> {{blog.dislikes}}\n          </div>\n          \n          <a [routerLink]=\"['/edit-blog/', blog._id ]\" *ngIf=\"username === blog.createdBy\"> <!-- only user who created this can see this div -->\n            <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-info\">Edit</button>\n          </a>\n          <a [routerLink]=\"['/delete-blog/', blog._id ]\" *ngIf=\"username === blog.createdBy\"> <!-- only user who created this can see this div -->\n            <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\">Delete</button>\n          </a>\n          <br />\n          <div class=\"dropdown\">\n            <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-success drop-btn like-disabled\" *ngIf=\"username !== blog.createdBy\"\n              (click)=\"onLike(blog._id)\" [disabled]=\"blog.likedBy.Array.includes(username)\"> \n              <!-- alternative way to check if user already liked: [disabled]=\"blog.likedBy.Array.indexOf(username) > -1\" -->\n              <span class=\"glyphicon glyphicon-thumbs-up\"></span> {{blog.likes}}\n            </button>\n            <div class=\"dropdown-content\">\n              <a [routerLink]=\"['/user', liker]\" *ngFor=\"let liker of blog.likedBy.Array\">{{liker}}</a>\n            </div>\n          </div>\n          <div class=\"dropdown\">\n            <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-warning drop-btn dislike-disabled\" \n            *ngIf=\"username !== blog.createdBy\" (click)=\"onDislike(blog._id)\" [disabled]=\"blog.dislikedBy.Array.includes(username)\">\n              <span class=\"glyphicon glyphicon-thumbs-down\"></span> {{blog.dislikes}}\n            </button>\n            <div class=\"dropdown-content\">\n              <a [routerLink]=\"['/user', disliker]\" *ngFor=\"let disliker of blog.dislikedBy.Array\">{{disliker}}</a>\n            </div>\n          </div>\n        </div> <!-- footer end -->\n        <!-- comments section -->\n        <div class=\"panel panel-default\" \n          [style.margin-bottom.px]=\"0\" *ngFor=\"let comm of blog.comments\">\n          <div class=\"panel panel-body\" \n            [style.margin-bottom.px]=\"0\" *ngIf=\"enabledIds.includes(blog._id)\">\n            <strong>{{comm.commentator}}:</strong> {{comm.comment}}\n            <br />\n            <span [style.font-size.px]=\"13\"><strong>Date:</strong> {{comm.createdAt | date:'medium'}}</span>\n            <br />\n            <button class=\"btn btn-sm btn-primary\" *ngIf=\"comm.commentator === username\" \n            data-toggle=\"modal\" data-target=\"#editModal\" (click)=\"getComment(comm._id)\">\n              Edit\n            </button>\n            <!-- Edit Modal -->\n            <div id=\"editModal\" class=\"modal fade\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n              \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      <h4 class=\"modal-title\">Edit Comment</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                        <form #formEditComm=\"ngForm\">\n                            <div class=\"form-group\" [ngClass]=\"{'has-error': (editCommentBody1.errors && editCommentBody1.dirty),\n                              'has-success': (!editCommentBody1.errors && editCommentBody1.dirty)}\">\n                              <textarea class=\"form-control\" rows=\"2\" cols=\"15\" name=\"editCommentBody\" [style.margin-bottom.px]=\"5\"\n                                  [(ngModel)]=\"editCommentBody\" #editCommentBody1=\"ngModel\" \n                                  required validateComment>\n                              </textarea>\n                              <ul class=\"help-block\">\n                                <li *ngIf=\"editCommentBody1.errors?.required && editCommentBody1.dirty\">\n                                  <span class=\"glyphicon glyphicon-exclamation-sign\"></span> This field is required\n                                </li>\n                                <li *ngIf=\"editCommentBody1.errors?.validateComment && editCommentBody1.dirty\">\n                                  <span class=\"glyphicon glyphicon-exclamation-sign\"></span> \n                                  Comment must contain at least one character which is not space,new line,...\n                                </li>\n                              </ul>\n                            </div>\n                            \n                          </form>\n                    </div> <!-- end of modal body --> \n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\n                      <button type=\"submit\" id=\"submit\" [disabled]=\"!formEditComm.valid\" class=\"btn btn-primary\"\n                        data-dismiss=\"modal\" (click)=\"editComment()\">Save</button>\n                    </div>\n                  </div> <!-- end of modal content --> \n                </div> <!-- end of modal dialog --> \n            </div> <!-- end of edit modal --> \n            <button class=\"btn btn-sm btn-warning\" *ngIf=\"comm.commentator === username\"\n            data-toggle=\"modal\" data-target=\"#deleteModal\" (click)=\"toDelete=comm._id\">\n              Delete\n            </button>\n            <!-- Delete Modal -->\n            <div id=\"deleteModal\" class=\"modal fade\" role=\"dialog\">\n                <div class=\"modal-dialog\">\n              \n                  <!-- Modal content-->\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                      <h4 class=\"modal-title\">Delete Comment</h4>\n                    </div>\n                    <div class=\"modal-body\">\n                      <p>Are you sure you want to delete this comment?</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" \n                      (click)=\"deleteComment()\">Yes</button>\n                      <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">No</button>\n                    </div>\n                  </div>\n              \n                </div>\n            </div>\n          </div>\n        </div>\n        <ul [hidden]=\"editingComments.includes(blog._id)\" class=\"list-group\">\n          <li class=\"list-group-item\">\n            <button type=\"button\" name=\"button\" class=\"btn btn-sm btn-danger\"\n            *ngIf=\"!commentsIds.includes(blog._id)\" (click)=\"commentsIds.push(blog._id)\">\n              Post Comment\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"enabledIds.push(blog._id)\" \n              *ngIf=\"blog.comments.length>0 && !enabledIds.includes(blog._id)\" [style.font-weight]=\"600\">\n              Show comments\n            </button>\n            <button type=\"button\" class=\"btn btn-sm btn-default\" (click)=\"enabledIds.splice(enabledIds.indexOf(blog._id), 1)\" \n              *ngIf=\"enabledIds.includes(blog._id) && blog.comments.length>0\" [style.font-weight]=\"600\"> <!-- blog.comments.length>0 to hide button \"Hide Comments\" when last comment is deleted by the user -->\n              Hide comments\n            </button>\n            <span *ngIf=\"id===blog._id\">{{id}}</span>\n            <br />\n          </li>\n          <li class=\"list-group-item\" *ngIf=\"commentsIds.includes(blog._id)\">\n            <form #form=\"ngForm\" (ngSubmit)=\"postComment(blog._id)\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error': (commentBody1.errors && commentBody1.dirty),\n               'has-success': (!commentBody1.errors && commentBody1.dirty)}\">\n                <textarea class=\"form-control\" rows=\"5\" cols=\"15\" name=\"commentBody\" [style.margin-bottom.px]=\"5\"\n                  placeholder=\"*Enter Your comment\" [(ngModel)]=\"commentBody\" #commentBody1=\"ngModel\" \n                  required validateComment>\n                </textarea>\n                <ul class=\"help-block\">\n                  <li *ngIf=\"commentBody1.errors?.required && commentBody1.dirty\">\n                    <span class=\"glyphicon glyphicon-exclamation-sign\"></span> This field is required\n                  </li>\n                  <li *ngIf=\"commentBody1.errors?.validateComment && commentBody1.dirty\">\n                    <span class=\"glyphicon glyphicon-exclamation-sign\"></span> \n                    Comment must contain at least one character which is not space,new line,...\n                  </li>\n                </ul>\n              </div>\n              <button type=\"button\" class=\"btn btn-default\" (click)=\"commentsIds.splice(commentsIds.indexOf(blog._id), 1)\">\n                Cancel\n              </button>\n              <button [disabled]=\"!form.valid\" type=\"submit\" class=\"btn btn-primary\">Comment!</button>\n            </form>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <!-- if no blogs were found -->\n    <div *ngIf=\"searchPerformed && searchedBlogs==''\" [style.text-align]=\"'center'\" [style.margin-top.px]=\"20\"> \n      Your search returned no matches.\n    </div>\n<!-- $$$$$$$$$$$$$$$$$$$$$$$   end of search results    $$$$$$$$$$$$$$$$$$$$$$$$$-->\n\n  <div *ngIf=\"loadingBlogs\">\n      Getting All Blog Posts...\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages/module/flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/screen.service */ "./src/app/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BlogComponent = /** @class */ (function () {
    function BlogComponent(formBuilder, authService, blogService, flashMessages, screenService) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.blogService = blogService;
        this.flashMessages = flashMessages;
        this.screenService = screenService;
        this.newPost = false;
        this.loadingBlogs = false;
        this.showItem = false;
        this.processing = false;
        this.showProf = false;
        this.showComments = false;
        this.enabledIds = []; // for comments to show/hide
        this.commentsIds = []; // for text field for comment
        this.commentBody = '';
        this.editingComments = [];
        this.editCommentBody = '';
        this.showSearchBox = false;
        this.titleItems = null;
        this.titleCond = false;
        this.titleInput = '';
        this.ind = -1;
        this.currentItemDropdown = null;
        this.authorItems = null;
        this.authorCond = false;
        this.authorInput = '';
        this.indAuthor = -1;
        this.currentAuthorDropdown = null;
        this.searchPerformed = false;
        this.createNewBlogForm();
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (profile) {
            _this.username = profile.user.username;
        }); // this way, because in localStorage are stored strings, not objects, s we cannot access with: user.username
        this.getAllBlogs();
    };
    BlogComponent.prototype.newBlogForm = function () {
        this.newPost = true;
    };
    BlogComponent.prototype.reloadBlogs = function () {
        var _this = this;
        this.enabledIds = []; //reset
        this.commentsIds = []; //reset
        this.loadingBlogs = true;
        this.searchPerformed = false; // show all blogs on reload
        this.getAllBlogs();
        setTimeout(function () {
            _this.loadingBlogs = false;
        }, 1000);
    };
    // Title Validity Checker
    BlogComponent.prototype.validateTitle = function (control) {
        var regexp = new RegExp(/^[a-zA-Z0-9 ]+$/);
        if (regexp.test(control.value)) {
            return null;
        }
        else {
            return { 'validateTitle': true };
        }
    };
    // Create New Blog Form
    BlogComponent.prototype.createNewBlogForm = function () {
        this.form = this.formBuilder.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50), this.validateTitle]],
            body: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(500)]]
        });
    };
    BlogComponent.prototype.enableNewBlogForm = function () {
        this.form.get('title').enable();
        this.form.get('body').enable();
    };
    BlogComponent.prototype.disableNewBlogForm = function () {
        this.form.get('title').disable();
        this.form.get('body').disable();
    };
    // On Submit Blog Post
    BlogComponent.prototype.onBlogSubmit = function () {
        var _this = this;
        this.processing = true;
        this.disableNewBlogForm();
        var blog = {
            title: this.form.get('title').value,
            body: this.form.get('body').value,
            createdBy: this.username
        };
        this.blogService.postNewBlogPost(blog)
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 2000 });
                _this.getAllBlogs(); // retreive all blogs when new blog is saved
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    _this.enableNewBlogForm();
                }, 2000);
            }
            else {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 2000 });
                setTimeout(function () {
                    _this.newPost = false;
                    _this.processing = false;
                    _this.enableNewBlogForm();
                }, 2000);
            }
        });
    };
    BlogComponent.prototype.goBack = function () {
        window.location.reload();
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        this.blogService.getAllBlogs()
            .subscribe(function (data) {
            _this.blogPosts = data.blogs;
        });
    };
    BlogComponent.prototype.onSearch = function (creator, title) {
        var _this = this;
        this.blogService.getByCreator(creator, title)
            .subscribe(function (data) {
            _this.blogPosts = data.blogs;
        });
    };
    // On LIke
    BlogComponent.prototype.onLike = function (id) {
        var obj = { id: id };
        this.blogService.likeBlog(obj)
            .subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
            }
            else {
                console.log(res.msg);
            }
        });
        this.getAllBlogs();
        this.searchPerformed = false; //go to all comment when like comment
    };
    // On Dislike
    BlogComponent.prototype.onDislike = function (id) {
        var obj = { id: id };
        this.blogService.dislikeBlog(obj)
            .subscribe(function (res) {
            if (!res.success) {
                console.log(res.msg);
            }
            else {
                console.log(res.msg);
            }
        });
        this.getAllBlogs();
        this.searchPerformed = false; //go to all comment when dislike comment
    };
    // Post Comment
    BlogComponent.prototype.postComment = function (id) {
        var _this = this;
        var comment = {
            comment: this.commentBody,
            id: id
        };
        this.blogService.comment(comment)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 1200 });
            }
            else {
                _this.commentBody = '';
                var ind = _this.commentsIds.indexOf(id);
                _this.commentsIds.splice(ind, 1);
                _this.enabledIds.push(id);
                _this.getAllBlogs();
            }
        });
        this.searchPerformed = false; //go to all comment when post comment
    };
    // Delete Comment
    BlogComponent.prototype.deleteComment = function () {
        var _this = this;
        this.blogService.deleteComment(this.toDelete)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 1200 });
            }
            else {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 1200 });
                _this.getAllBlogs();
            }
        });
        this.searchPerformed = false; //go to all comment when delete comment
    };
    // Get Comment To Be Edited
    BlogComponent.prototype.getComment = function (commId) {
        var _this = this;
        this.editCommId = commId;
        this.blogService.getComment(commId)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger' });
            }
            else {
                _this.editCommentBody = data.comment.comment;
            }
        });
    };
    // Edit Comment
    BlogComponent.prototype.editComment = function () {
        var _this = this;
        var obj = {
            comment: this.editCommentBody,
            commId: this.editCommId
        };
        this.blogService.editComment(obj)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 1200 });
            }
            else {
                _this.getAllBlogs();
            }
        });
        this.searchPerformed = false; //go to all comment when cmment is edited
    };
    // title search section
    // on input -> search for titles for autocomplete
    BlogComponent.prototype.titleSearch = function () {
        var _this = this;
        this.currentItemDropdown = null; // reset currentItemDropdown on input(to avoid remembered item)
        this.ind = -1; // reset ind on input(to avoid remembered index)
        if (this.titleInput === '' || !this.isValidTitle()) {
            this.titleItems = null;
        }
        else {
            this.blogService.getTitles(this.titleInput)
                .subscribe(function (data) {
                if (!data.success) {
                    console.log('Can not get titles from database');
                }
                else {
                    _this.titleCond = true; //show autocomplete options
                    _this.titleItems = data.blogs;
                }
            });
        }
    };
    // on title item click
    BlogComponent.prototype.titleItemClick = function (titleItem) {
        this.titleInput = titleItem; //show selected autocomplete option inside of text field
        this.titleCond = false; //hide autocomplete options
        this.titleItems = null; //clear preview autocomplete options
        this.ind = -1; // reset index
    };
    BlogComponent.prototype.toggleDropdown = function () {
        this.titleCond = !this.titleCond;
        // when dropdown is hidden clear currentItemDropdown and ind
        this.currentItemDropdown = null;
        this.ind = -1;
    };
    BlogComponent.prototype.onKeydown = function (event) {
        if (this.titleItems != null) {
            if (event === 'downArrow') {
                if (this.ind == this.titleItems.length - 1) {
                    this.ind = 0; // when come to last
                }
                else {
                    ++this.ind; // initially ind=-1, so we start from 0
                }
                if (this.ind > -1 && this.ind < this.titleItems.length) {
                    this.currentItemDropdown = this.titleItems[this.ind].title; // set current item only if current index is valid
                }
            }
            if (event === 'upArrow') {
                if (this.ind == 0 || this.ind == -1) {
                    this.ind = this.titleItems.length - 1;
                }
                else {
                    --this.ind;
                }
                if (this.ind > -1 && this.ind < this.titleItems.length) {
                    this.currentItemDropdown = this.titleItems[this.ind].title; // set current item only if current index is valid
                }
            }
        }
    };
    BlogComponent.prototype.mouseOver = function (i, currentItem) {
        this.ind = i;
        this.currentItemDropdown = currentItem;
    };
    BlogComponent.prototype.mouseOut = function () {
        this.ind = -1;
        this.currentItemDropdown = null;
    };
    BlogComponent.prototype.onEnter = function () {
        if (this.currentItemDropdown != null) {
            this.titleItemClick(this.currentItemDropdown); // to set value on enter only if some value is selected
        }
    };
    BlogComponent.prototype.isValidTitle = function () {
        var regexp = /^\s+$/;
        if (regexp.test(this.titleInput)) {
            return false;
        }
        else {
            return true;
        }
    };
    // end of title search section
    // author search section
    // on input -> search for authors for autocomplete
    BlogComponent.prototype.authorSearch = function () {
        var _this = this;
        this.currentAuthorDropdown = null; // reset currentItemDropdown on input(to avoid remembered item)
        this.indAuthor = -1; // reset ind on input(to aovoid remembered index)
        if (this.authorInput === '' || !this.isValidAuthor()) {
            this.authorItems = null;
        }
        else {
            this.blogService.getAuthors(this.authorInput)
                .subscribe(function (data) {
                if (!data.success) {
                    console.log('Cannot get authors from database');
                }
                else {
                    _this.authorCond = true; //show autocomplete options
                    _this.authorItems = data.authors;
                }
            });
        }
    };
    // on title item click
    BlogComponent.prototype.authorItemClick = function (author) {
        this.authorInput = author; //show selected autocomplete option inside of text field
        this.authorCond = false; //hide autocomplete options
        this.authorItems = null; //clear preview autocomplete options
        this.indAuthor = -1; // reset index
    };
    BlogComponent.prototype.toggleDropdownAuthor = function () {
        this.authorCond = !this.authorCond;
        // when dropdown is hidden clear currentItemDropdown and ind
        this.currentAuthorDropdown = null;
        this.indAuthor = -1;
    };
    BlogComponent.prototype.onKeydownAuthor = function (event) {
        this.isValidAuthor();
        if (this.authorItems != null) {
            if (event === 'downArrow') {
                if (this.indAuthor == this.authorItems.length - 1) {
                    this.indAuthor = 0; // when come to last
                }
                else {
                    ++this.indAuthor; // initially ind=-1, so we start from 0
                }
                if (this.indAuthor > -1 && this.indAuthor < this.authorItems.length) {
                    this.currentAuthorDropdown = this.authorItems[this.indAuthor]; // set current item only if current index is valid
                }
            }
            if (event === 'upArrow') {
                if (this.indAuthor == 0 || this.indAuthor == -1) {
                    this.indAuthor = this.authorItems.length - 1;
                }
                else {
                    --this.indAuthor;
                }
                if (this.indAuthor > -1 && this.indAuthor < this.authorItems.length) {
                    this.currentAuthorDropdown = this.authorItems[this.indAuthor]; // set current item only if current index is valid
                }
            }
        }
    };
    BlogComponent.prototype.mouseOverAuthor = function (i, currentAuthor) {
        this.indAuthor = i;
        this.currentAuthorDropdown = currentAuthor;
    };
    BlogComponent.prototype.mouseOutAuthor = function () {
        this.indAuthor = -1;
        this.currentAuthorDropdown = null;
    };
    BlogComponent.prototype.onEnterAuthor = function () {
        if (this.currentAuthorDropdown != null) {
            this.authorItemClick(this.currentAuthorDropdown); // to set value on enter only if some value is selected
        }
    };
    BlogComponent.prototype.isValidAuthor = function () {
        var regexp = /^\s+$/;
        if (regexp.test(this.authorInput)) {
            return false;
        }
        else {
            return true;
        }
    };
    // end of Author search section
    // search for blogs(filters: title,author)
    BlogComponent.prototype.searchBlogs = function () {
        var _this = this;
        this.searchPerformed = true;
        this.enabledIds = []; //reset
        this.commentsIds = []; //reset
        this.blogService.searchBlogs(this.titleInput, this.authorInput)
            .subscribe(function (data) {
            if (!data.success) {
                _this.searchedBlogs = null;
            }
            else {
                _this.searchedBlogs = data.blogs;
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('itemm'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BlogComponent.prototype, "itemm", void 0);
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_3__["BlogService"],
            angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"],
            _services_screen_service__WEBPACK_IMPORTED_MODULE_5__["ScreenService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n}\r\n\r\n.question {\r\n    background-color: #e6c5ec;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    border-top-left-radius: 5px;\r\n    border-bottom-left-radius: 5px;\r\n    border-radius: 5px;\r\n    font-size: 17px;\r\n}\r\n\r\n.yes {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    background-color: #303f9f;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    font-size: 17px;\r\n    color: white;\r\n}\r\n\r\n.yes:hover {\r\n    background-color: #3f51b5;\r\n    cursor: pointer;\r\n}\r\n\r\n.no {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    background-color: #f50057; \r\n    text-align: center;\r\n    border-radius: 5px;\r\n    font-size: 17px;\r\n    color: white;\r\n}\r\n\r\n.no:hover {\r\n    background-color: #f73377;\r\n    cursor: pointer;\r\n}\r\n\r\n.row2 {\r\n    margin-top: 30px;\r\n    margin-left: -15px;\r\n}\r\n\r\n.title {\r\n    background-color: #691a99;\r\n    color: white;\r\n    padding: 10px 14px 10px 14px;\r\n    font-size: 20px;\r\n    border-top-left-radius: 5px;\r\n    border-top-right-radius: 5px;\r\n    border-top: 1px solid #691a99;\r\n    border-right: 1px solid #691a99;\r\n    border-left: 1px solid #691a99;\r\n}\r\n\r\n.body {\r\n    background-color: #e6c5ec;\r\n    color: black;\r\n    padding: 10px 14px 10px 14px;\r\n    border-left: 1px solid #691a99;\r\n    border-right: 1px solid #691a99;\r\n}\r\n\r\n.footer {\r\n    background-color: #7e7680;\r\n    color: white;\r\n    padding: 10px 14px 10px 14px;\r\n    border-bottom-left-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n    border-bottom: 1px solid #691a99;\r\n    border-right: 1px solid #691a99;\r\n    border-left: 1px solid #691a99;\r\n}"

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <h2 class=\"page-header\">Delete Blog</h2>\n    <div class=\"col-md-5 question\">Are you sure you want to delete this blog?</div>\n    <div class=\"col-md-1 yes\" (click)=\"deleteBlog()\">Yes</div>\n    <div class=\"col-md-1 no\" (click)=\"backToBlogs()\">No</div>\n  </div>\n\n  <div class=\"row row2\" *ngIf=\"blog\">\n    <div class=\"col-md-7 title\">{{blog.title}}</div>\n    <div class=\"col-md-7 body\">{{blog.body}}</div>\n    <div class=\"col-md-7 footer\">\n      <strong>posted by:</strong> {{blog.createdBy}}\n      <br />\n      <strong>date:</strong> {{blog.createdAt | date: 'medium'}}\n    </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/components/blog/delete-blog/delete-blog.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/blog/delete-blog/delete-blog.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeleteBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteBlogComponent", function() { return DeleteBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages/module/flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeleteBlogComponent = /** @class */ (function () {
    function DeleteBlogComponent(blogService, router, flashMessages, route) {
        this.blogService = blogService;
        this.router = router;
        this.flashMessages = flashMessages;
        this.route = route;
        this.blog = null;
    }
    DeleteBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            _this.id = params.get('id');
        });
        this.fetchBlog();
    };
    // Fetch Blog
    DeleteBlogComponent.prototype.fetchBlog = function () {
        var _this = this;
        this.blogService.getBlogToEdit(this.id)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 1500);
            }
            else {
                _this.blog = data.blog;
            }
        });
    };
    // Go Back
    DeleteBlogComponent.prototype.backToBlogs = function () {
        this.router.navigate(['/blog']);
    };
    // Delete Blog
    DeleteBlogComponent.prototype.deleteBlog = function () {
        var _this = this;
        this.blogService.deleteBlog(this.id)
            .subscribe(function (res) {
            if (!res.success) {
                _this.flashMessages.show(res.msg, { cssClass: 'alert-danger', timeout: 1500 });
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 1500);
            }
            else {
                _this.flashMessages.show(res.msg, { cssClass: 'alert-success', timeout: 1500 });
                setTimeout(function () {
                    _this.router.navigate(['/blog']);
                }, 1500);
            }
        });
    };
    DeleteBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-delete-blog',
            template: __webpack_require__(/*! ./delete-blog.component.html */ "./src/app/components/blog/delete-blog/delete-blog.component.html"),
            styles: [__webpack_require__(/*! ./delete-blog.component.css */ "./src/app/components/blog/delete-blog/delete-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], DeleteBlogComponent);
    return DeleteBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left {\r\n    float: right;\r\n}\r\n\r\n.blog-not-found {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    padding-left: 10px;\r\n    background-color: rgb(240, 71, 71);\r\n    border-radius: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Edit Blog</h2>\n  <form (ngSubmit)=\"onSaveChanges()\" *ngIf=\"blog\">\n\n    <div class=\"form-group\">\n      <label class=\"center-block\">Edit title:</label>\n      <input [disabled]=\"processing\" class=\"form-control\" name=\"title\" [(ngModel)]=\"blog.title\">\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"center-block\">Edit Body:</label>\n      <textarea [disabled]=\"processing\" class=\"form-control\" rows=\"8\" cols=\"80\" name=\"blog\" [(ngModel)]=\"blog.body\"></textarea>\n    </div>\n\n    <a [routerLink]=\"['/delete-blog/', blog._id]\"><button [disabled]=\"processing\" type=\"button\" class=\"btn btn-danger left\">Delete</button></a>\n    <a (click)=\"goBack()\"><button [style.margin-right.px]=\"5\" [disabled]=\"processing\" class=\"btn btn-default left\">Back</button></a>\n    <a><button [disabled]=\"processing\" type=\"submit\" class=\"btn btn-success\">Save Changes</button></a>\n\n  </form>\n\n  <div class=\"blog-not-found\" *ngIf=\"!blogFound\">\n    Unable to edit blog\n  </div>\n  <a (click)=\"goBack()\" *ngIf=\"!blogFound\">\n    <button [style.margin-top.px]=\"5\" [disabled]=\"processing\" class=\"btn btn-default\">\n      Back\n    </button>\n  </a>\n</div>"

/***/ }),

/***/ "./src/app/components/blog/edit-blog/edit-blog.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/blog/edit-blog/edit-blog.component.ts ***!
  \******************************************************************/
/*! exports provided: EditBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogComponent", function() { return EditBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages/module/flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditBlogComponent = /** @class */ (function () {
    function EditBlogComponent(location, blogService, route, router, flashMessages) {
        this.location = location;
        this.blogService = blogService;
        this.route = route;
        this.router = router;
        this.flashMessages = flashMessages;
        this.blog = null;
        this.processing = false;
        this.blogFound = true;
    }
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('init');
        this.route.paramMap
            .subscribe(function (params) {
            _this.id = params.get('id');
        });
        console.log('id: ' + this.id);
        this.getBlogById();
    };
    // Get Blog With Specific id
    EditBlogComponent.prototype.getBlogById = function () {
        var _this = this;
        this.blogService.getBlogToEdit(this.id)
            .subscribe(function (data) {
            if (!data.success) {
                _this.blogFound = false;
                _this.errMsg = data.msg;
            }
            else {
                _this.blogFound = true;
                _this.blog = data.blog;
            }
        });
    };
    // Update Blog
    EditBlogComponent.prototype.updateBlog = function () {
        var _this = this;
        this.blogService.updateBlog(this.blog)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 1500 });
                _this.processing = false;
            }
            else {
                _this.processing = false;
                _this.router.navigate(['/blog']);
                _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 1500 });
            }
        });
    };
    // Go Back
    EditBlogComponent.prototype.goBack = function () {
        this.location.back();
    };
    // Save Changes
    EditBlogComponent.prototype.onSaveChanges = function () {
        console.log('saved');
        this.processing = true;
        console.log(this.blog);
        this.updateBlog();
    };
    EditBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-blog',
            template: __webpack_require__(/*! ./edit-blog.component.html */ "./src/app/components/blog/edit-blog/edit-blog.component.html"),
            styles: [__webpack_require__(/*! ./edit-blog.component.css */ "./src/app/components/blog/edit-blog/edit-blog.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _services_blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], EditBlogComponent);
    return EditBlogComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () { };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/components/earlier-days/earlier-days.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/earlier-days/earlier-days.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table > tbody > tr > td { \r\n    padding-top: 1px;\r\n    padding-bottom: 1px;\r\n    font-size: 13px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.table > thead > tr > th {\r\n    text-align: center;\r\n    font-size: 13.5px;\r\n}\r\n\r\n#meal-calculaton-table {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n#meal-calculaton-table > td {\r\n    text-align: left;\r\n}\r\n\r\n#row-total {\r\n    background-color: #673ab7;\r\n    color: #ffffff;\r\n}\r\n\r\n.loading-meals {\r\n    min-height: 200px;\r\n    min-width: 100%;\r\n    display: flex;\r\n}\r\n\r\n.loading-content {\r\n    margin: auto;\r\n}\r\n\r\n#edit-cell {\r\n    background-color: #673ab7; \r\n    color:#ffffff; \r\n    display: flex; \r\n    padding: 0 0 0 0;\r\n    height: 36.8px; \r\n    line-height: 36.8px;\r\n}\r\n\r\n#edit-cell .edit-span {\r\n    background-color:rgb(241, 243, 243); \r\n    min-height: 100%; \r\n    min-width: 36.8px;\r\n    color: black;\r\n}\r\n\r\n#edit-cell .edit-span i {\r\n    vertical-align: middle; \r\n}\r\n\r\n#edit-cell > .edit-span:hover{\r\n    background-color: black;\r\n    color: rgb(241, 243, 243);\r\n    cursor: pointer;\r\n}\r\n\r\n.calories-ok {\r\n    background-color: rgb(9, 161, 9);\r\n    color: white;\r\n}\r\n\r\n.calories-bad {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n#summary {\r\n    text-align: left;\r\n}\r\n\r\n.fixed-size-container {\r\n    max-width: 940px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.fixed-size {\r\n    width: 120px;\r\n    height: 20px;\r\n    line-height: 20px;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    background-color: #e6e6e6;\r\n}\r\n\r\n.fixed-size:hover {\r\n    cursor: pointer;\r\n    color: white;\r\n    background-color: black;\r\n}\r\n\r\n.text-missing {\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    margin: 20px 0 20px 0;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/earlier-days/earlier-days.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/earlier-days/earlier-days.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"loadingMeals\" class=\"loading-meals\">\n  <div class=\"loading-content\">\n      <mat-spinner [diameter]=\"60\"></mat-spinner>\n  </div>\n</div>\n\n<div *ngIf=\"!loadingMeals && !thereAreMeals\" style=\"display:flex;min-height:200px;\">\n  <div style=\"margin:auto;\">{{periodName2()}}</div>\n</div>\n\n<div *ngIf=\"!loadingMeals && thereAreMeals\">\n  <div *ngFor=\"let day of periodMeals\">\n    <div class=\"table-responsive\" style=\"margin-bottom:20px\"> \n      <table class=\"table table-hover\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\" id=\"edit-cell\">\n              <a class=\"edit-span\" matTooltip=\"edit meals\" [routerLink]=\"['/edit-meal', day.date]\"\n              [queryParams]=\"{ period: period }\">\n                <i class=\"material-icons\">edit</i>\n              </a>\n              <span style=\"padding: 0 4px 0 4px;\">{{day.date}}</span>\n            </th> \n            <th scope=\"col\">grocerie</th>\n            <th scope=\"col\">quantity(g)</th>\n            <th scope=\"col\">energy(kcal)</th>\n            <th scope=\"col\">proteins(g)</th>\n            <th scope=\"col\">carbohydrates(g)</th>\n            <th scope=\"col\">sugar(g)</th>\n            <th scope=\"col\">fat(g)</th>\n            <th scope=\"col\">saturated(g)</th>\n            <th scope=\"col\">monounsaturated(g)</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let meal of day.mealsInfo; let i = index\">\n          <tr id=\"meal-calculaton-table\">\n            <td colspan=\"10\"><strong>{{mealNames[i]}}</strong></td>\n          </tr>\n          <tr *ngFor=\"let item of meal\">\n            <td scope=\"col\">\n            </td>\n            <td scope=\"col\">{{item.food}}</td>\n            <td scope=\"col\">\n              <span>{{item.quantity}}</span>\n            </td>\n            <td scope=\"col\">{{item.energy}}</td>\n            <td scope=\"col\">{{item.proteins}}</td>\n            <td scope=\"col\">{{item.carbohydrates}}</td>\n            <td scope=\"col\">{{item.sugar}}</td>\n            <td scope=\"col\">{{item.fat}}</td>\n            <td scope=\"col\">{{item.saturated}}</td>\n            <td scope=\"col\">{{item.monounsaturated}}</td>\n          </tr>\n          <tr>\n            <td><strong>&Sigma;</strong></td>\n            <td scope=\"col\"></td>\n            <td scope=\"col\"></td>\n            <td scope=\"col\">{{day.sumInfo[i].energy}}</td>\n            <td scope=\"col\">{{day.sumInfo[i].proteins}}</td>\n            <td scope=\"col\">{{day.sumInfo[i].carbohydrates}}</td>\n            <td scope=\"col\">{{day.sumInfo[i].sugar}}</td>\n            <td scope=\"col\">{{day.sumInfo[i].fat}}</td>\n            <td scope=\"col\">{{day.sumInfo[i].saturated}}</td>\n            <td scope=\"col\">{{day.sumInfo[i].monounsaturated}}</td>\n          </tr>\n        </tbody>\n        <tr id=\"row-total\">\n            <td><strong>TOTAL</strong></td>\n            <td scope=\"col\"></td>\n            <td scope=\"col\"></td>\n            <td scope=\"col\"><strong>{{day.totalInfo.energy}}</strong></td>\n            <td scope=\"col\"><strong>{{day.totalInfo.proteins}}</strong></td>\n            <td scope=\"col\"><strong>{{day.totalInfo.carbohydrates}}</strong></td>\n            <td scope=\"col\"><strong>{{day.totalInfo.sugar}}</strong></td>\n            <td scope=\"col\"><strong>{{day.totalInfo.fat}}</strong></td>\n            <td scope=\"col\"><strong>{{day.totalInfo.saturated}}</strong></td>\n            <td scope=\"col\"><strong>{{day.totalInfo.monounsaturated}}</strong></td>\n        </tr>\n        <tr>\n          <td colspan=\"10\" id=\"summary\"\n          [ngClass]=\"{'calories-ok': (caloryLimit - day.totalInfo.energy)>=0,\n                      'calories-bad': (caloryLimit - day.totalInfo.energy)<0}\">\n            <span *ngIf=\"(caloryLimit - day.totalInfo.energy)>=0\" class=\"calories-ok\">\n              <strong>Calory limit not crossed, calories left: {{caloryLimit - day.totalInfo.energy}}kcal</strong>\n            </span>\n            <span *ngIf=\"(caloryLimit - day.totalInfo.energy)<0\" class=\"calories-bad\">\n              <strong>Calory limit crossed for: {{day.totalInfo.energy - caloryLimit}}kcal</strong>\n            </span>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n<div class=\"text-missing\" *ngIf=\"isMissing\">{{periodName()}}</div> \n<div class=\"fixed-size-container\" *ngIf=\"isMissing\">\n  <div class=\"fixed-size\" *ngFor=\"let date of missing\" [routerLink]=\"['/edit-meal', date]\"\n    [queryParams]=\"{ period: period }\">\n    <span matTooltip=\"click to add\">{{date}}</span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/earlier-days/earlier-days.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/earlier-days/earlier-days.component.ts ***!
  \*******************************************************************/
/*! exports provided: EarlierDaysComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EarlierDaysComponent", function() { return EarlierDaysComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/screen.service */ "./src/app/services/screen.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EarlierDaysComponent = /** @class */ (function () {
    function EarlierDaysComponent(nutritionService, screenService, router) {
        this.nutritionService = nutritionService;
        this.screenService = screenService;
        this.router = router;
        this.mealNames = ['Breakfast', 'Lunch', 'Dinner', 'Additionally'];
        this.loadingMeals = true;
        this.isMissing = false;
        this.thereAreMeals = false;
    }
    EarlierDaysComponent.prototype.ngOnInit = function () { };
    EarlierDaysComponent.prototype.ngOnChanges = function () {
        this.loadingMeals = true;
        this.getSomeMeals();
    };
    // get meals info for period
    EarlierDaysComponent.prototype.getSomeMeals = function () {
        var _this = this;
        this.nutritionService.getSomeMeals(this.period)
            .subscribe(function (data) {
            if (!data.success) {
                _this.loadingMeals = false;
            }
            else {
                _this.loadingMeals = false;
                _this.periodMeals = data.periodmeals;
                if (_this.periodMeals == '') {
                    _this.thereAreMeals = false;
                    _this.isMissing = true;
                    _this.missing = data.missing;
                }
                else {
                    _this.thereAreMeals = true;
                    _this.periodMeals = data.periodmeals;
                    _this.missing = data.missing;
                    if (_this.missing == '') {
                        _this.isMissing = false;
                    }
                    else {
                        _this.isMissing = true;
                    }
                }
            }
        });
    };
    // on edit meal
    EarlierDaysComponent.prototype.onEditMeal = function (date) {
        this.router.navigate(['edit-meal/' + date]);
    };
    // period name just for the template
    EarlierDaysComponent.prototype.periodName = function () {
        switch (this.period) {
            case '3days':
                return 'Want to add meals for some date that is missing in last 3 days?';
            case 'week':
                return 'Want to add meals for some date that is missing in this week?';
            case 'month':
                return 'Want to add meals for some date that is missing in this month?';
            default: return '(error)';
        }
    };
    // period name just for the template
    EarlierDaysComponent.prototype.periodName2 = function () {
        switch (this.period) {
            case '3days':
                return 'No meals for last 3 days';
            case 'week':
                return 'No meals for this week';
            case 'month':
                return 'No meals for this month';
            default: return '(error)';
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EarlierDaysComponent.prototype, "period", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EarlierDaysComponent.prototype, "caloryLimit", void 0);
    EarlierDaysComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-earlier-days',
            template: __webpack_require__(/*! ./earlier-days.component.html */ "./src/app/components/earlier-days/earlier-days.component.html"),
            styles: [__webpack_require__(/*! ./earlier-days.component.css */ "./src/app/components/earlier-days/earlier-days.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"],
            src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EarlierDaysComponent);
    return EarlierDaysComponent;
}());



/***/ }),

/***/ "./src/app/components/edit-meal/edit-meal.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/edit-meal/edit-meal.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table > tbody > tr > td { \r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    font-size: 13.5px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.table > thead > tr > th {\r\n    text-align: center;\r\n}\r\n\r\n#meal-calculaton-table {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n#meal-calculaton-table > td {\r\n    text-align: left;\r\n}\r\n\r\n#row-total {\r\n    background-color: #ffd740;\r\n}\r\n\r\n.spinner-wrapper {\r\n    display: flex;\r\n    min-height: 200px;\r\n    width: 100%;\r\n}\r\n\r\nmat-spinner {\r\n    margin: auto;\r\n}\r\n\r\n#delete-food:hover {\r\n    color: #f77a7a;\r\n    cursor: pointer;\r\n}\r\n\r\nmat-radio-button {\r\n    margin-right: 10px;\r\n}\r\n\r\n.input-field {\r\n    background-color: red;\r\n    width: 200px;\r\n    max-width: 200px;\r\n}\r\n\r\n.input-food {\r\n    width: 100%;\r\n    pointer-events: all;\r\n}\r\n\r\n.dropdown-list {\r\n    position: absolute;\r\n    z-index: 1;\r\n    width: 200px;\r\n    max-width: 200px;\r\n    max-height: 100px;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.dropdown-item {\r\n    padding: 5px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.dropdown-item-hover {\r\n    background-color: #cec8c8;\r\n    cursor: pointer;\r\n}\r\n\r\n.meal-wrapper {\r\n    margin-top: 10px;\r\n    display: flex;\r\n}\r\n\r\n.meal-wrapper-small {\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.add-button {\r\n    max-height:25px;\r\n}\r\n\r\n.food-wrapper {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.quant-wrapper {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.button-add-small{\r\n    width: 200px;\r\n}\r\n\r\n.delete-forever {\r\n    color: red;\r\n    vertical-align: middle;\r\n    font-size: 30px;\r\n}\r\n\r\n.delete-forever:hover {\r\n    cursor: pointer;\r\n    color: rgb(187, 3, 3)\r\n}\r\n\r\n.add-new-food {\r\n    display: flex; \r\n    justify-content: center; \r\n    flex-direction: column; \r\n    background-color: rgb(248, 248, 247);\r\n    border-radius: 4px;\r\n}\r\n\r\n.quantity-margin {\r\n    margin-right: 30px;\r\n}\r\n\r\n.food-margin {\r\n    margin-right: 10px;\r\n}\r\n\r\n.wrapper-all{\r\n    margin: 0 7px 0 7px;\r\n}"

/***/ }),

/***/ "./src/app/components/edit-meal/edit-meal.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/edit-meal/edit-meal.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div style=\"margin: 10px 0 10px 0;\">\n      <mat-toolbar>Edit meals: {{date}} &nbsp;&nbsp;\n        <span matTooltip=\"delete all meals\" (click)=\"removeMeal()\" *ngIf=\"!todaysMealsEmpty\">\n          <i class=\"material-icons delete-forever\">delete_forever</i>\n        </span>\n      </mat-toolbar>\n    </div>\n\n    <div style=\"margin: 0 0 15px 0;\">\n      <span matTooltip=\"back to Nutrition Manager\" style=\"margin-left: 5px;\">\n        <a type=\"button\" mat-mini-fab color=\"accent\" [routerLink]=\"['/nutritionmanager']\"\n        queryParamsHandling=\"preserve\">\n          <i class=\"material-icons\">arrow_back</i>\n        </a>\n      </span>\n      <span matTooltip=\"save changes\" *ngIf=\"gettingMealsDone\" style=\"float:right;\">\n        <a type=\"button\" mat-mini-fab [routerLink]=\"['/nutritionmanager']\"\n        queryParamsHandling=\"preserve\">\n          <i class=\"material-icons\">check</i>\n        </a>\n      </span>\n    </div>\n\n    <div class=\"row\" style=\"margin-bottom: 20px;\" [ngClass]=\"{'wrapper-all': !screenService.isLarge()}\">\n      <div class=\"col-md-3\"></div>\n\n        <div class=\"col-md-6 add-new-food\">\n          <div style=\"margin-bottom: 15px; display:flex; justify-content:center;\">\n            <h4>Add new food:</h4>\n          </div>\n          <div style=\"text-align: center;\">\n            <mat-radio-group name=\"meal\" [(ngModel)]=\"meal\">\n              <mat-radio-button value=\"breakfast\">\n                  Breakfast\n              </mat-radio-button>\n              <mat-radio-button value=\"lunch\">\n                  Lunch\n              </mat-radio-button>\n              <mat-radio-button value=\"dinner\">\n                  Dinner\n              </mat-radio-button>\n              <mat-radio-button value=\"additionally\">\n                  Additionally\n              </mat-radio-button>\n            </mat-radio-group>\n          </div>\n\n          <div [ngClass]=\"{'meal-wrapper': screenService.isLarge(), 'meal-wrapper-small': !screenService.isLarge()}\"\n          style=\"display:flex; justify-content:center; padding-bottom: 8px;\">\n              <div class=\"food-wrapper\">\n                <div class=\"input-field\"\n                [ngClass]=\"{'food-margin': screenService.isLarge()}\">\n                  <input placeholder=\"Enter food\" name=\"lunchFoodItem\" [(ngModel)]=\"lunchFoodItem\" (input)=\"getmatchedLunchs()\"\n                  keydownEvent (keydownEvent)=\"onKeyDownLunch($event)\" (keydown.enter)=\"onEnterLunch()\" class=\"input-food\">\n                </div>\n                <span *ngIf=\"lunchErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{lunchErrMsg}}</span>\n                <div class=\"dropdown-box\" style=\"max-height: 100px\">\n                  <ul class=\"dropdown-list\">\n                    <li class=\"dropdown-item\" *ngFor=\"let groc of matchedLunchs; let i = index\" \n                    (click)=\"onItemClickLunch(groc, i)\" clickOutside (clickOutside)=\"matchedLunchs=null;this.currentLunch=null;indLunch=-1\"\n                    (mouseover)=\"onMouseOverLunch(groc, i)\" (mouseout)=\"onMouseOutLunch()\"\n                    [ngClass]=\"{'dropdown-item-hover': indLunch==i}\">\n                     {{groc.food}}\n                    </li>\n                  </ul>\n                </div>\n              </div>\n      \n              <div class=\"quant-wrapper\">\n                <div [ngClass]=\"{'input-field': !screenService.isLarge(), 'quantity-margin': screenService.isLarge()}\">\n                  <input placeholder=\"Enter quantity\" name=\"lunchQuantityItem\" [(ngModel)]=\"lunchQuantityItem\"  \n                  [ngClass]=\"{'input-food': !screenService.isLarge()}\">\n                </div>\n                <span *ngIf=\"lunchQuantErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{lunchQuantErrMsg}}</span>\n              </div>\n              <button class=\"btn btn-sm btn-success add-button\" type=\"button\" (click)=\"addLunchItem()\"\n              [ngClass]=\"{'button-add-small': !screenService.isLarge()}\">add</button>\n          </div>\n        </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n\n    <div *ngIf=\"!gettingMealsDone\" class=\"spinner-wrapper\">\n      <mat-spinner [diameter]=\"70\"></mat-spinner>\n    </div>\n\n    <div *ngIf=\"todaysMealsEmpty\" class=\"spinner-wrapper\">\n      <span style=\"margin: auto;\">No food for this date.</span>\n    </div>\n\n    <div class=\"table-responsive\" *ngIf=\"gettingMealsDone && !todaysMealsEmpty\">\n      <table class=\"table table-hover\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\"></th> \n            <th scope=\"col\">grocerie</th>\n            <th scope=\"col\">quantity(g)</th>\n            <th scope=\"col\">energy(kcal)</th>\n            <th scope=\"col\">proteins(g)</th>\n            <th scope=\"col\">carbohydrates(g)</th>\n            <th scope=\"col\">sugar(g)</th>\n            <th scope=\"col\">fat(g)</th>\n            <th scope=\"col\">saturated(g)</th>\n            <th scope=\"col\">monounsaturated(g)</th>\n          </tr>\n        </thead>\n        <tbody *ngFor=\"let array of todaysMeals; let i = index\">\n          <tr id=\"meal-calculaton-table\">\n            <td colspan=\"10\"><strong>{{mealNames[i]}}</strong></td>\n          </tr>\n          <tr *ngFor=\"let item of array\">\n            <td scope=\"col\">\n              <div style=\"display:flex;\">\n                <span matTooltip=\"delete\" id=\"delete-food\" \n                (click)=\"deleteFood(item.food, item.quantity, i)\">\n                  <i class=\"material-icons\">delete</i>\n                </span>\n              </div>\n            </td>\n            <td scope=\"col\">{{item.food}}</td>\n            <td scope=\"col\">{{item.quantity}}</td>\n            <td scope=\"col\">{{item.energy}}</td>\n            <td scope=\"col\">{{item.proteins}}</td>\n            <td scope=\"col\">{{item.carbohydrates}}</td>\n            <td scope=\"col\">{{item.sugar}}</td>\n            <td scope=\"col\">{{item.fat}}</td>\n            <td scope=\"col\">{{item.saturated}}</td>\n            <td scope=\"col\">{{item.monounsaturated}}</td>\n          </tr>\n          <tr>\n            <td><strong>&Sigma;</strong></td>\n            <td scope=\"col\"></td>\n            <td scope=\"col\"></td>\n            <td scope=\"col\">{{todaysInfos[i].energy}}</td>\n            <td scope=\"col\">{{todaysInfos[i].proteins}}</td>\n            <td scope=\"col\">{{todaysInfos[i].carbohydrates}}</td>\n            <td scope=\"col\">{{todaysInfos[i].sugar}}</td>\n            <td scope=\"col\">{{todaysInfos[i].fat}}</td>\n            <td scope=\"col\">{{todaysInfos[i].saturated}}</td>\n            <td scope=\"col\">{{todaysInfos[i].monounsaturated}}</td>\n          </tr>\n        </tbody>\n        <tr id=\"row-total\">\n            <td><strong>TOTAL</strong></td>\n            <td scope=\"col\"></td>\n            <td scope=\"col\"></td>\n            <td scope=\"col\"><strong>{{totalInfo.energy}}</strong></td>\n            <td scope=\"col\"><strong>{{totalInfo.proteins}}</strong></td>\n            <td scope=\"col\"><strong>{{totalInfo.carbohydrates}}</strong></td>\n            <td scope=\"col\"><strong>{{totalInfo.sugar}}</strong></td>\n            <td scope=\"col\"><strong>{{totalInfo.fat}}</strong></td>\n            <td scope=\"col\"><strong>{{totalInfo.saturated}}</strong></td>\n            <td scope=\"col\"><strong>{{totalInfo.monounsaturated}}</strong></td>\n        </tr>\n      </table>\n    </div> \n</div>\n"

/***/ }),

/***/ "./src/app/components/edit-meal/edit-meal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/edit-meal/edit-meal.component.ts ***!
  \*************************************************************/
/*! exports provided: EditMealComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMealComponent", function() { return EditMealComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_nutrition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/screen.service */ "./src/app/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditMealComponent = /** @class */ (function () {
    function EditMealComponent(route, nutritionService, router, snackBar, screenService) {
        this.route = route;
        this.nutritionService = nutritionService;
        this.router = router;
        this.snackBar = snackBar;
        this.screenService = screenService;
        this.gettingMealsDone = false;
        this.mealNames = ['Breakfast', 'Lunch', 'Dinner', 'Additionally'];
        this.meal = 'breakfast'; // for radio buttons
        this.lunchQuantityItem = null;
        this.lunchErrMsg = '';
        this.matchedLunchs = null;
        this.lunchItems = [];
        this.lunchFoodItem = '';
        this.indLunch = -1;
        this.currentLunch = null;
    }
    EditMealComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            var date = params.get('date');
            _this.getMealsForDate(date);
            _this.date = date;
        });
        this.route.queryParamMap
            .subscribe(function (params) {
            _this.period = params.get('period');
        });
    };
    // snack bar messages
    EditMealComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 2000 });
    };
    // get meals for specific date $$$$$ no converting to string, function gets date in string format $$$$$
    EditMealComponent.prototype.getMealsForDate = function (date) {
        var _this = this;
        this.nutritionService.getMealsInfo(date)
            .subscribe(function (data) {
            if (!data.success) {
                _this.gettingMealsDone = true;
                _this.todaysMealsEmpty = true;
                _this.totalInfo = data.totalInfo;
            }
            else {
                _this.gettingMealsDone = true;
                _this.todaysMealsEmpty = false;
                _this.todaysMeals = data.mealsInfo;
                _this.todaysInfos = data.sumInfo;
                _this.totalInfo = data.totalInfo;
            }
        });
    };
    // delete food for specific meal
    EditMealComponent.prototype.deleteFood = function (food, quant, ind) {
        var _this = this;
        this.nutritionService.deleteFood(food, quant, this.mealNames[ind], this.date)
            .subscribe(function (data) {
            if (!data.success) {
                console.log(data.msg);
            }
            else {
                _this.deleteMeal(_this.date); // run cleaner
                _this.getMealsForDate(_this.date);
                console.log(data.msg);
            }
        });
    };
    // check is all meals are empty after deleting food from some meal, and if they are empty, delete meal document
    EditMealComponent.prototype.deleteMeal = function (date) {
        this.nutritionService.deleteMeal(date)
            .subscribe(function (data) {
            if (!data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    /// on back
    EditMealComponent.prototype.goBack = function () {
        this.router.navigate(['/nutritionmanager']);
    };
    // ########### lunch
    // push lunch food and quantity to the side-list
    EditMealComponent.prototype.addLunchItem = function () {
        var _this = this;
        var regexp = /^\s+$/;
        if (this.lunchFoodItem != '' && !regexp.test(this.lunchFoodItem)) {
            this.nutritionService.checkForFood(this.lunchFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.openSnackBar('Please select food from autocomplete options');
                    _this.lunchErrMsg = '*Select food from autocomplete options';
                    console.log('no success, errmsg: ' + _this.lunchErrMsg);
                    if (!_this.isQuantityValid(_this.lunchQuantityItem)) {
                        _this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
                else {
                    if (_this.isQuantityValid(_this.lunchQuantityItem)) {
                        _this.lunchErrMsg = '';
                        var lunchItem = {
                            food: _this.lunchFoodItem,
                            quantity: _this.lunchQuantityItem
                        };
                        _this.lunchItems.push(lunchItem);
                        var m = _this.mealNames.toString();
                        var lunch = {
                            date: _this.date,
                            items: _this.lunchItems,
                            meal: _this.meal
                        };
                        _this.nutritionService.pushTodaysMeal(lunch)
                            .subscribe(function (data) {
                            if (!data.success) {
                                _this.openSnackBar(data.msg);
                            }
                            else {
                                _this.lunchItems = [];
                                _this.openSnackBar(data.msg);
                                _this.getMealsForDate(_this.date);
                            }
                        });
                        _this.lunchFoodItem = '';
                        _this.lunchQuantityItem = null;
                    }
                    else {
                        _this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
            });
        }
        else {
            this.openSnackBar('Please enter some food first');
            this.lunchErrMsg = '*Food is required';
            if (!this.isQuantityValid(this.lunchQuantityItem)) {
                this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
        }
        if (this.isQuantityValid(this.lunchQuantityItem)) {
            this.lunchQuantErrMsg = '';
        }
    };
    // get all matched groceries
    EditMealComponent.prototype.getmatchedLunchs = function () {
        var _this = this;
        this.lunchErrMsg = ''; // to remove error message from DOM
        if (this.lunchFoodItem === '') {
            this.matchedLunchs = null;
        }
        else {
            this.indLunch = -1; ///
            this.currentLunch = null; ///
            this.nutritionService.getMathedGroceries(this.lunchFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.matchedLunchs = null;
                }
                else {
                    _this.matchedLunchs = data.groceries;
                }
            });
        }
    };
    // on key down in search field
    EditMealComponent.prototype.onKeyDownLunch = function (event) {
        if (this.matchedLunchs != null) {
            if (event === 'downArrow') {
                if (this.indLunch == this.matchedLunchs.length - 1) {
                    this.indLunch = 0;
                }
                else {
                    ++this.indLunch;
                }
                if (this.indLunch > -1 && this.indLunch < this.matchedLunchs.length) {
                    this.currentLunch = this.matchedLunchs[this.indLunch];
                }
            }
            if (event === 'upArrow') {
                if (this.indLunch == -1 || this.indLunch == 0) {
                    this.indLunch = this.matchedLunchs.length - 1;
                }
                else {
                    --this.indLunch;
                }
                if (this.indLunch > -1 && this.indLunch < this.matchedLunchs.length) {
                    this.currentLunch = this.matchedLunchs[this.indLunch];
                }
            }
        }
    };
    EditMealComponent.prototype.onEnterLunch = function () {
        if (this.currentLunch != null) {
            this.lunchFoodItem = this.currentLunch.food;
            this.matchedLunchs = null;
            this.indLunch = -1;
            this.currentLunch = null;
        }
    };
    EditMealComponent.prototype.onItemClickLunch = function (grocerie, indLunchex) {
        this.lunchFoodItem = this.currentLunch.food;
        this.matchedLunchs = null;
        this.indLunch = -1;
    };
    EditMealComponent.prototype.onMouseOverLunch = function (groc, indLunch) {
        this.currentLunch = groc;
        this.indLunch = indLunch;
    };
    EditMealComponent.prototype.onMouseOutLunch = function () {
        this.currentLunch = null;
        this.indLunch = -1;
    };
    // quantity check
    EditMealComponent.prototype.isQuantityValid = function (quantity) {
        var regexp = /^\s+$/;
        var x = Number(quantity);
        if (quantity === '' || regexp.test(quantity) || isNaN(x)) {
            return false;
        }
        else if (x < 1 || x > 5000) {
            return false;
        }
        else {
            return true;
        }
    };
    // push todays lunch to database
    EditMealComponent.prototype.pushTodaysLunch = function (todaysLunch) {
        var _this = this;
        var lunch = {
            date: this.date,
            items: todaysLunch,
            meal: this.meal
        };
        this.nutritionService.pushTodaysMeal(lunch)
            .subscribe(function (data) {
            if (!data.success) {
                _this.openSnackBar(data.msg);
            }
            else {
                todaysLunch = null;
                _this.openSnackBar(data.msg);
                _this.getMealsForDate(_this.date);
            }
        });
    };
    // delete meal document from database
    EditMealComponent.prototype.removeMeal = function () {
        var _this = this;
        this.nutritionService.removeMeal(this.date)
            .subscribe(function (data) {
            if (!data.success) {
                _this.openSnackBar(data.msg);
            }
            else {
                _this.openSnackBar(data.msg);
                setTimeout(function () {
                    _this.router.navigate(['/nutritionmanager'], { queryParams: { period: _this.period } });
                }, 1500);
            }
        });
    };
    EditMealComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-meal',
            template: __webpack_require__(/*! ./edit-meal.component.html */ "./src/app/components/edit-meal/edit-meal.component.html"),
            styles: [__webpack_require__(/*! ./edit-meal.component.css */ "./src/app/components/edit-meal/edit-meal.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            src_app_services_nutrition_service__WEBPACK_IMPORTED_MODULE_2__["NutritionService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_4__["ScreenService"]])
    ], EditMealComponent);
    return EditMealComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-header {\r\n    font-size: 18px;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"page-header\">Home</div>\n  <div>\n    <div>Use this username and password to check the functionality of the application:</div>\n    <div>username: senka</div>\n    <div>password: senka123</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-image: url('login_pic.jpg');\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-position: center center;\r\n    background-size: cover;\r\n}\r\n\r\n.form {\r\n    width: 300px;\r\n    background-color: rgb(216, 213, 213);\r\n    border-radius: 20px;\r\n    opacity: .96;\r\n}\r\n\r\n.heading-text {\r\n    text-align: center;\r\n    color: rgb(124, 124, 124);\r\n}\r\n\r\n.submit-btn {\r\n    margin-top: 25px;\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.form-group {\r\n    color: rgb(124, 124, 124);\r\n    margin: 0 20px 0 20px;\r\n}\r\n\r\nspan {\r\n    color: rgb(124, 124, 124);\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin-left: 6px;\r\n    padding-left: 0;\r\n}\r\n\r\n.error-message {\r\n    background-color: rgb(231, 136, 136);\r\n    color: rgb(201, 26, 26);\r\n    min-width: 400px;\r\n    text-align: center;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    font-size: 20px;\r\n    border-radius: 5px;\r\n    opacity: .85;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.glyphicon-remove {\r\n    color: rgb(245, 68, 68);\r\n}\r\n\r\n.glyphicon-ok {\r\n    color: rgb(29, 153, 29);\r\n}\r\n\r\n.loggingIn {\r\n    color: white;\r\n    font-size: 25px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    min-height: 200px;\r\n    min-width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorMsg\" class=\"error-message\">\n    {{errorMsg}}\n  </div>\n  \n  <div *ngIf=\"!submitted\" class=\"form\">\n    <span class=\"heading-text\"><h1 [style.font-weight]=\"600\">Login</h1></span>\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n  \n      <div class=\"form-group\"> \n        <label class=\"center-block\">Username:</label>\n        <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty) , \n        'has-success': !form.controls.username.errors && form.controls.username.dirty}\">\n          <input class=\"form-control\" placeholder=\"*Enter username\" name=\"username\" formControlName=\"username\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\n              <span class=\"glyphicon glyphicon-remove\" [style.color]=\"'rgb(245, 68, 68)'\"></span> Username is required\n            </li>\n            <li *ngIf=\"(form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength) \n              && form.controls.username.dirty\">\n              <span class=\"glyphicon glyphicon-remove\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n              Username must be between 5 and 30 characters long\n            </li>\n            <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty \n                      && !form.controls.username.errors?.required\">\n              <span class=\"glyphicon glyphicon-remove\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n              Username can't contain special characters\n            </li>\n          </ul>\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n        <label class=\"center-block\">Password:</label>\n        <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), \n        'has-success': !form.controls.password.errors && form.controls.password.dirty}\">\n          <input class=\"form-control\" placeholder=\"*Enter password\" name=\"password\" formControlName=\"password\">\n          <ul class=\"help-block\">\n            <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">\n              <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> Password is required\n            </li>\n            <li *ngIf=\"(form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength) \n                && form.controls.password.dirty\">\n              <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n              Password must be at least 8, but not more than 30 characters long\n            </li>\n          </ul>\n        </div>\n      </div>\n  \n      <div class=\"submit-btn\">\n        <input [disabled]=\"!form.valid || submitted\" \n          type=\"submit\" class=\"btn btn-success\" value=\"Log in\">\n      </div>\n      \n    </form>\n  </div>\n  \n  <div *ngIf=\"submitted\" class=\"loggingIn\">\n    <span style=\"color:white;\">Just a few seconds, please...</span>\n  </div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authService, router, configService, authGuard) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.configService = configService;
        this.authGuard = authGuard;
        this.errorMsg = null;
        this.submitted = false;
        this.createForm();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Check for redirectUrl from AuthGuardService
        if (this.authGuard.redirectUrl) {
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
    };
    LoginComponent.prototype.validateUsername = function (control) {
        var regexp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regexp.test(control.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    LoginComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), this.validateUsername]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var user = {
            username: this.form.get('username').value,
            password: this.form.get('password').value
        };
        this.authService.loginUser(user)
            .subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.errorMsg = null;
                console.log('Success: ' + data.msg);
                _this.configService.updateShowProperty();
                setTimeout(function () {
                    if (_this.previousUrl) {
                        _this.router.navigate([_this.previousUrl]);
                    }
                    else {
                        _this.router.navigate(['/dashboard']);
                    }
                }, 1200);
            }
            else {
                _this.submitted = false;
                _this.errorMsg = data.msg;
                console.log('Fail: ' + data.msg);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"],
            _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuardService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/meals/meals.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/meals/meals.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-field {\r\n    background-color: red;\r\n    width: 200px;\r\n    max-width: 200px;\r\n}\r\n\r\n.input-food {\r\n    width: 100%;\r\n    pointer-events: all;\r\n}\r\n\r\n.dropdown-list {\r\n    position: absolute;\r\n    z-index: 1;\r\n    width: 200px;\r\n    max-width: 200px;\r\n    max-height: 100px;\r\n    padding: 0;\r\n    list-style-type: none;\r\n}\r\n\r\n.dropdown-item {\r\n    padding: 5px;\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n.dropdown-item-hover {\r\n    background-color: #cec8c8;\r\n    cursor: pointer;\r\n}\r\n\r\n.meal-wrapper {\r\n    margin-top: 10px;\r\n    display: flex;\r\n}\r\n\r\n.meal-wrapper-small {\r\n    margin-top: 10px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.add-button {\r\n    max-height:25px;\r\n}\r\n\r\n.food-wrapper {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.quant-wrapper {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.button-add-small{\r\n    width: 200px;\r\n}"

/***/ }),

/***/ "./src/app/components/meals/meals.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/meals/meals.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        Enter your todays meals&nbsp;<i class=\"material-icons\" [style.font-size.px]=\"18\">fastfood</i>\n      </mat-panel-title>\n      <mat-panel-description>\n        <!-- some optional description -->\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n\n    <form #mealsForm=\"ngForm\" (ngSubmit)=\"onSubmitToDatabase()\">\n      <!-- ######################    breakfast    #################### -->\n      <span><strong>Breakfast</strong></span><br />\n      <div [ngClass]=\"{'meal-wrapper': screenService.isLarge(), 'meal-wrapper-small': !screenService.isLarge()}\">\n        <div class=\"food-wrapper\">\n          <div [style.margin-right.px]=\"10\" class=\"input-field\">\n            <input placeholder=\"Enter food\" name=\"breakfastFoodItem\" [(ngModel)]=\"breakfastFoodItem\" (input)=\"getmatchedBreakfasts()\"\n            keydownEvent (keydownEvent)=\"onKeyDown($event)\" (keydown.enter)=\"onEnter()\" class=\"input-food\">\n          </div>\n          <span *ngIf=\"breakfErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{breakfErrMsg}}</span>\n          <div class=\"dropdown-box\" style=\"max-height: 100px\">\n            <ul class=\"dropdown-list\">\n              <li class=\"dropdown-item\" *ngFor=\"let groc of matchedBreakfasts; let i = index\" \n              (click)=\"onItemClick(groc, i)\" clickOutside (clickOutside)=\"matchedBreakfasts=null;this.currentBreakfast=null;indBreakfast=-1\"\n              (mouseover)=\"onMouseOver(groc, i)\" (mouseout)=\"onMouseOut()\"\n              [ngClass]=\"{'dropdown-item-hover': indBreakfast==i}\">\n               {{groc.food}}\n              </li>\n            </ul>\n          </div>\n        </div>\n        \n        <div class=\"quant-wrapper\">\n          <div [style.margin-right.px]=\"30\">\n            <input placeholder=\"Enter quantity\" name=\"breakfastQuantityItem\" [(ngModel)]=\"breakfastQuantityItem\" size=\"15\">\n          </div>\n          <span *ngIf=\"breakfQuantErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{breakfQuantErrMsg}}</span>\n        </div>\n        <button class=\"btn btn-sm btn-success add-button\" type=\"button\" (click)=\"addBreakfastItem()\"\n        [ngClass]=\"{'button-add-small': !screenService.isLarge()}\">add</button>\n      </div>\n\n      <mat-divider [style.margin-top.px]=\"15\" [style.margin-bottom.px]=\"15\"></mat-divider>\n      <!-- ######################    lunch    #################### -->\n      <span><strong>Lunch</strong></span><br />\n      <div [ngClass]=\"{'meal-wrapper': screenService.isLarge(), 'meal-wrapper-small': !screenService.isLarge()}\">\n        <div class=\"food-wrapper\">\n          <div [style.margin-right.px]=\"10\" class=\"input-field\">\n            <input placeholder=\"Enter food\" name=\"lunchFoodItem\" [(ngModel)]=\"lunchFoodItem\" (input)=\"getmatchedLunchs()\"\n            keydownEvent (keydownEvent)=\"onKeyDownLunch($event)\" (keydown.enter)=\"onEnterLunch()\" class=\"input-food\">\n          </div>\n          <span *ngIf=\"lunchErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{lunchErrMsg}}</span>\n          <div class=\"dropdown-box\" style=\"max-height: 100px\">\n            <ul class=\"dropdown-list\">\n              <li class=\"dropdown-item\" *ngFor=\"let groc of matchedLunchs; let i = index\" \n              (click)=\"onItemClickLunch(groc, i)\" clickOutside (clickOutside)=\"matchedLunchs=null;this.currentLunch=null;indLunch=-1\"\n              (mouseover)=\"onMouseOverLunch(groc, i)\" (mouseout)=\"onMouseOutLunch()\"\n              [ngClass]=\"{'dropdown-item-hover': indLunch==i}\">\n               {{groc.food}}\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"quant-wrapper\">\n          <div [style.margin-right.px]=\"30\">\n            <input placeholder=\"Enter quantity\" name=\"lunchQuantityItem\" [(ngModel)]=\"lunchQuantityItem\" size=\"15\">\n          </div>\n          <span *ngIf=\"lunchQuantErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{lunchQuantErrMsg}}</span>\n        </div>\n        <button class=\"btn btn-sm btn-success add-button\" type=\"button\" (click)=\"addLunchItem()\"\n        [ngClass]=\"{'button-add-small': !screenService.isLarge()}\">add</button>\n      </div>\n\n      <mat-divider [style.margin-top.px]=\"15\" [style.margin-bottom.px]=\"15\"></mat-divider>\n      <!-- ######################    dinner    #################### -->\n      <span><strong>Dinner</strong></span><br />\n      <div [ngClass]=\"{'meal-wrapper': screenService.isLarge(), 'meal-wrapper-small': !screenService.isLarge()}\">\n        <div class=\"food-wrapper\">\n          <div [style.margin-right.px]=\"10\" class=\"input-field\">\n            <input placeholder=\"Enter food\" name=\"dinnerFoodItem\" [(ngModel)]=\"dinnerFoodItem\" (input)=\"getmatchedDinners()\"\n            keydownEvent (keydownEvent)=\"onKeyDownDinner($event)\" (keydown.enter)=\"onEnterDinner()\" class=\"input-food\">\n          </div>\n          <span *ngIf=\"dinnerErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{dinnerErrMsg}}</span>\n          <div class=\"dropdown-box\" style=\"max-height: 100px\">\n            <ul class=\"dropdown-list\">\n              <li class=\"dropdown-item\" *ngFor=\"let groc of matchedDinners; let i = index\" \n              (click)=\"onItemClickDinner(groc, i)\" clickOutside (clickOutside)=\"matchedDinners=null;this.currentDinner=null;indDinner=-1\"\n              (mouseover)=\"onMouseOverDinner(groc, i)\" (mouseout)=\"onMouseOutDinner()\"\n              [ngClass]=\"{'dropdown-item-hover': indDinner==i}\">\n               {{groc.food}}\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"quant-wrapper\">\n          <div [style.margin-right.px]=\"30\">\n            <input placeholder=\"Enter quantity\" name=\"dinnerQuantityItem\" [(ngModel)]=\"dinnerQuantityItem\" size=\"15\">\n          </div>\n          <span *ngIf=\"dinnerQuantErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{dinnerQuantErrMsg}}</span>\n        </div>\n        <button class=\"btn btn-sm btn-success add-button\" type=\"button\" (click)=\"addDinnerItem()\"\n        [ngClass]=\"{'button-add-small': !screenService.isLarge()}\">add</button>\n      </div>\n\n      <mat-divider [style.margin-top.px]=\"15\" [style.margin-bottom.px]=\"15\"></mat-divider>\n      <!-- ######################    additionally    #################### -->\n      <span><strong>Additionally</strong></span><br />\n      <div [ngClass]=\"{'meal-wrapper': screenService.isLarge(), 'meal-wrapper-small': !screenService.isLarge()}\"\n      style=\"margin-bottom: 10px\">\n        <div class=\"food-wrapper\">\n          <div [style.margin-right.px]=\"10\" class=\"input-field\">\n            <input placeholder=\"Enter food\" name=\"additionallyFoodItem\" [(ngModel)]=\"additionallyFoodItem\" (input)=\"getmatchedAdditionallys()\"\n            keydownEvent (keydownEvent)=\"onKeyDownAdditionally($event)\" (keydown.enter)=\"onEnterAdditionally()\" class=\"input-food\">\n          </div>\n          <span *ngIf=\"additionallyErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{additionallyErrMsg}}</span>\n          <div class=\"dropdown-box\" style=\"max-height: 100px\">\n            <ul class=\"dropdown-list\">\n              <li class=\"dropdown-item\" *ngFor=\"let groc of matchedAdditionallys; let i = index\" \n              (click)=\"onItemClickAdditionally(groc, i)\" clickOutside (clickOutside)=\"matchedAdditionallys=null;this.currentAdditionally=null;indAdditionally=-1\"\n              (mouseover)=\"onMouseOverAdditionally(groc, i)\" (mouseout)=\"onMouseOutAdditionally()\"\n              [ngClass]=\"{'dropdown-item-hover': indAdditionally==i}\">\n               {{groc.food}}\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div class=\"quant-wrapper\">\n          <div [style.margin-right.px]=\"30\">\n            <input placeholder=\"Enter quantity\" name=\"additionallyQuantityItem\" [(ngModel)]=\"additionallyQuantityItem\" size=\"15\">\n          </div>\n          <span *ngIf=\"additionallyQuantErrMsg!=''\" style=\"color:red; font-size:10.5px\">{{additionallyQuantErrMsg}}</span>\n        </div>\n        <button class=\"btn btn-sm btn-success add-button\" type=\"button\" (click)=\"addAdditionallyItem()\"\n        [ngClass]=\"{'button-add-small': !screenService.isLarge()}\">add</button>\n      </div>\n\n    </form>\n\n</mat-expansion-panel>"

/***/ }),

/***/ "./src/app/components/meals/meals.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/meals/meals.component.ts ***!
  \*****************************************************/
/*! exports provided: MealsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealsComponent", function() { return MealsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/screen.service */ "./src/app/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MealsComponent = /** @class */ (function () {
    function MealsComponent(nutritionService, snackBar, screenService) {
        this.nutritionService = nutritionService;
        this.snackBar = snackBar;
        this.screenService = screenService;
        this.breakfastQuantityItem = null;
        this.breakfastItems = [];
        this.breakfErrMsg = '';
        this.matchedBreakfasts = null;
        this.breakfastFoodItem = '';
        this.indBreakfast = -1;
        this.currentBreakfast = null;
        this.lunchQuantityItem = null;
        this.lunchItems = [];
        this.lunchErrMsg = '';
        this.matchedLunchs = null;
        this.lunchFoodItem = '';
        this.indLunch = -1;
        this.currentLunch = null;
        this.dinnerQuantityItem = null;
        this.dinnerItems = [];
        this.dinnerErrMsg = '';
        this.matchedDinners = null;
        this.dinnerFoodItem = '';
        this.indDinner = -1;
        this.currentDinner = null;
        this.additionallyQuantityItem = null;
        this.additionallyItems = [];
        this.additionallyErrMsg = '';
        this.matchedAdditionallys = null;
        this.additionallyFoodItem = '';
        this.indAdditionally = -1;
        this.currentAdditionally = null;
    }
    MealsComponent.prototype.ngOnInit = function () { };
    // snack bar messages
    MealsComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 2000 });
    };
    // push breakfast food and quantity to the side-list
    MealsComponent.prototype.addBreakfastItem = function () {
        var _this = this;
        var regexp = /^\s+$/;
        if (this.breakfastFoodItem != '' && !regexp.test(this.breakfastFoodItem)) {
            this.nutritionService.checkForFood(this.breakfastFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.openSnackBar('Please select food from autocomplete options');
                    _this.breakfErrMsg = '*Select food from autocomplete options';
                    console.log('no success, errmsg: ' + _this.breakfErrMsg);
                    if (!_this.isQuantityValid(_this.breakfastQuantityItem)) {
                        _this.breakfQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
                else {
                    if (_this.isQuantityValid(_this.breakfastQuantityItem)) {
                        _this.breakfErrMsg = '';
                        var breakfastItem = {
                            food: _this.breakfastFoodItem,
                            quantity: _this.breakfastQuantityItem
                        };
                        _this.breakfastItems.push(breakfastItem);
                        _this.breakfastFoodItem = '';
                        _this.breakfastQuantityItem = null;
                    }
                    else {
                        _this.breakfQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
            });
        }
        else {
            this.openSnackBar('Please enter some food first');
            this.breakfErrMsg = '*Food is required';
            if (!this.isQuantityValid(this.breakfastQuantityItem)) {
                this.breakfQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
        }
        if (this.isQuantityValid(this.breakfastQuantityItem)) {
            this.breakfQuantErrMsg = '';
        }
    };
    // quantity check
    MealsComponent.prototype.isQuantityValid = function (quantity) {
        var regexp = /^\s+$/;
        var x = Number(quantity);
        if (quantity === '' || regexp.test(quantity) || isNaN(x)) {
            return false;
        }
        else if (x < 1 || x > 5000) {
            return false;
        }
        else {
            return true;
        }
    };
    // ########### breakfast
    // get all matched groceries
    MealsComponent.prototype.getmatchedBreakfasts = function () {
        var _this = this;
        this.breakfErrMsg = ''; // to remove error message from dom
        if (this.breakfastFoodItem === '') {
            this.matchedBreakfasts = null;
        }
        else {
            this.indBreakfast = -1; ///
            this.currentBreakfast = null; ///
            this.nutritionService.getMathedGroceries(this.breakfastFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.matchedBreakfasts = null;
                }
                else {
                    _this.matchedBreakfasts = data.groceries;
                }
            });
        }
    };
    // on key down in search field
    MealsComponent.prototype.onKeyDown = function (event) {
        if (this.matchedBreakfasts != null) {
            if (event === 'downArrow') {
                if (this.indBreakfast == this.matchedBreakfasts.length - 1) {
                    this.indBreakfast = 0;
                }
                else {
                    ++this.indBreakfast;
                }
                if (this.indBreakfast > -1 && this.indBreakfast < this.matchedBreakfasts.length) {
                    this.currentBreakfast = this.matchedBreakfasts[this.indBreakfast];
                }
            }
            if (event === 'upArrow') {
                if (this.indBreakfast == -1 || this.indBreakfast == 0) {
                    this.indBreakfast = this.matchedBreakfasts.length - 1;
                }
                else {
                    --this.indBreakfast;
                }
                if (this.indBreakfast > -1 && this.indBreakfast < this.matchedBreakfasts.length) {
                    this.currentBreakfast = this.matchedBreakfasts[this.indBreakfast];
                }
            }
        }
    };
    MealsComponent.prototype.onEnter = function () {
        if (this.currentBreakfast != null) {
            this.breakfastFoodItem = this.currentBreakfast.food;
            this.matchedBreakfasts = null;
            this.indBreakfast = -1;
            this.currentBreakfast = null;
        }
    };
    MealsComponent.prototype.onItemClick = function (grocerie, indBreakfastex) {
        this.breakfastFoodItem = this.currentBreakfast.food;
        this.matchedBreakfasts = null;
        this.indBreakfast = -1;
    };
    MealsComponent.prototype.onMouseOver = function (groc, indBreakfast) {
        this.currentBreakfast = groc;
        this.indBreakfast = indBreakfast;
    };
    MealsComponent.prototype.onMouseOut = function () {
        this.currentBreakfast = null;
        this.indBreakfast = -1;
    };
    // ########### lunch
    // push lunch food and quantity to the side-list
    MealsComponent.prototype.addLunchItem = function () {
        var _this = this;
        var regexp = /^\s+$/;
        if (this.lunchFoodItem != '' && !regexp.test(this.lunchFoodItem)) {
            this.nutritionService.checkForFood(this.lunchFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.openSnackBar('Please select food from autocomplete options');
                    _this.lunchErrMsg = '*Select food from autocomplete options';
                    console.log('no success, errmsg: ' + _this.lunchErrMsg);
                    if (!_this.isQuantityValid(_this.lunchQuantityItem)) {
                        _this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
                else {
                    if (_this.isQuantityValid(_this.lunchQuantityItem)) {
                        _this.lunchErrMsg = '';
                        var lunchItem = {
                            food: _this.lunchFoodItem,
                            quantity: _this.lunchQuantityItem
                        };
                        _this.lunchItems.push(lunchItem);
                        _this.lunchFoodItem = '';
                        _this.lunchQuantityItem = null;
                    }
                    else {
                        _this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
            });
        }
        else {
            this.openSnackBar('Please enter some food first');
            this.lunchErrMsg = '*Food is required';
            if (!this.isQuantityValid(this.lunchQuantityItem)) {
                this.lunchQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
        }
        if (this.isQuantityValid(this.lunchQuantityItem)) {
            this.lunchQuantErrMsg = '';
        }
    };
    // get all matched groceries
    MealsComponent.prototype.getmatchedLunchs = function () {
        var _this = this;
        this.lunchErrMsg = ''; // to remove error message from dom
        if (this.lunchFoodItem === '') {
            this.matchedLunchs = null;
        }
        else {
            this.indLunch = -1;
            this.currentLunch = null;
            this.nutritionService.getMathedGroceries(this.lunchFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.matchedLunchs = null;
                }
                else {
                    _this.matchedLunchs = data.groceries;
                }
            });
        }
    };
    // on key down in search field
    MealsComponent.prototype.onKeyDownLunch = function (event) {
        if (this.matchedLunchs != null) {
            if (event === 'downArrow') {
                if (this.indLunch == this.matchedLunchs.length - 1) {
                    this.indLunch = 0;
                }
                else {
                    ++this.indLunch;
                }
                if (this.indLunch > -1 && this.indLunch < this.matchedLunchs.length) {
                    this.currentLunch = this.matchedLunchs[this.indLunch];
                }
            }
            if (event === 'upArrow') {
                if (this.indLunch == -1 || this.indLunch == 0) {
                    this.indLunch = this.matchedLunchs.length - 1;
                }
                else {
                    --this.indLunch;
                }
                if (this.indLunch > -1 && this.indLunch < this.matchedLunchs.length) {
                    this.currentLunch = this.matchedLunchs[this.indLunch];
                }
            }
        }
    };
    MealsComponent.prototype.onEnterLunch = function () {
        if (this.currentLunch != null) {
            this.lunchFoodItem = this.currentLunch.food;
            this.matchedLunchs = null;
            this.indLunch = -1;
            this.currentLunch = null;
        }
    };
    MealsComponent.prototype.onItemClickLunch = function (grocerie, indLunchex) {
        this.lunchFoodItem = this.currentLunch.food;
        this.matchedLunchs = null;
        this.indLunch = -1;
    };
    MealsComponent.prototype.onMouseOverLunch = function (groc, indLunch) {
        this.currentLunch = groc;
        this.indLunch = indLunch;
    };
    MealsComponent.prototype.onMouseOutLunch = function () {
        this.currentLunch = null;
        this.indLunch = -1;
    };
    // ########### dinner
    // push dinner food and quantity to the side-list
    MealsComponent.prototype.addDinnerItem = function () {
        var _this = this;
        var regexp = /^\s+$/;
        if (this.dinnerFoodItem != '' && !regexp.test(this.dinnerFoodItem)) {
            this.nutritionService.checkForFood(this.dinnerFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.openSnackBar('Please select food from autocomplete options');
                    _this.dinnerErrMsg = '*Select food from autocomplete options';
                    console.log('no success, errmsg: ' + _this.dinnerErrMsg);
                    if (!_this.isQuantityValid(_this.dinnerQuantityItem)) {
                        _this.dinnerQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
                else {
                    if (_this.isQuantityValid(_this.dinnerQuantityItem)) {
                        _this.dinnerErrMsg = '';
                        var dinnerItem = {
                            food: _this.dinnerFoodItem,
                            quantity: _this.dinnerQuantityItem
                        };
                        _this.dinnerItems.push(dinnerItem);
                        _this.dinnerFoodItem = '';
                        _this.dinnerQuantityItem = null;
                    }
                    else {
                        _this.dinnerQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
            });
        }
        else {
            this.openSnackBar('Please enter some food first');
            this.dinnerErrMsg = '*Food is required';
            if (!this.isQuantityValid(this.dinnerQuantityItem)) {
                this.dinnerQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
        }
        if (this.isQuantityValid(this.dinnerQuantityItem)) {
            this.dinnerQuantErrMsg = '';
        }
    };
    // get all matched groceries
    MealsComponent.prototype.getmatchedDinners = function () {
        var _this = this;
        this.dinnerErrMsg = ''; // to remove error message from dom
        if (this.dinnerFoodItem === '') {
            this.matchedDinners = null;
        }
        else {
            this.indDinner = -1;
            this.currentDinner = null;
            this.nutritionService.getMathedGroceries(this.dinnerFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.matchedDinners = null;
                }
                else {
                    _this.matchedDinners = data.groceries;
                }
            });
        }
    };
    // on key down in search field
    MealsComponent.prototype.onKeyDownDinner = function (event) {
        if (this.matchedDinners != null) {
            if (event === 'downArrow') {
                if (this.indDinner == this.matchedDinners.length - 1) {
                    this.indDinner = 0;
                }
                else {
                    ++this.indDinner;
                }
                if (this.indDinner > -1 && this.indDinner < this.matchedDinners.length) {
                    this.currentDinner = this.matchedDinners[this.indDinner];
                }
            }
            if (event === 'upArrow') {
                if (this.indDinner == -1 || this.indDinner == 0) {
                    this.indDinner = this.matchedDinners.length - 1;
                }
                else {
                    --this.indDinner;
                }
                if (this.indDinner > -1 && this.indDinner < this.matchedDinners.length) {
                    this.currentDinner = this.matchedDinners[this.indDinner];
                }
            }
        }
    };
    MealsComponent.prototype.onEnterDinner = function () {
        if (this.currentDinner != null) {
            this.dinnerFoodItem = this.currentDinner.food;
            this.matchedDinners = null;
            this.indDinner = -1;
            this.currentDinner = null;
        }
    };
    MealsComponent.prototype.onItemClickDinner = function (grocerie, indDinnerex) {
        this.dinnerFoodItem = this.currentDinner.food;
        this.matchedDinners = null;
        this.indDinner = -1;
    };
    MealsComponent.prototype.onMouseOverDinner = function (groc, indDinner) {
        this.currentDinner = groc;
        this.indDinner = indDinner;
    };
    MealsComponent.prototype.onMouseOutDinner = function () {
        this.currentDinner = null;
        this.indDinner = -1;
    };
    // ########### additionally
    // push additionally food and quantity to the side-list
    MealsComponent.prototype.addAdditionallyItem = function () {
        var _this = this;
        var regexp = /^\s+$/;
        if (this.additionallyFoodItem != '' && !regexp.test(this.additionallyFoodItem)) {
            this.nutritionService.checkForFood(this.additionallyFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.openSnackBar('Please select food from autocomplete options');
                    _this.additionallyErrMsg = '*Select food from autocomplete options';
                    console.log('no success, errmsg: ' + _this.additionallyErrMsg);
                    if (!_this.isQuantityValid(_this.additionallyQuantityItem)) {
                        _this.additionallyQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
                else {
                    if (_this.isQuantityValid(_this.additionallyQuantityItem)) {
                        _this.additionallyErrMsg = '';
                        var additionallyItem = {
                            food: _this.additionallyFoodItem,
                            quantity: _this.additionallyQuantityItem
                        };
                        _this.additionallyItems.push(additionallyItem);
                        _this.additionallyFoodItem = '';
                        _this.additionallyQuantityItem = null;
                    }
                    else {
                        _this.additionallyQuantErrMsg = '*Please enter valid quantity in \'g\'';
                    }
                }
            });
        }
        else {
            this.openSnackBar('Please enter some food first');
            this.additionallyErrMsg = '*Food is required';
            if (!this.isQuantityValid(this.additionallyQuantityItem)) {
                this.additionallyQuantErrMsg = '*Please enter valid quantity in \'g\'';
            }
        }
        if (this.isQuantityValid(this.additionallyQuantityItem)) {
            this.additionallyQuantErrMsg = '';
        }
    };
    // get all matched groceries
    MealsComponent.prototype.getmatchedAdditionallys = function () {
        var _this = this;
        this.additionallyErrMsg = ''; // to remove error message from dom
        if (this.additionallyFoodItem === '') {
            this.matchedAdditionallys = null;
        }
        else {
            this.indAdditionally = -1;
            this.currentAdditionally = null;
            this.nutritionService.getMathedGroceries(this.additionallyFoodItem)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.matchedAdditionallys = null;
                }
                else {
                    _this.matchedAdditionallys = data.groceries;
                }
            });
        }
    };
    // on key down in search field
    MealsComponent.prototype.onKeyDownAdditionally = function (event) {
        if (this.matchedAdditionallys != null) {
            if (event === 'downArrow') {
                if (this.indAdditionally == this.matchedAdditionallys.length - 1) {
                    this.indAdditionally = 0;
                }
                else {
                    ++this.indAdditionally;
                }
                if (this.indAdditionally > -1 && this.indAdditionally < this.matchedAdditionallys.length) {
                    this.currentAdditionally = this.matchedAdditionallys[this.indAdditionally];
                }
            }
            if (event === 'upArrow') {
                if (this.indAdditionally == -1 || this.indAdditionally == 0) {
                    this.indAdditionally = this.matchedAdditionallys.length - 1;
                }
                else {
                    --this.indAdditionally;
                }
                if (this.indAdditionally > -1 && this.indAdditionally < this.matchedAdditionallys.length) {
                    this.currentAdditionally = this.matchedAdditionallys[this.indAdditionally];
                }
            }
        }
    };
    MealsComponent.prototype.onEnterAdditionally = function () {
        if (this.currentAdditionally != null) {
            this.additionallyFoodItem = this.currentAdditionally.food;
            this.matchedAdditionallys = null;
            this.indAdditionally = -1;
            this.currentAdditionally = null;
        }
    };
    MealsComponent.prototype.onItemClickAdditionally = function (grocerie, indAdditionallyex) {
        this.additionallyFoodItem = this.currentAdditionally.food;
        this.matchedAdditionallys = null;
        this.indAdditionally = -1;
    };
    MealsComponent.prototype.onMouseOverAdditionally = function (groc, indAdditionally) {
        this.currentAdditionally = groc;
        this.indAdditionally = indAdditionally;
    };
    MealsComponent.prototype.onMouseOutAdditionally = function () {
        this.currentAdditionally = null;
        this.indAdditionally = -1;
    };
    MealsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meals',
            template: __webpack_require__(/*! ./meals.component.html */ "./src/app/components/meals/meals.component.html"),
            styles: [__webpack_require__(/*! ./meals.component.css */ "./src/app/components/meals/meals.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_nutrition_service__WEBPACK_IMPORTED_MODULE_1__["NutritionService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_3__["ScreenService"]])
    ], MealsComponent);
    return MealsComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar-item/navbar-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/navbar-item/navbar-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item {\r\n    height: 50px;\r\n    line-height: 50px;\r\n    margin-right: 20px;\r\n    padding: 0px 7px;\r\n}\r\n\r\n.item:hover {\r\n    cursor: pointer;\r\n    color: rgb(78, 77, 77);\r\n}\r\n\r\n.router-link-active {\r\n    background-color: rgb(187, 184, 184);\r\n    color: rgb(78, 77, 77);\r\n}\r\n\r\n/* Small Item */\r\n\r\n.small-item {\r\n    height: 30px;\r\n    line-height: 30px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding: 0 25px 0 25px;\r\n    margin: 10px 0 10px 0;\r\n}\r\n\r\n.small-item:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(187, 184, 184);\r\n    color: rgb(78, 77, 77);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar-item/navbar-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/navbar-item/navbar-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"item.show\" [routerLink]=\"[item.route]\" \n  [ngClass]=\"{'item': screenService.isLarge() , 'small-item': !screenService.isLarge() , 'router-link-active': isActive}\"\n  >\n  {{item.name}}\n</div>"

/***/ }),

/***/ "./src/app/components/navbar-item/navbar-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/navbar-item/navbar-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarItemComponent", function() { return NavbarItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/screen.service */ "./src/app/services/screen.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarItemComponent = /** @class */ (function () {
    function NavbarItemComponent(router, screenService) {
        this.router = router;
        this.screenService = screenService;
        this.isActive = false;
    }
    NavbarItemComponent.prototype.checkActiveRoute = function (route) {
        this.isActive = (route == this.item.route);
    };
    NavbarItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkActiveRoute(this.router.url);
        this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.checkActiveRoute(event.url);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NavbarItemComponent.prototype, "item", void 0);
    NavbarItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-item',
            template: __webpack_require__(/*! ./navbar-item.component.html */ "./src/app/components/navbar-item/navbar-item.component.html"),
            styles: [__webpack_require__(/*! ./navbar-item.component.css */ "./src/app/components/navbar-item/navbar-item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_screen_service__WEBPACK_IMPORTED_MODULE_2__["ScreenService"]])
    ], NavbarItemComponent);
    return NavbarItemComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    color: rgb(133, 133, 133);\r\n}\r\n\r\n.navb {\r\n    display: flex;\r\n    background-color: rgb(216, 213, 213);\r\n    height: 50px;\r\n    line-height: 50px;\r\n    border-radius: 5px;\r\n}\r\n\r\n.navb-left {\r\n    display: flex;\r\n    margin-left: 120px;\r\n}\r\n\r\n.logo {\r\n    margin-right: 20px;\r\n    font-size: 20px;\r\n}\r\n\r\n.logo:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.home {\r\n    padding: 0px 7px;\r\n}\r\n\r\n.home:hover {\r\n    cursor: pointer;\r\n    color: rgb(78, 77, 77);\r\n}\r\n\r\n.navb-right {\r\n    display: flex;\r\n    flex-grow: 1;\r\n    justify-content: flex-end;\r\n    margin-right: 110px;\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    display: flex;\r\n    \r\n}\r\n\r\n.router-link-active {\r\n    background-color: rgb(187, 184, 184);\r\n    color: rgb(78, 77, 77);\r\n}\r\n\r\n#logout:hover {\r\n    cursor: pointer;\r\n    color: rgb(78, 77, 77);\r\n}\r\n\r\n/* Small Navbar */\r\n\r\n.small-navb {\r\n    display: flex;\r\n    height: 40px;\r\n    line-height: 40px;\r\n    background-color: rgb(216, 213, 213);\r\n}\r\n\r\n.hamburger {\r\n    flex-grow: 1;\r\n    padding-left: 20px;\r\n    font-size: 16px;\r\n}\r\n\r\n.menu-shown {\r\n    background-color: rgb(187, 184, 184);\r\n    color: rgb(78, 77, 77);\r\n}\r\n\r\n.logo-small {\r\n    flex-grow: 1;\r\n    text-align: center;\r\n    font-size: 22px;\r\n}\r\n\r\n.logo-small-span:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.home-small {\r\n    flex-grow: 1;\r\n    text-align: right;\r\n    padding-right: 20px;\r\n    font-size: 16px;\r\n}\r\n\r\n.icon {\r\n    padding: 5px;\r\n}\r\n\r\n.icon:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(187, 184, 184);\r\n    color: rgb(78, 77, 77);\r\n}\r\n\r\n.small-menu {\r\n    position: absolute;\r\n    background-color: rgb(42, 42, 44);\r\n    z-index: 1;\r\n}\r\n\r\n/* for logout small */\r\n\r\n.logout-item {\r\n    height: 30px;\r\n    line-height: 30px;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    padding: 0 25px 0 25px;\r\n    margin: 10px 0 10px 0;\r\n}\r\n\r\n.logout-item:hover {\r\n    cursor: pointer;\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(0, 0, 0);\r\n    font-weight: bold;\r\n}"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"screenService.isLarge()\" class=\"navb\">\n  <div class=\"navb-left\">\n    <div class=\"logo\" [routerLink]=\"['/home']\">\n      MEAN Stack App\n    </div>\n    <div class=\"home\" [routerLink]=\"['/home']\" [ngClass]=\"{'router-link-active': isActive}\">\n      Home\n    </div>\n  </div>\n\n  <div class=\"navb-right\">\n    <ul>\n      <li *ngFor=\"let item of configService.navbarItems\">\n        <app-navbar-item [item]=\"item\"></app-navbar-item>\n      </li>\n      <li *ngIf=\"this.authService.loggedIn()\" id=\"logout\" (click)=\"onLogout()\">Logout</li>\n    </ul>\n  </div>\n</div>\n\n\n<!-- small menu -->\n\n<div *ngIf=\"!screenService.isLarge()\" class=\"small\">\n  <div class=\"small-navb\">\n    <div class=\"hamburger\">\n      <span class=\"glyphicon glyphicon-menu-hamburger icon\" (click)=\"configService.showMenu=!configService.showMenu\"\n      [ngClass]=\"{'menu-shown': configService.showMenu}\"></span>\n    </div>\n\n    <div class=\"logo-small\">\n      <span class=\"logo-small-span\"  [routerLink]=\"['/home']\">MEAN Stack App</span>\n    </div>\n\n    <div class=\"home-small\">\n      <span class=\"glyphicon glyphicon-home icon\" [ngClass]=\"{'router-link-active': isActive}\"\n      [routerLink]=\"['/home']\" ></span>\n    </div>\n  </div>\n\n  <div *ngIf=\"configService.showMenu\" class=\"small-menu\">\n      <div *ngFor=\"let item of configService.navbarItems\" class=\"small-item\" (click)=\"configService.showMenu=false\">\n        <app-navbar-item [item]=\"item\"></app-navbar-item>\n      </div>\n      <div *ngIf=\"this.authService.loggedIn()\" class=\"logout-item\" (click)=\"onLogout(); configService.showMenu=false;\">\n        Logout\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/config.service */ "./src/app/services/config.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/screen.service */ "./src/app/services/screen.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(configService, router, screenService, authService, flashMessagesService) {
        this.configService = configService;
        this.router = router;
        this.screenService = screenService;
        this.authService = authService;
        this.flashMessagesService = flashMessagesService;
        this.isActive = false;
        this.showMenu = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.logged = this.authService.loggedIn();
    };
    NavbarComponent.prototype.ngDoCheck = function () {
        if (this.router.url === '/home' || this.router.url === '/') {
            this.isActive = true;
        }
        else {
            this.isActive = false;
        }
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.logout();
        this.flashMessagesService.show('You are logged out!', { cssClass: 'alert-success' });
        this.configService.updateShowProperty();
        this.router.navigate(['/home']);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_config_service__WEBPACK_IMPORTED_MODULE_1__["ConfigService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_screen_service__WEBPACK_IMPORTED_MODULE_3__["ScreenService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/nutrition-manager/nutrition-manager.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/nutrition-manager/nutrition-manager.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide-show-info-section-buttons {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.info-section {\r\n    border: 2px solid #ffd740;\r\n    border-radius: 10px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    background-color: #fdfcfc;\r\n}\r\n\r\n.edit-section {\r\n    border: 2px solid #ffd740;\r\n    border-radius: 10px;\r\n    background-color: #fdfcfc;\r\n}\r\n\r\n.edit-section-small {\r\n    border: 2px solid #ffd740;\r\n    border-radius: 10px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    background-color: #fdfcfc;\r\n}\r\n\r\n.info-form {\r\n    margin: 10px 10px 15px 10px;\r\n}\r\n\r\n.info-form-field {\r\n    min-width: 120px;\r\n    margin-bottom: 8px;\r\n}\r\n\r\nmat-radio-button {\r\n    margin-right: 10px;\r\n}\r\n\r\n.info-section-buttons-div {\r\n    margin-top: 7px;\r\n    text-align: right;\r\n}\r\n\r\n.calculating {\r\n    margin: 50px auto 50px auto ;\r\n}\r\n\r\n.calories {\r\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\r\n    /* font-size: 14px; */\r\n    background-color: #ffd740;\r\n    border-radius: 5px;\r\n    text-align: left;\r\n    margin-top: 5px;\r\n    min-height: 36px;\r\n    line-height: 36px;\r\n    padding: 0 8px 0 8px;\r\n    /* display: inline-flex; */\r\n    /* vertical-align: middle; */\r\n}\r\n\r\n.calories > i {\r\n    vertical-align: middle !important;\r\n}\r\n\r\n.meal-list {\r\n    background-color: #ffd740;\r\n    border: 2px solid #673ab7;\r\n    border-radius: 5px;\r\n    list-style-type: none;\r\n    padding: 0px 20px 10px 20px;\r\n}\r\n\r\n.meal-item {\r\n    /* max-width: 160px; */\r\n    word-wrap:break-word;\r\n    padding-left: 3px;\r\n    padding-right: 3px;\r\n    margin-bottom: 3px;\r\n}\r\n\r\n.meal-item:hover {\r\n    cursor: default;\r\n    background-color: #fddd6a;\r\n}\r\n\r\n.times {\r\n    float: right;\r\n}\r\n\r\n.times:hover {\r\n    color: rgb(250, 64, 64);\r\n    cursor: pointer;\r\n}\r\n\r\n.input-field {\r\n    width: 200px;\r\n    max-width: 200px;\r\n}\r\n\r\n.dropdown-list {\r\n    position: absolute;\r\n    top: 47.5px; /* to fix it just under input */\r\n    z-index: 1;\r\n    width: 200px;\r\n    max-width: 200px;\r\n    max-height: 100px;\r\n    padding: 0;\r\n    list-style-type: none;\r\n    line-height: 30px;\r\n    color: black;\r\n}\r\n\r\n.dropdown-item {\r\n    padding: 5px;\r\n    background-color: #f5f5f5;\r\n    /* height: 30px;  */\r\n    line-height: 30px;\r\n    color: black;\r\n    /* vertical-align: middle; */ /* ovako je tekst centriran */\r\n}\r\n\r\n.dropdown-item-hover {\r\n    background-color: #cec8c8;\r\n    cursor: pointer;\r\n    color: black;\r\n}\r\n\r\n.side-bar {\r\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\r\n}\r\n\r\n.img {\r\n    width: 30px;\r\n    max-width: 30px;\r\n    height: 30px;\r\n    max-height: 30px;\r\n    float: left;\r\n    border-radius: 50%;\r\n    margin-left: -35px;\r\n    border: 1px solid #673ab7;\r\n}\r\n\r\n.table-width {\r\n    min-width: 720px;\r\n}\r\n\r\n.table > tbody > tr > td { \r\n    padding-top: 2px;\r\n    padding-bottom: 2px;\r\n    font-size: 13.5px;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n}\r\n\r\n.table > thead > tr > th {\r\n    text-align: center;\r\n}\r\n\r\n#meal-calculaton-table {\r\n    background-color: #f5f5f5;\r\n}\r\n\r\n#meal-calculaton-table > td {\r\n    text-align: left;\r\n}\r\n\r\n#row-total {\r\n    background-color: #ffd740;\r\n}\r\n\r\n#edit-food:hover {\r\n    color: #ffd740;\r\n    cursor: pointer;\r\n}\r\n\r\n#delete-food:hover {\r\n    color: #f77a7a;\r\n    cursor: pointer;\r\n}\r\n\r\n#quantityToEdit {\r\n    text-align: center;\r\n}\r\n\r\n#done-food:hover {\r\n    color: rgb(4, 161, 4);\r\n    cursor: pointer;\r\n}\r\n\r\n#cancel-food:hover {\r\n    color: rgb(4, 75, 230);\r\n    cursor: pointer;\r\n}\r\n\r\n.search-row {\r\n    display: inline-block;\r\n    margin: 25px 0 25px 0;\r\n    background-color: rgb(199, 228, 238);\r\n    border-radius: 15px;\r\n}\r\n\r\n.search-row-opened {\r\n    display: inline-block;\r\n    margin: 25px 0 25px 0;\r\n    background-color: rgb(199, 228, 238);\r\n    border-radius: 15px;\r\n    width: 100%;\r\n}\r\n\r\n.search-text {\r\n    height: 60px;\r\n    line-height: 60px;\r\n}\r\n\r\n.search-text > span {\r\n    height: 60px;\r\n    line-height: 60px;\r\n}\r\n\r\n.search-text > span > i {\r\n    vertical-align: middle;\r\n    font-size: 40px;\r\n    color: #000000;\r\n}\r\n\r\n.search-input {\r\n    height: 60px;\r\n    line-height: 60px;\r\n}\r\n\r\n.search-input input {\r\n    height: 30px;\r\n}\r\n\r\n#search-sign {\r\n    display: flex;\r\n}\r\n\r\n#search-sign > i {\r\n    margin: auto;\r\n}\r\n\r\n#search-sign:hover {\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n.search-text input {\r\n    height: 35px;\r\n    width: 200px;\r\n    max-width: 200px;\r\n}\r\n\r\n.gr {\r\n    float: right; \r\n    font-size: 13px; \r\n    color: rgb(104, 101, 101);\r\n    padding: 0 10px 5px 0;\r\n}"

/***/ }),

/***/ "./src/app/components/nutrition-manager/nutrition-manager.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/nutrition-manager/nutrition-manager.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\" [style.margin-top.px]=\"10\" [style.margin-left.px]=\"0\" [style.margin-right.px]=\"0\">\n      <mat-toolbar [style.width]=\"'100%'\">My Nutrition Manager</mat-toolbar>\n    </div>\n  </div>\n  \n  <!-- enter info and hide buttons -->\n  <div *ngIf=\"!checkedIfprovidedInfo\">\n    Preparing things, please wait just a second...\n  </div>\n\n  <div class=\"row hide-show-info-section-buttons\" *ngIf=\"checkedIfprovidedInfo\">\n    <div class=\"col-md-4\">\n      <button color=\"primary\" mat-button (click)=\"showInfoSection=true\" *ngIf=\"!showInfoSection && !providedInfo\n      && !calculating\" [style.margin-top.px]=\"5\">\n        Enter Your info <i class=\"material-icons\">arrow_drop_down</i>\n      </button>\n      <button color=\"primary\" mat-button (click)=\"showInfoSection=false\" *ngIf=\"showInfoSection && !providedInfo\n      && !calculating\" [style.margin-top.px]=\"5\">\n        Hide <i class=\"material-icons\">arrow_drop_up</i>\n      </button>\n      <div class=\"calories\" *ngIf=\"providedInfo\">\n        <i class=\"material-icons\" style=\"font-size:20px\">person</i>\n        My daily calory limit: <strong>{{caloryLimit}}kcal</strong>\n      </div>\n\n      <div *ngIf=\"totalInfo !== undefined\">\n        <div *ngIf=\"checkedIfprovidedInfo && providedInfo && (caloryLimit - totalInfo?.energy)>=0\">\n          <div>\n            <div class=\"calories\" *ngIf=\"providedInfo\" style=\"background-color:#673ab7; color:white\">\n              <i class=\"material-icons\" style=\"font-size:20px\">restaurant</i>\n              Calories to go: &nbsp;<strong>{{caloryLimit - totalInfo.energy}}kcal</strong>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div *ngIf=\"totalInfo !== undefined\">\n        <div *ngIf=\"checkedIfprovidedInfo && providedInfo && (caloryLimit - totalInfo?.energy)<0\">\n          <div>\n            <div class=\"calories\" *ngIf=\"providedInfo\" style=\"background-color:#f76565; color:white\">\n              <i class=\"glyphicon glyphicon-exclamation-sign\" style=\"font-size:20px\"></i>\n              Calory limit crossed for: &nbsp;<strong>{{-(caloryLimit - totalInfo.energy)}}kcal</strong>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"col-md-8\" *ngIf=\"!calculating\">\n      <button color=\"accent\" mat-button (click)=\"showEditSection=true\" *ngIf=\"!showEditSection && providedInfo\" \n      style=\"margin-top:5px;float:right;\">\n      <i class=\"material-icons\" style=\"font-size:18px !important; vertical-align:middle;\">edit</i> Edit Your info\n      </button>\n      <button color=\"accent\" mat-button (click)=\"showEditSection=false\" *ngIf=\"showEditSection && providedInfo\" \n      [style.margin-top.px]=\"5\" [style.float]=\"'right'\">\n      <i class=\"material-icons\">arrow_drop_up</i> Hide\n      </button>\n    </div>\n  </div>\n\n  <!--###### enter info form #####-->\n  <div class=\"row\" *ngIf=\"!providedInfo && showInfoSection\">\n    <div class=\"col-md-8 info-section\" *ngIf=\"!calculating\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\" class=\"info-form\">\n        <mat-form-field class=\"info-form-field\">\n            <input matInput placeholder=\"Enter age\" name=\"age\" formControlName=\"age\">\n            <mat-error *ngIf=\"form.controls.age.errors?.required && form.controls.age.dirty\">\n              *Age is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"form.controls.age.errors?.validateAge && form.controls.age.dirty\n            && !form.controls.age.errors?.required\">\n              *Please enter <strong>valid age</strong>\n            </mat-error> \n        </mat-form-field>\n        <br />\n\n        <mat-form-field class=\"info-form-field\">\n            <input matInput placeholder=\"Enter height\" name=\"height\" formControlName=\"height\">\n            <mat-error *ngIf=\"form.controls.height.errors?.required && form.controls.height.dirty\">\n              *Height is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"form.controls.height.errors?.validateHeight && form.controls.height.dirty\n            && !form.controls.height.errors?.required\">\n              *Please enter <strong>valid height in 'cm'</strong>\n            </mat-error> \n        </mat-form-field>\n        <br />\n        \n        <mat-form-field class=\"info-form-field\">\n            <input matInput placeholder=\"Enter weight\" name=\"weight\" formControlName=\"weight\">\n            <mat-error *ngIf=\"form.controls.weight.errors?.required && form.controls.weight.dirty\">\n              *Weight is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"form.controls.weight.errors?.validateWeight && form.controls.weight.dirty\n            && !form.controls.weight.errors?.required\">\n              *Please enter <strong>valid weight in 'kg'</strong>\n            </mat-error> \n        </mat-form-field>\n        <br />\n\n        <mat-form-field class=\"info-form-field\">\n            <mat-select placeholder=\"Your gender\" name=\"gender\" formControlName=\"gender\">\n              <mat-option [value]=\"'male'\">male</mat-option>\n              <mat-option [value]=\"'female'\">female</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"form.controls.gender.errors?.required && form.controls.gender.touched\">\n              *Gender is <strong>required</strong>\n            </mat-error>\n        </mat-form-field>\n          <br />\n\n          <div [style.margin-bottom.px]=\"10\">Activity level:</div> \n          <mat-radio-group name=\"activity\" formControlName=\"activity\">\n            <mat-radio-button value=\"sedentary\">\n              <span matTooltip=\"Office worker getting little or no exercise\" matTooltipShowDelay=\"400\">\n                Sedentary or light activity\n              </span>\n            </mat-radio-button>\n            <mat-radio-button value=\"moderately_active\">\n              <span matTooltip=\"Construction worker or person running one hour daily\" matTooltipShowDelay=\"400\">\n                Active or moderately active\n              </span>\n            </mat-radio-button>\n            <mat-radio-button value=\"vigorously_active\">\n              <span matTooltip=\"Agricultural worker (non mechanized) or person swimming two hours daily\" matTooltipShowDelay=\"400\">\n                  Vigorously active\n              </span>\n            </mat-radio-button>\n          </mat-radio-group>\n          <mat-error *ngIf=\"form.controls.activity.errors?.required && form.controls.activity.untouched\">\n            <strong>*Select one</strong> of the activity levels\n          </mat-error>\n          <br />\n          \n          <div class=\"info-section-buttons-div\">\n            <button [disabled]=\"!form.valid\" mat-fab type=\"submit\" class=\"submit-info-section\">\n              <i class=\"material-icons\" [style.color]=\"'white'\">done</i>\n            </button>\n          </div> \n\n      </form>\n    </div>\n    <div *ngIf=\"calculating\">\n      <mat-spinner></mat-spinner>\n    </div>\n  </div>\n\n  <!--##### edit info form #####-->\n  <div class=\"row\" *ngIf=\"providedInfo && showEditSection\">\n    <div class=\"col-md-4\" [style.margin-left.px]=\"-15\"></div>\n    <div class=\"col-md-8 edit-section\" [ngClass]=\"{'edit-section': screenService.isLarge(), \n    'edit-section-small': !screenService.isLarge() }\">\n      <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmitEdit()\" class=\"info-form\">\n        <mat-form-field class=\"info-form-field\">\n            <input matInput placeholder=\"Enter age\" name=\"age\" formControlName=\"age\">\n            <mat-error *ngIf=\"editForm.controls.age.errors?.required && editForm.controls.age.dirty\">\n              *Age is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"editForm.controls.age.errors?.validateAge && editForm.controls.age.dirty\n            && !editForm.controls.age.errors?.required\">\n              *Please enter <strong>valid age</strong>\n            </mat-error> \n        </mat-form-field>\n        <br />\n\n        <mat-form-field class=\"info-form-field\">\n            <input matInput placeholder=\"Enter height\" name=\"height\" formControlName=\"height\">\n            <mat-error *ngIf=\"editForm.controls.height.errors?.required && editForm.controls.height.dirty\">\n              *Height is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"editForm.controls.height.errors?.validateHeight && editForm.controls.height.dirty\n            && !editForm.controls.height.errors?.required\">\n              *Please enter <strong>valid height in 'cm'</strong>\n            </mat-error> \n        </mat-form-field>\n        <br />\n        \n        <mat-form-field class=\"info-form-field\">\n            <input matInput placeholder=\"Enter weight\" name=\"weight\" formControlName=\"weight\">\n            <mat-error *ngIf=\"editForm.controls.weight.errors?.required && editForm.controls.weight.dirty\">\n              *Weight is <strong>required</strong>\n            </mat-error>\n            <mat-error *ngIf=\"editForm.controls.weight.errors?.validateWeight && editForm.controls.weight.dirty\n            && !editForm.controls.weight.errors?.required\">\n              *Please enter <strong>valid weight in 'kg'</strong>\n            </mat-error> \n        </mat-form-field>\n        <br />\n\n        <mat-form-field class=\"info-form-field\">\n            <mat-select placeholder=\"Your gender\" name=\"gender\" formControlName=\"gender\">\n              <mat-option [value]=\"'male'\">male</mat-option>\n              <mat-option [value]=\"'female'\">female</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"editForm.controls.gender.errors?.required && editForm.controls.gender.touched\">\n              *Gender is <strong>required</strong>\n            </mat-error>\n        </mat-form-field>\n          <br />\n\n          <div [style.margin-bottom.px]=\"10\">Activity level:</div> \n          <mat-radio-group name=\"activity\" formControlName=\"activity\">\n            <mat-radio-button value=\"sedentary\">\n              <span matTooltip=\"Office worker getting little or no exercise\" matTooltipShowDelay=\"400\">\n                Sedentary or light activity\n              </span>\n            </mat-radio-button>\n            <mat-radio-button value=\"moderately_active\">\n              <span matTooltip=\"Construction worker or person running one hour daily\" matTooltipShowDelay=\"400\">\n                Active or moderately active\n              </span>\n            </mat-radio-button>\n            <mat-radio-button value=\"vigorously_active\">\n              <span matTooltip=\"Agricultural worker (non mechanized) or person swimming two hours daily\" matTooltipShowDelay=\"400\">\n                Vigorously active\n              </span>\n            </mat-radio-button>\n          </mat-radio-group>\n          <mat-error *ngIf=\"editForm.controls.activity.errors?.required && editForm.controls.activity.untouched\">\n            <strong>*Select one</strong> of the activity levels\n          </mat-error>\n          <br />\n          \n          <div class=\"info-section-buttons-div\">\n            <button [disabled]=\"!editForm.valid\" mat-fab type=\"submit\" class=\"submit-info-section\">\n              <i class=\"material-icons\" [style.color]=\"'white'\">done</i>\n            </button>\n          </div> \n\n      </form>\n    </div>\n  </div>\n\n  <!-- ######## search food ########### -->\n  <div class=\"row\" [ngClass]=\"{'search-row': !showSearchInput, 'search-row-opened': showSearchInput}\">\n    <div class=\"col-sm-3 search-text\" style=\"display: flex; flex: 1;\">\n      <div style=\"display: flex; flex: 1; margin: auto;\">\n        <span matTooltip=\"search food\" (click)=\"onExpand()\" id=\"search-sign\" *ngIf=\"!showSearchInput\">\n          <i class=\"material-icons\">search</i>\n        </span>\n        <span matTooltip=\"hide search\" (click)=\"onHideSearch()\" id=\"search-sign\" *ngIf=\"showSearchInput\">\n          <i class=\"material-icons\">chevron_left</i>\n        </span>\n       \n        <div [hidden]=\"!showSearchInput\">\n            <input placeholder=\"Enter food\" class=\"input-food\" [(ngModel)]=\"searchText\" (input)=\"getMatchedGroceries()\"\n              keydownEvent (keydownEvent)=\"onKeyDown($event)\" (keydown.enter)=\"onEnter()\" #foodSearch>\n            <ul class=\"dropdown-list\">\n              <li class=\"dropdown-item\" *ngFor=\"let groc of matchedGroceries; let i=index\" \n              (click)=\"onItemClick(groc, i)\" clickOutside (clickOutside)=\"matchedGroceries=null;this.currentGrocerie=null;ind=-1\"\n              (mouseover)=\"onMouseOver(groc, i)\" (mouseout)=\"onMouseOut()\"\n              [ngClass]=\"{'dropdown-item-hover': ind==i}\">\n              {{groc.food}}\n              </li>\n            </ul>\n        </div>\n      </div>\n    </div>\n\n    <div  *ngIf=\"showSearchInput\">\n      <div style=\"display: flex; min-height: 60px;\">\n        <div *ngIf=\"!foodFound && searchPerformed\" style=\"margin: auto;\">\n          No result\n        </div>\n        <div class=\"table-responsive\" *ngIf=\"foodFound && searchPerformed\">\n          <table class=\"table\">\n            <thead class=\"thead-light\">\n              <tr>\n                <th scope=\"col\">grocerie</th>\n                <th scope=\"col\">energy</th>\n                <th scope=\"col\">proteins</th>\n                <th scope=\"col\">carbohydrates</th>\n                <th scope=\"col\">sugar</th>\n                <th scope=\"col\">fat</th>\n                <th scope=\"col\">saturated</th>\n                <th scope=\"col\">monounsaturated</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td scope=\"col\">{{searchedFood.food}}</td>\n                <td scope=\"col\">{{searchedFood.energy}}kcal</td>\n                <td scope=\"col\">{{searchedFood.proteins}}</td>\n                <td scope=\"col\">{{searchedFood.carbohydrates}}</td>\n                <td scope=\"col\">{{searchedFood.sugar}}</td>\n                <td scope=\"col\">{{searchedFood.fat}}</td>\n                <td scope=\"col\">{{searchedFood.saturated}}</td>\n                <td scope=\"col\">{{searchedFood.monounsaturated}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n\n      <div *ngIf=\"foodFound && searchPerformed\" class=\"gr\">\n        <span>*per 100g</span>\n      </div>\n    </div>\n\n  </div>\n\n  \n  <!-- ###### enter todays meals ########## , ############# todays meals table ######### --> \n  <div class=\"row\" *ngIf=\"providedInfo\">\n    <div class=\"col-md-8\">\n      <!-- enter meals -->\n      <app-meals #meals></app-meals>\n\n\n\n      <div *ngIf=\"!screenService.isLarge()\" style=\"margin-top:20px;\">\n          <!-- #################   breakfast    ####### -->\n          <ul class=\"meal-list\" *ngIf=\"meals.breakfastItems!=''\">\n            <div style=\"display:flex; justify-content:center; align-items:center;\">\n              <img src=\"../../assets/breakfast.jpg\" alt=\"Avatar\" class=\"img\"> \n              <h5 style=\"text-align:center; margin-left:5px;\"><strong class=\"side-bar\">Breakfast</strong></h5>\n            </div>\n            <li *ngFor=\"let breakf of meals.breakfastItems\" class=\"meal-item\">\n              <i class=\"material-icons\" [style.font-size.px]=\"14\">check</i>\n              <span class=\"side-bar\">{{breakf.food}} - {{breakf.quantity}}g</span>\n              <span (click)=\"removeFromArray(meals.breakfastItems, breakf)\" class=\"times\">&times;</span>\n            </li>\n            <div style=\"text-align:center; height:20px; margin:5px 0 5px 0\">\n              <span matTooltip=\"click to submit breakfast\">\n                <button type=\"button\" (click)=\"pushTodaysBreakfast(meals.breakfastItems); meals.breakfastItems=[]\"\n                class=\"btn btn-sm btn-success\">\n                  <i class=\"material-icons\" style=\"font-size:13px; font-weight:bold; vertical-align:middle\">check</i>\n                </button> \n              </span>\n            </div>\n          </ul>\n          <!-- #################   lunch    ####### -->\n          <ul class=\"meal-list\" *ngIf=\"meals.lunchItems!=''\">\n            <div style=\"display:flex; justify-content:center; align-items:center;\">\n              <img src=\"../../assets/lunch.jpg\" alt=\"Avatar\" class=\"img\"> \n              <h5 style=\"text-align:center; margin-left:5px;\"><strong class=\"side-bar\">Lunch</strong></h5>\n            </div>\n            <li *ngFor=\"let breakf of meals.lunchItems\" class=\"meal-item\">\n              <i class=\"material-icons\" [style.font-size.px]=\"14\">check</i>\n              <span class=\"side-bar\">{{breakf.food}} - {{breakf.quantity}}g</span>\n              <span (click)=\"removeFromArray(meals.lunchItems, breakf)\" class=\"times\">&times;</span>\n            </li>\n            <div style=\"text-align:center; height:20px; margin:5px 0 5px 0\">\n                <span matTooltip=\"click to submit lunch\">\n                  <button type=\"button\" (click)=\"pushTodaysLunch(meals.lunchItems); meals.lunchItems=[]\"\n                  class=\"btn btn-sm btn-success\">\n                    <i class=\"material-icons\" style=\"font-size:13px; font-weight:bold; vertical-align:middle\">check</i>\n                  </button> \n                </span>\n              </div> \n          </ul>\n          <!-- #################   dinner    ####### -->\n          <ul class=\"meal-list\" *ngIf=\"meals.dinnerItems!=''\">\n              <div style=\"display:flex; justify-content:center; align-items:center;\">\n                <img src=\"../../assets/dinner.jpg\" alt=\"Avatar\" class=\"img\"> \n                <h5 style=\"text-align:center; margin-left:5px;\"><strong class=\"side-bar\">Dinner</strong></h5>\n              </div>\n              <li *ngFor=\"let breakf of meals.dinnerItems\" class=\"meal-item\">\n                <i class=\"material-icons\" [style.font-size.px]=\"14\">check</i>\n                <span class=\"side-bar\">{{breakf.food}} - {{breakf.quantity}}g</span>\n                <span (click)=\"removeFromArray(meals.dinnerItems, breakf)\" class=\"times\">&times;</span>\n              </li>\n              <div style=\"text-align:center; height:20px; margin:5px 0 5px 0\">\n                  <span matTooltip=\"click to submit dinner\">\n                    <button type=\"button\" (click)=\"pushTodaysDinner(meals.dinnerItems); meals.dinnerItems=[]\"\n                    class=\"btn btn-sm btn-success\">\n                      <i class=\"material-icons\" style=\"font-size:13px; font-weight:bold; vertical-align:middle\">check</i>\n                    </button> \n                  </span>\n                </div> \n            </ul>\n          <!-- #################   additionally    ####### -->\n          <ul class=\"meal-list\" *ngIf=\"meals.additionallyItems!=''\">\n            <div style=\"display:flex; justify-content:center; align-items:center;\">\n              <img src=\"../../assets/additionally.jpg\" alt=\"Avatar\" class=\"img\"> \n              <h5 style=\"text-align:center; margin-left:5px;\"><strong class=\"side-bar\">Additionally</strong></h5>\n            </div>\n            <li *ngFor=\"let breakf of meals.additionallyItems\" class=\"meal-item\">\n              <i class=\"material-icons\" [style.font-size.px]=\"14\">check</i>\n              <span class=\"side-bar\">{{breakf.food}} - {{breakf.quantity}}g</span>\n              <span (click)=\"removeFromArray(meals.additionallyItems, breakf)\" class=\"times\">&times;</span>\n            </li>\n            <div style=\"text-align:center; height:20px; margin:5px 0 5px 0\">\n                <span matTooltip=\"click to submit additionally food\">\n                  <button type=\"button\" (click)=\"pushTodaysAdditionally(meals.additionallyItems); meals.additionallyItems=[]\"\n                  class=\"btn btn-sm btn-success\">\n                    <i class=\"material-icons\" style=\"font-size:13px; font-weight:bold; vertical-align:middle\">check</i>\n                  </button> \n                </span>\n              </div> \n          </ul>\n        </div>\n\n\n\n      <!-- entered todays meals -->\n      <h4 style=\"margin:15px 0 10px 5px\">\n          <i class=\"material-icons\" style=\"vertical-align:bottom;\">person</i>My todays meals:\n      </h4>\n      <div *ngIf=\"!gettingMealsDone\">\n        <span style=\"font-size:14px\">Getting meals info...</span>\n      </div>\n      <div *ngIf=\"todaysMealsEmpty && gettingMealsDone\">\n        <mat-list color=\"accent\">\n          <mat-list-item>(meals not entered yet)</mat-list-item>\n          <mat-list-item style=\"margin-top:-20px;\">\n              Calories to go:<strong style=\"margin-left:5px\">{{caloryLimit}}kcal</strong>\n          </mat-list-item>\n        </mat-list>\n      </div>\n      <div class=\"table-responsive\" *ngIf=\"!todaysMealsEmpty && gettingMealsDone\" \n      [ngClass]=\"{'table-width': screenService.isLarge()}\"> <!-- table width is crossing col-md-8 but i want it, because i dont want to save scroll on big screens -->\n        <table class=\"table table-hover\" style=\"min-width: 710px;\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\"></th> \n              <th scope=\"col\">grocerie</th>\n              <th scope=\"col\">quantity(g)</th>\n              <th scope=\"col\">energy(kcal)</th>\n              <th scope=\"col\">proteins(g)</th>\n              <th scope=\"col\">carbohydrates(g)</th>\n              <th scope=\"col\">sugar(g)</th>\n              <th scope=\"col\">fat(g)</th>\n              <th scope=\"col\">saturated(g)</th>\n              <th scope=\"col\">monounsaturated(g)</th>\n            </tr>\n          </thead>\n          <tbody *ngFor=\"let array of todaysMeals; let i = index\">\n            <tr id=\"meal-calculaton-table\">\n              <td colspan=\"10\"><strong>{{mealNames[i]}}</strong></td>\n            </tr>\n            <tr *ngFor=\"let item of array\">\n              <td scope=\"col\">\n                <div style=\"display:flex;\" *ngIf=\"!isEditing(item.id)\">\n                  <span matTooltip=\"edit\" id=\"edit-food\"\n                  (click)=\"editQuantity(item.food, item.quantity, item.id)\">\n                    <i class=\"material-icons\">edit</i>\n                  </span>\n                  <span matTooltip=\"delete\" id=\"delete-food\" \n                  (click)=\"deleteFood(item.food, item.quantity, i)\">\n                    <i class=\"material-icons\">delete</i>\n                  </span>\n                </div>\n                <div style=\"display:flex;\" *ngIf=\"isEditing(item.id)\">\n                  <span matTooltip=\"save\" id=\"done-food\"\n                  (click)=\"onSaveEditing(i)\">\n                    <i class=\"material-icons\">done</i>\n                  </span>\n                  <span matTooltip=\"cancel\" id=\"cancel-food\"\n                  (click)=\"onCancelEditing()\">\n                    <i class=\"material-icons\">cancel</i>\n                  </span>\n                </div>\n              </td>\n              <td scope=\"col\">{{item.food}}</td>\n              <td scope=\"col\">\n                <span *ngIf=\"!isEditing(item.id)\">{{item.quantity}}</span>\n                <input type=\"text\" [(ngModel)]=\"quantityToEdit\" name=\"quantityToEdit\" id=\"quantityToEdit\"\n                *ngIf=\"isEditing(item.id)\" size=\"8\" autocomplete=\"off\" maxlength=\"4\">\n                <span *ngIf=\"quantErrMsg!='' && isEditing(item.id)\" \n                style=\"color:red; font-size:10.5px\">{{quantErrMsg}}</span>\n              </td>\n              <td scope=\"col\">{{item.energy}}</td>\n              <td scope=\"col\">{{item.proteins}}</td>\n              <td scope=\"col\">{{item.carbohydrates}}</td>\n              <td scope=\"col\">{{item.sugar}}</td>\n              <td scope=\"col\">{{item.fat}}</td>\n              <td scope=\"col\">{{item.saturated}}</td>\n              <td scope=\"col\">{{item.monounsaturated}}</td>\n            </tr>\n            <tr>\n              <td><strong>&Sigma;</strong></td>\n              <td scope=\"col\"></td>\n              <td scope=\"col\"></td>\n              <td scope=\"col\">{{todaysInfos[i].energy}}</td>\n              <td scope=\"col\">{{todaysInfos[i].proteins}}</td>\n              <td scope=\"col\">{{todaysInfos[i].carbohydrates}}</td>\n              <td scope=\"col\">{{todaysInfos[i].sugar}}</td>\n              <td scope=\"col\">{{todaysInfos[i].fat}}</td>\n              <td scope=\"col\">{{todaysInfos[i].saturated}}</td>\n              <td scope=\"col\">{{todaysInfos[i].monounsaturated}}</td>\n            </tr>\n          </tbody>\n          <tr id=\"row-total\">\n              <td><strong>TOTAL</strong></td>\n              <td scope=\"col\"></td>\n              <td scope=\"col\"></td>\n              <td scope=\"col\"><strong>{{totalInfo.energy}}</strong></td>\n              <td scope=\"col\"><strong>{{totalInfo.proteins}}</strong></td>\n              <td scope=\"col\"><strong>{{totalInfo.carbohydrates}}</strong></td>\n              <td scope=\"col\"><strong>{{totalInfo.sugar}}</strong></td>\n              <td scope=\"col\"><strong>{{totalInfo.fat}}</strong></td>\n              <td scope=\"col\"><strong>{{totalInfo.saturated}}</strong></td>\n              <td scope=\"col\"><strong>{{totalInfo.monounsaturated}}</strong></td>\n          </tr>\n        </table>\n      </div>\n\n    </div>\n    <div class=\"col-md-1\"></div>\n    <div class=\"col-md-3\" *ngIf=\"screenService.isLarge()\">\n      <!-- #################   breakfast    ####### -->\n      <ul class=\"meal-list\" *ngIf=\"meals.breakfastItems!=''\">\n        <div style=\"display:flex; justify-content:center; align-items:center;\">\n          <img src=\"../../assets/breakfast.jpg\" alt=\"Avatar\" class=\"img\"> \n          <h5 style=\"text-align:center; margin-left:5px;\"><strong class=\"side-bar\">Breakfast</strong></h5>\n        </div>\n        <li *ngFor=\"let breakf of meals.breakfastItems\" class=\"meal-item\">\n          <i class=\"material-icons\" [style.font-size.px]=\"14\">check</i>\n          <span class=\"side-bar\">{{breakf.food}} - {{breakf.quantity}}g</span>\n          <span (click)=\"removeFromArray(meals.breakfastItems, breakf)\" class=\"times\">&times;</span>\n        </li>\n        <div style=\"text-align:center; height:20px; margin:5px 0 5px 0\">\n          <span matTooltip=\"click to submit breakfast\">\n            <button type=\"button\" (click)=\"pushTodaysBreakfast(meals.breakfastItems); meals.breakfastItems=[]\"\n            class=\"btn btn-sm btn-success\">\n              <i class=\"material-icons\" style=\"font-size:13px; font-weight:bold; vertical-align:middle\">check</i>\n            </button> \n          </span>\n        </div>\n      </ul>\n      <!-- #################   lunch    ####### -->\n      <ul class=\"meal-list\" *ngIf=\"meals.lunchItems!=''\">\n        <div style=\"display:flex; justify-content:center; align-items:center;\">\n          <img src=\"../../assets/lunch.jpg\" alt=\"Avatar\" class=\"img\"> \n          <h5 style=\"text-align:center; margin-left:5px;\"><strong class=\"side-bar\">Lunch</strong></h5>\n        </div>\n        <li *ngFor=\"let breakf of meals.lunchItems\" class=\"meal-item\">\n          <i class=\"material-icons\" [style.font-size.px]=\"14\">check</i>\n          <span class=\"side-bar\">{{breakf.food}} - {{breakf.quantity}}g</span>\n          <span (click)=\"removeFromArray(meals.lunchItems, breakf)\" class=\"times\">&times;</span>\n        </li>\n        <div style=\"text-align:center; height:20px; margin:5px 0 5px 0\">\n            <span matTooltip=\"click to submit lunch\">\n              <button type=\"button\" (click)=\"pushTodaysLunch(meals.lunchItems); meals.lunchItems=[]\"\n              class=\"btn btn-sm btn-success\">\n                <i class=\"material-icons\" style=\"font-size:13px; font-weight:bold; vertical-align:middle\">check</i>\n              </button> \n            </span>\n          </div> \n      </ul>\n      <!-- #################   dinner    ####### -->\n      <ul class=\"meal-list\" *ngIf=\"meals.dinnerItems!=''\">\n          <div style=\"display:flex; justify-content:center; align-items:center;\">\n            <img src=\"../../assets/dinner.jpg\" alt=\"Avatar\" class=\"img\"> \n            <h5 style=\"text-align:center; margin-left:5px;\"><strong class=\"side-bar\">Dinner</strong></h5>\n          </div>\n          <li *ngFor=\"let breakf of meals.dinnerItems\" class=\"meal-item\">\n            <i class=\"material-icons\" [style.font-size.px]=\"14\">check</i>\n            <span class=\"side-bar\">{{breakf.food}} - {{breakf.quantity}}g</span>\n            <span (click)=\"removeFromArray(meals.dinnerItems, breakf)\" class=\"times\">&times;</span>\n          </li>\n          <div style=\"text-align:center; height:20px; margin:5px 0 5px 0\">\n              <span matTooltip=\"click to submit dinner\">\n                <button type=\"button\" (click)=\"pushTodaysDinner(meals.dinnerItems); meals.dinnerItems=[]\"\n                class=\"btn btn-sm btn-success\">\n                  <i class=\"material-icons\" style=\"font-size:13px; font-weight:bold; vertical-align:middle\">check</i>\n                </button> \n              </span>\n            </div> \n        </ul>\n      <!-- #################   additionally    ####### -->\n      <ul class=\"meal-list\" *ngIf=\"meals.additionallyItems!=''\">\n        <div style=\"display:flex; justify-content:center; align-items:center;\">\n          <img src=\"../../assets/additionally.jpg\" alt=\"Avatar\" class=\"img\"> \n          <h5 style=\"text-align:center; margin-left:5px;\"><strong class=\"side-bar\">Additionally</strong></h5>\n        </div>\n        <li *ngFor=\"let breakf of meals.additionallyItems\" class=\"meal-item\">\n          <i class=\"material-icons\" [style.font-size.px]=\"14\">check</i>\n          <span class=\"side-bar\">{{breakf.food}} - {{breakf.quantity}}g</span>\n          <span (click)=\"removeFromArray(meals.additionallyItems, breakf)\" class=\"times\">&times;</span>\n        </li>\n        <div style=\"text-align:center; height:20px; margin:5px 0 5px 0\">\n            <span matTooltip=\"click to submit additionally food\">\n              <button type=\"button\" (click)=\"pushTodaysAdditionally(meals.additionallyItems); meals.additionallyItems=[]\"\n              class=\"btn btn-sm btn-success\">\n                <i class=\"material-icons\" style=\"font-size:13px; font-weight:bold; vertical-align:middle\">check</i>\n              </button> \n            </span>\n          </div> \n      </ul>\n    </div>\n  </div>\n\n  <!-- ########## tables of meals for earlier days ############ -->\n  <div class=\"row\" *ngIf=\"providedInfo\" style=\"margin:30px 0 0 0\">\n    <div class=\"row\">\n      <div class=\"col-md-9\">\n        <h4>{{periodName()}}</h4>\n      </div>\n      <div class=\"col-md-3\">\n          <mat-form-field class=\"info-form-field\">\n              <mat-select placeholder=\"Select period\" name=\"period\" [(ngModel)]=\"period\" [disabled]=\"!checkboxPeriod\">\n                <mat-option [value]=\"'3days'\">last 3 days</mat-option>\n                <mat-option [value]=\"'week'\">this week</mat-option>\n                <mat-option [value]=\"'month'\">this month</mat-option>\n              </mat-select>\n          </mat-form-field>\n      </div>\n    </div>\n    {{date}}\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <app-earlier-days [period]=\"period\" [caloryLimit]=\"caloryLimit\"></app-earlier-days>\n      </div>\n    </div>\n  </div>\n\n  \n</div>"

/***/ }),

/***/ "./src/app/components/nutrition-manager/nutrition-manager.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/nutrition-manager/nutrition-manager.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NutritionManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionManagerComponent", function() { return NutritionManagerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_nutrition_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/nutrition.service */ "./src/app/services/nutrition.service.ts");
/* harmony import */ var src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/screen.service */ "./src/app/services/screen.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var NutritionManagerComponent = /** @class */ (function () {
    function NutritionManagerComponent(fb, nutritionService, screenService, snackBar, http, route) {
        this.fb = fb;
        this.nutritionService = nutritionService;
        this.screenService = screenService;
        this.snackBar = snackBar;
        this.http = http;
        this.route = route;
        this.showInfoSection = false;
        this.checkedIfprovidedInfo = false; // false while checking to database if user provided info
        this.showEditSection = false;
        this.calculating = false;
        this.caloryLimit = null;
        this.matchedGroceries = null;
        this.searchText = '';
        this.ind = -1;
        this.currentGrocerie = null;
        this.todaysMealsEmpty = true;
        this.todaysBreakfast = null;
        this.todaysLunch = null;
        this.todaysDinner = null;
        this.todaysAdditionally = null;
        this.todaysMeals = [];
        this.todaysInfos = [];
        this.mealNames = ['Breakfast', 'Lunch', 'Dinner', 'Additionally'];
        this.gettingMealsDone = false; // false while getting information about meals from database(no matter meals exist or not)
        this.itemForEdit = { food: '', quantity: '', id: '' };
        this.quantErrMsg = '';
        this.showSearchInput = false;
        this.foodFound = false;
        this.searchPerformed = false;
        this.searchedFood = null;
        this.lastChoice = '3days';
        this.checkboxDate = false;
        this.checkboxPeriod = true;
        this.createForm();
        this.createEditForm();
    }
    NutritionManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParamMap // to remember which period filter was chosen
            .subscribe(function (params) {
            _this.period = params.get('period') || '3days';
        });
        this.setValues();
        this.getMealsForDate(new Date());
    };
    // snack bar messages
    NutritionManagerComponent.prototype.openSnackBar = function (message) {
        this.snackBar.open(message, '', { duration: 2000 });
    };
    // validate height
    NutritionManagerComponent.prototype.validateHeight = function (control) {
        var regexp = /^1\d{2}$|^20\d$|^21\d$|^22\d$|^23\d$|^24\d$/;
        if (regexp.test(control.value)) {
            return null;
        }
        else {
            return { 'validateHeight': true };
        }
    };
    // vaidate weight
    NutritionManagerComponent.prototype.validateWeight = function (control) {
        var regexp = /^3\d{1}$|^4\d{1}$|^5\d{1}$|^6\d{1}$|^7\d{1}$|^8\d{1}$|^9\d{1}$|^1\d{2}$|^2\d{2}$/;
        if (regexp.test(control.value)) {
            return null;
        }
        else {
            return { 'validateWeight': true };
        }
    };
    // validate age
    NutritionManagerComponent.prototype.validateAge = function (control) {
        var regexp = /^\d{1,2}$|^10\d{1}$|^11\d{1}$/;
        if (regexp.test(control.value)) {
            return null;
        }
        else {
            return { 'validateAge': true };
        }
    };
    // create reactive form
    NutritionManagerComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validateAge]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validateHeight]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validateWeight]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            activity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    // create reactive edit form
    NutritionManagerComponent.prototype.createEditForm = function () {
        this.editForm = this.fb.group({
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validateAge]),
            height: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validateHeight]),
            weight: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validateWeight]),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            activity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    };
    // submit user's physical info (POST)
    NutritionManagerComponent.prototype.onSubmit = function () {
        var _this = this;
        var info = {
            age: this.form.get('age').value,
            height: this.form.get('height').value,
            weight: this.form.get('weight').value,
            gender: this.form.get('gender').value,
            activity: this.form.get('activity').value
        };
        this.nutritionService.addPhysicalInfo(info)
            .subscribe(function (data) {
            if (!data.success) {
                _this.openSnackBar('Something went wrong..');
            }
            else {
                _this.calculating = true;
                setTimeout(function () {
                    _this.setValues();
                    _this.calculating = false;
                    _this.openSnackBar('Successfully added physical info!');
                }, 2000);
            }
        });
    };
    // submit EDIT user's physical info (PUT)
    NutritionManagerComponent.prototype.onSubmitEdit = function () {
        var _this = this;
        var editedInfo = {
            age: this.editForm.get('age').value,
            height: this.editForm.get('height').value,
            weight: this.editForm.get('weight').value,
            gender: this.editForm.get('gender').value,
            activity: this.editForm.get('activity').value
        };
        this.nutritionService.editInfo(editedInfo)
            .subscribe(function (data) {
            if (!data.success) {
                _this.openSnackBar(data.msg);
            }
            else {
                _this.openSnackBar(data.msg);
                _this.showEditSection = false;
                _this.setValues();
            }
        });
    };
    // set values from database to edit section
    NutritionManagerComponent.prototype.setValues = function () {
        var _this = this;
        this.nutritionService.checkForInfo()
            .subscribe(function (data) {
            if (!data.success) {
                _this.checkedIfprovidedInfo = true;
                _this.providedInfo = false;
            }
            else {
                _this.checkedIfprovidedInfo = true;
                _this.providedInfo = true;
                _this.caloryLimit = Math.round(Number(data.info.calories));
                _this.editForm.setValue({
                    age: data.info.age,
                    height: data.info.height,
                    weight: data.info.weight,
                    gender: data.info.gender,
                    activity: data.info.activity
                });
            }
        });
    };
    // convert date to string in form of dd-mm-yyyy (adding one to
    // month to get real month, because of zero-based months in JS)
    NutritionManagerComponent.prototype.dateToString = function (date) {
        var d = date.getDate();
        var m = date.getMonth() + 1;
        var y = date.getFullYear();
        if (d <= 9) {
            d = "0" + d;
        }
        if (m <= 9) {
            m = "0" + m;
        }
        var dateString = d + "-" + m + "-" + y;
        return dateString;
    };
    // remove item from array of meals (universal)
    NutritionManagerComponent.prototype.removeFromArray = function (array, arrayItem) {
        var ind = array.findIndex(function (item) { return (item.food == arrayItem.food && item.quantity == arrayItem.quantity); });
        array.splice(ind, 1);
    };
    // get all matched groceries
    NutritionManagerComponent.prototype.getMatchedGroceries = function () {
        var _this = this;
        var regexp = /^\s+$/;
        if (this.searchText === '' || regexp.test(this.searchText)) {
            this.matchedGroceries = null;
        }
        else {
            this.ind = -1;
            this.currentGrocerie = null;
            this.nutritionService.getMathedGroceries(this.searchText)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.matchedGroceries = null;
                }
                else {
                    _this.matchedGroceries = data.groceries;
                }
            });
        }
    };
    // on key down in search field
    NutritionManagerComponent.prototype.onKeyDown = function (event) {
        if (this.matchedGroceries != null) {
            if (event === 'downArrow') {
                if (this.ind == this.matchedGroceries.length - 1) {
                    this.ind = 0;
                }
                else {
                    ++this.ind;
                }
                if (this.ind > -1 && this.ind < this.matchedGroceries.length) {
                    this.currentGrocerie = this.matchedGroceries[this.ind];
                }
            }
            if (event === 'upArrow') {
                if (this.ind == -1 || this.ind == 0) {
                    this.ind = this.matchedGroceries.length - 1;
                }
                else {
                    --this.ind;
                }
                if (this.ind > -1 && this.ind < this.matchedGroceries.length) {
                    this.currentGrocerie = this.matchedGroceries[this.ind];
                }
            }
        }
    };
    NutritionManagerComponent.prototype.onEnter = function () {
        var _this = this;
        if (this.currentGrocerie != null) {
            this.searchText = this.currentGrocerie.food;
        }
        this.matchedGroceries = null;
        this.ind = -1;
        this.currentGrocerie = null;
        var regexp = /^\s+$/;
        if (this.searchText != '' && !regexp.test(this.searchText)) {
            this.nutritionService.searchGroceries(this.searchText)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.searchPerformed = true;
                    _this.foodFound = false;
                }
                else {
                    _this.searchPerformed = true;
                    _this.foodFound = true;
                    _this.searchedFood = data.grocerie;
                }
            });
        }
    };
    NutritionManagerComponent.prototype.onItemClick = function (grocerie, index) {
        this.searchText = this.currentGrocerie.food;
        this.matchedGroceries = null;
        this.ind = -1;
    };
    NutritionManagerComponent.prototype.onMouseOver = function (groc, ind) {
        this.currentGrocerie = groc;
        this.ind = ind;
    };
    NutritionManagerComponent.prototype.onMouseOut = function () {
        this.currentGrocerie = null;
        this.ind = -1;
    };
    // push todays breakfast to database
    NutritionManagerComponent.prototype.pushTodaysBreakfast = function (todaysBreakfast) {
        var _this = this;
        var breakfast = {
            date: this.dateToString(new Date()),
            items: todaysBreakfast,
            meal: 'breakfast'
        };
        this.nutritionService.pushTodaysMeal(breakfast)
            .subscribe(function (data) {
            if (!data.success) {
                _this.openSnackBar(data.msg);
            }
            else {
                todaysBreakfast = null;
                _this.openSnackBar(data.msg);
                _this.getMealsForDate(new Date());
            }
        });
    };
    // push todays lunch to database
    NutritionManagerComponent.prototype.pushTodaysLunch = function (todaysLunch) {
        var _this = this;
        var lunch = {
            date: this.dateToString(new Date()),
            items: todaysLunch,
            meal: 'lunch'
        };
        this.nutritionService.pushTodaysMeal(lunch)
            .subscribe(function (data) {
            if (!data.success) {
                _this.openSnackBar(data.msg);
            }
            else {
                todaysLunch = null;
                _this.openSnackBar(data.msg);
                _this.getMealsForDate(new Date());
            }
        });
    };
    // push todays dinner to database
    NutritionManagerComponent.prototype.pushTodaysDinner = function (todaysDinner) {
        var _this = this;
        var dinner = {
            date: this.dateToString(new Date()),
            items: todaysDinner,
            meal: 'dinner'
        };
        this.nutritionService.pushTodaysMeal(dinner)
            .subscribe(function (data) {
            if (!data.success) {
                _this.openSnackBar(data.msg);
            }
            else {
                todaysDinner = null;
                _this.openSnackBar(data.msg);
                _this.getMealsForDate(new Date());
            }
        });
    };
    // push todays additionally to database
    NutritionManagerComponent.prototype.pushTodaysAdditionally = function (todaysAdditionally) {
        var _this = this;
        var additionally = {
            date: this.dateToString(new Date()),
            items: todaysAdditionally,
            meal: 'additionally'
        };
        this.nutritionService.pushTodaysMeal(additionally)
            .subscribe(function (data) {
            if (!data.success) {
                _this.openSnackBar(data.msg);
            }
            else {
                todaysAdditionally = null;
                _this.openSnackBar(data.msg);
                _this.getMealsForDate(new Date());
            }
        });
    };
    // get meals for specific date $$$$$$$(pass date in 'date' format, and function converts it to string)$$$$$$$$
    NutritionManagerComponent.prototype.getMealsForDate = function (date) {
        var _this = this;
        this.nutritionService.getMealsInfo(this.dateToString(date))
            .subscribe(function (data) {
            if (!data.success) {
                _this.gettingMealsDone = true;
                _this.todaysMealsEmpty = true;
                _this.totalInfo = data.totalInfo;
            }
            else {
                _this.gettingMealsDone = true;
                _this.todaysMealsEmpty = false;
                _this.todaysMeals = data.mealsInfo;
                _this.todaysInfos = data.sumInfo;
                _this.totalInfo = data.totalInfo;
            }
        });
    };
    // delete food for specific meal, for today ########## getMealsForDate(this.dateToString(new Date())); **
    NutritionManagerComponent.prototype.deleteFood = function (food, quant, ind) {
        var _this = this;
        var date = this.dateToString(new Date());
        this.nutritionService.deleteFood(food, quant, this.mealNames[ind], date)
            .subscribe(function (data) {
            if (!data.success) {
                console.log(data.msg);
            }
            else {
                _this.deleteMeal(date); // run cleaner
                _this.getMealsForDate(new Date()); // <-- **
                console.log(data.msg);
            }
        });
    };
    // check is all meals are empty after deleting food from some meal, and if they are empty, delete meal document
    NutritionManagerComponent.prototype.deleteMeal = function (date) {
        this.nutritionService.deleteMeal(date)
            .subscribe(function (data) {
            if (!data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data.msg);
            }
        });
    };
    // when edit button clicked
    NutritionManagerComponent.prototype.editQuantity = function (food, quantity, id) {
        this.quantErrMsg = '';
        this.itemForEdit.food = food;
        this.itemForEdit.quantity = quantity;
        this.itemForEdit.id = id;
        //this.editingQuantity = true;
        this.quantityToEdit = quantity;
    };
    // check if this item is clicked to be edited
    NutritionManagerComponent.prototype.isEditing = function (id) {
        if (this.itemForEdit.id == id) {
            return true;
        }
        else {
            return false;
        }
    };
    // on cancel editing
    NutritionManagerComponent.prototype.onCancelEditing = function () {
        this.quantErrMsg = '';
        this.itemForEdit.food = '';
        this.itemForEdit.quantity = '';
        this.itemForEdit.id = '';
    };
    // on save editing
    NutritionManagerComponent.prototype.onSaveEditing = function (i) {
        var _this = this;
        var num = Number(this.quantityToEdit);
        if (this.quantityToEdit == '' || num < 1 || num > 5000) {
            this.quantErrMsg = '*Please enter valid quantity in \'g\'';
        }
        else {
            this.quantErrMsg = '';
            var object = {
                date: this.dateToString(new Date()),
                food: this.itemForEdit.food,
                quant: this.itemForEdit.quantity,
                newQuant: this.quantityToEdit,
                mealName: this.mealNames[i]
            };
            this.nutritionService.updateSingleQuantity(object)
                .subscribe(function (data) {
                if (!data.success) {
                    _this.itemForEdit.food = '';
                    _this.itemForEdit.quantity = '';
                    _this.itemForEdit.id = '';
                }
                else {
                    setTimeout(function () {
                        _this.itemForEdit.food = '';
                        _this.itemForEdit.quantity = '';
                        _this.itemForEdit.id = '';
                    }, 300); // put inside setTimeout, because if put only after this.getMealsForDate(new Date()) , it will be 
                    // executed before update(getMealsForDate is asynchronous) and I dont want it executed first
                    _this.getMealsForDate(new Date()); // get all info again
                }
            });
        }
    };
    // prepare array of dates for which we want to get info
    // today not included in dates which are sent 
    NutritionManagerComponent.prototype.calculateDates = function () {
        var dates = [];
        var monthsAfter31 = [1, 3, 5, 7, 8, 10];
        var monthsAfter30 = [4, 6, 9, 11];
        var day = (new Date()).getDay();
        var date = (new Date()).getDate();
        var month = (new Date()).getMonth();
        var year = (new Date()).getFullYear();
        var numberOfDays;
        if (this.period == '3days') {
            numberOfDays = 3;
        }
        else if (this.period == 'week') {
            numberOfDays = day - 1; // dont want today so -1
        }
        else if (this.period == 'month') {
            numberOfDays = date - 1; // dont want today so -1
        }
        var count = 1;
        while (count <= numberOfDays) {
            if (date == 1) {
                if (monthsAfter31.includes(month)) {
                    date = 31;
                    month = month - 1;
                }
                else if (monthsAfter30.includes(month)) {
                    date = 30;
                    month = month - 1;
                }
                else if (month == 2) {
                    date = 28;
                    month = month - 1;
                }
                else if (month == 0) {
                    date = 31;
                    month = 11;
                    year = year - 1;
                }
            }
            else {
                date = date - 1;
            }
            var month1 = month + 1; // with this +1 I get correct date
            var s = new Date(month1 + ' ' + date + ',' + year + ' 02:00:00'); // only for check
            dates.push(this.dateToString(new Date(month1 + ' ' + date + ',' + year + ' 02:00:00')));
            count++;
        }
    };
    // period name just for the template
    NutritionManagerComponent.prototype.periodName = function () {
        switch (this.period) {
            case '3days':
                return 'My meals for: last 3 days';
            case 'week':
                return 'My meals for: this week';
            case 'month':
                return 'My meals for: this month';
            default: return '(error)';
        }
    };
    // on hide search
    NutritionManagerComponent.prototype.onHideSearch = function () {
        this.showSearchInput = false;
        this.searchText = '';
        this.currentGrocerie = null;
        this.ind = -1;
        this.searchPerformed = false;
        this.searchedFood = null;
    };
    // set focus on expand search div
    NutritionManagerComponent.prototype.onExpand = function () {
        var _this = this;
        this.showSearchInput = true;
        setTimeout(function () {
            _this.foodSearch.nativeElement.focus();
        }, 100); // put a little timeout, because immediately template reference variable is not visible
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('quantEditing'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NutritionManagerComponent.prototype, "quantEditing", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('foodSearch'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], NutritionManagerComponent.prototype, "foodSearch", void 0);
    NutritionManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nutrition-manager',
            template: __webpack_require__(/*! ./nutrition-manager.component.html */ "./src/app/components/nutrition-manager/nutrition-manager.component.html"),
            styles: [__webpack_require__(/*! ./nutrition-manager.component.css */ "./src/app/components/nutrition-manager/nutrition-manager.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            src_app_services_nutrition_service__WEBPACK_IMPORTED_MODULE_2__["NutritionService"],
            src_app_services_screen_service__WEBPACK_IMPORTED_MODULE_3__["ScreenService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_http__WEBPACK_IMPORTED_MODULE_5__["Http"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]])
    ], NutritionManagerComponent);
    return NutritionManagerComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group {\r\n    z-index: 0;\r\n}\r\n\r\n.table {\r\n    border: 1px solid #dddddd;\r\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">Profile Page</h2>\n  <ul class=\"list-group\">\n    <li *ngIf=\"user?.username\" class=\"list-group-item\">Username: {{user.username}}</li>\n    <li *ngIf=\"user?.email\" class=\"list-group-item\">E-mail: {{user.email}}</li>\n  </ul>\n  <div class=\"table-responsive\" *ngIf=\"usersToApprove\">\n    <h4 [style.margin-bottom.px]=\"20\">Approve users registration:</h4>\n    <table class=\"table\">\n      <tr>\n        <th>Username</th>\n        <th>E-mail</th>\n        <th>Is approved</th>\n        <th></th>\n      </tr>\n      <tr *ngFor=\"let user of usersToApprove\">\n        <td>{{user.username}}</td>\n        <td>{{user.email}}</td>\n        <td>{{user.approved}}</td>\n        <td>\n          <button class=\"btn btn-sm btn-success\" (click)=\"approveRegistrationRequest(user._id)\">Approve</button>\n          <button class=\"btn btn-sm btn-danger\" (click)=\"deleteRequest(user._id)\">Delete</button>\n        </td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages/module/flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, flashMessages) {
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.usersToApprove = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile()
            .subscribe(function (profile) {
            _this.user = profile.user;
            if (profile.user.isAdmin) {
                console.log('user is admin');
                _this.getNotApprovedProfiles();
            }
        });
    };
    // Get Not Approved Profiles
    ProfileComponent.prototype.getNotApprovedProfiles = function () {
        var _this = this;
        this.authService.getNotApprovedProfiles()
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show('Can not get profiles', { cssClass: 'alert-danger', timeout: 1200 });
            }
            else {
                _this.usersToApprove = data.users;
            }
        });
    };
    // Approve Request
    ProfileComponent.prototype.approveRegistrationRequest = function (usersId) {
        var _this = this;
        var id = {
            usersId: usersId
        };
        this.authService.approveRequest(id)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-danger', timeout: 1200 });
            }
            else {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 1000 });
                _this.getNotApprovedProfiles();
            }
        });
    };
    // Delete Request
    ProfileComponent.prototype.deleteRequest = function (usersId) {
        var _this = this;
        this.authService.deleteRequest(usersId)
            .subscribe(function (data) {
            if (!data.success) {
                _this.flashMessages.show(data.msg, { cssclass: 'alert-danger', timeout: 1200 });
            }
            else {
                _this.flashMessages.show(data.msg, { cssClass: 'alert-success', timeout: 1000 });
                _this.getNotApprovedProfiles();
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    background-image: url('register_pic.jpg');\r\n    width: 100vw;\r\n    height: 100vh;\r\n    background-position: center center;\r\n    background-size: cover;\r\n}\r\n\r\n.form {\r\n    width: 300px;\r\n    background-color: rgb(216, 213, 213);\r\n    border-radius: 20px;\r\n    opacity: .96;\r\n}\r\n\r\n.heading-text {\r\n    text-align: center;\r\n    color: rgb(124, 124, 124);\r\n}\r\n\r\n.submit-btn {\r\n    margin-top: 25px;\r\n    text-align: center;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.form-group {\r\n    color: rgb(124, 124, 124);\r\n    margin: 0 20px 0 20px;\r\n}\r\n\r\nspan {\r\n    color: rgb(124, 124, 124);\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    margin-left: 6px;\r\n    padding-left: 0;\r\n}\r\n\r\n.error-message {\r\n    background-color: rgb(231, 136, 136);\r\n    color: rgb(201, 26, 26);\r\n    min-width: 400px;\r\n    text-align: center;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    font-size: 20px;\r\n    border-radius: 5px;\r\n    opacity: .98;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.glyphicon-remove {\r\n    color: rgb(245, 68, 68);\r\n}\r\n\r\n.glyphicon-ok {\r\n    color: rgb(29, 153, 29);\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"errorMsg\" class=\"error-message\">\n  {{errorMsg}}\n</div>\n\n<div *ngIf=\"!submitted\" class=\"form\">\n  <span class=\"heading-text\"><h1 [style.font-weight]=\"600\">Register</h1></span>\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"form-group\">\n      <label class=\"center-block\">E-mail:</label>\n      <div [ngClass]=\"{'has-error': (form.controls.email.errors && form.controls.email.dirty) \n                                    || (!emailValid && form.controls.email.dirty), \n        'has-success': !form.controls.email.errors && emailValid}\">\n        <input class=\"form-control\" placeholder=\"*Enter e-mail\" name=\"email\" formControlName=\"email\" \n          (input)=\"checkEmail()\">\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.email.errors?.required && form.controls.email.dirty\">\n              <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> E-mail is required\n          </li>\n          <li *ngIf=\"(form.controls.email.errors?.minlength || form.controls.email.errors?.maxlength) && form.controls.email.dirty\">\n              <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span>\n              E-mail must be between 5 and 30 characters long\n          </li>\n          <li *ngIf=\"form.controls.email.errors?.validateEmail && form.controls.email.dirty && !form.controls.email.errors?.required\">\n              <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span>\n              E-mail must be in a valid format\n          </li>\n          <li *ngIf=\"!form.controls.email.errors && emailMsg\">\n            <span [ngClass]=\"{'glyphicon glyphicon-ok': emailValid}\"></span>\n            <span [ngClass]=\"{'glyphicon glyphicon-remove': !emailValid}\"></span>\n            {{emailMsg}}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"center-block\">Username:</label>\n      <div [ngClass]=\"{'has-error': (form.controls.username.errors && form.controls.username.dirty)\n                                    || (!usernameValid && form.controls.username.dirty), \n      'has-success': !form.controls.username.errors && usernameValid}\">\n        <input class=\"form-control\" placeholder=\"*Enter username\" name=\"username\" formControlName=\"username\"\n          (input)=\"checkUsername()\">\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.username.errors?.required && form.controls.username.dirty\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> Username is required\n          </li>\n          <li *ngIf=\"(form.controls.username.errors?.minlength || form.controls.username.errors?.maxlength) \n              && form.controls.username.dirty\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n            Username must be between 5 and 30 characters long\n          </li>\n          <li *ngIf=\"form.controls.username.errors?.validateUsername && form.controls.username.dirty \n                      && !form.controls.username.errors?.required\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n            Username can't contain special characters\n          </li>\n          <li *ngIf=\"!form.controls.username.errors && usernameMsg\">\n            <span [ngClass]=\"{'glyphicon glyphicon-ok': usernameValid}\"></span>\n            <span [ngClass]=\"{'glyphicon glyphicon-remove': !usernameValid}\"></span>\n            {{usernameMsg}}\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"center-block\">Password:</label>\n      <div [ngClass]=\"{'has-error': (form.controls.password.errors && form.controls.password.dirty), \n      'has-success': !(form.controls.password.errors)}\">\n        <input class=\"form-control\" placeholder=\"*Enter password\" name=\"password\" formControlName=\"password\">\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.password.errors?.required && form.controls.password.dirty\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> Password is required\n          </li>\n          <li *ngIf=\"(form.controls.password.errors?.minlength || form.controls.password.errors?.maxlength) \n              && form.controls.password.dirty\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span> \n            Password must be at least 8, but not more than 30 characters long\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"form-group\">\n      <label class=\"center-block\">Confirm password:</label>\n      <div [ngClass]=\"{'has-error': (form.controls.confirm.errors && form.controls.confirm.dirty)\n                      || (form.errors?.matchingPasswords && form.controls.confirm.dirty) ,\n        'has-success': !form.controls.confirm.errors && !form.errors?.matchingPasswords}\">\n        <input class=\"form-control\" placeholder=\"*Confirm password\" name=\"confirm\" \n          formControlName=\"confirm\">\n        <ul class=\"help-block\">\n          <li *ngIf=\"form.controls.confirm.errors?.required && form.controls.confirm.dirty\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span>\n            This field is required\n          </li>\n          <li *ngIf=\"form.errors?.matchingPasswords && form.controls.confirm.dirty\">\n            <span class=\"glyphicon glyphicon-exclamation-sign\" [style.color]=\"'rgb(245, 68, 68)'\"></span>\n            These passwords don't match\n          </li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"submit-btn\">\n      <input [disabled]=\"!form.valid || submitted || !emailValid || !usernameValid\" \n        type=\"submit\" class=\"btn btn-primary\" value=\"Register me!\">\n    </div>\n    \n  </form>\n</div>\n\n<div *ngIf=\"submitted\" [style.color]=\"'white'\" [style.font-size.px]=\"25\">\n  Just a few seconds, please...\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.errorMsg = null;
        this.submitted = false;
        this.createForm();
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    // Regexp Email Validation 
    RegisterComponent.prototype.validateEmail = function (control) {
        var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regexp.test(control.value)) {
            return null;
        }
        else {
            return { 'validateEmail': true };
        }
    };
    // Validate Username
    RegisterComponent.prototype.validateUsername = function (control) {
        var regexp = new RegExp(/^[a-zA-Z0-9]+$/);
        if (regexp.test(control.value)) {
            return null;
        }
        else {
            return { 'validateUsername': true };
        }
    };
    RegisterComponent.prototype.createForm = function () {
        this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), this.validateEmail]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30), this.validateUsername]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)]],
            confirm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        }, { validator: this.matchingPasswords('password', 'confirm') });
    };
    // Matching Password and Confirm Password
    RegisterComponent.prototype.matchingPasswords = function (password, confirm) {
        return function (group) {
            if (group.controls[password].value === group.controls[confirm].value) {
                return null;
            }
            else {
                return { 'matchingPasswords': true };
            }
        };
    };
    // Check if E-mail Exists in DB already
    RegisterComponent.prototype.checkEmail = function () {
        var _this = this;
        var email = this.form.get('email').value;
        this.authService.checkEmail(email)
            .subscribe(function (data) {
            if (data.success) {
                _this.emailValid = true;
                _this.emailMsg = data.msg;
            }
            else {
                _this.emailValid = false;
                _this.emailMsg = data.msg;
            }
        });
    };
    // Check if Username exists in DB already
    RegisterComponent.prototype.checkUsername = function () {
        var _this = this;
        var username = this.form.get('username').value;
        this.authService.checkUsername(username)
            .subscribe(function (data) {
            if (data.success) {
                _this.usernameValid = true;
                _this.usernameMsg = data.msg;
            }
            else {
                _this.usernameValid = false;
                _this.usernameMsg = data.msg;
            }
        });
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        var user = {
            email: this.form.get('email').value,
            username: this.form.get('username').value,
            password: this.form.get('password').value,
        };
        this.authService.registerUser(user)
            .subscribe(function (data) {
            if (data.success) {
                console.log(data.msg);
                _this.errorMsg = null;
                _this.router.navigate(['/login']);
            }
            else {
                console.log(data.msg);
                _this.errorMsg = data.msg;
                _this.submitted = false;
                setTimeout(function () {
                    _this.errorMsg = null;
                }, 3000);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/user/user.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user/user.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2 class=\"page-header\">User's Profile</h2>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\" *ngIf=\"username\">Username: {{username}}</li>\n    <li class=\"list-group-item\" *ngIf=\"email\">E-mail: {{email}}</li>\n  </ul>\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"goToBlogs()\">Go to blogs</button>\n</div>\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/blog.service */ "./src/app/services/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(blogService, route, router) {
        this.blogService = blogService;
        this.route = route;
        this.router = router;
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .subscribe(function (params) {
            _this.username = params.get('username');
        });
        this.getUser();
    };
    // Go to Blogs
    UserComponent.prototype.goToBlogs = function () {
        this.router.navigate(['/blog']);
    };
    // Fetching User's Data
    UserComponent.prototype.getUser = function () {
        var _this = this;
        this.blogService.getProfileByUsername(this.username)
            .subscribe(function (data) {
            if (!data.success) {
                console.log(data.msg);
            }
            else {
                console.log(data);
                _this.username = data.user.username;
                _this.email = data.user.email;
            }
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/components/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/components/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_services_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/material-components.module.ts":
/*!***********************************************!*\
  !*** ./src/app/material-components.module.ts ***!
  \***********************************************/
/*! exports provided: MaterialComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialComponentsModule", function() { return MaterialComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var MaterialComponentsModule = /** @class */ (function () {
    function MaterialComponentsModule() {
    }
    MaterialComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_10__["MatSlideToggleModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_12__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_14__["MatListModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_15__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_19__["MatExpansionModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_20__["MatButtonToggleModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipsModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIconModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__["MatProgressSpinnerModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_24__["MatProgressBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_26__["MatTooltipModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_27__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_28__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_30__["MatPaginatorModule"]
            ],
            declarations: []
        })
    ], MaterialComponentsModule);
    return MaterialComponentsModule;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-flash-messages/module/flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(authService, flashMessages, router) {
        this.authService = authService;
        this.flashMessages = flashMessages;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (router, state) {
        var _this = this;
        if (!this.authService.loggedIn()) {
            this.redirectUrl = state.url;
            this.flashMessages.show('You have to be logged in to see this page. Redirecting to Login Page...', { cssClass: 'alert-danger', timeout: 2500 });
            setTimeout(function () {
                _this.router.navigate(['/login']);
            }, 3500);
            return false;
        }
        else {
            return true;
        }
    };
    AuthGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_2__["FlashMessagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        //domain = 'http://localhost:8080/';
        this.domain = '';
    }
    // Register User
    AuthService.prototype.registerUser = function (user) {
        return this.http.post(this.domain + 'authentication/register', user) //, {headers: headers})
            .map(function (res) { return res.json(); });
    };
    // Check if E-mail exists in DB already
    AuthService.prototype.checkEmail = function (email) {
        return this.http.get(this.domain + 'authentication/checkEmail/' + email)
            .map(function (res) { return res.json(); });
    };
    // Check if Username exists in DB already
    AuthService.prototype.checkUsername = function (username) {
        return this.http.get(this.domain + 'authentication/checkUsername/' + username)
            .map(function (res) { return res.json(); });
    };
    // Store User's data to localStorage
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(user));
        //localStorage.setItem('username', user.username);
        this.authToken = token;
        this.user = JSON.stringify(user);
    };
    // Login User
    AuthService.prototype.loginUser = function (user) {
        return this.http.post(this.domain + 'authentication/login', user) //, {headers: headers})
            .map(function (res) { return res.json(); });
    };
    // Load Token
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('token');
        this.authToken = token;
    };
    // Create Header
    AuthService.prototype.createAuthenticationHeader = function () {
        this.loadToken();
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authToken
            })
        });
    };
    // Get Profile
    AuthService.prototype.getProfile = function () {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'authentication/profile', this.options)
            .map(function (res) { return res.json(); });
    };
    // Logout
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    // Check if User Has Valid Token
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_4__["tokenNotExpired"])('token');
    };
    // Get Users That Are Not Approved
    AuthService.prototype.getNotApprovedProfiles = function () {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'authentication/notApprovedProfiles', this.options)
            .map(function (res) { return res.json(); });
    };
    // Approve Registration Request
    AuthService.prototype.approveRequest = function (id) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'authentication/approveRequest/', id, this.options)
            .map(function (res) { return res.json(); });
    };
    // Delete Request
    AuthService.prototype.deleteRequest = function (usersId) {
        this.createAuthenticationHeader();
        return this.http.delete(this.domain + 'authentication/deleteRequest/' + usersId, this.options)
            .map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/blog.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/blog.service.ts ***!
  \******************************************/
/*! exports provided: BlogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogService = /** @class */ (function () {
    function BlogService(authService, http) {
        this.authService = authService;
        this.http = http;
        //domain = 'http://localhost:8080/';
        this.domain = '';
    }
    // Create Header
    BlogService.prototype.createAuthenticationHeader = function () {
        this.authService.loadToken();
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    // Save New Blog To Database
    BlogService.prototype.postNewBlogPost = function (blog) {
        this.createAuthenticationHeader();
        return this.http.post(this.domain + 'blogs/newBlog', blog, this.options)
            .map(function (res) { return res.json(); });
    };
    // Get All Blogs From DB
    BlogService.prototype.getAllBlogs = function () {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'blogs/allBlogs', this.options)
            .map(function (res) { return res.json(); });
    };
    BlogService.prototype.getByCreator = function (creator, title) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'blogs/searchByCreator/?createdBy=' + creator + '&title=' + title, this.options) //requestOptions)
            .map(function (res) { return res.json(); });
    };
    // Get Blog To Edit
    BlogService.prototype.getBlogToEdit = function (id) {
        this.authService.createAuthenticationHeader();
        return this.http.get(this.domain + 'blogs/singleBlog/' + id, this.options)
            .map(function (res) { return res.json(); });
    };
    // Update Blog
    BlogService.prototype.updateBlog = function (blog) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'blogs/updateBlog', blog, this.options)
            .map(function (res) { return res.json(); });
    };
    // Delete Blog
    BlogService.prototype.deleteBlog = function (id) {
        this.createAuthenticationHeader();
        return this.http.delete(this.domain + 'blogs/deleteBlog/' + id, this.options)
            .map(function (res) { return res.json(); });
    };
    // Like Blog
    BlogService.prototype.likeBlog = function (object) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'blogs/likeBlog', object, this.options)
            .map(function (res) { return res.json(); });
    };
    // Dislike Blog
    BlogService.prototype.dislikeBlog = function (object) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'blogs/dislikeBlog', object, this.options)
            .map(function (res) { return res.json(); });
    };
    // Get Profile of Likers/Dislikers
    BlogService.prototype.getProfileByUsername = function (username) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'blogs/profile/' + username, this.options)
            .map(function (res) { return res.json(); });
    };
    // Post Comment
    BlogService.prototype.comment = function (comment) {
        this.createAuthenticationHeader();
        return this.http.post(this.domain + 'blogs/comment', comment, this.options)
            .map(function (res) { return res.json(); });
    };
    // Delete Comment
    BlogService.prototype.deleteComment = function (id) {
        this.createAuthenticationHeader();
        return this.http.delete(this.domain + 'blogs/deleteComment/' + id, this.options)
            .map(function (res) { return res.json(); });
    };
    // Get Comment
    BlogService.prototype.getComment = function (id) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'blogs/getComment/' + id, this.options)
            .map(function (res) { return res.json(); });
    };
    // Edit Comment
    BlogService.prototype.editComment = function (object) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'blogs/editComment', object, this.options)
            .map(function (res) { return res.json(); });
    };
    // Get Titles for Search
    BlogService.prototype.getTitles = function (title) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'blogs/searchTitles/' + title, this.options)
            .map(function (res) { return res.json(); });
    };
    // Get Authors for Search
    BlogService.prototype.getAuthors = function (author) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'blogs/searchAuthors/' + author, this.options)
            .map(function (res) { return res.json(); });
    };
    // Search for Blogs
    BlogService.prototype.searchBlogs = function (title, author) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'blogs/searchBlogs/?title=' + title + '&author=' + author, this.options)
            .map(function (res) { return res.json(); });
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], BlogService);
    return BlogService;
}());



/***/ }),

/***/ "./src/app/services/comment-validator.ts":
/*!***********************************************!*\
  !*** ./src/app/services/comment-validator.ts ***!
  \***********************************************/
/*! exports provided: ValidateComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateComment", function() { return ValidateComment; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


function validateComment(c) {
    var regexp = new RegExp(/^\s+$/);
    return regexp.test(c.value) ? {
        validateComment: {
            valid: false
        }
    } : null;
}
var ValidateComment = /** @class */ (function () {
    function ValidateComment() {
    }
    ValidateComment = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[validateComment]',
            providers: [
                { provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALIDATORS"], useValue: validateComment, multi: true }
            ]
        })
    ], ValidateComment);
    return ValidateComment;
}());



/***/ }),

/***/ "./src/app/services/config.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/config.service.ts ***!
  \********************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConfigService = /** @class */ (function () {
    function ConfigService(authService) {
        this.authService = authService;
        this.showItem = this.authService.loggedIn();
        this.navbarItems = [
            { name: 'Dashboard', route: '/dashboard', show: this.showItem },
            { name: 'Profile', route: '/profile', show: this.showItem },
            { name: 'Nutrition Manager', route: '/nutritionmanager', show: this.showItem },
            { name: 'Blog', route: '/blog', show: this.showItem },
            { name: 'Login', route: '/login', show: !this.showItem },
            { name: 'Register', route: '/register', show: !this.showItem },
        ];
        this.showMenu = false;
    }
    // Update Show Property of the navbarItems
    ConfigService.prototype.updateShowProperty = function () {
        var len = this.navbarItems.length;
        for (var i = 0; i < len - 2; i++) {
            this.navbarItems[i].show = this.authService.loggedIn();
        }
        for (var i = len - 2; i < len; i++) {
            this.navbarItems[i].show = !this.authService.loggedIn();
        }
    };
    ConfigService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/services/dropdown-item.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/dropdown-item.directive.ts ***!
  \*****************************************************/
/*! exports provided: KeydownEventDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeydownEventDirective", function() { return KeydownEventDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KEY_CODE;
(function (KEY_CODE) {
    KEY_CODE[KEY_CODE["DOWN_ARROW"] = 40] = "DOWN_ARROW";
    KEY_CODE[KEY_CODE["UP_ARROW"] = 38] = "UP_ARROW";
})(KEY_CODE || (KEY_CODE = {}));
var KeydownEventDirective = /** @class */ (function () {
    function KeydownEventDirective() {
        this.keydownEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    KeydownEventDirective.prototype.onKeydown = function (event) {
        if (event.keyCode === KEY_CODE.DOWN_ARROW) {
            this.keydownEvent.emit('downArrow');
        }
        if (event.keyCode === KEY_CODE.UP_ARROW) {
            this.keydownEvent.emit('upArrow');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], KeydownEventDirective.prototype, "keydownEvent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], KeydownEventDirective.prototype, "onKeydown", null);
    KeydownEventDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[keydownEvent]'
        })
    ], KeydownEventDirective);
    return KeydownEventDirective;
}());



/***/ }),

/***/ "./src/app/services/dropdown.directive.ts":
/*!************************************************!*\
  !*** ./src/app/services/dropdown.directive.ts ***!
  \************************************************/
/*! exports provided: ClickOutsideDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function() { return ClickOutsideDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickOutsideDirective = /** @class */ (function () {
    function ClickOutsideDirective(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ClickOutsideDirective.prototype.onClick = function (targetElement) {
        var isClickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!isClickedInside) {
            console.log('clicked outside');
            this.clickOutside.emit(null);
        }
        else {
            console.log('clicked inside');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ClickOutsideDirective.prototype, "clickOutside", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[clickOutside]',
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());



/***/ }),

/***/ "./src/app/services/login-guard.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/login-guard.service.ts ***!
  \*************************************************/
/*! exports provided: LoginGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuardService", function() { return LoginGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-flash-messages/module/flash-messages.service */ "./node_modules/angular2-flash-messages/module/flash-messages.service.js");
/* harmony import */ var angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginGuardService = /** @class */ (function () {
    function LoginGuardService(authService, router, flashMessages) {
        this.authService = authService;
        this.router = router;
        this.flashMessages = flashMessages;
    }
    LoginGuardService.prototype.canActivate = function () {
        var _this = this;
        if (this.authService.loggedIn()) {
            this.flashMessages.show('You are already logged in. Redirecting to Home Page...', { cssClass: 'alert-warning', timeout: 3500 });
            setTimeout(function () {
                _this.router.navigate(['/home']);
            }, 3500);
            return false;
        }
        else {
            return true;
        }
    };
    LoginGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular2_flash_messages_module_flash_messages_service__WEBPACK_IMPORTED_MODULE_3__["FlashMessagesService"]])
    ], LoginGuardService);
    return LoginGuardService;
}());



/***/ }),

/***/ "./src/app/services/nutrition.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/nutrition.service.ts ***!
  \***********************************************/
/*! exports provided: NutritionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NutritionService", function() { return NutritionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NutritionService = /** @class */ (function () {
    function NutritionService(authService, http) {
        this.authService = authService;
        this.http = http;
        //domain = 'http://localhost:8080/';
        this.domain = '';
    }
    // creating authentication header
    NutritionService.prototype.createAuthenticationHeader = function () {
        this.authService.loadToken();
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
                'Content-Type': 'application/json',
                'authorization': this.authService.authToken
            })
        });
    };
    // post user's physical info to database
    NutritionService.prototype.addPhysicalInfo = function (info) {
        this.createAuthenticationHeader();
        return this.http.post(this.domain + 'nutrition/postPhysicalInfo', info, this.options)
            .map(function (res) { return res.json(); });
    };
    // check if user has already provided physical info and get it for possible update
    NutritionService.prototype.checkForInfo = function () {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'nutrition/getInfo', this.options)
            .map(function (res) { return res.json(); });
    };
    // edit user's physical info
    NutritionService.prototype.editInfo = function (editedInfo) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'nutrition/editInfo', editedInfo, this.options)
            .map(function (res) { return res.json(); });
    };
    // add or edit meals
    NutritionService.prototype.provideMeals = function (meals) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'nutrition/editMeals', meals, this.options)
            .map(function (res) { return res.json(); });
    };
    // check for food in groceries collection
    NutritionService.prototype.checkForFood = function (food) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'nutrition/checkForFood/' + food, this.options)
            .map(function (res) { return res.json(); });
    };
    // get all groceries containing sent text in the name
    NutritionService.prototype.getMathedGroceries = function (food) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'nutrition/searchGroceries/' + food, this.options)
            .map(function (res) { return res.json(); });
    };
    // push today's breakfast to database
    NutritionService.prototype.pushTodaysMeal = function (meal) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'nutrition/pushMeal', meal, this.options)
            .map(function (res) { return res.json(); });
    };
    // get meals info
    NutritionService.prototype.getMealsInfo = function (date) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'nutrition/getMealsInfo/' + date, this.options)
            .map(function (res) { return res.json(); });
    };
    // delete food from meal(breakfast,lunch,dinner or additionaly) for specific date
    NutritionService.prototype.deleteFood = function (food, quant, meal, date) {
        this.createAuthenticationHeader();
        return this.http.delete(this.domain + 'nutrition/deleteFood/?food=' + food + '&quant=' + quant + '&meal=' + meal + '&date=' + date, this.options)
            .map(function (res) { return res.json(); });
    };
    // check if meals is empty and delete it if it is
    NutritionService.prototype.deleteMeal = function (date) {
        this.createAuthenticationHeader();
        return this.http.delete(this.domain + 'nutrition/deleteMeal/' + date, this.options)
            .map(function (res) { return res.json(); });
    };
    // update single quantity
    NutritionService.prototype.updateSingleQuantity = function (object) {
        this.createAuthenticationHeader();
        return this.http.put(this.domain + 'nutrition/editSingleFood', object, this.options)
            .map(function (res) { return res.json(); });
    };
    // get meals info for period 
    NutritionService.prototype.getSomeMeals = function (period) {
        this.createAuthenticationHeader();
        return this.http.get(this.domain + 'nutrition/getSomeMeals/' + period, this.options)
            .map(function (res) { return res.json(); });
    };
    // remove meal document for date passed
    NutritionService.prototype.removeMeal = function (date) {
        this.createAuthenticationHeader();
        return this.http.delete(this.domain + 'nutrition/removeMeal/' + date, this.options)
            .map(function (res) { return res.json(); });
    };
    // search groceries by food name
    NutritionService.prototype.searchGroceries = function (foodName) {
        this.createAuthenticationHeader();
        console.log('from nutrition service, foodName= ' + foodName);
        return this.http.get(this.domain + 'nutrition/searchGroceriesByName/' + foodName, this.options)
            .map(function (res) { return res.json(); });
    };
    NutritionService.prototype.sss = function () {
        console.log('sss called - msg from nutr service');
        return this.http.get(this.domain + 'proba/bbb/?username=senka&date=20-05-2018')
            .map(function (res) { return res.json(); });
    };
    NutritionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], NutritionService);
    return NutritionService;
}());



/***/ }),

/***/ "./src/app/services/screen.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/screen.service.ts ***!
  \********************************************/
/*! exports provided: ScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenService", function() { return ScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScreenService = /** @class */ (function () {
    function ScreenService() {
        var _this = this;
        this.largeBreakpoint = 985;
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        window.addEventListener('resize', function (event) { return _this.onResize(event); });
    }
    ScreenService.prototype.isLarge = function () {
        return this.screenWidth > this.largeBreakpoint;
    };
    ScreenService.prototype.onResize = function ($event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
    };
    ScreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ScreenService);
    return ScreenService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Vedran\nutrition-mean\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map