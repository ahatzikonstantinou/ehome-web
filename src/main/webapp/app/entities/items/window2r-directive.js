(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'window2r', function()
        {
            return {
                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/items/window2r.html'
            };
        }
        );
})();
