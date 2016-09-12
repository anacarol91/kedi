angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CategoriasCtrl', function($scope, Categorias, Estabelecimentos) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.categorias = Categorias.all();
  $scope.estabelecimentos = Estabelecimentos.all();

  $scope.remove = function(categoria) {
    Categorias.remove(categoria);
  };
})

.controller('EstabelecimentosCtrl', function($scope, $stateParams, Estabelecimentos) {
  $scope.categoria = Estabelecimentos.getCategoria($stateParams.categoriaId);

  $scope.estabelecimentos = Estabelecimentos.all();

  $scope.remove = function(categoria) {
    Estabelecimentos.remove(categoria);
  };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
