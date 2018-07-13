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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_calorie_calc_calorie_calc_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/calorie-calc/calorie-calc.component */ "./src/app/dashboard/calorie-calc/calorie-calc.component.ts");
/* harmony import */ var _dashboard_meal_plan_meal_plan_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/meal-plan/meal-plan.component */ "./src/app/dashboard/meal-plan/meal-plan.component.ts");
/* harmony import */ var _dashboard_myfitnesspal_myfitnesspal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/myfitnesspal/myfitnesspal.component */ "./src/app/dashboard/myfitnesspal/myfitnesspal.component.ts");
/* harmony import */ var _dashboard_training_training_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/training/training.component */ "./src/app/dashboard/training/training.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/youtube/youtube.component */ "./src/app/dashboard/youtube/youtube.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _dashboard_dhome_dhome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/dhome/dhome.component */ "./src/app/dashboard/dhome/dhome.component.ts");
/* harmony import */ var _dashboard_workout_workout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/workout/workout.component */ "./src/app/dashboard/workout/workout.component.ts");
/* harmony import */ var _dashboard_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/blog/blog.component */ "./src/app/dashboard/blog/blog.component.ts");
/* harmony import */ var _dashboard_blog_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dashboard/blog/blog-article/blog-article.component */ "./src/app/dashboard/blog/blog-article/blog-article.component.ts");
/* harmony import */ var _dashboard_workout_workout_table_workout_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/workout/workout-table/workout-table.component */ "./src/app/dashboard/workout/workout-table/workout-table.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _dashboard_calorie_calc_fatloss_fatloss_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/calorie-calc/fatloss/fatloss.component */ "./src/app/dashboard/calorie-calc/fatloss/fatloss.component.ts");
/* harmony import */ var _dashboard_calorie_calc_bulking_bulking_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/calorie-calc/bulking/bulking.component */ "./src/app/dashboard/calorie-calc/bulking/bulking.component.ts");
/* harmony import */ var _dashboard_calorie_calc_maintain_maintain_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/calorie-calc/maintain/maintain.component */ "./src/app/dashboard/calorie-calc/maintain/maintain.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], data: { title: 'Alpha Aesthetics' } },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"], canActivateChild: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"]],
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'home', component: _dashboard_dhome_dhome_component__WEBPACK_IMPORTED_MODULE_11__["DhomeComponent"], data: { title: 'Dashboard - Home' } },
            { path: 'profile', component: _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"], data: { title: 'Dashboard - Profile' } },
            { path: 'calculator', component: _dashboard_calorie_calc_calorie_calc_component__WEBPACK_IMPORTED_MODULE_4__["CalorieCalcComponent"], data: { title: 'Calorie Calculator' } },
            { path: 'calculator/fatloss', component: _dashboard_calorie_calc_fatloss_fatloss_component__WEBPACK_IMPORTED_MODULE_17__["FatlossComponent"], data: { title: 'Calorie Calculator' } },
            { path: 'calculator/bulking', component: _dashboard_calorie_calc_bulking_bulking_component__WEBPACK_IMPORTED_MODULE_18__["BulkingComponent"], data: { title: 'Calorie Calculator' } },
            { path: 'calculator/maintenance', component: _dashboard_calorie_calc_maintain_maintain_component__WEBPACK_IMPORTED_MODULE_19__["MaintainComponent"], data: { title: 'Calorie Calculator' } },
            { path: 'mealplan', component: _dashboard_meal_plan_meal_plan_component__WEBPACK_IMPORTED_MODULE_5__["MealPlanComponent"], data: { title: 'Meal Plan Generator' } },
            { path: 'workout', component: _dashboard_workout_workout_component__WEBPACK_IMPORTED_MODULE_12__["WorkoutComponent"], data: { title: 'Free Workout Plans' } },
            { path: 'workout/:path', component: _dashboard_workout_workout_table_workout_table_component__WEBPACK_IMPORTED_MODULE_15__["WorkoutTableComponent"], data: { title: 'Free Workout Plans' } },
            { path: 'blog', component: _dashboard_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"], data: { title: 'Blog' } },
            { path: 'blog/:path', component: _dashboard_blog_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_14__["BlogArticleComponent"], data: { title: 'Blog' } },
            { path: 'myfitnesspal', component: _dashboard_myfitnesspal_myfitnesspal_component__WEBPACK_IMPORTED_MODULE_6__["MyfitnesspalComponent"], data: { title: 'Myfitnesspal Insights' } },
            { path: 'training', component: _dashboard_training_training_component__WEBPACK_IMPORTED_MODULE_7__["TrainingComponent"], data: { title: 'Personal Training' } },
            { path: 'youtube', component: _dashboard_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_9__["YoutubeComponent"], data: { title: 'Youtube Channel' } }
        ]
    },
    { path: 'not-found', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"], data: { title: 'Page not found!' } },
    { path: '**', redirectTo: '/not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, { useHash: true })
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<app-nav></app-nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var ng_scrollreveal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-scrollreveal */ "./node_modules/ng-scrollreveal/index.js");
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
    function AppComponent(config) {
        // customize default values of ng-scrollreveal directives used by this component tree
        config.duration = 5000;
        config.easing = 'cubic-bezier(0.23, 1, 0.32, 1)';
        config.reset = true;
        config.delay = 100;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alpha-aesthetics',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            providers: [ng_scrollreveal__WEBPACK_IMPORTED_MODULE_1__["NgsRevealConfig"]] // add NgsRevealConfig to the component providers
        }),
        __metadata("design:paramtypes", [ng_scrollreveal__WEBPACK_IMPORTED_MODULE_1__["NgsRevealConfig"]])
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
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/esm5/angular-bootstrap-md.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_scrollreveal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-scrollreveal */ "./node_modules/ng-scrollreveal/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard/profile/profile.component */ "./src/app/dashboard/profile/profile.component.ts");
/* harmony import */ var _dashboard_calorie_calc_calorie_calc_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/calorie-calc/calorie-calc.component */ "./src/app/dashboard/calorie-calc/calorie-calc.component.ts");
/* harmony import */ var _dashboard_meal_plan_meal_plan_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dashboard/meal-plan/meal-plan.component */ "./src/app/dashboard/meal-plan/meal-plan.component.ts");
/* harmony import */ var _dashboard_myfitnesspal_myfitnesspal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/myfitnesspal/myfitnesspal.component */ "./src/app/dashboard/myfitnesspal/myfitnesspal.component.ts");
/* harmony import */ var _dashboard_training_training_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./dashboard/training/training.component */ "./src/app/dashboard/training/training.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dashboard/sidebar/sidebar.component */ "./src/app/dashboard/sidebar/sidebar.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/youtube/youtube.component */ "./src/app/dashboard/youtube/youtube.component.ts");
/* harmony import */ var _dashboard_dhome_dhome_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dashboard/dhome/dhome.component */ "./src/app/dashboard/dhome/dhome.component.ts");
/* harmony import */ var _dashboard_workout_workout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dashboard/workout/workout.component */ "./src/app/dashboard/workout/workout.component.ts");
/* harmony import */ var _dashboard_blog_blog_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dashboard/blog/blog.component */ "./src/app/dashboard/blog/blog.component.ts");
/* harmony import */ var _dashboard_blog_card_card_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./dashboard/blog/card/card.component */ "./src/app/dashboard/blog/card/card.component.ts");
/* harmony import */ var _dashboard_floatbutton_floatbutton_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./dashboard/floatbutton/floatbutton.component */ "./src/app/dashboard/floatbutton/floatbutton.component.ts");
/* harmony import */ var _dashboard_workout_workoutcard_workoutcard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/workout/workoutcard/workoutcard.component */ "./src/app/dashboard/workout/workoutcard/workoutcard.component.ts");
/* harmony import */ var _dashboard_workout_workout_table_workout_table_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./dashboard/workout/workout-table/workout-table.component */ "./src/app/dashboard/workout/workout-table/workout-table.component.ts");
/* harmony import */ var _dashboard_dhome_insightcard_insightcard_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./dashboard/dhome/insightcard/insightcard.component */ "./src/app/dashboard/dhome/insightcard/insightcard.component.ts");
/* harmony import */ var _dashboard_blog_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./dashboard/blog/blog-article/blog-article.component */ "./src/app/dashboard/blog/blog-article/blog-article.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_calorie_calc_caloriecard_caloriecard_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dashboard/calorie-calc/caloriecard/caloriecard.component */ "./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.ts");
/* harmony import */ var _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/local-interaction.service */ "./src/app/services/local-interaction.service.ts");
/* harmony import */ var _services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./services/calorie-calculator.service */ "./src/app/services/calorie-calculator.service.ts");
/* harmony import */ var _services_server_interaction_service__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./services/server-interaction.service */ "./src/app/services/server-interaction.service.ts");
/* harmony import */ var _dashboard_calorie_calc_fatloss_fatloss_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./dashboard/calorie-calc/fatloss/fatloss.component */ "./src/app/dashboard/calorie-calc/fatloss/fatloss.component.ts");
/* harmony import */ var _dashboard_calorie_calc_bulking_bulking_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./dashboard/calorie-calc/bulking/bulking.component */ "./src/app/dashboard/calorie-calc/bulking/bulking.component.ts");
/* harmony import */ var _dashboard_calorie_calc_maintain_maintain_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./dashboard/calorie-calc/maintain/maintain.component */ "./src/app/dashboard/calorie-calc/maintain/maintain.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _dashboard_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"],
                _dashboard_calorie_calc_calorie_calc_component__WEBPACK_IMPORTED_MODULE_10__["CalorieCalcComponent"],
                _dashboard_meal_plan_meal_plan_component__WEBPACK_IMPORTED_MODULE_11__["MealPlanComponent"],
                _dashboard_myfitnesspal_myfitnesspal_component__WEBPACK_IMPORTED_MODULE_12__["MyfitnesspalComponent"],
                _dashboard_training_training_component__WEBPACK_IMPORTED_MODULE_13__["TrainingComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_14__["ErrorPageComponent"],
                _dashboard_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_15__["SidebarComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_16__["DashboardComponent"],
                _dashboard_youtube_youtube_component__WEBPACK_IMPORTED_MODULE_17__["YoutubeComponent"],
                _dashboard_dhome_dhome_component__WEBPACK_IMPORTED_MODULE_18__["DhomeComponent"],
                _dashboard_workout_workout_component__WEBPACK_IMPORTED_MODULE_19__["WorkoutComponent"],
                _dashboard_blog_blog_component__WEBPACK_IMPORTED_MODULE_20__["BlogComponent"],
                _dashboard_blog_card_card_component__WEBPACK_IMPORTED_MODULE_21__["CardComponent"],
                _dashboard_floatbutton_floatbutton_component__WEBPACK_IMPORTED_MODULE_22__["FloatbuttonComponent"],
                _dashboard_workout_workoutcard_workoutcard_component__WEBPACK_IMPORTED_MODULE_23__["WorkoutcardComponent"],
                _dashboard_workout_workout_table_workout_table_component__WEBPACK_IMPORTED_MODULE_24__["WorkoutTableComponent"],
                _dashboard_dhome_insightcard_insightcard_component__WEBPACK_IMPORTED_MODULE_25__["InsightcardComponent"],
                _dashboard_blog_blog_article_blog_article_component__WEBPACK_IMPORTED_MODULE_26__["BlogArticleComponent"],
                _dashboard_calorie_calc_caloriecard_caloriecard_component__WEBPACK_IMPORTED_MODULE_30__["CaloriecardComponent"],
                _dashboard_calorie_calc_bulking_bulking_component__WEBPACK_IMPORTED_MODULE_35__["BulkingComponent"],
                _dashboard_calorie_calc_maintain_maintain_component__WEBPACK_IMPORTED_MODULE_36__["MaintainComponent"],
                _dashboard_calorie_calc_fatloss_fatloss_component__WEBPACK_IMPORTED_MODULE_34__["FatlossComponent"]
            ],
            imports: [
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_2__["MDBBootstrapModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_29__["ReactiveFormsModule"],
                ng_scrollreveal__WEBPACK_IMPORTED_MODULE_4__["NgsRevealModule"].forRoot()
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_28__["AuthService"], _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_27__["AuthGuard"], _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_31__["LocalInteractionService"], _services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_32__["CalorieCalculatorService"], _services_server_interaction_service__WEBPACK_IMPORTED_MODULE_33__["ServerInteractionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/blog/blog-article/blog-article.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/blog/blog-article/blog-article.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adjustment\">\n    <div class=\"card card-cascade narrower\" [ngsRevealSet]=\"{ reset:true }\" [ngsInterval]=\"100\" [ngsSelector]=\"'.item'\">\n\n    <!-- Card image -->\n    <div class=\"view view-cascade overlay waves-light item\" mdbWavesEffect>\n      <img class=\"card-img-top\" [src]=\"blogObj.image\" alt=\"Card image\">\n      <a>\n        <div class=\"mask rgba-white-slight\"></div>\n      </a>\n    </div>\n  \n    <!-- Card content -->\n    <div class=\"card-body card-body-cascade\">\n  \n      <!-- Label -->\n      <h5 class=\"cyan-text pb-2 pt-1 item\"><i class=\"fa\" [ngClass]=\"blogObj.icon\"></i> {{blogObj.category}}</h5>\n      <!-- Title -->\n      <h4 class=\"card-title item\">{{blogObj.title}}</h4>\n      <!-- Text -->\n      <p class=\"card-text item\">{{blogObj.article}}</p>  \n    </div>\n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/blog/blog-article/blog-article.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/blog/blog-article/blog-article.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adjustment {\n  padding: 5vh 10vw; }\n\np.card-text {\n  font-size: 1rem !important; }\n\n.card.card-cascade.narrower .view.view-cascade {\n  margin-left: 10% !important;\n  margin-right: 10% !important;\n  margin-top: -2.25rem !important; }\n\n.card.card-cascade.narrower {\n  margin-top: 2.25rem !important; }\n\n.card-body {\n  margin-left: 9% !important;\n  margin-right: 9% !important; }\n"

/***/ }),

/***/ "./src/app/dashboard/blog/blog-article/blog-article.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/blog/blog-article/blog-article.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlogArticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogArticleComponent", function() { return BlogArticleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogArticleComponent = /** @class */ (function () {
    function BlogArticleComponent(route) {
        this.route = route;
    }
    BlogArticleComponent.prototype.ngOnInit = function () {
        this.blogObj = this.route.snapshot.queryParams;
    };
    BlogArticleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-article',
            template: __webpack_require__(/*! ./blog-article.component.html */ "./src/app/dashboard/blog/blog-article/blog-article.component.html"),
            styles: [__webpack_require__(/*! ./blog-article.component.scss */ "./src/app/dashboard/blog/blog-article/blog-article.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BlogArticleComponent);
    return BlogArticleComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/blog/blog.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/blog/blog.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row adjustment\">\n  <div class=\"col-md-4 col-12 align-items-stretch d-flex\" *ngFor=\"let blogdata of blogarray; let i = index\" [ngsReveal]=\"{delay: i*200 }\">\n    <app-card class=\"d-flex\" [blogObj]=\"blogdata\"></app-card>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/blog/blog.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/blog/blog.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/blog/blog.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/blog/blog.component.ts ***!
  \**************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-interaction.service */ "./src/app/services/local-interaction.service.ts");
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
    function BlogComponent(route, titleService, LocalInteractionService) {
        this.route = route;
        this.titleService = titleService;
        this.LocalInteractionService = LocalInteractionService;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle(this.route.snapshot.data['title']);
        this.LocalInteractionService.BlogObservable
            .subscribe(function (message) {
            _this.blogarray = message;
            console.log(_this.blogarray);
        });
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/dashboard/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.scss */ "./src/app/dashboard/blog/blog.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_3__["LocalInteractionService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/blog/card/card.component.html":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/blog/card/card.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-cascade narrower\">\n\n  <!-- Card image -->\n  <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n    <img class=\"card-img-top\" [src]=\"blogObj.image\" alt=\"Card image\">\n    <a>\n      <div class=\"mask rgba-white-slight\"></div>\n    </a>\n  </div>\n\n  <!-- Card content -->\n  <div class=\"card-body card-body-cascade\">\n\n    <!-- Label -->\n    <h5 class=\"cyan-text pb-2 pt-1\"><i class=\"fa\" [ngClass]=\"blogObj.icon\"></i> {{blogObj.category}}</h5>\n    <!-- Title -->\n    <h4 class=\"card-title\">{{blogObj.title}}</h4>\n    <!-- Text -->\n    <p class=\"card-text\">{{blogObj.text}}</p>\n    <!-- Button -->\n    <a class=\"btn\" mdbWavesEffect [routerLink]=\"blogObj.route\" [queryParams]=\"blogObj\" [skipLocationChange]=\"true\">Read More <i class=\"fa fa-angle-double-right\"></i></a>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dashboard/blog/card/card.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/blog/card/card.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  border: 1px solid #2e2e2e !important;\n  background-color: transparent !important;\n  color: #2e2e2e !important;\n  border-radius: 10em;\n  font-weight: 400; }\n\n.waves-effect {\n  z-index: 0; }\n"

/***/ }),

/***/ "./src/app/dashboard/blog/card/card.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/blog/card/card.component.ts ***!
  \*******************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
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

var CardComponent = /** @class */ (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
        console.log(this.blogObj);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CardComponent.prototype, "blogObj", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/dashboard/blog/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/dashboard/blog/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/calorie-calc/bulking/bulking.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/bulking/bulking.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adjustment\">\n    <div class=\"card card-cascade narrower\">\n  \n    <!-- Card content -->\n    <div class=\"card-body card-body-cascade text-center\">\n  \n      <!-- Card image -->\n      <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n          <img class=\"card-img-top\" src=\"../../../../assets/images/dashboard/gainweight.svg\" alt=\"Card image\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n      </div>\n  \n      <br><br>\n  \n      <h2 class=\"card-title\">BULKING CALCULATOR</h2>\n      <hr>\n      <h4>Hi {{caldata.name}}! </h4>\n      <span class=\"card-text sizeup\">Your <b> Basal Metabolic Rate (BMR)</b>-</span>  \n      <br>\n      <h4 class=\"highlights\">{{caldata.bmr | number: '1.0-0' }} Cals</h4>\n      <br>\n  \n        <button class=\"btn btn-outline-info waves-light accordbtn\" type=\"button\" (click)=\"bmr.toggle()\" mdbWavesEffect>\n            What is BMR? What does that mean?\n        </button>\n  \n        <div class=\"accordcontent\" [mdbCollapse]=\"isCollapsed\" #bmr=\"bs-collapse\">\n            <p>\n              BMR (Basal Metabolic Rate) is an estimate of how many calories you'd burn if you were to do nothing but rest for 24 hours. It represents the minimum amount of energy needed to keep your body functioning, including breathing and keeping your heart beating.\n              <br>\n                Your BMR does not include the calories you burn from normal daily activities or exercise.</p>\n        </div>\n        <br>\n        <hr>\n        <span class=\"card-text sizeup\">Your <b>Maintainance Calories</b>-</span>  \n        <br>\n        <h4 class=\"highlights green-text\">{{caldata.maintenance | number: '1.0-0' }} Cals</h4>\n        <br>\n  \n        <button class=\"btn btn-outline-info waves-light accordbtn\" type=\"button\" (click)=\"maintenance.toggle()\" mdbWavesEffect>\n            What are Maintenance Calories?\n        </button>\n  \n        <div class=\"accordcontent\" [mdbCollapse]=\"isCollapsed\" #maintenance=\"bs-collapse\">\n            <p>\n              Maintenance Calories are the amount of energy needed by your body to maintain current bodyweight.\n              <br>\n              The depend on various factors such as- </p>\n              <ul>\n                <li> BMR (basal metabolic rate) </li>\n                <li> NEAT (non-exercise activity thermogenesis) </li>\n                <li> Exercise </li>\n              </ul>\n              <p>Our calculator estimates your maintenance level on the basis of stats you provided us in Profile section.\n             </p>\n        </div>\n  \n        <br>\n        <hr>\n        <div *ngIf=\"caldata.bulkingcal\">\n            <span class=\"card-text sizeup\">Your Caloric Goal for <b>Weight Gain</b>-</span>  \n            <br>\n            <h4 class=\"highlights deep-orange-text\" >{{caldata.bulkingcal | number: '1.0-0' }} Cals 🔥</h4>\n            <br>\n  \n            <span class=\"card-text\"><b>EXPLANATION:</b> You need to eat this much calories to {{caldata.goal}}.\n               It is advised to eat these calories from healthy food choices. You can be flexible with above number by ± 200 Calories.\n               Bulking does not mean you can eat anything, keep in mind the 80:20 rule.\n            </span>  \n  \n          <br>\n          <hr>\n  \n            <span class=\"card-text sizeup\">Your Macronutrient Goal for <b>Weight Gain</b>-</span> \n            <br><br>\n            <div *ngFor=\"let macro of caldata.macroarray; let i = index\"> \n                <h4 class=\"macroupper\">Option {{i+1}} -{{macro.name}}</h4>\n  \n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover\" >\n                        <thead class=\"text-white\" [ngClass]=\"'gradient'+(i+1)\">\n                            <tr>\n                                <th>Protein</th>\n                                <th>Carbohydrates</th>\n                                <th>Fats</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{macro.pmacro | number: '1.0-0'}} gms</td>\n                                <td>{{macro.cmacro | number: '1.0-0'}} gms</td>\n                                <td>{{macro.fmacro | number: '1.0-0'}} gms</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                  </div>\n                  <hr>\n            </div>\n            <br>\n  \n            <span class=\"card-text\"><b>EXPLANATION:</b> There are three options for Macronutrients' goal. You can choose any one of them according to your choice.\n              For example: I like to eat more carbs than compared to fats, then I will go for High Carb Low Fat option.\n                Since all of the above Macronutrients equate to same amount of calories, Guess what? You'll gain same amount of weight on any of the selected option!\n            </span>  \n  \n          <hr>\n          <span class=\"card-text\"><b>WHY IS PROTEIN SAME IN ALL THREE OPTIONS?</b> <br>\n            Based on our database your level of experience is <b>{{caldata.experience}}</b>. \n            The Protein intake is based on standards defined for your experience level.\n          </span>  \n          <hr>\n  \n          <span class=\"card-text sizeup\">Cardio sessions per week-</span>  \n          <br>\n          <h4 class=\"highlights deep-purple-text\" >{{caldata.cardio }} Session 🏃</h4>\n          <br>\n  \n          <span class=\"card-text\"><b>EXPLANATION:</b> \n            Cardio sessions can last anywhere between 10-20 minutes based on your ability. \n            You can do any form of cardio you like (JOGGING, SWIMMING, CYCLING, PLAYING OUTDOOR GAMES, etc)\n            All of these activities elevate your heart rate and promote fat loss.\n          </span>  \n          <hr>\n          <span class=\"card-text\"><b>WHY {{caldata.cardio }} Session on Bulking?</b> <br>\n            Cardio is essential for overall health and can help you gain minimal fat while Bulking.\n            Cardio goal is based on your current goals and activity level (Lifestyle).\n            As per our database your current goal is to <b> {{caldata.goal}}</b> and Lifestyle is <b> {{caldata.lifestyle}}</b>\n          </span>  \n        <br>\n        <hr>\n  \n        <span class=\"card-text\"><b>IMPORTANT NOTE:</b>\n          Track your bodyweight on every alternate days and update it in profile. \n          Our algorithms will recalculate the updated caloric and macronutrient goals as you progress. \n          Track your progress in form of pictures and measurements as well.\n        </span>  \n      <br>\n  \n        </div>\n  \n        <div *ngIf=\"caldata.goalerrormsg\">\n            <span class=\"card-text\">According to our database, your current goal is set to <b>{{ caldata.goalerrormsg }}</b></span> \n            <br> \n            <span class=\"card-text\">If you wish to check your Weight gain calories consider changing your goal in Profile :)\n               <br> <button routerLink=\"../../../dashboard/profile\" class=\"btn btn-outline-primary btn-rounded errorbtn\" mdbWavesEffect><i class=\"fa fa-edit\"></i>Edit Profile</button>\n            </span>  \n        </div>\n  \n  \n  \n  \n    </div>\n  \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/bulking/bulking.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/bulking/bulking.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adjustment {\n  padding: 5vh 10vw; }\n\n.card.card-cascade.narrower .view.view-cascade {\n  margin-left: 10% !important;\n  margin-right: 10% !important;\n  margin-top: -5rem !important; }\n\n.card.card-cascade.narrower {\n  margin-top: 5rem !important; }\n\n.card .card-body .card-text {\n  color: #383838; }\n\n.card-title {\n  text-align: center; }\n\ntable th, table td {\n  font-weight: 400 !important; }\n\n.waves-effect {\n  display: block !important; }\n"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/bulking/bulking.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/bulking/bulking.component.ts ***!
  \*********************************************************************/
/*! exports provided: BulkingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulkingComponent", function() { return BulkingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/calorie-calculator.service */ "./src/app/services/calorie-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BulkingComponent = /** @class */ (function () {
    function BulkingComponent(CalorieService) {
        this.CalorieService = CalorieService;
        this.caldata = {};
        this.isCollapsed = true;
    }
    BulkingComponent.prototype.ngOnInit = function () {
        this.caldata = this.CalorieService.Bulking();
        console.log(this.caldata);
    };
    BulkingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bulking',
            template: __webpack_require__(/*! ./bulking.component.html */ "./src/app/dashboard/calorie-calc/bulking/bulking.component.html"),
            styles: [__webpack_require__(/*! ./bulking.component.scss */ "./src/app/dashboard/calorie-calc/bulking/bulking.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalorieCalculatorService"]])
    ], BulkingComponent);
    return BulkingComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/calorie-calc/calorie-calc.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/calorie-calc.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row adjustment\">\n    <div class=\"col-md-4 mb-4 align-items-stretch d-flex\" *ngFor=\"let caldata of calarray; let i= index\" [ngsReveal]=\"{delay: i*200 }\" >\n      <app-caloriecard class=\"d-flex\" [calObj]=\"caldata\"></app-caloriecard>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/calorie-calc.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/calorie-calc.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/calorie-calc.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/calorie-calc.component.ts ***!
  \******************************************************************/
/*! exports provided: CalorieCalcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalorieCalcComponent", function() { return CalorieCalcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-interaction.service */ "./src/app/services/local-interaction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CalorieCalcComponent = /** @class */ (function () {
    function CalorieCalcComponent(route, titleService, LocalInteractionService) {
        this.route = route;
        this.titleService = titleService;
        this.LocalInteractionService = LocalInteractionService;
    }
    CalorieCalcComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle(this.route.snapshot.data['title']);
        this.LocalInteractionService.CalObservable
            .subscribe(function (message) {
            _this.calarray = message;
            console.log(_this.calarray);
        });
    };
    CalorieCalcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calorie-calc',
            template: __webpack_require__(/*! ./calorie-calc.component.html */ "./src/app/dashboard/calorie-calc/calorie-calc.component.html"),
            styles: [__webpack_require__(/*! ./calorie-calc.component.scss */ "./src/app/dashboard/calorie-calc/calorie-calc.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_3__["LocalInteractionService"]])
    ], CalorieCalcComponent);
    return CalorieCalcComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-cascade narrower\">\n\n    <!-- Card image -->\n    <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n        <img class=\"card-img-top\" [src]=\"calObj.image\" alt=\"Card image\">\n        <a>\n        <div class=\"mask rgba-white-slight\"></div>\n      </a>\n    </div>\n  \n    <!-- Card content -->\n    <div class=\"card-body card-body-cascade\">\n  \n      <!-- Title -->\n      <h4 class=\"card-title\">{{calObj.title}}</h4>\n      <!-- Text -->\n      <ul class=\"card-text\" *ngFor=\"let feature of calObj.features\">\n          <li>{{feature}}</li>\n      </ul>\n      <!-- Button -->\n      <a class=\"btn btn-elegant waves-light\" mdbWavesEffect [routerLink]=\"calObj.route\">Calculate <i class=\"fa fa-angle-double-right\"></i>\n      </a>      \n  \n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a.btn.btn-elegant {\n  border-radius: 2rem; }\n"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CaloriecardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaloriecardComponent", function() { return CaloriecardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/calorie-calculator.service */ "./src/app/services/calorie-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CaloriecardComponent = /** @class */ (function () {
    function CaloriecardComponent(cal) {
        this.cal = cal;
    }
    CaloriecardComponent.prototype.ngOnInit = function () {
        this.calorieTableParam = JSON.stringify(this.calObj);
        console.log(this.calorieTableParam);
    };
    CaloriecardComponent.prototype.test = function () {
        this.cal.Bulking();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CaloriecardComponent.prototype, "calObj", void 0);
    CaloriecardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-caloriecard',
            template: __webpack_require__(/*! ./caloriecard.component.html */ "./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.html"),
            styles: [__webpack_require__(/*! ./caloriecard.component.scss */ "./src/app/dashboard/calorie-calc/caloriecard/caloriecard.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalorieCalculatorService"]])
    ], CaloriecardComponent);
    return CaloriecardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/calorie-calc/fatloss/fatloss.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/fatloss/fatloss.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adjustment\">\n  <div class=\"card card-cascade narrower\">\n\n  <!-- Card content -->\n  <div class=\"card-body card-body-cascade text-center\">\n\n    <!-- Card image -->\n    <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n        <img class=\"card-img-top\" src=\"../../../../assets/images/dashboard/loseweight.svg\" alt=\"Card image\">\n        <a>\n          <div class=\"mask rgba-white-slight\"></div>\n        </a>\n    </div>\n\n    <br><br>\n\n    <h2 class=\"card-title\">FATLOSS CALCULATOR</h2>\n    <hr>\n    <h4>Hi {{caldata.name}}! </h4>\n    <span class=\"card-text sizeup\">Your <b> Basal Metabolic Rate (BMR)</b>-</span>  \n    <br>\n    <h4 class=\"highlights\">{{caldata.bmr | number: '1.0-0' }} Cals</h4>\n    <br>\n\n      <button class=\"btn btn-outline-info waves-light accordbtn\" type=\"button\" (click)=\"bmr.toggle()\" mdbWavesEffect>\n          What is BMR? What does that mean?\n      </button>\n\n      <div class=\"accordcontent\" [mdbCollapse]=\"isCollapsed\" #bmr=\"bs-collapse\">\n          <p>\n            BMR (Basal Metabolic Rate) is an estimate of how many calories you'd burn if you were to do nothing but rest for 24 hours. It represents the minimum amount of energy needed to keep your body functioning, including breathing and keeping your heart beating.\n            <br>\n              Your BMR does not include the calories you burn from normal daily activities or exercise.</p>\n      </div>\n      <br>\n      <hr>\n      <span class=\"card-text sizeup\">Your <b>Maintainance Calories</b>-</span>  \n      <br>\n      <h4 class=\"highlights green-text\">{{caldata.maintenance | number: '1.0-0' }} Cals</h4>\n      <br>\n\n      <button class=\"btn btn-outline-info waves-light accordbtn\" type=\"button\" (click)=\"maintenance.toggle()\" mdbWavesEffect>\n          What are Maintenance Calories?\n      </button>\n\n      <div class=\"accordcontent\" [mdbCollapse]=\"isCollapsed\" #maintenance=\"bs-collapse\">\n          <p>\n            Maintenance Calories are the amount of energy needed by your body to maintain current bodyweight.\n            <br>\n            The depend on various factors such as- </p>\n            <ul>\n              <li> BMR (basal metabolic rate) </li>\n              <li> NEAT (non-exercise activity thermogenesis) </li>\n              <li> Exercise </li>\n            </ul>\n            <p>Our calculator estimates your maintenance level on the basis of stats you provided us in Profile section.\n           </p>\n      </div>\n\n      <br>\n      <hr>\n      <div *ngIf=\"caldata.fatlosscal\">\n          <span class=\"card-text sizeup\">Your Caloric Goal for <b>FATLOSS</b>-</span>  \n          <br>\n          <h4 class=\"highlights deep-orange-text\" >{{caldata.fatlosscal | number: '1.0-0' }} Cals 🔥</h4>\n          <br>\n\n          <span class=\"card-text\"><b>EXPLANATION:</b> You need to eat this much calories to {{caldata.goal}}.\n             It is advised to eat these calories from healthy food choices. You can be flexible with above number by ± 200 Calories.\n             Keep in mind that consistency beats perfection! Good Luck! :)\n          </span>  \n\n        <br>\n        <hr>\n\n          <span class=\"card-text sizeup\">Your Macronutrient Goal for <b>FATLOSS</b>-</span> \n          <br><br>\n          <div *ngFor=\"let macro of caldata.macroarray; let i = index\"> \n              <h4 class=\"macroupper\">Option {{i+1}} -{{macro.name}}</h4>\n\n              <div class=\"table-responsive\">\n                  <table class=\"table table-hover\" >\n                      <thead class=\"text-white\" [ngClass]=\"'gradient'+(i+1)\">\n                          <tr>\n                              <th>Protein</th>\n                              <th>Carbohydrates</th>\n                              <th>Fats</th>\n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr>\n                              <td>{{macro.pmacro | number: '1.0-0'}} gms</td>\n                              <td>{{macro.cmacro | number: '1.0-0'}} gms</td>\n                              <td>{{macro.fmacro | number: '1.0-0'}} gms</td>\n                          </tr>\n                      </tbody>\n                  </table>\n                </div>\n                <hr>\n          </div>\n          <br>\n\n          <span class=\"card-text\"><b>EXPLANATION:</b> There are three options for Macronutrients' goal. You can choose any one of them according to your choice.\n            For example: I like to eat more carbs than compared to fats, then I will go for High Carb Low Fat option.\n              Since all of the above Macronutrients equate to same amount of calories, Guess what? You'll lose same amount of weight on any of the selected option!\n          </span>  \n\n        <hr>\n        <span class=\"card-text\"><b>WHY IS PROTEIN SAME IN ALL THREE OPTIONS?</b> <br>\n          Based on our database your level of experience is <b>{{caldata.experience}}</b>. \n          The Protein intake is based on standards defined for your experience level.\n        </span>  \n        <hr>\n\n        <span class=\"card-text sizeup\">Cardio sessions per week for <b>FATLOSS</b>-</span>  \n        <br>\n        <h4 class=\"highlights deep-purple-text\" >{{caldata.cardio }} Sessions 🏃</h4>\n        <br>\n\n        <span class=\"card-text\"><b>EXPLANATION:</b> \n          Cardio sessions can last anywhere between 15-30 minutes based on your ability. \n          You can do any form of cardio you like (JOGGING, SWIMMING, CYCLING, PLAYING OUTDOOR GAMES, etc)\n          All of these activities elevate your heart rate and promote fatloss.\n        </span>  \n        <hr>\n        <span class=\"card-text\"><b>WHY {{caldata.cardio }} Sessions?</b> <br>\n          Cardio goal is based on your current goals and activity level (Lifestyle).\n          As per our database your current goal is to <b> {{caldata.goal}}</b> and Lifestyle is <b> {{caldata.lifestyle}}</b>\n        </span>  \n      <br>\n      <hr>\n\n      <span class=\"card-text\"><b>IMPORTANT NOTE:</b>\n        Track your bodyweight on every alternate days and update it in profile. \n        Our algorithms will recalculate the updated caloric and macronutrient goals as you progress. \n        Track your progress in form of pictures and measurements as well.\n      </span>  \n    <br>\n\n      </div>\n\n      <div *ngIf=\"caldata.goalerrormsg\">\n          <span class=\"card-text\">According to our database, your current goal is set to <b>{{ caldata.goalerrormsg }}</b></span> \n          <br> \n          <span class=\"card-text\">If you wish to check your fatloss calories consider changing your goal in Profile :)\n             <br> <button routerLink=\"../../../dashboard/profile\" class=\"btn btn-outline-primary btn-rounded errorbtn\" mdbWavesEffect><i class=\"fa fa-edit\"></i>Edit Profile</button>\n          </span>  \n      </div>\n\n\n\n\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/fatloss/fatloss.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/fatloss/fatloss.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adjustment {\n  padding: 5vh 10vw; }\n\n.card.card-cascade.narrower .view.view-cascade {\n  margin-left: 10% !important;\n  margin-right: 10% !important;\n  margin-top: -5rem !important; }\n\n.card.card-cascade.narrower {\n  margin-top: 5rem !important; }\n\n.card .card-body .card-text {\n  color: #383838; }\n\n.card-title {\n  text-align: center; }\n\ntable th, table td {\n  font-weight: 400 !important; }\n\n.waves-effect {\n  display: block !important; }\n"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/fatloss/fatloss.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/fatloss/fatloss.component.ts ***!
  \*********************************************************************/
/*! exports provided: FatlossComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatlossComponent", function() { return FatlossComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/calorie-calculator.service */ "./src/app/services/calorie-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FatlossComponent = /** @class */ (function () {
    function FatlossComponent(CalorieService) {
        this.CalorieService = CalorieService;
        this.caldata = {};
        this.isCollapsed = true;
    }
    FatlossComponent.prototype.ngOnInit = function () {
        this.caldata = this.CalorieService.FatLoss();
        console.log(this.caldata);
    };
    FatlossComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fatloss',
            template: __webpack_require__(/*! ./fatloss.component.html */ "./src/app/dashboard/calorie-calc/fatloss/fatloss.component.html"),
            styles: [__webpack_require__(/*! ./fatloss.component.scss */ "./src/app/dashboard/calorie-calc/fatloss/fatloss.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalorieCalculatorService"]])
    ], FatlossComponent);
    return FatlossComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/calorie-calc/maintain/maintain.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/maintain/maintain.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adjustment\">\n    <div class=\"card card-cascade narrower\">\n  \n    <!-- Card content -->\n    <div class=\"card-body card-body-cascade text-center\">\n  \n      <!-- Card image -->\n      <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n          <img class=\"card-img-top\" src=\"../../../../assets/images/dashboard/maintainweight.svg\" alt=\"Card image\">\n          <a>\n            <div class=\"mask rgba-white-slight\"></div>\n          </a>\n      </div>\n  \n      <br><br>\n  \n      <h2 class=\"card-title\">MAINTENANCE CALCULATOR</h2>\n      <hr>\n      <h4>Hi {{caldata.name}}! </h4>\n      <span class=\"card-text sizeup\">Your <b> Basal Metabolic Rate (BMR)</b>-</span>  \n      <br>\n      <h4 class=\"highlights\">{{caldata.bmr | number: '1.0-0' }} Cals</h4>\n      <br>\n  \n        <button class=\"btn btn-outline-info waves-light accordbtn\" type=\"button\" (click)=\"bmr.toggle()\" mdbWavesEffect>\n            What is BMR? What does that mean?\n        </button>\n  \n        <div class=\"accordcontent\" [mdbCollapse]=\"isCollapsed\" #bmr=\"bs-collapse\">\n            <p>\n              BMR (Basal Metabolic Rate) is an estimate of how many calories you'd burn if you were to do nothing but rest for 24 hours. It represents the minimum amount of energy needed to keep your body functioning, including breathing and keeping your heart beating.\n              <br>\n                Your BMR does not include the calories you burn from normal daily activities or exercise.</p>\n        </div>\n        <br>\n        <hr>\n        <span class=\"card-text sizeup\">Your <b>Maintainance Calories</b>-</span>  \n        <br>\n        <h4 class=\"highlights green-text\">{{caldata.maintenance | number: '1.0-0' }} Cals</h4>\n        <br>\n  \n        <button class=\"btn btn-outline-info waves-light accordbtn\" type=\"button\" (click)=\"maintenance.toggle()\" mdbWavesEffect>\n            What are Maintenance Calories?\n        </button>\n  \n        <div class=\"accordcontent\" [mdbCollapse]=\"isCollapsed\" #maintenance=\"bs-collapse\">\n            <p>\n              Maintenance Calories are the amount of energy needed by your body to maintain current bodyweight.\n              <br>\n              The depend on various factors such as- </p>\n              <ul>\n                <li> BMR (basal metabolic rate) </li>\n                <li> NEAT (non-exercise activity thermogenesis) </li>\n                <li> Exercise </li>\n              </ul>\n              <p>Our calculator estimates your maintenance level on the basis of stats you provided us in Profile section.\n             </p>\n        </div>\n  \n        <br>\n        <div *ngIf=\"!caldata.goalerrormsg\">\n        <hr>\n            <span class=\"card-text sizeup\">Your Macronutrient Goal for <b>Maintenance</b>-</span> \n            <br><br>\n            <div *ngFor=\"let macro of caldata.macroarray; let i = index\"> \n                <h4 class=\"macroupper\">Option {{i+1}} -{{macro.name}}</h4>\n  \n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover\" >\n                        <thead class=\"text-white\" [ngClass]=\"'gradient'+(i+1)\">\n                            <tr>\n                                <th>Protein</th>\n                                <th>Carbohydrates</th>\n                                <th>Fats</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td>{{macro.pmacro | number: '1.0-0'}} gms</td>\n                                <td>{{macro.cmacro | number: '1.0-0'}} gms</td>\n                                <td>{{macro.fmacro | number: '1.0-0'}} gms</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                  </div>\n                  <hr>\n            </div>\n            <br>\n  \n            <span class=\"card-text\"><b>EXPLANATION:</b> There are three options for Macronutrients' goal. You can choose any one of them according to your choice.\n              For example: I like to eat more carbs than compared to fats, then I will go for High Carb Low Fat option.\n                Since all of the above Macronutrients equate to same amount of calories, Guess what? Results will be same on any of the selected option!\n            </span>  \n  \n          <hr>\n          <span class=\"card-text\"><b>WHY IS PROTEIN SAME IN ALL THREE OPTIONS?</b> <br>\n            Based on our database your level of experience is <b>{{caldata.experience}}</b>. \n            The Protein intake is based on standards defined for your experience level.\n          </span>  \n          <hr>\n  \n          <span class=\"card-text sizeup\">Cardio sessions per week-</span>  \n          <br>\n          <h4 class=\"highlights deep-purple-text\" >{{caldata.cardio }} Session 🏃</h4>\n          <br>\n  \n          <span class=\"card-text\"><b>EXPLANATION:</b> \n            Cardio sessions can last anywhere between 10-20 minutes based on your ability. \n            You can do any form of cardio you like (JOGGING, SWIMMING, CYCLING, PLAYING OUTDOOR GAMES, etc)\n            All of these activities elevate your heart rate and promote fat loss.\n          </span>  \n          <hr>\n          <span class=\"card-text\"><b>WHY {{caldata.cardio }} Session on Maintenance?</b> <br>\n            Cardio is essential for overall health and can help you recompose your body. i.e. to lose fat and gain muscle simultaneously.\n            Cardio goal is based on your current goals and activity level (Lifestyle).\n            As per our database your current goal is to <b> {{caldata.goal}}</b> and Lifestyle is <b> {{caldata.lifestyle}}</b>\n          </span>  \n        <br>\n        <hr>\n  \n        <span class=\"card-text\"><b>IMPORTANT NOTE:</b>\n          Track your bodyweight on every alternate days and update it in profile. \n          Our algorithms will recalculate the updated caloric and macronutrient goals as you progress. \n          Track your progress in form of pictures and measurements as well.\n        </span>  \n      <br>\n  \n        </div>\n  \n        <div *ngIf=\"caldata.goalerrormsg\">\n            <span class=\"card-text\">According to our database, your current goal is set to <b>{{ caldata.goalerrormsg }}</b></span> \n            <br> \n            <span class=\"card-text\">If you wish to check your Weight gain calories consider changing your goal in Profile :)\n               <br> <button routerLink=\"../../../dashboard/profile\" class=\"btn btn-outline-primary btn-rounded errorbtn\" mdbWavesEffect><i class=\"fa fa-edit\"></i>Edit Profile</button>\n            </span>  \n        </div>\n  \n  \n  \n  \n    </div>\n  \n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/maintain/maintain.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/maintain/maintain.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adjustment {\n  padding: 5vh 10vw; }\n\n.card.card-cascade.narrower .view.view-cascade {\n  margin-left: 10% !important;\n  margin-right: 10% !important;\n  margin-top: -5rem !important; }\n\n.card.card-cascade.narrower {\n  margin-top: 5rem !important; }\n\n.card .card-body .card-text {\n  color: #383838; }\n\n.card-title {\n  text-align: center; }\n\ntable th, table td {\n  font-weight: 400 !important; }\n\n.waves-effect {\n  display: block !important; }\n"

