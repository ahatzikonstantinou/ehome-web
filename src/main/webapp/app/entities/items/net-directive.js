(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'net', function()
        {
            return {                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/items/net.html'
            };
        }
        );
})();
