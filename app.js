
var firstApp = angular.module('firstApp', []);

firstApp.controller('FirstCtrl', 
    ['$scope', function($scope){

      $scope.title = "hello world for realz";

      $scope.cats = ['Kitty',
                     'Ginger',
                     'Gizmo',
                     'Tom',
                     'Shadow',
                     'Chloe',
                     'Smokey'];

    }]);


