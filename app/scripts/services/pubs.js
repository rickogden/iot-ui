'use strict';

angular.module('iotUiApp')
    .service('Pubs', ['$resource', function Pubs($resource) {
        return $resource('http://iot-api-env-25nf533imt.elasticbeanstalk.com/pubs', {limit: 20}, {
            query: {method: 'GET', isArray: true}
        });
    }]);