/***/ }),

/***/ "./src/app/dashboard/calorie-calc/maintain/maintain.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/calorie-calc/maintain/maintain.component.ts ***!
  \***********************************************************************/
/*! exports provided: MaintainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintainComponent", function() { return MaintainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/calorie-calculator.service */ "./src/app/services/calorie-calculator.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MaintainComponent = /** @class */ (function () {
    function MaintainComponent(CalorieService) {
        this.CalorieService = CalorieService;
        this.caldata = {};
        this.isCollapsed = true;
    }
    MaintainComponent.prototype.ngOnInit = function () {
        this.caldata = this.CalorieService.Maintenance();
        console.log(this.caldata);
    };
    MaintainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maintain',
            template: __webpack_require__(/*! ./maintain.component.html */ "./src/app/dashboard/calorie-calc/maintain/maintain.component.html"),
            styles: [__webpack_require__(/*! ./maintain.component.scss */ "./src/app/dashboard/calorie-calc/maintain/maintain.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_calorie_calculator_service__WEBPACK_IMPORTED_MODULE_1__["CalorieCalculatorService"]])
    ], MaintainComponent);
    return MaintainComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidebar></app-sidebar>\n<router-outlet></router-outlet>\n<app-floatbutton></app-floatbutton>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
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
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dhome/dhome.component.html":
/*!******************************************************!*\
  !*** ./src/app/dashboard/dhome/dhome.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row adjustment\" [ngsRevealSet]=\"{ reset:true }\" [ngsInterval]=\"100\" [ngsSelector]=\"'.item'\">\n    <div class=\"col-md-4 col-12 item\"><app-insightcard></app-insightcard></div>\n    <div class=\"col-md-4 col-12 item\"><app-insightcard></app-insightcard></div>\n    <div class=\"col-md-4 col-12 item\"><app-insightcard></app-insightcard></div>\n    <div class=\"col-md-4 col-12 item\"><app-insightcard></app-insightcard></div>\n    <div class=\"col-md-4 col-12 item\"><app-insightcard></app-insightcard></div>\n  </div>"

/***/ }),

