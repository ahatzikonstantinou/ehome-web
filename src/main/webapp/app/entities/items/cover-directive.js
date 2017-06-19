(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'cover', function()
        {
            return {
                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/items/cover.html'
            };
        }
        );
})();
