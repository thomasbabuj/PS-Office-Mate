angular.module('officeMate.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('EmployeeListCtrl', function($scope, EmployeeService) {
	$scope.searchKey = "";

	$scope.clearSearch = function() {
		$scope.searchKey = "";
		findAllEmployees();
	}

	$scope.search = function() {
		EmployeeService.findByName($scope.searchKey).then(function(employees) {
			$scope.employees = employees;
		});
	}

	var findAllEmployees = function() {
		EmployeeService.findAll().then(function (employees) {
			$scope.employees = employees;
		});
	}

	findAllEmployees();
})

.controller ('EmployeeDetailCtrl', function($scope, $stateParams, EmployeeService) {
	
	EmployeeService.findById($stateParams.employeeId).then(function(employee) {
		$scope.employee = employee;
	});

})

.controller ('EmployeeReportsCtrl', function($scope, $stateParams, EmployeeService) {

	EmployeeService.findByManager($stateParams.employeeId).then(function(employees) {
		$scope.employees = employees;
	});  
})


.controller ('AboutCtrl', function($scope) {
	$scope.message = "Welcome to our company";
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})
