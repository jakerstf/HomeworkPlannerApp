/**
 * Created by Robert on 11/29/2014.
 */
angular
    .module('starter')
    .controller('homeCtrl', ['$scope', 'task', function($scope, task) {


        $scope.task = task;



        $scope.title = "home";
        $scope.items = ['home', 'about', 'contact'];

    }]);