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

    .controller('DayCtrl', function($scope) {
        $scope.dayViewChange = function() {
            console.log($scope.dayView.checked);
        };

    })

    .controller('WeekCtrl', function($scope) {
        $scope.weekViewChange = function() {
            console.log($scope.weekView.checked);
        };

    })

    .controller('MonthCtrl', function($scope) {
        $scope.monthViewChange = function() {
            console.log($scope.monthView.checked);
        };

    })

.controller('CalendarCtrl', function($scope) {

        $scope.settingsList = [
            { text: "Past Assignments", checked: false },
            { text: "Future Assignments", checked: false },
            { text: "Uncategorized", checked: false }
        ];

})

    .controller('TodoCtrl', function($scope) {
        $scope.todos = [
            { taskName: "Write an Angular js Tutorial for Todo-List", isDone: false },
            { taskName: "Update jquer.in", isDone: false },
            { taskName: "Create a brand-new Resume", isDone: false }
        ];

        // Add Item
        $scope.addTodo = function () {
            $scope.todos.push({taskName : $scope.newTodo , isDone : false });
            $scope.newTodo = "";//Reset the text field.
        };

        // Delete Item
        $scope.removeTask = function($index) {
            $scope.todos.splice($index, 1);
        };
    })

    .controller('ToDoListCtrl', function($scope,$ionicModal) {
        $scope.toDoListItems = [{


        }];

        $scope.data = {
            showDelete: false
        };

        $scope.onItemDelete = function(data) {
            $scope.toDoListItems.splice($scope.toDoListItems.indexOf(data), 1);
        };


        $scope.AddItem = function(data){
            $scope.toDoListItems.push({task:data.newItem, task2:data.newItem2, task3:data.newItem3, task4:data.newItem4, task5:data.newItem5});


            data.newItem =' ';
            data.newItem2 =' ';
            data.newItem3 =' ';
            data.newItem4 =' ';
            data.newItem5 =' ';

            $scope.closeModal();
        };




        $ionicModal.fromTemplateUrl('modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            $scope.modal = modal;
        });

        $scope.openModal = function() {
            $scope.modal.show();
        };
        $scope.closeModal = function() {
            $scope.modal.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal.remove();
        });

//Roberts Original Delete Code
//.controller('ToDoListCtrl', function($scope) {
//
//        $scope.data = {
//            showDelete: false
//        };
//
//        $scope.share = function(item) {
//            alert('Share Item: ' + item.id);
//        };
//
//        $scope.onItemDelete = function(item) {
//            $scope.items.splice($scope.items.indexOf(item), 1);
//        };



    });

