angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Log in to Your Profile', id: 1 },
    { title: 'View Calendar', id: 2 },
    { title: 'Check Schedule', id: 3 },
    { title: 'Create a To-Do List', id: 4 },
    { title: 'Manage Tasks', id: 5 },
    { title: 'And more!', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('CalendarCtrl', function($scope) {

        $scope.settingsList = [
            { text: "Past Assignments", checked: false },
            { text: "Future Assignments", checked: false },
            { text: "Uncategorized", checked: false }
        ];

})

 .controller('ToDoListCtrl', function($scope) {

        $scope.data = {
            showDelete: false
        };

        $scope.share = function(item) {
            alert('Share Item: ' + item.id);
        };

        $scope.onItemDelete = function(item) {
            $scope.items.splice($scope.items.indexOf(item), 1);
        };


    });

