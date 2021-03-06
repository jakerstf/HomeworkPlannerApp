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
    //Calendar - Days, Weeks, Month Views and Functionality
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


    .controller('TodoCtrl', function($scope, $ionicModal) {
        $scope.todos = [{
            taskName: "Turn in Audiobook PDF Revisions",
            priority: "high",
            isDone: false
        }, {
            taskName: "Do Podcast Review #4",
            priority: "medium",
            isDone: false
        }, {
            taskName: "Write Metadata Structure for Peer Review",
            priority: "low",
            isDone: false
        }];

        // Add Item to Task List, Opens and Closes Modal
        $scope.addTodo = function(data) {
            $scope.todos.push({
                taskName: data.newTodo,
                priority: data.taskPriority,
                isDone: false
            });
            data.newTodo = ""; //Reset the text field.
            $scope.closeModal();
        };
        // Delete Individual Item in Task List
        $scope.removeTask = function($index) {
            $scope.todos.splice($index, 1);
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
    })

// Main card action buttons
    .controller('FeedbackCtrl', function($scope) {
        $scope.feedbackView = function() {
            console.log($scope.feedbackView.checked);
        };
    })

    .controller('PopupCtrl', function($scope, $ionicPopup) {

        // Triggered on a button click, or some other target
        $scope.showPopup = function() {
            $scope.data = {}

            // An elaborate, custom popup
            var myPopup = $ionicPopup.show({
                template: '<input type="text" ng-model="data.text">',
                title: 'Message for Teacher:',
                scope: $scope,
                buttons: [{
                    text: 'Cancel'
                }, {
                    text: '<b>Send</b>',
                    type: 'button-positive',
                    onTap: function(e) {
                        if (!$scope.data.text) {
                            //don't allow the user to close unless a reply or comment is made
                            e.preventDefault();
                        } else {
                            document.getElementById("noComment").setAttribute("id", "commentMade");
                            return $scope.data.text;
                        }
                    }
                }, ]
            });
            myPopup.then(function(res) {
                console.log('Tapped!', res);
            });
        };
        // A confirm dialog
        $scope.showConfirm = function() {
            var confirmPopup = $ionicPopup.confirm({
                title: 'Turned In',
                template: 'Assignment will be removed from page.'
            });
            confirmPopup.then(function(res) {
                if (res) {
                    document.getElementById("show").setAttribute("id", "hide");
                } else {}
            });
        };

        // An alert dialog
        $scope.showAlert = function() {
            var alertPopup = $ionicPopup.alert({
                title: 'Do not forget to turn it in!',
                template: 'Teacher will be notified via e-mail.'
            });
            alertPopup.then(function(res) {
                document.getElementById("notFinished").setAttribute("id", "finished");
            });
        };
    })

    .controller('ToDoListCtrl', function($scope, $ionicModal) {
        $scope.toDoListItems = [{}];

        $scope.data = {
            showDelete: false
        };

        //Remove Item from Class List
        $scope.onItemDelete = function(data) {
            $scope.toDoListItems.splice($scope.toDoListItems.indexOf(data), 1);
            $scope.schedule.splice($scope.toDoListItems.indexOf(data), 1);
        };

        //Add Item to Class List, Open and Close Modal
        $scope.AddItem = function(data) {
            $scope.toDoListItems.push({
                class: data.newItem,
                teacher: data.newItem2,
                room: data.newItem3,
                time: data.newItem4,
                days: data.newItem5
            });
            // Clear Form Data
            data.newItem = ' ';
            data.newItem2 = ' ';
            data.newItem3 = ' ';
            data.newItem4 = ' ';
            data.newItem5 = ' ';
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

        //Jake AddingModal2 for MAP
        $ionicModal.fromTemplateUrl('modal2.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal2) {
            $scope.modal2 = modal2;
        });
        $scope.openModal2 = function() {
            $scope.modal2.show();
        };
        $scope.closeModal2 = function() {
            $scope.modal2.hide();
        };

        //Cleanup the modal when we're done with it!
        $scope.$on('$destroy', function() {
            $scope.modal2.remove();
        });


        $scope.imageSrc = 'img/UVUmap.jpg';

        // Main page action buttons on cards



    });