/***/ "./src/app/dashboard/dhome/dhome.component.scss":
/*!******************************************************!*\
  !*** ./src/app/dashboard/dhome/dhome.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dhome/dhome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dhome/dhome.component.ts ***!
  \****************************************************/
/*! exports provided: DhomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DhomeComponent", function() { return DhomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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



var DhomeComponent = /** @class */ (function () {
    function DhomeComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
    }
    DhomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.route.snapshot.data['title']);
    };
    DhomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dhome',
            template: __webpack_require__(/*! ./dhome.component.html */ "./src/app/dashboard/dhome/dhome.component.html"),
            styles: [__webpack_require__(/*! ./dhome.component.scss */ "./src/app/dashboard/dhome/dhome.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], DhomeComponent);
    return DhomeComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dhome/insightcard/insightcard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dhome/insightcard/insightcard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--Card-->\n<div class=\"card card-cascade cascading-admin-card\">\n\n    <!--Card Data-->\n    <div class=\"admin-up\">\n        <i class=\"fa fa-line-chart gradient1 waves-light\" mdbWavesEffect></i>\n        <div class=\"data\">\n            <p>WEIGHT</p>\n            <h4><strong>70 Kgs</strong></h4>\n        </div>\n    </div>\n    <!--/.Card Data-->\n\n    <!--Card content-->\n    <div class=\"card-body\">\n\n        <!--Text-->\n        <p class=\"card-text\">Don't Give Up! 🔥</p>\n    </div>\n    <!--/.Card content-->\n\n</div>\n<!--/.Card-->"

/***/ }),

/***/ "./src/app/dashboard/dhome/insightcard/insightcard.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dhome/insightcard/insightcard.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cascading-admin-card {\n  margin-top: 20px; }\n\n.cascading-admin-card .admin-up {\n  margin-left: 4%;\n  margin-right: 4%;\n  margin-top: -20px; }\n\n.cascading-admin-card .admin-up .fa {\n  padding: 1.7rem;\n  font-size: 2rem;\n  color: #fff;\n  text-align: left;\n  margin-right: 1rem;\n  border-radius: 3px; }\n\n.cascading-admin-card .admin-up .data {\n  float: right;\n  margin-top: 2rem;\n  text-align: right; }\n\n.cascading-admin-card .admin-up .data p {\n  font-size: 12px; }\n\n.cascading-admin-card .admin-up .fa {\n  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.2), 0 2px 13px 0 rgba(0, 0, 0, 0.19); }\n\n.card {\n  margin-bottom: 2rem; }\n"

/***/ }),

/***/ "./src/app/dashboard/dhome/insightcard/insightcard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dhome/insightcard/insightcard.component.ts ***!
  \**********************************************************************/
/*! exports provided: InsightcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsightcardComponent", function() { return InsightcardComponent; });
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

var InsightcardComponent = /** @class */ (function () {
    function InsightcardComponent() {
    }
    InsightcardComponent.prototype.ngOnInit = function () {
    };
    InsightcardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-insightcard',
            template: __webpack_require__(/*! ./insightcard.component.html */ "./src/app/dashboard/dhome/insightcard/insightcard.component.html"),
            styles: [__webpack_require__(/*! ./insightcard.component.scss */ "./src/app/dashboard/dhome/insightcard/insightcard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InsightcardComponent);
    return InsightcardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/floatbutton/floatbutton.component.html":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/floatbutton/floatbutton.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='fabwrapper'>\n    <button class='action-button gradient5 waves-light' mdbWavesEffect><span class='fa fa-plus'></span></button>\n    <ul class='actions'>\n      <li><a class=\"waves-light\" mdbWavesEffect><span class='fa fa-google-plus'></span></a></li>\n      <li><a class=\"waves-light\" mdbWavesEffect><span class='fa fa-facebook'></span></a></li>\n      <li><a class=\"waves-light\" mdbWavesEffect><span class='fa fa-twitter'></span></a></li>\n      <li><a class=\"waves-light\" mdbWavesEffect><span class='fa fa-delicious'></span></a></li>\n      <li><a class=\"waves-light\" mdbWavesEffect><span class='fa fa-reddit'></span></a></li>\n    </ul>\n  </div>\n  "

/***/ }),

/***/ "./src/app/dashboard/floatbutton/floatbutton.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/floatbutton/floatbutton.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fabwrapper {\n  display: inline-block;\n  position: fixed;\n  width: 56px;\n  height: 56px;\n  margin: 300px 0 0 -28px;\n  right: 5vw;\n  bottom: 5vh; }\n\n.action-button {\n  position: absolute;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  border: 0;\n  outline: 0;\n  font-size: 20px;\n  color: white;\n  z-index: 1000;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  transition: all .3s;\n  cursor: pointer; }\n\n.action-button:hover, .actions li a:hover {\n  -webkit-transform: scale(1.1);\n          transform: scale(1.1); }\n\n.actions {\n  position: absolute;\n  list-style: none inside none;\n  margin: 0 0 0 0;\n  padding: 0;\n  width: auto;\n  float: left;\n  background-color: transparent;\n  top: 8px;\n  left: 8px;\n  z-index: 1;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%; }\n\n.actions li {\n  position: absolute;\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);\n  margin: 0;\n  background: #212121;\n  color: #ffffff;\n  transition: all .3s;\n  -webkit-transform: scale(0.3);\n  transform: scale(0.3); }\n\n.actions li:nth-child(1) {\n  background: #ff9800; }\n\n.actions li:nth-child(2) {\n  background: #2196F3; }\n\n.actions li:nth-child(3) {\n  background: #FFEB3B; }\n\n.actions li:nth-child(4) {\n  background: #E91E63; }\n\n.actions li:nth-child(5) {\n  background: #4CAF50; }\n\n.actions li a {\n  background: inherit;\n  color: inherit;\n  display: block;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  line-height: 40px;\n  text-align: center; }\n\n.actions li:active {\n  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2); }\n\n.action-button.active {\n  box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24); }\n\n.action-button.active ~ .actions li {\n  transition: all .3s;\n  -webkit-transform: scale(1);\n  transform: scale(1); }\n\n.action-button.active ~ .actions li:nth-child(1) {\n  margin-top: -56px; }\n\n.action-button.active ~ .actions li:nth-child(2) {\n  margin-top: -104px; }\n\n.action-button.active ~ .actions li:nth-child(3) {\n  margin-top: -152px; }\n\n.action-button.active ~ .actions li:nth-child(4) {\n  margin-top: -200px; }\n\n.action-button.active ~ .actions li:nth-child(5) {\n  margin-top: -248px; }\n\n.action-button span {\n  transition: all .3s; }\n"

/***/ }),

/***/ "./src/app/dashboard/floatbutton/floatbutton.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/floatbutton/floatbutton.component.ts ***!
  \****************************************************************/
