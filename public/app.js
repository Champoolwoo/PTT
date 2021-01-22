angular.module('app',[])
  .controller('ParkingPTT',function($scope,$http){

    $scope.guardhouse1 = 0
    $scope.guardhouse2 = 0
    $scope.guardhouse3 = 0
    $scope.kvis = 0
    $scope.ioc = 0
    $scope.vistec = 0

    setInterval(function(){

    $scope.count_guardhouse1 = 0
    $scope.count_guardhouse2 = 0
    $scope.count_guardhouse3 = 0
    $scope.count_kvis = 0
    $scope.count_ioc = 0
    $scope.count_vistec = 0

    $scope.carparking = []
 
    $http.get('/carpark').then(function(res){
      
      $scope.carparking = res.data
      
      for(var i = 0; i < $scope.carparking.length;i++){
      
        //console.log($scope.carparking[i].zone)
        
        if($scope.carparking[i].zone == 'guardhouse1'){
          $scope.count_guardhouse1++
        }else if($scope.carparking[i].zone == 'guardhouse2'){
          $scope.count_guardhouse2++
        }else if($scope.carparking[i].zone == 'guardhouse3'){
          $scope.count_guardhouse3++
        }else if($scope.carparking[i].zone == 'kvis'){
          $scope.count_kvis++
        }else if($scope.carparking[i].zone == 'ioc'){
          $scope.count_ioc++
        }else if($scope.carparking[i].zone == 'vistec'){
          $scope.count_vistec++
        }else{
          console.log("Error!! Carpark")
        } //else

      } //for
    
    })//http.get

  },20000)

  }) //Controller