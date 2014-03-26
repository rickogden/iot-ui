'use strict';

angular.module('iotUiApp')
    .controller('MainCtrl', ['$scope', '$http', 'Pubs', function ($scope, $http, Pubs) {
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
            angular.extend($scope, {markers: mks, pubs: data});

        };


        $scope.refresh = function () {
            var params = {};
            angular.forEach($scope.form, function (el, key) {
                if (el !== false) {
                    params[key] = el;
                }
            })
            params.l = $scope.amsterdam.lng + ',' + $scope.amsterdam.lat;
            Pubs.query(params, osmData);
        }

        $scope.$on('leafletDirectiveMap.moveend', function (e) {

            $scope.refresh();
        });

        angular.extend($scope, {
            amsterdam: {
                lat: 52.36952057466904,
                lng: 4.90363597869873,
                zoom: 16
            },
            markers: {},
            pubs: [],
            form: {},
            events: {
                map: {
                    enable: ['moveend'],
                    logic: 'emit'
                }
            }
        });

        var qs = {
            l: $scope.amsterdam.lng + ',' + $scope.amsterdam.lat,
            limit: 20
        }

        $scope.refresh();

    }]);