/*! exports provided: FloatbuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloatbuttonComponent", function() { return FloatbuttonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FloatbuttonComponent = /** @class */ (function () {
    function FloatbuttonComponent() {
    }
    FloatbuttonComponent.prototype.ngOnInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_1__('.action-button').on('click', function () {
            jquery__WEBPACK_IMPORTED_MODULE_1__(this).toggleClass('active');
        });
    };
    FloatbuttonComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-floatbutton',
            template: __webpack_require__(/*! ./floatbutton.component.html */ "./src/app/dashboard/floatbutton/floatbutton.component.html"),
            styles: [__webpack_require__(/*! ./floatbutton.component.scss */ "./src/app/dashboard/floatbutton/floatbutton.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FloatbuttonComponent);
    return FloatbuttonComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/meal-plan/meal-plan.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/meal-plan/meal-plan.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  meal-plan works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/meal-plan/meal-plan.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/meal-plan/meal-plan.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/meal-plan/meal-plan.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/meal-plan/meal-plan.component.ts ***!
  \************************************************************/
/*! exports provided: MealPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MealPlanComponent", function() { return MealPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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



var MealPlanComponent = /** @class */ (function () {
    function MealPlanComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
    }
    MealPlanComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.route.snapshot.data['title']);
    };
    MealPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meal-plan',
            template: __webpack_require__(/*! ./meal-plan.component.html */ "./src/app/dashboard/meal-plan/meal-plan.component.html"),
            styles: [__webpack_require__(/*! ./meal-plan.component.scss */ "./src/app/dashboard/meal-plan/meal-plan.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], MealPlanComponent);
    return MealPlanComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/myfitnesspal/myfitnesspal.component.html":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/myfitnesspal/myfitnesspal.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  myfitnesspal works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/myfitnesspal/myfitnesspal.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/dashboard/myfitnesspal/myfitnesspal.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/myfitnesspal/myfitnesspal.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/myfitnesspal/myfitnesspal.component.ts ***!
  \******************************************************************/
/*! exports provided: MyfitnesspalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyfitnesspalComponent", function() { return MyfitnesspalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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



var MyfitnesspalComponent = /** @class */ (function () {
    function MyfitnesspalComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
    }
    MyfitnesspalComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.route.snapshot.data['title']);
    };
    MyfitnesspalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-myfitnesspal',
            template: __webpack_require__(/*! ./myfitnesspal.component.html */ "./src/app/dashboard/myfitnesspal/myfitnesspal.component.html"),
            styles: [__webpack_require__(/*! ./myfitnesspal.component.scss */ "./src/app/dashboard/myfitnesspal/myfitnesspal.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], MyfitnesspalComponent);
    return MyfitnesspalComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adjustment\">\n  <div class=\"card card-cascade narrower\">\n\n  <!-- Card image -->\n  <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n    <img class=\"card-img-top\" [src]=\"googledata.imgsrc\" alt=\"Card image\">\n    <a>\n      <div class=\"mask rgba-white-slight\"></div>\n    </a>\n  </div>\n\n  <!-- Card content -->\n  <div class=\"card-body card-body-cascade\">\n\n    <!-- Title -->\n    <h4 class=\"card-title text-center\">Welcome {{googledata.fname}}</h4>\n    <!-- Text -->\n    <form [formGroup]=\"ProfileFormData\" (ngSubmit)=\"SaveProfile()\">\n      <div class=\"row\">\n        <div class=\"col-8\">\n          <div class=\"md-form\">\n            <i class=\"fa fa-balance-scale prefix grey-text\" [ngClass]=\"{'icon-success': ProfileFormData.get('weight').valid, 'icon-invalid': (ProfileFormData.get('weight').invalid && ProfileFormData.get('weight').touched) }\"></i>\n            <input type=\"number\" id=\"weight\" class=\"form-control\"  formControlName=\"weight\" >\n            <label for=\"weight\">Enter your bodyweight</label>\n        </div>\n        </div>\n        <div class=\"btn-group col-4\" data-toggle=\"buttons\">\n          <button class=\"btn btn-default gradient1 form-check-label weightlabel waves-light\" mdbWavesEffect *ngFor=\"let unit of weightunit; let i = index\" (click)=\"ConvertWeight(i+1)\" [ngClass]=\"{'active': ProfileFormData.get('weightunit').value == i+1 }\"> \n              <input class=\"form-check-input\" type=\"radio\" name=\"weightunit\" formControlName=\"weightunit\" [value]=\"i+1\" > {{unit}}\n          </button>\n        </div>\n      </div>\n      <div class=\"md-form\">\n        <i class=\"fa fa-balance-scale prefix grey-text\" [ngClass]=\"{'icon-success': ProfileFormData.get('age').valid, 'icon-invalid': (ProfileFormData.get('age').invalid && ProfileFormData.get('age').touched) }\"></i>\n        <input type=\"number\" id=\"age\" class=\"form-control\"  formControlName=\"age\" >\n        <label for=\"age\">How Young are you?</label>\n      </div>\n      <div class=\"row\">\n        <div class=\"md-form col-8\">\n          <i class=\"fa fa-envelope prefix grey-text\" [ngClass]=\"{'icon-success': ProfileFormData.get('email').pristine,  'icon-invalid': ProfileFormData.get('email').dirty }\"></i>\n          <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" >\n          <label for=\"email\">Enter your email</label> \n        </div>\n\n        <div class=\"md-form col-4\">\n            <i class=\"fa fa-venus-mars prefix grey-text\" [ngClass]=\"{'icon-success': ProfileFormData.get('gender').pristine,  'icon-invalid': ProfileFormData.get('gender').dirty }\"></i>\n            <input type=\"text\" id=\"gender\" class=\"form-control\" formControlName=\"gender\" >\n            <label for=\"gender\">Gender</label> \n        </div>\n     </div>\n    <div class=\"md-form\">\n        <div class=\"dropdown\" id=\"goal\">\n            <input type=\"number\" hidden formControlName=\"goal\"  id=\"goalinput\">\n            <p class=\"selected\"><span>Select Your Goal</span> <i class=\"fa fa-caret-down\"></i></p>\n            <ul class=\"dropdown-list\">\n                <li *ngFor=\"let goal of goals; let i=index\" (click)=\"GoalValue(i+1)\">{{goal}}</li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"row rb-row\">\n      <div class=\"col-12\">Your Experience Level -</div>\n      <div class=\"btn-group mx-auto\" data-toggle=\"buttons\">\n          <label class=\"btn btn-default gradient1 form-check-label waves-light explabel\" triggers=\"mouseenter:mouseleave\" mdbWavesEffect *ngFor=\"let exp of experience; let i = index\" [ngClass]=\"{'active': ProfileFormData.get('experience').value == i+1 }\" [mdbPopover]=\"exp.desc\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"experience\" formControlName=\"experience\" [value]=\"i+1\" > {{exp.name}}\n          </label>\n      </div>\n    </div>\n    <div class=\"row rb-row\">\n        <div class=\"col-12\">Your Activity Level -</div>\n        <div class=\"btn-group mx-auto\" data-toggle=\"buttons\">\n            <label class=\"btn btn-default gradient1 form-check-label waves-light actlabel\" triggers=\"mouseenter:mouseleave\" mdbWavesEffect *ngFor=\"let activity of lifestyle; let i = index\" [ngClass]=\"{'active': ProfileFormData.get('lifestyle').value == i+1 }\" [mdbPopover]=\"activity.desc\">\n                <input class=\"form-check-input\" type=\"radio\" name=\"lifestyle\" formControlName=\"lifestyle\" [value]=\"i+1\" > {{activity.name}}\n            </label>\n        </div>\n      </div>\n    <div class=\"row\">\n      <div class=\"col-8\" *ngIf=\"ProfileFormData.get('heightunit').value == 1\">\n      <div class=\"md-form \">\n          <i class=\"fa fa-user prefix grey-text\" [ngClass]=\"{'icon-success': ProfileFormData.get('heightcm').valid, 'icon-invalid': (ProfileFormData.get('heightcm').invalid && ProfileFormData.get('heightcm').touched) }\"></i>\n          <input type=\"number\" id=\"height\" class=\"form-control\" formControlName=\"heightcm\" >\n          <label for=\"height\">Enter your height</label>\n      </div>\n      </div>\n        <div class=\"col-4\" *ngIf=\"ProfileFormData.get('heightunit').value == 2\">\n            <div class=\"md-form \">\n                <i class=\"fa fa-user prefix grey-text\" [ngClass]=\"{'icon-success': ProfileFormData.get('heightfeet').valid, 'icon-invalid': (ProfileFormData.get('heightfeet').invalid && ProfileFormData.get('heightfeet').touched) }\"></i>\n                <input type=\"number\" id=\"height\" class=\"form-control\" formControlName=\"heightfeet\" >\n                <label for=\"height\">Height in feets</label>\n            </div>\n        </div>\n        <div class=\"col-4\" *ngIf=\"ProfileFormData.get('heightunit').value == 2\">\n            <div class=\"md-form \">\n                <i class=\"fa fa-user prefix grey-text\" [ngClass]=\"{'icon-success': ProfileFormData.get('heightinch').valid, 'icon-invalid': (ProfileFormData.get('heightinch').invalid && ProfileFormData.get('heightinch').touched) }\"></i>\n                <input type=\"number\" id=\"height\" class=\"form-control\" formControlName=\"heightinch\" >\n                <label for=\"height\">inches</label>\n            </div>\n        </div>\n      <div class=\"btn-group col-4\" data-toggle=\"buttons\">\n          <button class=\"btn btn-default gradient1 form-check-label heightlabel waves-light\" mdbWavesEffect *ngFor=\"let unit of heightunit; let i = index\" (click)=\"ConvertHeight(i+1)\" [ngClass]=\"{'active': ProfileFormData.get('heightunit').value == i+1 }\"> \n              <input class=\"form-check-input\" type=\"radio\" name=\"heightunit\" formControlName=\"heightunit\" [value]=\"i+1\" > {{unit}}\n          </button>\n      </div>\n    </div>\n    <div class=\"text-center mt-4\">\n      <button type=\"submit\" class=\"btn btn-indigo gradient1 waves-light\" mdbWavesEffect [disabled]=\"!ProfileFormData.valid\">Save Details</button>\n    </div>\n    </form>\n  </div>\n\n</div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adjustment {\n  padding: 5vh 10vw; }\n\n.card.card-cascade.narrower .view.view-cascade {\n  margin-left: 37% !important;\n  margin-right: 37% !important;\n  margin-top: -7rem !important; }\n\n.card.card-cascade.narrower {\n  margin-top: 6rem !important; }\n\n.card-body {\n  margin-left: 9% !important;\n  margin-right: 9% !important; }\n\ndiv.view {\n  border-radius: 50% !important; }\n\n.weightlabel, .heightlabel {\n  margin: 1.5rem 0; }\n\n.dropdown {\n  position: relative;\n  width: 100%;\n  background: white;\n  display: block;\n  margin: 0 auto; }\n\n.dropdown .selected {\n    display: block;\n    padding: 1rem;\n    cursor: pointer;\n    transition: all .2s ease-in-out;\n    border-bottom: 1px solid #bdbdbd; }\n\n.dropdown .selected i {\n      position: absolute;\n      right: 0.5rem; }\n\n.dropdown .selected:hover {\n      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important; }\n\n.dropdown .dropdown-list {\n    position: absolute;\n    top: 0;\n    z-index: 10;\n    width: 100%;\n    max-height: 0;\n    list-style-type: none;\n    padding: 0;\n    margin: 0;\n    background: white;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;\n    opacity: 0;\n    visibility: hidden;\n    overflow: hidden;\n    -webkit-transform: translateY(0%);\n            transform: translateY(0%);\n    transition: all 0.3s cubic-bezier(0.17, 0.67, 0, 1); }\n\n.dropdown .dropdown-list li {\n      padding: 1rem;\n      display: block;\n      cursor: pointer;\n      transition: all 200ms ease;\n      z-index: 1000; }\n\n.dropdown .dropdown-list li:hover, .dropdown .dropdown-list li.selectactive {\n        background: rgba(63, 81, 181, 0.1); }\n\n.dropdown .dropdown-list.selectactive {\n      opacity: 1;\n      visibility: visible;\n      -webkit-transform: translateY(0%);\n              transform: translateY(0%);\n      max-height: 260px;\n      overflow: auto; }\n\ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  margin: 0; }\n\ninput[type=radio] {\n  display: none; }\n\n#weight:focus + label, #age:focus + label, #height:focus + label, #weight.ng-valid + label, #weight.ng-invalid.ng-touched + label, #age.ng-invalid.ng-touched + label, #age.ng-valid + label, #height.ng-valid + label, #email + label, #gender + label {\n  -webkit-transform: translateY(-120%);\n          transform: translateY(-120%);\n  font-size: 0.8rem; }\n\nul::-webkit-scrollbar {\n  width: 5px;\n  height: 5px; }\n\nul::-webkit-scrollbar-thumb {\n  background: rgba(0, 0, 0, 0.7); }\n\n.btn {\n  transition: 0.3s;\n  padding: 0.64rem 1.7rem; }\n\nbutton.active, label.active, .btn-default:not([disabled]):not(.disabled).active {\n  background: linear-gradient(40deg, #10465a, #1d286f) !important; }\n\n.btn-default:hover {\n  background: linear-gradient(40deg, #2ba5d1, #2838a0) !important; }\n\n#weight.ng-valid, #age.ng-valid, #height.ng-valid, #email.ng-untouched, #gender.ng-untouched, #goalinput.ng-valid + p.selected {\n  border-bottom: 2px solid #13b649; }\n\n#height.ng-valid + label, #age.ng-valid + label, #weight.ng-valid + label, .icon-success, #email.ng-untouched + label, #gender.ng-untouched + label {\n  color: #13b649 !important; }\n\n.md-form .prefix {\n  top: 0.5rem;\n  font-size: 1.25rem; }\n\ninput[type=number].ng-invalid.ng-touched, #email.ng-dirty, #gender.ng-dirty {\n  border-bottom: 2px solid #ff3f3f; }\n\ninput[type=number].ng-invalid.ng-touched + label, #email.ng-dirty + label, #gender.ng-dirty + label, .icon-invalid {\n  color: #ff3f3f !important; }\n\nbutton.btn-indigo {\n  border-radius: 2em; }\n\nbutton.weightlabel:first-child, button.heightlabel:first-child, label.form-check-label:first-child {\n  border-radius: 2em 0 0 2em; }\n\nbutton.weightlabel:last-child, button.heightlabel:last-child, .explabel:nth-child(3), .actlabel:nth-child(4) {\n  border-radius: 0 2em 2em 0 !important; }\n\n.rb-row {\n  margin: 1.5rem 0px; }\n"

/***/ }),

/***/ "./src/app/dashboard/profile/profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/profile/profile.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-interaction.service */ "./src/app/services/local-interaction.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
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
    function ProfileComponent(route, titleService, LocalInteractionService) {
        this.route = route;
        this.titleService = titleService;
        this.LocalInteractionService = LocalInteractionService;
        this.experience = [{ name: 'Beginner', desc: 'Little to no experience in gym. Just started your fitness journey. 😊' },
            { name: 'Intermediate', desc: 'Been working out consistently for 1-3 years. Intermediate knowledge about health and fitness 💪' },
            { name: 'Advanced', desc: 'Been working out consistently for 3+ years. You know your shit! 🏋' }
        ];
        this.lifestyle = [{ name: 'Sedentary', desc: 'Spend most of the day sitting (E.g. Desk Job, Developer 🤓)' },
            { name: 'Lightly Active', desc: 'Spend good part of the day on your feet (E.g. College Student )/ Exercise 2-3 times a week' },
            { name: 'Active', desc: 'Spend good part of the day doing physical activity / Exercise 5-6 times a week' },
            { name: 'Highly Active', desc: 'Spend most of the day doing heavy physical activity / Intense exercise daily' },
        ];
        this.weightunit = ['Kgs', 'Lbs'];
        this.heightunit = ['cms', 'ft'];
        this.goals = ['Lose 1 kg per week', 'Lose 0.5 kg per week', 'Lose 0.25 kg per week', 'Maintain Current Weight', 'Gain 0.25 kg per week', 'Gain 0.5 kg per week'];
    }
    ProfileComponent.prototype.SaveProfile = function () {
        console.log(this.ProfileFormData.value);
        this.LocalInteractionService.SetProfile(this.ProfileFormData.value);
    };
    ProfileComponent.prototype.ConvertWeight = function (unit) {
        console.log(this.ProfileFormData.value.weightunit);
        if (this.ProfileFormData.get('weightunit').value === unit) {
            console.log('nothing is changed');
        }
        else if (unit == 2 && this.ProfileFormData.value.weightunit == 1) {
            this.ProfileFormData.patchValue({ weight: Math.round(220.46226218 * this.ProfileFormData.get('weight').value) / 100 });
            this.ProfileFormData.patchValue({ weightunit: 2 });
            console.log(this.ProfileFormData.get('weight').value);
            console.log(this.ProfileFormData.get('weightunit').value);
        }
        else {
            this.ProfileFormData.patchValue({ weight: Math.round(this.ProfileFormData.get('weight').value * 100 / 2.2046226218) / 100 });
            this.ProfileFormData.patchValue({ weightunit: 1 });
            console.log(this.ProfileFormData.get('weight').value);
            console.log(this.ProfileFormData.get('weightunit').value);
        }
    };
    ProfileComponent.prototype.ConvertHeight = function (unit) {
        console.log(this.ProfileFormData.value.weightunit);
        if (this.ProfileFormData.get('heightunit').value === unit) {
            console.log('nothing is changed');
        }
        else if (unit == 2 && this.ProfileFormData.value.weightunit == 1) {
            this.ProfileFormData.removeControl('heightcm');
            this.ProfileFormData.addControl('heightinch', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
            this.ProfileFormData.addControl('heightfeet', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
            this.ProfileFormData.patchValue({ heightunit: 2 });
        }
        else {
            // this.ProfileFormData.patchValue({weight: Math.round(this.ProfileFormData.get('weight').value*100/2.2046226218)/100 });
            this.ProfileFormData.removeControl('heightfeet');
            this.ProfileFormData.removeControl('heightinch');
            this.ProfileFormData.addControl('heightcm', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required));
            this.ProfileFormData.patchValue({ heightunit: 1 });
        }
    };
    ProfileComponent.prototype.GoalValue = function (goal) {
        this.ProfileFormData.patchValue({ goal: goal });
    };
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle(this.route.snapshot.data['title']);
        this.LocalInteractionService.GoogleObservable
            .subscribe(function (message) {
            _this.googledata = message;
        });
        this.ProfileFormData = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'weight': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(20)]),
            'weightunit': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1),
            'age': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(15)]),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.googledata.email, disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.googledata.gender, disabled: true }),
            'goal': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'experience': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'lifestyle': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'heightunit': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](1),
            'heightcm': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        console.log(this.ProfileFormData);
    };
    ProfileComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        var selected = jquery__WEBPACK_IMPORTED_MODULE_5__('.selected');
        var dropdown = jquery__WEBPACK_IMPORTED_MODULE_5__('.dropdown-list');
        var optionList = jquery__WEBPACK_IMPORTED_MODULE_5__('.dropdown-list li');
        selected.click(function () {
            dropdown.toggleClass('selectactive');
            if (dropdown.hasClass('selectactive')) {
                optionList.click(function () {
                    if (optionList.hasClass('selectactive')) {
                        jquery__WEBPACK_IMPORTED_MODULE_5__(this).siblings().removeClass('selectactive');
                    }
                    else {
                        jquery__WEBPACK_IMPORTED_MODULE_5__(this).addClass('selectactive');
                    }
                    dropdown.removeClass('selectactive');
                    selected.children('span').html(jquery__WEBPACK_IMPORTED_MODULE_5__(this).html());
                });
            }
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/dashboard/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/dashboard/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_3__["LocalInteractionService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Sidebar -->\n<div class=\"sidebar-fixed position-fixed\" ngsRevealSet [ngsInterval]=\"100\" [ngsSelector]=\"'.list-group-item'\">\n\n  <div class=\"list-group list-group-flush\">\n\n    <div id=\"profile\">\n      <a routerLink=\"profile\" routerLinkActive=\"active gradient1\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n        <img src=\"../../../assets/images/dp.jpg\" class=\"rounded-circle img-responsive z-depth-2\">\n        Welcome {{name}}\n      </a>\n    </div>\n\n      <a routerLink=\"home\" routerLinkActive=\"active gradient2\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n          <i class=\"fa fa-home mr-3\"></i>Home</a>\n      <a routerLink=\"calculator\" routerLinkActive=\"active gradient3\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n          <i class=\"fa fa-calculator mr-3\"></i>Calorie Calculator</a>\n      <a routerLink=\"mealplan\" routerLinkActive=\"active gradient4\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n          <i class=\"fa fa-heartbeat mr-3\"></i>Meal Plan Generator</a>\n      <a routerLink=\"workout\" routerLinkActive=\"active gradient5\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n        <i class=\"fa fa-book mr-3\"></i>Free Workout Plans</a>\n       <a routerLink=\"blog\" routerLinkActive=\"active gradient3\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n        <i class=\"fa fa-rss mr-3\"></i>Alpha Aesthetics Blog</a>\n      <a routerLink=\"myfitnesspal\" routerLinkActive=\"active gradient1\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n        <i class=\"fa fa-pie-chart mr-3\"></i>Myfitnesspal Insights</a>\n\n      <a routerLink=\"training\" routerLinkActive=\"active gradient2\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n        <i class=\"fa fa-user-md mr-3\"></i>Personal Training</a>\n        <a routerLink=\"youtube\" routerLinkActive=\"active gradient6\" class=\"list-group-item list-group-item-action  waves-light\" mdbWavesEffect>\n          <i class=\"fa fa-youtube mr-3\"></i>Youtube Channel</a>\n  </div>\n\n</div>\n<!-- Sidebar -->"

/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidebar-fixed {\n  height: 100vh;\n  width: 20vw;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  background-color: #fff;\n  padding: 1.5rem;\n  padding-top: 0;\n  position: fixed;\n  top: 0;\n  left: 0;\n  padding-top: 9vh; }\n\n.sidebar-fixed .list-group .active {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  border: none; }\n\n.sidebar-fixed .logo-wrapper {\n  padding: 1.5rem;\n  width: 100%; }\n\n.sidebar-fixed .logo-wrapper img {\n  max-height: 100px;\n  width: 100%; }\n\na img.rounded-circle {\n  width: 42%;\n  display: block;\n  margin: 0 auto;\n  margin-bottom: 1rem; }\n\n#profile a {\n  text-align: center; }\n\n.list-group-item {\n  font-size: 0.9em; }\n"

/***/ }),

/***/ "./src/app/dashboard/sidebar/sidebar.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/sidebar/sidebar.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
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

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
        this.name = 'Ayush';
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/dashboard/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/dashboard/sidebar/sidebar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/training/training.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard/training/training.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  training works!\n</p>\n"

/***/ }),

