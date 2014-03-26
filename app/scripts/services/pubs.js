'use strict';

angular.module('iotUiApp')
    .service('Pubs', ['$resource', function Pubs($resource) {
        return $resource('http://ricklab.net/iot/pubs', {limit: 20}, {
            query: {method: 'GET', isArray: true}
        });
    }]);
