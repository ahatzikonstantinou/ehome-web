(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'roller1', function()
        {
            return {
                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/items/roller1.html'
            };
        }
        );
})();