/***/ "./src/app/dashboard/training/training.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard/training/training.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/training/training.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/training/training.component.ts ***!
  \**********************************************************/
/*! exports provided: TrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingComponent", function() { return TrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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



var TrainingComponent = /** @class */ (function () {
    function TrainingComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
    }
    TrainingComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.route.snapshot.data['title']);
    };
    TrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-training',
            template: __webpack_require__(/*! ./training.component.html */ "./src/app/dashboard/training/training.component.html"),
            styles: [__webpack_require__(/*! ./training.component.scss */ "./src/app/dashboard/training/training.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], TrainingComponent);
    return TrainingComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/workout/workout-table/workout-table.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/workout/workout-table/workout-table.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adjustment\">\n    <div class=\"card card-cascade narrower\">\n\n    <!-- Card image -->\n    <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n      <img class=\"card-img-top\" [src]=\"workoutObj.image\" alt=\"Card image\">\n      <a>\n        <div class=\"mask rgba-white-slight\"></div>\n      </a>\n    </div>\n  \n    <!-- Card content -->\n    <div class=\"card-body card-body-cascade\">\n\n      <!-- Title -->\n      <h1 class=\"card-title\">{{workoutObj.title}}</h1>\n      <hr>\n      <p class=\"card-text\">\n        {{workoutObj.description}}\n      </p>\n      <hr>\n        <div class=\"card-text\" *ngFor=\"let workoutarray of workoutObj.workout; let i=index\">\n          <div *ngFor=\"let dayarray of workoutarray; let j= index;\"> \n            <ng-container *ngIf=\"dayarray.name; else elseTemplate\">\n                <h2>Day {{i+1}} - {{dayarray.name}} </h2>\n            </ng-container>\n            <ng-template #elseTemplate>\n                <div class=\"table-responsive\">\n                    <table class=\"table table-hover table-striped\" >\n                        <thead class=\"text-white\" [ngClass]=\"'gradient'+(i+1)\">\n                            <tr>\n                                <th>S. No.</th>\n                                <th>Exercise</th>\n                                <th>No. of Sets</th>\n                                <th>No. of Reps</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let exercises of dayarray; let k=index\">\n                                  <td *ngIf=\"exercises.exercise === 'Rest Day'; else work\" colspan=\"4\" class=\"text-center\">{{exercises.exercise}}</td>\n                              <ng-template #work>\n                                <td scope=\"row\">{{k+1}}</td>\n                                <td>{{exercises.exercise}}</td>\n                                <td>{{exercises.sets}}</td>\n                                <td>{{exercises.reps}}</td>\n                              </ng-template>\n                            </tr>\n                        </tbody>\n                    </table>\n                  </div>\n            </ng-template>\n\n      </div>\n\n      </div>\n      <hr>\n      <p class=\"card-text\">\n          <b>IMPORTANT NOTE:</b> It is advised to do a 10 minute warm-up before starting the workouts.\n          Warm up may include 5 minute walking on treadmill, pushups, pullups/chinups, internal roations, etc.\n          If you have a cardio session for the day, <b>Do cardio session after workout!</b>.\n          <b>On rest days</b>, It is advised to follow same diet regime as on training days. \n          Maintain an active lifestyle for best results.\n          Keep in mind that workout alone is not sufficient for achieving goals, A proper goal oriented diet and meal plan is recommended to be followed.\n          Please refer to our Calorie Calculator and Meal Plan Generator for the above.\n        </p>\n    </div>\n  \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/workout/workout-table/workout-table.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/dashboard/workout/workout-table/workout-table.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".adjustment {\n  padding: 5vh 10vw; }\n\n.card.card-cascade.narrower .view.view-cascade {\n  margin-left: 10% !important;\n  margin-right: 10% !important;\n  margin-top: -2.25rem !important; }\n\n.card.card-cascade.narrower {\n  margin-top: 2.25rem !important; }\n\ntable th, table td {\n  font-weight: 400 !important; }\n\nh1, h2 {\n  font-weight: 200 !important;\n  text-align: center;\n  text-transform: uppercase; }\n\n.card .card-body .card-text {\n  color: #313131; }\n"

/***/ }),

/***/ "./src/app/dashboard/workout/workout-table/workout-table.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/dashboard/workout/workout-table/workout-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: WorkoutTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutTableComponent", function() { return WorkoutTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkoutTableComponent = /** @class */ (function () {
    function WorkoutTableComponent(route) {
        this.route = route;
    }
    WorkoutTableComponent.prototype.ngOnInit = function () {
        this.workoutObj = JSON.parse(this.route.snapshot.queryParams.param);
        console.log(this.workoutObj);
    };
    WorkoutTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workout-table',
            template: __webpack_require__(/*! ./workout-table.component.html */ "./src/app/dashboard/workout/workout-table/workout-table.component.html"),
            styles: [__webpack_require__(/*! ./workout-table.component.scss */ "./src/app/dashboard/workout/workout-table/workout-table.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], WorkoutTableComponent);
    return WorkoutTableComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/workout/workout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/workout/workout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row adjustment\">\n    <div class=\"col-md-4 col-12 align-items-stretch d-flex\" *ngFor=\"let workoutdata of workoutarray; let i= index\" [ngsReveal]=\"{delay: i*200 }\" >\n      <app-workoutcard class=\"d-flex\" [workoutObj]=\"workoutdata\"></app-workoutcard>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/dashboard/workout/workout.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/workout/workout.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/workout/workout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/workout/workout.component.ts ***!
  \********************************************************/
/*! exports provided: WorkoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutComponent", function() { return WorkoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/local-interaction.service */ "./src/app/services/local-interaction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkoutComponent = /** @class */ (function () {
    function WorkoutComponent(route, titleService, LocalInteractionService) {
        this.route = route;
        this.titleService = titleService;
        this.LocalInteractionService = LocalInteractionService;
    }
    WorkoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle(this.route.snapshot.data['title']);
        this.LocalInteractionService.WorkoutObservable
            .subscribe(function (message) {
            _this.workoutarray = message;
            console.log(_this.workoutarray);
        });
    };
    WorkoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workout',
            template: __webpack_require__(/*! ./workout.component.html */ "./src/app/dashboard/workout/workout.component.html"),
            styles: [__webpack_require__(/*! ./workout.component.scss */ "./src/app/dashboard/workout/workout.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"], _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_3__["LocalInteractionService"]])
    ], WorkoutComponent);
    return WorkoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/workout/workoutcard/workoutcard.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/workout/workoutcard/workoutcard.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-cascade narrower\">\n\n    <!-- Card image -->\n    <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\n        <img class=\"card-img-top\" [src]=\"workoutObj.image\" alt=\"Card image\">\n        <a>\n        <div class=\"mask rgba-white-slight\"></div>\n      </a>\n    </div>\n  \n    <!-- Card content -->\n    <div class=\"card-body card-body-cascade\">\n  \n      <!-- Title -->\n      <h4 class=\"card-title\">{{workoutObj.title}}</h4>\n      <!-- Text -->\n      <ul class=\"card-text\" *ngFor=\"let feature of workoutObj.features\">\n          <li>{{feature}}</li>\n      </ul>\n      <!-- Button -->\n      <a class=\"btn btn-elegant waves-light\" mdbWavesEffect [routerLink]=\"workoutObj.route\" [queryParams]=\"{param: workoutTableParam}\" [skipLocationChange]=\"true\">Use Routine <i class=\"fa fa-angle-double-right\"></i>\n      </a>\n  \n    </div>\n  \n  </div>"

/***/ }),

/***/ "./src/app/dashboard/workout/workoutcard/workoutcard.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/dashboard/workout/workoutcard/workoutcard.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn {\n  border-radius: 10em;\n  font-weight: 400; }\n\n.waves-effect {\n  z-index: 0; }\n"

/***/ }),

/***/ "./src/app/dashboard/workout/workoutcard/workoutcard.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/workout/workoutcard/workoutcard.component.ts ***!
  \************************************************************************/
