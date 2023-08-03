var app = angular .module ('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        •when ('/', {
            templateUrl: 'pages/home.html' 
            controller : 'HomeController'
        •when ('/blog', {
            templateUrl: 'pages/blog.html',
            controller : 'BlogController'
        })
        •when ('/about',{
            templateUrl: 'pages/about.html',
            controller: 'AboutController'
        })
        •otherwise ({redirectTo: '/'});
}):

app.controller('HomeController',function($scope) {
    $scope.message = 'Dây là noi dung dude gui tù HomeController';
}):
app.controller ('BlogController', function ($scope) {
    $scope.message = 'Dây là nôi dung duac güi tu BlogController';
});
app .controller ('AboutController', function ($scope) {
    $scope.message = 'Dây là noi dung dude gui tù AboutController',
});
