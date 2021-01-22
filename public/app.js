angular.module('app',[])
  .controller('ParkingPTT',function($scope,$http){

    $scope.guardhouse1 = 0
    $scope.guardhouse2 = 0
    $scope.guardhouse3 = 0
    $scope.kvis = 0
    $scope.ioc = 0
    $scope.vistec = 0

    $scope.carparking = []

    $http.get('/carpark').then(function(res){
      $scope.carparking = res.data

      for(var i = 0; i < $scope.carparking.length;i++){
      
        console.log($scope.carparking[i].zone)
        
        if($scope.carparking[i].zone == 'guardhouse1'){
          $scope.guardhouse1++
        }else if($scope.carparking[i].zone == 'guardhouse2'){
          $scope.guardhouse2++
        }else if($scope.carparking[i].zone == 'guardhouse3'){
          $scope.guardhouse3++
        }else if($scope.carparking[i].zone == 'kvis'){
          $scope.kvis++
        }else if($scope.carparking[i].zone == 'ioc'){
          $scope.ioc++
        }else if($scope.carparking[i].zone == 'vistec'){
          $scope.vistec++
        }else{
          console.log("Error!! Carpark")
        } //else

      } //for

    })//http.get

    console.log($scope.guardhouse1)
    console.log($scope.guardhouse2)
    console.log($scope.guardhouse3)
    console.log($scope.kvis)
    console.log($scope.ioc)
    console.log($scope.vistec)

  }) //Controller