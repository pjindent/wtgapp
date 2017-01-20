'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;
    $scope.topView = [
      {
        icon: 'glyphicon-flash',
        color: 'btn-success',
        total: '20',
        description: 'Total turbines'
      },
      {
        icon: 'glyphicon-th',
        color: 'btn-danger',
        total: '20',
        description: 'Manufacturers'
      },
      {
        icon: 'glyphicon-stats',
        color: 'btn-info',
        total: '20',
        description: 'Turbine Rating (MW)'
      },
      {
        icon: 'glyphicon-ok-circle',
        color: 'btn-warning',
        total: '20',
        description: 'IEC Class'
      }
    ];
  }
]);