/*! exports provided: WorkoutcardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkoutcardComponent", function() { return WorkoutcardComponent; });
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

var WorkoutcardComponent = /** @class */ (function () {
    function WorkoutcardComponent() {
    }
    WorkoutcardComponent.prototype.ngOnInit = function () {
        this.workoutTableParam = JSON.stringify(this.workoutObj);
        console.log(this.workoutTableParam);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], WorkoutcardComponent.prototype, "workoutObj", void 0);
    WorkoutcardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-workoutcard',
            template: __webpack_require__(/*! ./workoutcard.component.html */ "./src/app/dashboard/workout/workoutcard/workoutcard.component.html"),
            styles: [__webpack_require__(/*! ./workoutcard.component.scss */ "./src/app/dashboard/workout/workoutcard/workoutcard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WorkoutcardComponent);
    return WorkoutcardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/youtube/youtube.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/youtube/youtube.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"adjustment\">\r\n    <div class=\"card card-cascade\" [ngsReveal]=\"{ delay: 200 }\" >\r\n\r\n        <!-- Card image -->\r\n        <div class=\"view view-cascade overlay waves-light\" mdbWavesEffect>\r\n                <iframe class=\"youtubeframe\" src=\"http://www.youtube.com/embed?max-results=1&controls=0&showinfo=0&rel=0&listType=user_uploads&list=TheBodybuildingindia\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\r\n        </div>\r\n    \r\n        <!-- Card content -->\r\n        <div class=\"card-body card-body-cascade\">\r\n  \r\n        <!-- Title -->\r\n        <h4 class=\"card-title text-center\"><i class=\"fa fa-youtube\"></i> My Journey so far!</h4>\r\n        </div>\r\n    \r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/dashboard/youtube/youtube.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dashboard/youtube/youtube.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card.card-cascade .view.view-cascade {\n  box-shadow: none; }\n\n.card {\n  width: 50vw;\n  margin: 0 auto; }\n\n.youtubeframe {\n  height: 450px;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/dashboard/youtube/youtube.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dashboard/youtube/youtube.component.ts ***!
  \********************************************************/
/*! exports provided: YoutubeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeComponent", function() { return YoutubeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
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



var YoutubeComponent = /** @class */ (function () {
    function YoutubeComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
    }
    YoutubeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.route.snapshot.data['title']);
    };
    YoutubeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-youtube',
            template: __webpack_require__(/*! ./youtube.component.html */ "./src/app/dashboard/youtube/youtube.component.html"),
            styles: [__webpack_require__(/*! ./youtube.component.scss */ "./src/app/dashboard/youtube/youtube.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], YoutubeComponent);
    return YoutubeComponent;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"parallaxdoodle\">\n  <li class=\"layer\" data-depth=\"0.20\" ><div id=\"doodlelayer\"></div></li>\n</ul>\n\n<div class=\"container\">\n  <ul id=\"parallax\">\n    <li class=\"layer\" data-depth=\"1.00\"><img src=\"../../assets/images/404/404-01.png\"></li>\n    <li class=\"layer\" data-depth=\"0.60\"><img src=\"../../assets/images/404/shadows-01.png\"></li>\n    <li class=\"layer\" data-depth=\"0.30\"><img src=\"../../assets/images/404/monster-01.png\"></li>\n    <li class=\"layer\" data-depth=\"0.40\"><img src=\"../../assets/images/404/monster-01-trail.png\"></li>\n    <li class=\"layer\" data-depth=\"0.50\"><img src=\"../../assets/images/404/text-01.png\"></li>\n    <li class=\"layer\" data-depth=\"0.25\"><img src=\"../../assets/images/404/monster-eyes-01.png\"></li>\n  </ul>\n  <a routerLink=\"/\" class=\"btn btn-outline-primary\" mdbWavesEffect>Back to home 😏</a>\n</div>"

/***/ }),

/***/ "./src/app/error-page/error-page.component.scss":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img {\n  display: block;\n  width: 100%; }\n\n.container h1 {\n  font-weight: normal;\n  font-size: 24px; }\n\n.container {\n  text-align: center;\n  max-width: 1000px;\n  padding-top: 5vh; }\n\na.btn {\n  border-color: black !important;\n  color: black !important;\n  font-weight: bold; }\n\na.btn:hover {\n  background-color: rgba(0, 0, 0, 0.1) !important; }\n"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! parallax-js */ "./node_modules/parallax-js/dist/parallax.js");
/* harmony import */ var parallax_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(parallax_js__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle(this.route.snapshot.data['title']);
        var scene = document.getElementById('parallax');
        var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_3___default.a(scene);
        var scene2 = document.getElementById('parallaxdoodle');
        var parallaxInstance = new parallax_js__WEBPACK_IMPORTED_MODULE_3___default.a(scene2);
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.scss */ "./src/app/error-page/error-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SMOOTH SCROLL, INTERNAL PAGINATION SLIDE OUT-->\n<div id=\"parallaxdoodle\">\n<div class=\"layer\" data-depth=\"0.40\"><div id=\"doodlelayer\"></div></div>\n</div>\n\n        \n    <!--Modal: Login-->\n    <div mdbModal #login=\"mdb-modal\" class=\"modal fade\" id=\"modallogin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog cascading-modal\" role=\"document\">\n                <!--Content-->\n                <div class=\"modal-content\">\n    \n                    <!--Header-->\n                    <div class=\"modal-header gradient5 white-text waves-light\" mdbWavesEffect>\n                        <h4 class=\"title\"><i class=\"fa fa-sign-in\"></i> LOGIN TO CONTINUE</h4>\n                        <button type=\"button\" class=\"close waves-light\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"login.hide()\">\n                            <span aria-hidden=\"true\">×</span>\n                        </button>\n                    </div>\n                    <!--Body-->\n                    <div class=\"modal-body\">\n                        \n                        <a href=\"#\" class=\"btn btn-block btn-lg btn-primary waves-light\" style=\"margin-bottom: 2rem;\" mdbWavesEffect>\n                            <i class=\"fa fa-facebook\"></i> \n                            Login with facebook\n                        </a>\n                        <a href=\"/auth/google\" target=\"_blank\" class=\"btn btn-block btn-lg btn-danger waves-light\" mdbWavesEffect>\n                            <i class=\"fa fa-google-plus\"></i> \n                            Login with google\n                        </a>\n    \n                    </div>\n                </div>\n                <!--/.Content-->\n            </div>\n        </div>\n        <!--Modal-->\n<div id=\"fullpage\">\n\n    <div class=\"container section\" [ngsReveal]=\"{ reset: true }\" id=\"landing\" [ngsRevealSet]=\"{ reset:true }\" [ngsInterval]=\"100\" [ngsSelector]=\"'.item'\">\n        <h1 class=\"adjustmenttext\"></h1>\n        <img src=\"../../assets/images/LOGO-small.svg\" id=\"landinglogo\" class=\"item\">\n        <h1 id=\"landingtitle1\" class=\"item\">ALPHA</h1>\n        <h1 id=\"landingtitle2\" class=\"item\">AESTHETICS</h1>\n        <h1 id=\"landingquotes\" class=\"item\"></h1>\n        <a (click)=\"login.show()\" mdbWavesEffect class=\"loginbtn item\" id=\"loginbtn\">\n            GET STARTED\n        <span class=\"border-left\"></span>\n        <span class=\"border-top\"></span>\n        <span class=\"border-bottom\"></span>\n        <span class=\"border-right\"></span>\n        </a>\n\n\n        \n        <span class=\"scroll-btn\">\n            <a (click)=\"MoveDown()\">\n            <span class=\"mouse\">\n                <span>\n                </span>\n            </span>\n            </a>\n            <p>SCROLL DOWN</p>  \n        </span>\n    </div>\n\n    <div class=\"container-fluid section\" [ngsReveal]=\"{ reset: true }\" id=\"story\" >\n            <h1 class=\"adjustmenttext3\"></h1>\n            <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"diet4\">THE </h1>\n            <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"story1\">ALPHA</h1>\n            <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"story2\">AESTHETICS</h1>\n            <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"diet4\">STORY</h1>\n            <div class=\"card-deck\">\n                \n                        <div class=\"card card-cascade narrower\" [ngsReveal]=\"{ reset: true, delay: 200 }\">\n\n                                <!-- Card image -->\n                                <div class=\"view view-cascade overlay waves-light storycard\" mdbWavesEffect>\n                                  <img class=\"card-img-top\" src=\"../../assets/images/home/story/ayush.jpg\" alt=\"Ayush\">\n                                  <a href=\"https://www.instagram.com/alphaayush\" target=\"_blank\">\n                                    <div class=\"mask rgba-white-slight\"></div>\n                                  </a>\n                                </div>\n                              \n                                <!-- Card content -->\n                                <div class=\"card-body card-body-cascade\">\n                            \n                                <!-- Title -->\n                                <h4 class=\"card-title\">\"It's all about perspective!\" - Ayush</h4>\n                                <!-- Text -->\n                                <p class=\"card-text\"> \n                                    I used to be the weakest guy in the room for all my life until I decided to change.\n                                    I have learnt many things in the process, and more importantly how to build a positive mindset towards life.\n                                    You have to fall in love with the process, not the end result.\n                                    With Alpha Aesthetics my aim is to help you kickstart your journey towards health and fitness.\n                                    Every service provided by Alpha Aesthetics is based on latest scientific literature and most applied methods of training and nutrition.\n                                    So become part of a positive community.\n                                    <b>Let's make a difference together.</b> \n                                </p>\n                                <!-- Button -->\n                            \n                            </div>\n                            \n                    </div>\n\n                        <div class=\"card card-cascade narrower\" [ngsReveal]=\"{ reset: true, delay: 200 }\" >\n\n                                <!-- Card image -->\n                                <div class=\"view view-cascade overlay waves-light storycard\" mdbWavesEffect>\n                                  <img class=\"card-img-top\" src=\"../../assets/images/home/story/aviral.jpeg\" alt=\"Ayush\">\n                                  <a href=\"https://www.instagram.com/gautam_aviral\" target=\"_blank\">\n                                    <div class=\"mask rgba-white-slight\"></div>\n                                  </a>\n                                </div>\n                              \n                                <!-- Card content -->\n                                <div class=\"card-body card-body-cascade\">\n                            \n                                <!-- Title -->\n                                <h4 class=\"card-title\">\"Do something that your future self will be proud of!\" - Aviral</h4>\n                                <!-- Text -->\n                                <p class=\"card-text\"> \n                                    It all started when I was done hearing I am too skinny, when clothes didnt fit me of any size\n                                    I knew it was time for a change and a big one. Then suddenly things started changing I was being\n                                    noticed by others, they even respected what i do and my schedule, thats when i decided why not help\n                                    everyone out there who felt what I felt and help them live the alpha lifestyle.\n                                    So here at Alpha Aesthetics our aim is not just to make you fit but to develop a healthy lifestyle, a positive outlook on life and how to look good and feel good.\n                                </p>\n                                <!-- Button -->\n                            \n                            </div>\n                            \n                    </div>\n            </div>\n    </div>\n\n    <div class=\"container-fluid section\" [ngsReveal]=\"{ reset: true }\" id=\"features\" >\n        \n        <h1 class=\"adjustmenttext3\"></h1>\n        <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"diet4\">WHAT </h1>\n        <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"story1\">ALPHA</h1>\n        <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"story2\">AESTHETICS</h1>\n        <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"diet4\">OFFERS TO YOU</h1>\n\n        \n        <div class=\"row\">\n                \n            <div class=\"col\"></div>\n             <div class=\"col-md-6\">\n            <!--Carousel Wrapper-->\n            <div class=\"laptop\" >\n            <mdb-carousel class=\"carousel slide\" [isControls]=\"false\" [animation]=\"'slide'\" [interval]=\"4000\" [noPause]=\"true\" >\n                    <!--First slide-->\n                    <mdb-slide>\n                        <div class=\"view\" mdbWavesEffect>\n                            <img class=\"d-block w-100\" src=\"../../assets/images/home/features/weight.jpg\" alt=\"First slide\">\n                        </div>\n                    </mdb-slide>\n                    <!--/First slide-->\n                    <!--Second slide-->\n                    <mdb-slide>\n                        <div class=\"view\" mdbWavesEffect>\n                            <img class=\"d-block w-100\" src=\"../../assets/images/home/features/workout.jpg\" alt=\"Second slide\">\n                        </div>\n                    </mdb-slide>\n                    <!--/Second slide-->\n                    <!--Third slide-->\n                    <mdb-slide>\n                        <div class=\"view\" mdbWavesEffect>\n                            <img class=\"d-block w-100\" src=\"../../assets/images/home/features/weight.jpg\" alt=\"Third slide\">\n                        </div>\n                    </mdb-slide>\n                    <!--/Third slide-->\n                </mdb-carousel>\n                <!--/.Carousel Wrapper-->\n                </div>\n            </div>\n            <div class=\"col\"></div>\n            </div>\n    </div>\n    \n    <div class=\"container-fluid section\" [ngsReveal]=\"{ reset: true }\" id=\"benefits\" >\n        <h1 class=\"adjustmenttext2\"></h1>\n         <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 100 }\" id=\"benefit1\">BENEFITS OF</h1>\n         <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"benefit2\">WORKING</h1>\n         <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 300 }\" id=\"benefit3\">OUT!</h1>\n         <div id=\"parallaxmodel\">\n             <div class=\"layer\" data-depth=\"0.20\"><img src=\"../../assets/images/home/benefits/benefitwomen.svg\" id=\"benefitfemale\" [ngsReveal]=\"{ reset: true, delay: 200 }\" class=\"svgshadow\" ></div>\n             <div class=\"layer\" data-depth=\"0.30\"><img src=\"../../assets/images/home/benefits/benefitmen.svg\" id=\"benefitmale\" [ngsReveal]=\"{ reset: true, delay: 200 }\" class=\"svgshadow\" ></div>\n             </div>\n             <div id=\"benefiticons\">\n             <div id=\"parallaxicons\">\n                 <div class=\"layer\" data-depth=\"0.30\">\n                 <div class=\"iconoverlay\" id=\"benefiticon1\">\n                         <img src=\"../../assets/images/home/benefits/icons/confident.svg\" [ngsReveal]=\"{ reset: true, delay: 100 }\"  class=\"benefiticon\">\n                         <h2 class=\"icondesc\">Become<br>Confident</h2>\n                 </div>\n                 </div>\n \n                 <div class=\"layer\" data-depth=\"0.40\">\n                 <div class=\"iconoverlay\" id=\"benefiticon2\">\n                         <img src=\"../../assets/images/home/benefits/icons/heart.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                         <h2 class=\"icondesc\">Improve<br>Heart<br>Health</h2>\n                 </div>\n                 </div>\n                 <div class=\"layer\" data-depth=\"0.60\">\n                 <div class=\"iconoverlay\" id=\"benefiticon3\">\n                         <img src=\"../../assets/images/home/benefits/icons/mood.svg\" [ngsReveal]=\"{ reset: true, delay: 300 }\"  class=\"benefiticon\">\n                         <h2 class=\"icondesc\">Enhance <br>Mood</h2>\n                 </div>\n                 </div>\n                 <div class=\"layer\" data-depth=\"0.70\">\n                 <div class=\"iconoverlay\" id=\"benefiticon4\">\n                         <img src=\"../../assets/images/home/benefits/icons/sexy.svg\" [ngsReveal]=\"{ reset: true, delay: 100 }\"  class=\"benefiticon\">\n                         <h2 class=\"icondesc\">Become <br> Sexy</h2>\n                 </div>\n                 </div>\n                 <div class=\"layer\" data-depth=\"0.50\">\n                 <div class=\"iconoverlay\" id=\"benefiticon5\">\n                         <img src=\"../../assets/images/home/benefits/icons/stress.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                         <h2 class=\"icondesc\">Reduce<br>Stress</h2>\n                 </div>\n                 </div>\n                 <div class=\"layer\" data-depth=\"0.20\">\n                 <div class=\"iconoverlay\" id=\"benefiticon6\">\n                         <img src=\"../../assets/images/home/benefits/icons/strong.svg\" [ngsReveal]=\"{ reset: true, delay: 300 }\"  class=\"benefiticon\">\n                         <h2 class=\"icondesc\">Become<br>Strong</h2>\n                 </div>\n                 </div>\n         </div>\n      </div>\n     </div>\n \n\n    <div class=\"container-fluid section\" [ngsReveal]=\"{ reset: true }\" id=\"dieting\">\n        <h1 class=\"adjustmenttext2\"></h1>\n        <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"diet1\">DIETING</h1>\n        <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"diet2\">IS ALL ABOUT</h1>\n        <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"diet3\">BALANCE</h1>\n        <h1 class=\"diettitle\" [ngsReveal]=\"{ reset: true, delay: 200 }\" id=\"diet4\">BETWEEN THE TWO</h1>\n\n        <div id=\"parallaxdiet\">\n                <div class=\"layer\" data-depth=\"0.25\">\n                        <img src=\"../../assets/images/home/diet/hungry.svg\" class=\"hungry svgshadow\" [ngsReveal]=\"{ reset: true, delay: 200 }\" >\n                </div>\n                <div class=\"layer\" data-depth=\"0.20\">\n                        <img src=\"../../assets/images/home/diet/hungryeyes2.svg\" class=\"hungry\" [ngsReveal]=\"{ reset: true, delay: 200 }\" >\n                </div>\n                <div class=\"layer\" data-depth=\"0.18\">\n                        <img src=\"../../assets/images/home/diet/hungryeyes1.svg\" class=\"hungry\" [ngsReveal]=\"{ reset: true, delay: 200 }\" >\n                </div>\n            <div class=\"layer\" data-depth=\"0.30\">\n            <div class=\"iconoverlay\" id=\"food1\">\n                    <img src=\"../../assets/images/home/diet/healthy/banana.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n            </div>\n            </div>\n\n            <div class=\"layer\" data-depth=\"0.40\">\n            <div class=\"iconoverlay\" id=\"food2\">\n                <img src=\"../../assets/images/home/diet/healthy/bread.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n            </div>\n            </div>\n            <div class=\"layer\" data-depth=\"0.50\">\n            <div class=\"iconoverlay\" id=\"food3\">\n                <img src=\"../../assets/images/home/diet/healthy/cucumber.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n            </div>\n            </div>\n            <div class=\"layer\" data-depth=\"0.30\">\n                <div class=\"iconoverlay\" id=\"food4\">\n                    <img src=\"../../assets/images/home/diet/healthy/eggs.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                </div>\n            </div>\n            <div class=\"layer\" data-depth=\"0.50\">\n                <div class=\"iconoverlay\" id=\"food5\">\n                    <img src=\"../../assets/images/home/diet/healthy/pepper.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                </div>\n            </div>\n            <div class=\"layer\" data-depth=\"0.50\">\n                <div class=\"iconoverlay\" id=\"food6\">\n                    <img src=\"../../assets/images/home/diet/healthy/tuna.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                </div>\n            </div>\n            <div class=\"layer\" data-depth=\"0.40\">\n                    <div class=\"iconoverlay\" id=\"food13\">\n                        <img src=\"../../assets/images/home/diet/healthy/apple.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                    </div>\n                </div>\n            <div class=\"layer\" data-depth=\"0.40\">\n                <div class=\"iconoverlay\" id=\"food14\">\n                    <img src=\"../../assets/images/home/diet/healthy/omelette.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                </div>\n            </div>\n            <div class=\"layer\" data-depth=\"0.50\">\n                    <div class=\"iconoverlay\" id=\"food15\">\n                        <img src=\"../../assets/images/home/diet/healthy/whey.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                    </div>\n            </div>\n            <div class=\"layer\" data-depth=\"0.30\">\n                    <div class=\"iconoverlay\" id=\"food16\">\n                        <img src=\"../../assets/images/home/diet/healthy/watermelon.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                    </div>\n            </div>\n                    <div class=\"layer\" data-depth=\"0.30\">\n                <div class=\"iconoverlay\" id=\"food7\">\n                        <img src=\"../../assets/images/home/diet/fast/burger.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                </div>\n                </div>\n    \n                <div class=\"layer\" data-depth=\"0.40\">\n                <div class=\"iconoverlay\" id=\"food8\">\n                    <img src=\"../../assets/images/home/diet/fast/chicken.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                </div>\n                </div>\n                <div class=\"layer\" data-depth=\"0.60\">\n                <div class=\"iconoverlay\" id=\"food9\">\n                    <img src=\"../../assets/images/home/diet/fast/hotdog.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                </div>\n                </div>\n                <div class=\"layer\" data-depth=\"0.30\">\n                    <div class=\"iconoverlay\" id=\"food10\">\n                        <img src=\"../../assets/images/home/diet/fast/lasagne.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                    </div>\n                </div>\n                <div class=\"layer\" data-depth=\"0.50\">\n                    <div class=\"iconoverlay\" id=\"food11\">\n                        <img src=\"../../assets/images/home/diet/fast/nachos.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                    </div>\n                </div>\n                <div class=\"layer\" data-depth=\"0.60\">\n                    <div class=\"iconoverlay\" id=\"food12\">\n                        <img src=\"../../assets/images/home/diet/fast/pizza.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                    </div>\n                </div>\n                <div class=\"layer\" data-depth=\"0.60\">\n                        <div class=\"iconoverlay\" id=\"food17\">\n                            <img src=\"../../assets/images/home/diet/fast/beer.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                        </div>\n                </div>\n                <div class=\"layer\" data-depth=\"0.60\">\n                        <div class=\"iconoverlay\" id=\"food18\">\n                            <img src=\"../../assets/images/home/diet/fast/mojito.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                        </div>\n                </div>\n                <div class=\"layer\" data-depth=\"0.60\">\n                        <div class=\"iconoverlay\" id=\"food19\">\n                            <img src=\"../../assets/images/home/diet/fast/popcorn.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                        </div>\n                </div>\n                <div class=\"layer\" data-depth=\"0.60\">\n                        <div class=\"iconoverlay\" id=\"food20\">\n                            <img src=\"../../assets/images/home/diet/fast/taco.svg\" [ngsReveal]=\"{ reset: true, delay: 200 }\"  class=\"benefiticon\">\n                        </div>\n                </div>\n           </div>\n\n    </div>\n\n\n\n    <div class=\"container-fluid section\" [ngsReveal]=\"{ reset: true }\" id=\"footer\" >\n            <img src=\"../../assets/images/home/footer.svg\" id=\"footersvg\">\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#landing {\n  text-align: center; }\n\n.section {\n  position: relative; }\n\nnav {\n  background: transparent; }\n\n#landinglogo {\n  height: 30vh;\n  margin: 0 auto;\n  display: block; }\n\n#landingtitle1 {\n  font-size: 3.5em;\n  text-align: center;\n  letter-spacing: 12px;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 0; }\n\n#landingtitle2 {\n  font-size: 1.8em;\n  text-align: center;\n  letter-spacing: 9px;\n  font-weight: 700;\n  line-height: 1; }\n\n.adjustmenttext {\n  padding-top: 20vh; }\n\n#gradientlayer {\n  background: radial-gradient(#ffffff 23%, rgba(255, 255, 255, 0) 100%);\n  height: 100%;\n  width: 60%;\n  position: absolute;\n  top: 0;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  opacity: 0.7; }\n\n#landingquotes {\n  text-align: center;\n  font-size: 1.2em;\n  font-weight: 400;\n  text-transform: uppercase; }\n\n.scroll-btn {\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center; }\n\n.scroll-btn > * {\n  display: inline-block;\n  font-size: 9px;\n  font-weight: normal;\n  color: black;\n  letter-spacing: 2px; }\n\n.scroll-btn > *:hover,\n.scroll-btn > *:focus,\n.scroll-btn > *.active {\n  color: black; }\n\n.scroll-btn > *:hover,\n.scroll-btn > *:focus,\n.scroll-btn > *:active,\n.scroll-btn > *.active {\n  opacity: 0.8; }\n\n.scroll-btn .mouse {\n  position: relative;\n  display: block;\n  width: 17px;\n  height: 34px;\n  margin: 0 auto 10px;\n  box-sizing: border-box;\n  border: 1px solid black;\n  border-radius: 23px; }\n\n.scroll-btn .mouse > * {\n  position: absolute;\n  display: block;\n  top: 29%;\n  left: 50%;\n  width: 8px;\n  height: 8px;\n  margin: -4px 0 0 -4px;\n  background: black;\n  border-radius: 50%;\n  -webkit-animation: ani-mouse 2.5s linear infinite;\n          animation: ani-mouse 2.5s linear infinite; }\n\n.scroll-btn p {\n  display: block; }\n\n@-webkit-keyframes ani-mouse {\n  0% {\n    opacity: 1;\n    top: 29%; }\n  15% {\n    opacity: 1;\n    top: 70%; }\n  50% {\n    opacity: 0;\n    top: 70%; }\n  100% {\n    opacity: 0;\n    top: 29%; } }\n\n@keyframes ani-mouse {\n  0% {\n    opacity: 1;\n    top: 29%; }\n  15% {\n    opacity: 1;\n    top: 70%; }\n  50% {\n    opacity: 0;\n    top: 70%; }\n  100% {\n    opacity: 0;\n    top: 29%; } }\n\n.loginbtn {\n  position: relative;\n  display: inline-block;\n  margin: 0 auto;\n  padding: 16px 26px;\n  overflow: hidden;\n  font-weight: 400;\n  color: black;\n  text-decoration: none;\n  text-transform: uppercase;\n  white-space: nowrap;\n  text-align: center; }\n\n.loginbtn:after {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  content: '';\n  display: block;\n  width: 100%;\n  height: 100%;\n  transition: all .3s ease;\n  background-color: black;\n  z-index: -1; }\n\n.loginbtn:hover {\n  color: white;\n  font-weight: 700;\n  transition-delay: .25s; }\n\n.loginbtn:hover:after {\n  top: 0;\n  transition-delay: .2s; }\n\n.loginbtn:hover .border-top {\n  left: -100%; }\n\n.loginbtn:hover .border-bottom {\n  left: 100%; }\n\n.loginbtn:hover .border-right {\n  top: -100%; }\n\n.loginbtn:hover .border-left {\n  top: 100%; }\n\na.loginbtn span {\n  transition: all .3s ease;\n  position: absolute;\n  background-color: black; }\n\n.border-top {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 2px; }\n\n.border-bottom {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 2px; }\n\n.border-right {\n  right: 0;\n  top: 0;\n  height: 100%;\n  width: 2px; }\n\n.border-left {\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 2px; }\n\n.modal-body {\n  padding: 2rem 4rem; }\n\n.modal-dialog.cascading-modal .modal-header .title {\n  font-weight: 400; }\n\na:not([href]):not([tabindex]):hover {\n  color: white; }\n\n.diettitle {\n  font-size: 4em;\n  text-align: center;\n  font-weight: 700;\n  line-height: 1;\n  margin-bottom: 0; }\n\n#diet2 {\n  font-size: 2.6em;\n  font-weight: 400; }\n\n#diet3 {\n  font-size: 3.5em; }\n\n#diet4 {\n  font-weight: 400;\n  font-size: 1.8em; }\n\n#benefit1 {\n  font-size: 2.6em;\n  font-weight: 400; }\n\n#benefit2 {\n  font-size: 3.1em; }\n\n#benefit3 {\n  font-size: 6em; }\n\n#benefitmale, #benefitfemale {\n  position: absolute;\n  height: 70vh;\n  top: 30vh; }\n\n#benefitfemale {\n  left: 30vw; }\n\n#benefitmale {\n  left: 40vw; }\n\n#parallaxmodel, #parallaxicons, #parallaxdiet {\n  height: 100vh;\n  top: 0;\n  width: 100vw;\n  position: absolute;\n  left: 0; }\n\n#parallaxicons {\n  top: 0; }\n\n.iconoverlay {\n  position: absolute; }\n\n#benefiticon1 {\n  top: 12vh;\n  left: 24vw; }\n\n#benefiticon2 {\n  top: 38vh;\n  left: 13vw; }\n\n#benefiticon3 {\n  top: 64vh;\n  left: 20vw; }\n\n#benefiticon4 {\n  top: 20vh;\n  left: 72vw; }\n\n#benefiticon5 {\n  top: 42vh;\n  left: 80vw; }\n\n#benefiticon6 {\n  top: 68vh;\n  left: 71vw; }\n\n#footersvg {\n  position: absolute;\n  width: 100vw;\n  bottom: 0;\n  left: 0; }\n\n#benefits {\n  background: url('benefitsurface.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%; }\n\n#footer {\n  margin: 0;\n  padding: 0; }\n\n.icondesc {\n  text-align: center;\n  font-size: 1.2em;\n  font-weight: 700;\n  text-transform: uppercase; }\n\n.benefiticon {\n  display: block;\n  margin: 0 auto;\n  width: 7vw;\n  -webkit-filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.6));\n          filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.6)); }\n\n#fullpage {\n  position: relative; }\n\n#food1 {\n  top: 10vh;\n  left: 24vw; }\n\n#food2 {\n  top: 28vh;\n  left: 13vw; }\n\n#food3 {\n  top: 34vh;\n  left: 20vw; }\n\n#food4 {\n  top: 44vh;\n  left: 13vw; }\n\n#food5 {\n  top: 54vh;\n  left: 25vw; }\n\n#food6 {\n  top: 64vh;\n  left: 15vw; }\n\n#food7 {\n  top: 12vh;\n  left: 70vw; }\n\n#food8 {\n  top: 28vh;\n  left: 80vw; }\n\n#food9 {\n  top: 34vh;\n  left: 70vw; }\n\n#food10 {\n  top: 44vh;\n  left: 75vw; }\n\n#food11 {\n  top: 54vh;\n  left: 84vw; }\n\n#food12 {\n  top: 64vh;\n  left: 70vw; }\n\n#food13 {\n  top: 11vh;\n  left: 14vw; }\n\n#food14 {\n  top: 25vh;\n  left: 5vw; }\n\n#food15 {\n  top: 61vh;\n  left: 5vw; }\n\n#food16 {\n  top: 71vh;\n  left: 28vw; }\n\n#food17 {\n  top: 15vh;\n  left: 85vw; }\n\n#food18 {\n  top: 35vh;\n  left: 90vw; }\n\n#food19 {\n  top: 70vh;\n  left: 80vw; }\n\n#food20 {\n  top: 75vh;\n  left: 90vw; }\n\n.hungry {\n  width: 30vw;\n  display: block;\n  position: absolute;\n  top: 37vh;\n  left: 35vw;\n  right: 0; }\n\n.svgshadow {\n  -webkit-filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));\n          filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5)); }\n\n#dieting {\n  background: url('dietsurface.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%; }\n\n.adjustmenttext2 {\n  padding-top: 10vh; }\n\n#story1 {\n  font-size: 3em;\n  font-weight: 700; }\n\n#story2 {\n  font-size: 2em;\n  font-weight: 700; }\n\n.card.card-cascade.narrower .view.view-cascade {\n  margin-left: 30% !important;\n  margin-right: 30% !important;\n  margin-top: -6rem !important; }\n\n.card.card-cascade.narrower {\n  margin-top: 0 !important;\n  margin-left: 2vw;\n  margin-right: 2vw;\n  background: rgba(255, 255, 255, 0.81); }\n\ndiv.storycard {\n  border-radius: 50% !important; }\n\n.card .card-body .card-text {\n  color: #000000; }\n\n.adjustmenttext3 {\n  padding-top: 7vh; }\n\n#story {\n  background: url('storysurface.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%;\n  padding: 0 10vw; }\n\n#maccaro {\n  position: absolute;\n  top: 0vh; }\n\n.laptop {\n  width: 100%;\n  height: 58%;\n  background: #000;\n  border: 16px solid #262626;\n  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.6);\n  overflow: hidden;\n  border-radius: 0.5em; }\n\n.laptop:before {\n  content: ' ';\n  position: absolute;\n  top: 58%;\n  left: -10%;\n  width: 120%;\n  height: 20px;\n  background: linear-gradient(to right, #747474 0%, #c3c3c3 5%, #ebebeb 14%, #979797 41%, #f0f0f0 80%, #747474 100%);\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);\n  border-radius: 2px 2px 6px 6px; }\n\n#features {\n  background: url('featuresurface.svg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: 50%; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typed.js */ "./node_modules/typed.js/lib/typed.js");
/* harmony import */ var typed_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typed_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/local-interaction.service */ "./src/app/services/local-interaction.service.ts");
/* harmony import */ var _services_server_interaction_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/server-interaction.service */ "./src/app/services/server-interaction.service.ts");
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
    function HomeComponent(route, titleService, LocalInteractionService, ServerInteractionService) {
        this.route = route;
        this.titleService = titleService;
        this.LocalInteractionService = LocalInteractionService;
        this.ServerInteractionService = ServerInteractionService;
    }
    HomeComponent.prototype.MoveDown = function () {
        this.x.moveSectionDown();
    };
    HomeComponent.prototype.Login = function () {
        this.ServerInteractionService.googleLogin()
            .subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle(this.route.snapshot.data['title']);
        var scene1 = document.getElementById('parallaxdoodle');
        var parallaxInstance1 = new Parallax(scene1);
        var scene2 = document.getElementById('parallaxicons');
        var parallaxInstance2 = new Parallax(scene2);
        var scene3 = document.getElementById('parallaxmodel');
        var parallaxInstance3 = new Parallax(scene3);
        var scene4 = document.getElementById('parallaxdiet');
        var parallaxInstance4 = new Parallax(scene4);
        var typed = new typed_js__WEBPACK_IMPORTED_MODULE_3__("#landingquotes", {
            strings: [
                "One religion - Fitness!",
                "Strong is the new Sexy!",
                "Be Stronger than your excuses!",
                "Your only limit is you!",
                "Excuses dont burn calories!"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            backDelay: 5000,
            loop: true,
            showCursor: false
        });
        this.x = new fullpage('#fullpage', {
            licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
            autoScrolling: true,
            scrollBar: true,
            scrollingSpeed: 300,
            afterLoad: function (origin, destination, direction) {
                _this.LocalInteractionService.LinkChange.next(destination.index);
            }
        });
        this.LocalInteractionService.MoveTo.subscribe(function (value) {
            _this.x.moveTo(value);
        });
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        this.x.destroy();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"],
            _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_4__["LocalInteractionService"],
            _services_server_interaction_service__WEBPACK_IMPORTED_MODULE_5__["ServerInteractionService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav id=\"navbar\" class=\"navbar navbar-expand-lg fixed-top home\" [ngClass]=\"{'navcolor': menu }\">\n  \n  <a class=\"navbar-brand \" mdbWavesEffect routerLink=\"./\">\n    <img src=\"../../assets/images/LOGO-horizontal.svg\" style=\"height: 5vh;\" type=\"image/svg+xml\">\n  </a>\n\n  <button class=\"navbar-toggler ml-auto\" type=\"button\" (click)=\"ShowMenu()\" >\n      <i class=\"fa fa-bars\"></i>\n</button>  \n\n<div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\" [ngClass]=\"{'menuvisible': menu }\">\n<ul class=\"navbar-nav ml-auto\">\n  <li class=\"nav-item\" >\n      <a href=\"https://www.facebook.com/alphaayush\" class=\"nav-link \" target=\"_blank\">\n        <i class=\"fa fa-facebook\"></i>\n    </a>\n  </li>\n <li class=\"nav-item\" >\n    <a href=\"https://www.instagram.com/alphaayush\" class=\"nav-link \" target=\"_blank\">\n      <i class=\"fa fa-instagram\"></i>\n  </a>\n  </li>\n  <li class=\"nav-item\" >\n      <a href=\"https://www.youtube.com/\" class=\"nav-link \" target=\"_blank\">\n        <i class=\"fa fa-youtube\"></i>\n    </a>\n  </li>\n  <ng-container *ngIf=\"home\">\n  <li class=\"nav-item\" mdbWavesEffect>\n      <a class=\"nav-link\" [ngClass]=\"{'homeactive': activelink == 0 }\" (click)=\"MoveTo(1)\" >Home</a>\n  </li>\n  <li class=\"nav-item\" mdbWavesEffect>\n      <a class=\"nav-link\" [ngClass]=\"{'storyactive': activelink == 1 }\" (click)=\"MoveTo(2)\" >Story</a>\n  </li>\n  <li class=\"nav-item\" mdbWavesEffect>\n      <a class=\"nav-link\" [ngClass]=\"{'featuresactive': activelink == 2 }\" (click)=\"MoveTo(3)\" >Features</a>\n  </li>\n  <li class=\"nav-item\" mdbWavesEffect>\n      <a class=\"nav-link\" [ngClass]=\"{'benefitsactive': activelink == 3 }\" (click)=\"MoveTo(4)\" >Benefits</a>\n  </li>\n  <li class=\"nav-item\" mdbWavesEffect>\n      <a class=\"nav-link\" [ngClass]=\"{'dietactive': activelink == 4 }\" (click)=\"MoveTo(5)\" >Dieting</a>\n  </li>\n  <li class=\"nav-item\" mdbWavesEffect>\n      <a class=\"nav-link\" [ngClass]=\"{'homeactive': activelink == 5 }\" (click)=\"MoveTo(6)\" >Start Now</a>\n  </li>\n  </ng-container>\n  \n  <li class=\"nav-item\" mdbWavesEffect *ngIf=\"!home\">\n      <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"navactive\" [routerLinkActiveOptions]=\"{ exact:true }\">Home</a>\n  </li>\n  <li class=\"nav-item\" mdbWavesEffect>\n      <a class=\"nav-link\" [ngClass]=\"{'border border-light rounded': home }\" routerLink=\"/dashboard\" routerLinkActive=\"navactive\">Dashboard</a>\n  </li>\n  <li class=\"nav-item\" mdbWavesEffect *ngIf=\"!home\">\n      <a class=\"nav-link border border-light rounded waves-effect\"><i class=\"fa fa-sign-out\"></i>LOGOUT</a>\n  </li>\n</ul>\n</div>\n\n  </nav>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  height: 8vh;\n  background-color: white;\n  padding-left: 2.5rem;\n  padding-right: 10vw !important;\n  transition: .5s; }\n\na.navbar-brand {\n  color: black; }\n\na.nav-link {\n  color: #707070;\n  border-radius: .25rem;\n  transition: 0.5s; }\n\na.nav-link:hover {\n  background-color: rgba(172, 172, 172, 0.2); }\n\n.navactive {\n  color: black !important;\n  background-color: rgba(172, 172, 172, 0.287); }\n\na.nav-link:hover i.fa-facebook {\n  color: #2f2fc2; }\n\na.nav-link:hover i.fa-instagram {\n  color: #cc007e; }\n\na.nav-link:hover i.fa-youtube {\n  color: #df2121; }\n\na.nav-link.border.border-light {\n  margin: 0 0.5em;\n  font-size: 0.9em; }\n\n.navbar .nav-item .nav-link {\n  font-size: 0.9em;\n  text-transform: uppercase; }\n\nnav.home {\n  background: linear-gradient(#fff, rgba(255, 255, 255, 0));\n  box-shadow: none;\n  height: 11vh; }\n\n.home a.nav-link {\n  color: #000000; }\n\n.homeactive, .homeactive:hover {\n  color: white !important;\n  background-color: black !important;\n  font-weight: 700; }\n\n.storyactive, .storyactive:hover {\n  color: white !important;\n  background-color: #ff4444 !important;\n  font-weight: 700; }\n\n.featuresactive, .featuresactive:hover {\n  color: white !important;\n  background-color: #4285F4 !important;\n  font-weight: 700; }\n\n.benefitsactive, .benefitsactive:hover {\n  color: white !important;\n  background-color: #ffbb33 !important;\n  font-weight: 700; }\n\n.dietactive, .dietactive:hover {\n  color: white !important;\n  background-color: #00C851 !important;\n  font-weight: 700; }\n\n.navpadding {\n  padding-left: 3.5rem !important;\n  padding-right: 3.5rem !important; }\n\n.menuvisible {\n  display: block; }\n\n.collapse {\n  transition: 0.3s; }\n\n.navcolor {\n  background-color: white !important;\n  padding: 1vh 0 !important; }\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-interaction.service */ "./src/app/services/local-interaction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = /** @class */ (function () {
    function NavComponent(renderer, router, LocalInteractionService) {
        var _this = this;
        this.renderer = renderer;
        this.router = router;
        this.LocalInteractionService = LocalInteractionService;
        this.previousUrl = 'home';
        this.home = true;
        this.menu = false;
        this.router.events
            .subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.previousUrl) {
                    _this.renderer.addClass(document.getElementById('navbar'), 'home');
                    _this.renderer.addClass(document.getElementById('navbar'), 'navpadding');
                    _this.home = true;
                }
                var currentUrlSlug = event.url.slice(1);
                if (currentUrlSlug) {
                    _this.renderer.removeClass(document.getElementById('navbar'), 'home');
                    _this.renderer.removeClass(document.getElementById('navbar'), 'navpadding');
                    _this.home = false;
                }
                _this.previousUrl = currentUrlSlug;
            }
        });
    }
    NavComponent.prototype.MoveTo = function (value) {
        this.LocalInteractionService.MoveTo.next(value);
    };
    NavComponent.prototype.ShowMenu = function () {
        this.menu = !this.menu;
    };
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LocalInteractionService.LinkChange.subscribe(function (value) {
            _this.activelink = value;
            console.log(_this.activelink);
        });
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_local_interaction_service__WEBPACK_IMPORTED_MODULE_2__["LocalInteractionService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.authService.isAuthenticated()
            .then(function (authenticated) {
            if (authenticated) {
                return true;
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
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
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = true;
    }
    AuthService.prototype.isAuthenticated = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            resolve(_this.loggedIn);
        });
        return promise;
    };
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/calorie-calculator.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/calorie-calculator.service.ts ***!
  \********************************************************/
/*! exports provided: CalorieCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalorieCalculatorService", function() { return CalorieCalculatorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _local_interaction_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-interaction.service */ "./src/app/services/local-interaction.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalorieCalculatorService = /** @class */ (function () {
    function CalorieCalculatorService(LocalInteractionService) {
        this.LocalInteractionService = LocalInteractionService;
        this.caloriedata = {};
        this.goals = ['Lose 1 kg per week', 'Lose 0.5 kg per week', 'Lose 0.25 kg per week', 'Maintain Current Weight', 'Gain 0.25 kg per week', 'Gain 0.5 kg per week'];
        this.experience = [{ name: 'Beginner', desc: 'Little to no experience in gym. Just started your fitness journey. 😊' },
            { name: 'Intermediate', desc: 'Been working out consistently for 1-3 years. Intermediate knowledge about health and fitness 💪' },
            { name: 'Advanced', desc: 'Been working out consistently for 3+ years. You know your shit! 🏋' }
        ];
        this.lifestyle = [{ name: 'Sedentary', desc: 'Spend most of the day sitting (E.g. Desk Job, Developer 🤓)' },
            { name: 'Lightly Active', desc: 'Spend good part of the day on your feet (E.g. College Student )/ Exercise 2-3 times a week' },
            { name: 'Active', desc: 'Spend good part of the day doing physical activity / Exercise 5-6 times a week' },
            { name: 'Highly Active', desc: 'Spend most of the day doing heavy physical activity / Intense exercise daily' },
        ];
    }
    CalorieCalculatorService.prototype.BMR = function (gender, weight, height, age) {
        if (gender === 'male') {
            this.caloriedata['bmr'] = ((10 * weight) + (6.25 * height) - (5 * age) + 5);
            console.log(this.caloriedata);
        }
        else if (gender === 'female') {
            this.caloriedata['bmr'] = ((10 * weight) + (6.25 * height) - (5 * age) - 161);
            console.log(this.caloriedata);
        }
        else {
            console.log("SOMETHING'S NOT RIGHT");
        }
    };
    CalorieCalculatorService.prototype.ConvertHeight = function (heightfeet, heightinch) {
        this.profiledata['heightcm'] = ((heightfeet * 30.48) + (heightinch * 2.54));
    };
    CalorieCalculatorService.prototype.ConvertWeight = function (weight) {
        this.profiledata['weight'] = (Math.round(weight * 100 / 2.2046226218) / 100);
    };
    CalorieCalculatorService.prototype.MaintenanceCal = function (bmr, lifestyle) {
        switch (lifestyle) {
            case 1: {
                this.caloriedata['maintenance'] = bmr * 1.2;
                break;
            }
            case 2: {
                this.caloriedata['maintenance'] = bmr * 1.35;
                break;
            }
            case 3: {
                this.caloriedata['maintenance'] = bmr * 1.45;
                break;
            }
            case 4: {
                this.caloriedata['maintenance'] = bmr * 1.75;
                break;
            }
            default: {
                console.log('FATAL MAINTENANCE ERROR');
                break;
            }
        }
    };
    CalorieCalculatorService.prototype.MacroGenerator = function (calories, weight, experience) {
        if (experience == 1) {
            this.caloriedata['macroarray'] = [
                {
                    name: 'Low Carb, High Fat',
                    pmacro: (Math.round(0.7 * weight * 220.46226218100) / 100),
                    get pcals() { return (4 * this.pmacro); },
                    fcals: (calories * 0.3),
                    get fmacro() { return (Math.round((this.fcals * 100) / 900)); },
                    get ccals() { return (calories - this.pcals - this.fcals); },
                    get cmacro() { return (Math.round(this.ccals * 100) / 400); },
                },
                {
                    name: 'Moderate Carb, Moderate Fat',
                    pmacro: (Math.round(0.7 * weight * 220.46226218100) / 100),
                    get pcals() { return (4 * this.pmacro); },
                    fcals: (calories * 0.25),
                    get fmacro() { return (Math.round((this.fcals * 100) / 900)); },
                    get ccals() { return (calories - this.pcals - this.fcals); },
                    get cmacro() { return (Math.round(this.ccals * 100) / 400); },
                },
                {
                    name: 'High Carb, Low Fat',
                    pmacro: (Math.round(0.7 * weight * 220.46226218100) / 100),
                    get pcals() { return (4 * this.pmacro); },
                    fcals: (calories * 0.2),
                    get fmacro() { return (Math.round((this.fcals * 100) / 900)); },
                    get ccals() { return (calories - this.pcals - this.fcals); },
                    get cmacro() { return (Math.round(this.ccals * 100) / 400); },
                }
            ];
        }
        else {
            this.caloriedata['macroarray'] = [
                {
                    name: 'Low Carb, High Fat',
                    pmacro: (Math.round(weight * 220.46226218100) / 100),
                    get pcals() { return (4 * this.pmacro); },
                    fcals: (calories * 0.3),
                    get fmacro() { return (Math.round((this.fcals * 100) / 900)); },
                    get ccals() { return (calories - this.pcals - this.fcals); },
                    get cmacro() { return (Math.round(this.ccals * 100) / 400); },
                },
                {
                    name: 'Moderate Carb, Moderate Fat',
                    pmacro: (Math.round(weight * 220.46226218100) / 100),
                    get pcals() { return (4 * this.pmacro); },
                    fcals: (calories * 0.25),
                    get fmacro() { return (Math.round((this.fcals * 100) / 900)); },
                    get ccals() { return (calories - this.pcals - this.fcals); },
                    get cmacro() { return (Math.round(this.ccals * 100) / 400); },
                },
                {
                    name: 'High Carb, Low Fat',
                    pmacro: (Math.round(weight * 220.46226218100) / 100),
                    get pcals() { return (4 * this.pmacro); },
                    fcals: (calories * 0.2),
                    get fmacro() { return (Math.round((this.fcals * 100) / 900)); },
                    get ccals() { return (calories - this.pcals - this.fcals); },
                    get cmacro() { return (Math.round(this.ccals * 100) / 400); },
                }
            ];
        }
    };
    CalorieCalculatorService.prototype.Cardio = function (activity, goal) {
        switch (goal) {
            case 1: {
                if (activity == 1 || 2) {
                    this.caloriedata['cardio'] = 4;
                }
                else
                    this.caloriedata['cardio'] = 3;
                break;
            }
            case 2: {
                if (activity == 1 || 2) {
                    this.caloriedata['cardio'] = 3;
                }
                else
                    this.caloriedata['cardio'] = 2;
                break;
            }
            case 3: {
                if (activity == 1 || 2) {
                    this.caloriedata['cardio'] = 2;
                }
                else
                    this.caloriedata['cardio'] = 1;
                break;
            }
            case 4:
            case 5:
            case 6: {
                this.caloriedata['cardio'] = 1;
                break;
            }
            default: {
                console.log('FATAL CARDIO ERROR');
                break;
            }
        }
    };
    CalorieCalculatorService.prototype.CommonRoutine = function () {
        // ADD USER NAME TO CALORIEDATA OBJECT
        this.caloriedata['name'] = this.googledata.fname;
        this.caloriedata['experience'] = this.experience[this.profiledata.experience - 1].name;
        this.caloriedata['lifestyle'] = this.lifestyle[this.profiledata.lifestyle - 1].name;
        this.caloriedata['goal'] = this.goals[this.profiledata.goal - 1];
        // CONVERT HEIGHT INCHES TO CMS
        if (this.profiledata.heightunit === 2) {
            this.ConvertHeight(this.profiledata.heightfeet, this.profiledata.heightinch);
        }
        // CONVERT WEIGHT LBS TO KGS
        if (this.profiledata.weightunit === 2) {
            this.ConvertWeight(this.profiledata.weight);
        }
        // CALCULATE BMR 
        this.BMR(this.googledata.gender, this.profiledata.weight, this.profiledata.heightcm, this.profiledata.age);
        // CALCULATE MAINTENANCE CALS
        this.MaintenanceCal(this.caloriedata['bmr'], this.profiledata['lifestyle']);
    };
    CalorieCalculatorService.prototype.FatLoss = function () {
        // CLEAR OBJECT FIRST
        this.caloriedata = {};
        // FETCH DATA FIRST
        this.profiledata = this.LocalInteractionService.GetProfileData();
        this.googledata = this.LocalInteractionService.GetGoogleData();
        // EXECUTE COMMON MODULE 
        this.CommonRoutine();
        // LOWER LIMIT OF CALS
        this.caloriedata['rockbottom'] = (Math.round(8 * this.profiledata.weight * 220.46226218100) / 100);
        // FATLOSS CALS
        switch (this.profiledata.goal) {
            case 1: {
                this.caloriedata['fatlosscal'] = Math.max((this.caloriedata['maintenance'] - 1000), this.caloriedata['rockbottom']);
                break;
            }
            case 2: {
                this.caloriedata['fatlosscal'] = Math.max((this.caloriedata['maintenance'] - 500), this.caloriedata['rockbottom']);
                break;
            }
            case 3: {
                this.caloriedata['fatlosscal'] = Math.max((this.caloriedata['maintenance'] - 250), this.caloriedata['rockbottom']);
                break;
            }
            case 4:
            case 5:
            case 6: {
                this.caloriedata['goalerrormsg'] = "" + this.goals[this.profiledata.goal - 1];
                return this.caloriedata;
                ;
            }
            default: {
                console.log('FATAL FATLOSS CALS ERROR');
                break;
            }
        }
        // CALCULATE MACROS FOR FATLOSS BASED ON EXPERIENCE
        this.MacroGenerator(this.caloriedata['fatlosscal'], this.profiledata.weight, this.profiledata.experience);
        console.log(this.caloriedata);
        // CALCULATE CARDIO FOR FATLOSS
        this.Cardio(this.profiledata.lifestyle, this.profiledata.goal);
        // RETURN DATA
        return this.caloriedata;
    };
    CalorieCalculatorService.prototype.Maintenance = function () {
        // CLEAR OBJECT FIRST
        this.caloriedata = {};
        // FETCH DATA FIRST
        this.profiledata = this.LocalInteractionService.GetProfileData();
        this.googledata = this.LocalInteractionService.GetGoogleData();
        // EXECUTE COMMON MODULE 
        this.CommonRoutine();
        // RETURN IF GOAL != 4
        if (this.profiledata.goal != 4) {
            this.caloriedata['goalerrormsg'] = "" + this.goals[this.profiledata.goal - 1];
            return this.caloriedata;
        }
        // CALCULATE MACROS FOR MAINTENANCE BASED ON EXPERIENCE
        this.MacroGenerator(this.caloriedata['maintenance'], this.profiledata.weight, this.profiledata.experience);
        console.log(this.caloriedata);
        // CALCULATE CARDIO FOR MAINTENANCE
        this.Cardio(this.profiledata.lifestyle, this.profiledata.goal);
        // RETURN DATA
        return this.caloriedata;
    };
    CalorieCalculatorService.prototype.Bulking = function () {
        // CLEAR OBJECT FIRST
        this.caloriedata = {};
        // FETCH DATA FIRST
        this.profiledata = this.LocalInteractionService.GetProfileData();
        this.googledata = this.LocalInteractionService.GetGoogleData();
        // EXECUTE COMMON MODULE 
        this.CommonRoutine();
        // BULKING CALS
        switch (this.profiledata.goal) {
            case 5: {
                this.caloriedata['bulkingcal'] = this.caloriedata['maintenance'] + 250;
                break;
            }
            case 6: {
                this.caloriedata['bulkingcal'] = this.caloriedata['maintenance'] + 500;
                break;
            }
            case 1:
            case 2:
            case 3:
            case 4: {
                this.caloriedata['goalerrormsg'] = "" + this.goals[this.profiledata.goal - 1];
                return this.caloriedata;
            }
            default: {
                console.log('FATAL BULKING CALS ERROR');
                break;
            }
        }
        // CALCULATE MACROS FOR BULKING BASED ON EXPERIENCE
        this.MacroGenerator(this.caloriedata['bulkingcal'], this.profiledata.weight, this.profiledata.experience);
        console.log(this.caloriedata);
        // CALCULATE CARDIO FOR BULKING
        this.Cardio(this.profiledata.lifestyle, this.profiledata.goal);
        // RETURN DATA
        return this.caloriedata;
    };
    CalorieCalculatorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_local_interaction_service__WEBPACK_IMPORTED_MODULE_1__["LocalInteractionService"]])
    ], CalorieCalculatorService);
    return CalorieCalculatorService;
}());



