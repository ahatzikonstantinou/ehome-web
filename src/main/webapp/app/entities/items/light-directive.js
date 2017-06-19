(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'light', function()
        {
            return {
                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/items/light.html'
            };
        }
        );
})();
