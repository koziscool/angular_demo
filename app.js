
var firstApp = angular.module('firstApp', []);

firstApp.controller('FirstCtrl', 
    ['$scope', function($scope){

      $scope.title = "hello world for realz";

    }]);


