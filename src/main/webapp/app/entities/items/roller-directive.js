(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'roller', function()
        {
            return {
                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/items/roller.html'
            };
        }
        );
})();
