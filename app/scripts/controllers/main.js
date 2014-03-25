'use strict';

angular.module('iotUiApp')
  .controller('MainCtrl', function ($scope, $http) {

        angular.extend($scope, {
            amsterdam: {
                lat: 52.36952057466904,
                lng: 4.90363597869873,
                zoom: 14
            },
            markers: {}
        });
        var osmData = function(data) {

            var mks = {};
            angular.forEach(data, function(loc){
                mks[loc.id] = {
                    lat:loc.l.coordinates[1],
                    lng: loc.l.coordinates[0],
                    message: loc.name,
                    focus: false,
                    draggable: false
                };
            });
            angular.extend($scope, {markers: mks});

            console.log($scope);
        };
        $http.get('http://ricklab.net/iot/pubs?l='+$scope.amsterdam.lng+','+$scope.amsterdam.lat+'&limit=100').success(osmData);

  });
