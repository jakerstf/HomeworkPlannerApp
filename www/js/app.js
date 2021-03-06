// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
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

            .state('app.calendar', {
                url: "/calendar",
                views: {
                    'menuContent': {
                        templateUrl: "templates/calendar.html"
                    }
                }
            })

            .state('app.todo', {
                url: "/todo",
                views: {
                    'menuContent': {
                        templateUrl: "templates/todo.html"
                    }
                }
            })

            .state('app.schedule', {
                url: "/schedule",
                views: {
                    'menuContent': {
                        templateUrl: "templates/schedule.html",
                        controller: 'scheduleCtrl',
                        resolve: {

                            schedule: ['$http', function($http) {
                                return $http.get('../api/schedule.json')
                                    .then(function(response) {


                                        return response.data;
                                    })

                            }]


                        }
                    }
                }
            })

            .state('app.welcome', {
                url: "/welcome",
                views: {
                    'menuContent': {
                        templateUrl: "templates/welcome.html",
                        controller: 'homeCtrl',
                        resolve: {

                            task: ['$http', function($http) {
                                return $http.get('../api/friends.json')
                                    .then(function(response) {


                                        return response.data;
                                    })

                            }]


                        }
                    }
                }
            });


        $urlRouterProvider.otherwise('/app/welcome');
    });