/***/ }),

/***/ "./src/app/services/local-interaction.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/local-interaction.service.ts ***!
  \*******************************************************/
/*! exports provided: LocalInteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalInteractionService", function() { return LocalInteractionService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var LocalInteractionService = /** @class */ (function () {
    function LocalInteractionService() {
        this.LinkChange = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.MoveTo = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.insightdatamodel = [{
                class: String,
                property: String,
                value: String,
                text: String
            }];
        this.blogarray = [
            { route: 'cheatday', article: 'I love cheat days, I love cheat days, I love cheat days', title: 'Cheat Day Inspirations', text: 'I love cheat days, They can be helpful sometimes :)', icon: 'fa-cutlery', category: 'Miscellaneous', image: 'http://homecookingadventure.com/images/recipes/brownies.jpg' },
            { route: 'periodization', article: 'DUP, Block Periodization  DUP, Block Periodization  DUP, Block Periodization ', title: 'Periodization', text: 'DUP, Block Periodization and much more..', icon: 'fa-clock-o', category: 'Training', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtEXX-wuzkGL4mT5uSiD-soQEecvJLln4Gb__tVfKX3XoxuNUM0A' },
            { route: 'pancake', article: 'Easy Protein Pancake Recipe in just 5 minutes.. Easy Protein Pancake Recipe in just 5 minutes..', title: 'Protein Pancake Recipe', text: 'Easy Protein Pancake Recipe in just 5 minutes..', icon: 'fa-cutlery', category: 'Recipe', image: 'https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg' }
        ];
        this.workoutarray = [
            {
                route: 'beginner',
                workout: [
                    [{ name: 'Push A' },
                        [{ exercise: 'Barbell Bench Press', sets: '3', reps: '8-12' }, { exercise: 'Machine Chest Fly', sets: '3', reps: '10-12' }, { exercise: 'Dumbbell Shoulder Press', sets: '3', reps: '8-12' }, { exercise: 'Dumbbell Side Raise', sets: '3', reps: '10-15' }, { exercise: 'Dumbbell Tricep Extension', sets: '5', reps: '10-15' }]
                    ],
                    [{ name: 'Pull A + Obliques' },
                        [{ exercise: 'Barbell Deadlift', sets: '3', reps: '6-8' }, { exercise: 'Single Arm Dumbbell Row', sets: '3', reps: '8-12' }, { exercise: 'Machine Lat Pulldown', sets: '3', reps: '8-12' }, { exercise: 'Barbell Shrugs', sets: '3', reps: '10-15' }, { exercise: 'Barbell Bicep Curl', sets: '5', reps: '10-15' }, { exercise: 'Dumbbell Side Bend', sets: '4', reps: '10-15' }]
                    ],
                    [{ name: 'Rest Day' },
                        [{ exercise: 'Rest Day' }]
                    ],
                    [{ name: 'Push B' },
                        [{ exercise: 'Barbell Shoulder Press', sets: '3', reps: '8-10' }, { exercise: 'Incline Dumbbell Press', sets: '3', reps: '8-12' }, { exercise: 'Decline Dumbbell Press', sets: '3', reps: '8-12' }, { exercise: 'Cable Tricep Pushdown', sets: '3', reps: '10-15' }, { exercise: 'Dumbbell Skullcrusher', sets: '3', reps: '10-15' }]
                    ],
                    [{ name: 'Pull B' },
                        [{ exercise: 'Pullups', sets: '3', reps: '8-10' }, { exercise: 'Machine Lat Pulldown', sets: '3', reps: '8-12' }, { exercise: 'Cable Face Pulls', sets: '3', reps: '8-12' }, { exercise: 'Preacher Curl', sets: '3', reps: '10-15' }, { exercise: 'Reverse Cable Curl', sets: '3', reps: '10-15' }]
                    ],
                    [{ name: 'Legs and Abs' },
                        [{ exercise: 'Barbell Squat', sets: '3', reps: '8-10' }, { exercise: 'Machine Leg Press', sets: '3', reps: '8-12' }, { exercise: 'Romanian Deadlift', sets: '3', reps: '8-12' }, { exercise: 'Machine Leg Curl', sets: '3', reps: '8-12' }, { exercise: 'Machine Calf Press', sets: '5', reps: '10-15' }, { exercise: 'Cable Crunch', sets: '4', reps: '10-15' }]
                    ],
                    [{ name: 'Rest Day' },
                        [{ exercise: 'Rest Day' }]
                    ]
                ],
                title: "Beginner's Workout",
                features: ['Specially Focused on Beginners', 'Fundamentals of Weight Training', '5 times a Week', 'Build Strength/Muscle and Lose Fat'],
                description: "This workout program is specially crafted for people who are just beginning their journey. \n    Congratulations for taking your first step!\n    This program will lay a foundation about basics of weight training.\n    This is 5 days a week workout program with moderate intensity.\n    Focus on proper form in all exercises as it is the basic foundation needed for fitness journey.",
                image: '../../assets/images/dashboard/beginnersworkout.svg'
            },
            {
                route: 'fullbody',
                workout: [
                    [{ name: 'Fullbody A' },
                        [{ exercise: 'Barbell Squat', sets: '3', reps: '8-12' }, { exercise: 'Romanian Deadlift', sets: '3', reps: '8-12' }, { exercise: 'Barbell Rows', sets: '3', reps: '8-12' }, { exercise: 'Barbell Bench Press', sets: '3', reps: '8-12' }, { exercise: 'Dumbell Side Raise', sets: '4', reps: '10-15' }, { exercise: 'Plank', sets: '5', reps: '1-2 mins' }]
                    ],
                    [{ name: 'Rest Day' },
                        [{ exercise: 'Rest Day' }]
                    ],
                    [{ name: 'Fullbody B' },
                        [{ exercise: 'Overhead Shoulder Press', sets: '3', reps: '8-12' }, { exercise: 'Incline Dumbbell Press', sets: '3', reps: '8-12' }, { exercise: 'Pullups/Chin Ups', sets: '3', reps: '8-12' }, { exercise: 'Barbell Shrugs', sets: '3', reps: '10-15' }, { exercise: 'Barbell Bicep Curl', sets: '5', reps: '10-15' }, { exercise: 'Close Grip Bench Press', sets: '5', reps: '10-15' }]
                    ],
                    [{ name: 'Rest Day' },
                        [{ exercise: 'Rest Day' }]
                    ],
                    [{ name: 'Fullbody C' },
                        [{ exercise: 'Machine Lat Pulldown', sets: '3', reps: '8-12' }, { exercise: 'Sumo Deadlift', sets: '3', reps: '8-12' }, { exercise: 'Pause Barbell Squat', sets: '3', reps: '8-12' }, { exercise: 'Machine Flys', sets: '3', reps: '8-12' }, { exercise: 'Incline Dumbbell Curl', sets: '5', reps: '8-12' }, { exercise: 'Lying Skullcrusher', sets: '5', reps: '8-12' }]
                    ],
                    [{ name: 'Rest Day' },
                        [{ exercise: 'Rest Day' }]
                    ],
                    [{ name: 'Rest Day' },
                        [{ exercise: 'Rest Day' }]
                    ]
                ],
                title: "Full Body Workout",
                features: ['For People with Busy Lifestyle', 'Only 3 times a week', 'Compound Lift oriented', 'Flexible for convenience'],
                description: "This workout program is specially crafted for people who are just beginning their journey. \n    Congratulations for taking your first step!\n    This program will lay a foundation about basics of weight training.\n    This is 5 days a week workout program with moderate intensity.\n    Focus on proper form in all exercises as it is the basic foundation needed for fitness journey.",
                image: '../../assets/images/dashboard/fullbodyworkout.svg'
            },
            {
                route: 'women',
                workout: [
                    [{ name: 'Push A' },
                        [{ exercise: 'Barbell Bench Press', sets: '3', reps: '8-12' }, { exercise: 'Machine Chest Fly', sets: '3', reps: '10-12' }, { exercise: 'Dumbbell Shoulder Press', sets: '3', reps: '8-12' }, { exercise: 'Dumbbell Side Raise', sets: '3', reps: '10-15' }, { exercise: 'Dumbbell Tricep Extension', sets: '5', reps: '10-15' }]
                    ],
                    [{ name: 'Pull A + Obliques' },
                        [{ exercise: 'Barbell Deadlift', sets: '3', reps: '6-8' }, { exercise: 'Single Arm Dumbbell Row', sets: '3', reps: '8-12' }, { exercise: 'Machine Lat Pulldown', sets: '3', reps: '8-12' }, { exercise: 'Barbell Shrugs', sets: '3', reps: '10-15' }, { exercise: 'Barbell Bicep Curl', sets: '5', reps: '10-15' }, { exercise: 'Dumbbell Side Bend', sets: '4', reps: '10-15' }]
                    ],
                    [{ name: 'Rest Day' },
                        [{ exercise: 'Rest Day' }]
                    ],
                    [{ name: 'Push B' },
                        [{ exercise: 'Barbell Shoulder Press', sets: '3', reps: '8-10' }, { exercise: 'Incline Dumbbell Press', sets: '3', reps: '8-12' }, { exercise: 'Decline Dumbbell Press', sets: '3', reps: '8-12' }, { exercise: 'Cable Tricep Pushdown', sets: '3', reps: '10-15' }, { exercise: 'Dumbbell Skullcrusher', sets: '3', reps: '10-15' }]
                    ],
                    [{ name: 'Pull B' },
                        [{ exercise: 'Pullups', sets: '3', reps: '8-10' }, { exercise: 'Machine Lat Pulldown', sets: '3', reps: '8-12' }, { exercise: 'Cable Face Pulls', sets: '3', reps: '8-12' }, { exercise: 'Preacher Curl', sets: '3', reps: '10-15' }, { exercise: 'Reverse Cable Curl', sets: '3', reps: '10-15' }]
                    ],
                    [{ name: 'Legs and Abs' },
                        [{ exercise: 'Barbell Squat', sets: '3', reps: '8-10' }, { exercise: 'Machine Leg Press', sets: '3', reps: '8-12' }, { exercise: 'Romanian Deadlift', sets: '3', reps: '8-12' }, { exercise: 'Machine Leg Curl', sets: '3', reps: '8-12' }, { exercise: 'Machine Calf Press', sets: '5', reps: '10-15' }, { exercise: 'Cable Crunch', sets: '4', reps: '10-15' }]
                    ],
                    [{ name: 'Rest Day' },
                        [{ exercise: 'Rest Day' }]
                    ]
                ],
                title: "Women's Workout",
                features: ['Specially Focused on Beginners', 'Fundamentals of Weight Training', '5 times Week', 'Build Strength/Muscle and Lose Fat'],
                description: "This workout program is specially crafted for people who are just beginning their journey. \n    Congratulations for taking your first step!\n    This program will lay a foundation about basics of weight training.\n    This is 5 days a week workout program with moderate intensity.\n    Focus on proper form in all exercises as it is the basic foundation needed for fitness journey.",
                image: '../../assets/images/dashboard/womenworkout.svg'
            },
        ];
        this.calarray = [
            { route: 'bulking', title: 'Gain Weight', features: ['Caloric Surplus', 'Gain Muscle and Strength', 'Suitable for Lean Bulking'], image: '../../assets/images/dashboard/gainweight.svg' },
            { route: 'fatloss', title: 'Lose Weight', features: ['Caloric Deficit', 'Lose Fat and Get Shredded', 'Maintain Muscle and Strength'], image: '../../assets/images/dashboard/loseweight.svg' },
            { route: 'maintenance', title: 'Maintain Weight', features: ['Maintenance Calories', 'Lose Fat and Build Muscle slowly', 'Body Recomposition'], image: '../../assets/images/dashboard/maintainweight.svg' }
        ];
        this.blogArray = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.blogarray);
        this.BlogObservable = this.blogArray.asObservable();
        this.workoutArray = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.workoutarray);
        this.WorkoutObservable = this.workoutArray.asObservable();
        this.calArray = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.calarray);
        this.CalObservable = this.calArray.asObservable();
        this.googledata = {
            fname: 'Ayush',
            lname: 'Singh',
            gender: 'male',
            imgsrc: '../../assets/images/dp.jpg',
            email: 'ayush.singh.xda@gmail.com'
        };
        this.googleObject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](this.googledata);
        this.GoogleObservable = this.googleObject.asObservable();
        this.profiledata = {
            age: 21,
            experience: 2,
            goal: 5,
            heightcm: 172,
            heightunit: 1,
            lifestyle: 1,
            weight: 70,
            weightunit: 1
        };
    }
    LocalInteractionService.prototype.SetProfile = function (data) {
        this.profiledata = data;
        console.log(this.profiledata);
    };
    LocalInteractionService.prototype.GetProfileData = function () {
        return this.profiledata;
    };
    LocalInteractionService.prototype.GetGoogleData = function () {
        return this.googledata;
    };
    return LocalInteractionService;
}());



/***/ }),

/***/ "./src/app/services/server-interaction.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/server-interaction.service.ts ***!
  \********************************************************/
/*! exports provided: ServerInteractionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerInteractionService", function() { return ServerInteractionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerInteractionService = /** @class */ (function () {
    function ServerInteractionService(http) {
        this.http = http;
        this.apiurl = 'http://localhost:3000';
    }
    ServerInteractionService.prototype.googleLogin = function () {
        return this.http.get(this.apiurl + "/auth/google/redirect");
    };
    ServerInteractionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], ServerInteractionService);
    return ServerInteractionService;
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

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\ALPHA\fit\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map