require.config({
    paths: {
        angular: 'resources/assets/bower_components/angular/angular.min',
        ngRoute: 'resources/assets/bower_components/angular-route/angular-route.min',
        ngCookies: 'resources/assets/bower_components/angular-cookies/angular-cookies.min',
        ngAnimate: 'resources/assets/bower_components/angular-animate/angular-animate.min',
        ngTouch: 'resources/assets/bower_components/angular-touch/angular-touch.min',
        ngBootstrap: 'resources/assets/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        mainModule: 'resources/app/mainModule'
    },
    shim: {

        angular: {
            exports: 'angular'
        },

        ngRoute: {
            deps : [ 'angular' ],
            exports: 'ngRoute'
        },

        ngCookies: {
            deps : [ 'angular' ]
        },

        ngAnimate: {
            deps: ['angular']
        },

        ngTouch: {
            deps: ['angular']
        },

        ngBootstrap: {
            deps: ['angular']
        },

        mainModule: {
            deps: ['angular', 'ngRoute', 'ngCookies', 'ngAnimate', 'ngTouch', 'ngBootstrap']
        }
    }
});

require(['mainModule'], function () {
    angular.bootstrap(document.getElementById('mainModule'), ['mainModule']);
});
