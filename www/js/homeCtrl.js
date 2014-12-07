/**
 * Created by Robert on 11/29/2014.
 */
angular
  .module('starter')
    .controller('homeCtrl',  ['$scope', 'friends', function($scope, friends) {
        $scope.friends = friends;
        $scope.title = "home";
        $scope.items = ['home', 'about', 'contact'];

}]);

