'use strict';

angular.module('app').controller('runOnLoadCtrl', function ($scope, todoStorage) {

    $scope.todoStorage = todoStorage;

    $scope.$watch('todoStorage.data', function() {
        $scope.todoList = $scope.todoStorage.data;
    });

    $scope.todoStorage.findAll(function(data){
        $scope.todoList = data;
        $scope.$apply();

        chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
      if (changeInfo.status == 'complete' && tab.active) {

        // do your things
        alert("aha!!");
        chrome.tabs.sendMessage(tab.id, {args: _this.data}, function(response) {
          // ...
        });

      }
    })
    });

    

    


});