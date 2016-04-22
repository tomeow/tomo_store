var myApp = angular.module('myApp', ['ngRoute', 'ngMessages']);

myApp.factory('customerFactory', function($http){
  var customers = [];
  var factory = {};
  console.log("alalalal cluster.disconnect([callback])")

  factory.getCustomers = function(callback){
    $http.get('/customers').success(function(output){
      callback(output);
    });
  };
  factory.recent_show = function(callback){
    $http.get('/recent_customers').success(function(output){
      callback(output);
    })
  };
  factory.addCustomer = function(new_customer, callback){
    $http.post('/addCustomer', new_customer).success(function(output){
      
      callback(output);
    });
  }


  return factory;
});
