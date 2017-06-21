(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'light2', function()
        {
            return {
                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/items/light2.html'
            };
        }
        );
})();
