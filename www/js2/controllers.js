angular.module('starter.controllers', [])

.controller('ToDoListCtrl', function($scope,$ionicModal) {
	$scope.toDoListItems = [{

  }];





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




  
});


