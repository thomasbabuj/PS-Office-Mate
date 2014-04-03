// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('officeMate', ['ionic', 'officeMate.services','officeMate.controllers' ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })


    .state('app.employee-list', {
      url: "/employees",
      views: {
        'menuContent' :{
          templateUrl: "templates/employee-list.html",
          controller : 'EmployeeListCtrl'
        }
      }
    })


    .state('app.employee-detail', {
      url : '/employee/:employeeId',
      views : {
        'menuContent' : {
          templateUrl : "templates/employee-detail.html",
          controller : 'EmployeeDetailCtrl'
        }
      }
    })




    .state('app.employee-reports', {
      url: "/employee/:employeeId/reports",
      views: {
        'menuContent' :{
          templateUrl: "templates/employee-reports.html",
          controller : 'EmployeeReportsCtrl'
        }
      }
    })

    .state('app.sync', {
      url: "/sync",
      views: {
        'menuContent' :{
          templateUrl: "templates/sync.html"
        }
      }
    })

    .state('app.about', {
      url : '/about',
      views : {
        'menuContent' : {
          templateUrl : "templates/about.html",
          controller : 'AboutCtrl'
        }
      }
    })

    .state('app.terms', {
      url : '/terms',
      views : {
        'menuContent' : {
          templateUrl : "templates/terms.html",
        }
      }
    });
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/employees');
});

