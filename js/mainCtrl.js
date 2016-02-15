var app = angular.module('friendsList');

app.controller('mainCtrl', function($scope) {
  $scope.friends = ['Joe', 'Fred', 'Harold', 'Jumpy', 'Dumbo'];
})
