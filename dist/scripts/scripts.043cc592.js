"use strict";angular.module("translateApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","pascalprecht.translate"]).constant("DEBUG_MODE",!0).constant("LOCALES",{locales:{ru_RU:"Русский",en_US:"English"},preferredLocale:"en_US"}).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/contacts",{templateUrl:"views/contacts.html",controller:"ContactsCtrl"}).otherwise({redirectTo:"/"})}]).config(["$compileProvider","DEBUG_MODE",function(a,b){b||a.debugInfoEnabled(!1)}]).config(["$translateProvider","DEBUG_MODE","LOCALES",function(a,b,c){b&&a.useMissingTranslationHandlerLog(),a.useStaticFilesLoader({prefix:"resources/locale-",suffix:".json"}),a.preferredLanguage(c.preferredLocale),a.useLocalStorage()}]),angular.module("translateApp").controller("AppCtrl",["$scope","$rootScope","$translate",function(a,b,c){a.locale=c.use(),b.$on("$translateChangeSuccess",function(b,c){a.locale=c.language}),b.$on("$routeChangeSuccess",function(b,c){a.currentPath=c.$$route.originalPath})}]),angular.module("translateApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("translateApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("translateApp").controller("ContactsCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("translateApp").service("LocaleService",["$translate","LOCALES","$rootScope",function(a,b,c){function d(){l.addClass(m)}function e(){l.removeClass(m)}var f=b.locales,g=Object.keys(f);g&&0!==g.length||console.error("There are no _LOCALES provided");var h=[];g.forEach(function(a){h.push(f[a])});var i=a.proposedLanguage(),j=function(a){return-1!==g.indexOf(a)},k=function(b){return j(b)?(d(),i=b,void a.use(b)):void console.error('Locale name "'+b+'" is invalid')},l=angular.element("html"),m="app-loading";return c.$on("$translateChangeSuccess",function(a,b){document.documentElement.setAttribute("lang",b.language),e()}),{getLocaleDisplayName:function(){return f[i]},setLocaleByDisplayName:function(a){k(g[h.indexOf(a)])},getLocalesDisplayNames:function(){return h}}}]),angular.module("translateApp").directive("ngTranslateLanguageSelect",["LocaleService",function(a){return{restrict:"A",replace:!0,template:'          <div class="language-select" ng-if="visible">            <label>            {{"directives.language-select.Language" | translate}}:              <select ng-model="currentLocaleDisplayName"                ng-options="localesDisplayName for localesDisplayName in localesDisplayNames"                ng-change="changeLanguage(currentLocaleDisplayName)">              </select>            </label>          </div>        ',controller:["$scope",function(b){b.currentLocaleDisplayName=a.getLocaleDisplayName(),b.localesDisplayNames=a.getLocalesDisplayNames(),b.visible=b.localesDisplayNames&&b.localesDisplayNames.length>1,b.changeLanguage=function(b){a.setLocaleByDisplayName(b)}}]}}]);