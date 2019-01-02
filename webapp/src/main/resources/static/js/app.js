//main module
var app = angular.module('rootApp', ['ui.bootstrap', 'ui.bootstrap.tpls', 'ui.bootstrap.modal', 'ui.router', 'ngAnimate', 'ngResource'
    , 'ngServices', 'sysModule', 'LocalStorageModule', 'authenticationModule', 'clientModule', 'registerStateModule'
]);

//main config
app.config(
    ['$windowProvider', '$stateProvider', '$urlRouterProvider', '$httpProvider',
        function ($windowProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

            var window = $windowProvider.$get('$window');

            //routing
            var hostname = window.location.hostname;
            var port = window.location.port;
            var rootUrl = 'http://' + hostname + ':' + port;

            //$urlRouterProvider.otherwise('/home');

            $stateProvider.state('home', {
                views:{

                }
            });

            $stateProvider.state('login', {
               views:{
                   
               }
            });
        }
    ]);

app.run(function ($state, $timeout, $stateParams, authenticationService, localStorageService, $rootScope) {

    $rootScope.$state = $state;
    $rootScope.globals = authenticationService.fillAuthData();
    //console.log($rootScope.globals);
    $timeout(function () {
        $rootScope.isLogIn = true;
        $state.go('login');
    });

});

