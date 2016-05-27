require.config({
    paths: {
        angular: 'resources/assets/bower_components/angular/angular.min',
        ngBootstrap: 'resources/assets/bower_components/angular-bootstrap/ui-bootstrap-tpls.min',
        mainModule: 'resources/app/mainModule'
    },
    shim: {

        angular: {
            exports: 'angular'
        },

        ngBootstrap: {
            deps: ['angular']
        },

        mainModule: {
            deps: ['angular', 'ngBootstrap']
        }
    }
});

require(['mainModule'], function () {
    angular.bootstrap(document.getElementById('mainModule'), ['mainModule']);
});
