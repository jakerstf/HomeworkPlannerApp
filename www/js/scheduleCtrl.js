/**
 * Created by Robert on 12/14/2014.
 */

angular
    .module('starter')
    .controller('scheduleCtrl',  ['$scope', 'schedule', function($scope, schedule) {

        $scope.schedule = schedule;




    }]);
