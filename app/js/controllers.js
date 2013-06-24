'use strict';

/* Controllers */
function MyCtrl1($scope, $http) {
        $http.get("http://localhost/EventCenter/api/communities",{param:{id:'1'}}).
            success(function(data, status, headers, config){
            $scope.communities = data;
        }
    );
}
function CarouselDemoCtrl($scope, $http) {
    $http.get('MyData/mainData.json').success(function(data){
        $scope.myInterval = 10000;
        $scope.slides = data;
        $scope.addSlide = function() {
            $scope.slides.push({
                image: 'img/images/resize-airConditioning.png/'+(200+25*Math.floor(Math.random()*4))+'/200',
                text: ['More','Extra','Lots of','Surplus'][Math.floor(Math.random()*4)] + ' ' +
                    ['Cats', 'Kittys', 'Felines', 'Cutes'][Math.floor(Math.random()*4)]
            });
        };

    });
}

function MyCtrl2($scope, $http) {
    $http.get('MyData/services.json').success(function(data){
        $scope.sers = data;
    })
}
//MyCtrl2.$inject = [];

function MyCtrl3($scope, $http) {
    $http.get("http://localhost/EventCenter/api/communities").success(function(data){

    });
}
//MyCtrl2.$inject = [];

function MyCtrl4() {
}
function MyCtrl5($scope, $http) {
        $http.get('MyData/mainData.json').success(function(data){
        $scope.imagesList = data;
        $scope.current_image = _.first($scope.imagesList);
        $scope.setCurrentImage = function(imageUrl){
            $scope.current_image = imageUrl;
        }
    });

}
//MyCtrl2.$inject = [];

