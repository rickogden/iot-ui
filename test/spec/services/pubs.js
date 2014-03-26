'use strict';

describe('Service: Pubs', function () {

    // load the service's module
    beforeEach(module('iotUiApp'));

    // instantiate service
    var Pubs;
    beforeEach(inject(function (_Pubs_) {
        Pubs = _Pubs_;
    }));

    it('should do something', function () {
        expect(!!Pubs).toBe(true);
    });

});
