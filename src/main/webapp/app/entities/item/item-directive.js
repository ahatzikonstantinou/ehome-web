(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'item', function()
        {
            return {
                
                restrict: 'E',
                scope: { 
                    i: '=item'
                },
                templateUrl: '/app/entities/item/item.html'
            };
        }
        );
})();
