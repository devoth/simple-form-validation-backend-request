'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularApp
 */
angular.module('angularApp')
  .controller('MainCtrl', ['$scope', function ($scope) {

    $scope.formSubmitted = false;

    $scope.signup = {};

    $scope.user = {
      email: '',
      password: ''
    };

    $scope.login = function() {
      console.log('something');
      if ( $scope.signup.$valid ) {

      }
      else {
        $scope.signup.formSubmitted = true;
      }
    };

    $scope.strongPassword = function (value) {
      console.log('something');
      return value.length > 6;
    };
    //api.test/auth"

  }]);