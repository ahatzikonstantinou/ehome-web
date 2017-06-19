(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'door1', function()
        {
            return {                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/items/door1.html'
            };
        }
        );
})();
