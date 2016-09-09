(function () {

  angular.module('LunchCheck',[])

  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.items = "";
    $scope.message = "";

    $scope.checkIfTooMuch = function () {
      var countItems = calculateNumberOfItems($scope.items);
      if(countItems == 0){
        $scope.messageStyle={'color': 'red'};
        $scope.textStyle={'border': '1px solid red'};
        $scope.message = "Please enter data first";
      }
      else {
        $scope.messageStyle={'color': 'green',};
        $scope.textStyle={'border': '1px solid green'};
        if(countItems > 3)
          $scope.message = "Too much!";
        else
          $scope.message = "Enjoy!";
      }
    }

    function calculateNumberOfItems(string) {
      var totalItem = 0;
      var itemList = string.split(",");
      for(var i = 0; i < itemList.length; i++){
        if(itemList[i].trim() == ""){
          itemList.splice(i,1);
          i -= 1;
        }
      }
      totalItem = itemList.length;
      return totalItem;
    }
  };

})();
