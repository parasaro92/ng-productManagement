myApp.service('JsonService', function($resource){
  return $resource('json/product.json', { }, {
    getData: { method: 'GET', isArray: true }

  });
});

myApp.controller('ProductListCtrl', function($scope, JsonService){

  var vm = this;
  vm.products = JsonService.getData(function(data){

  });
  console.log(vm.products);

  vm.showImage = false;

  vm.toggleImage = function() {
      vm.showImage = !vm.showImage;
  }
});

