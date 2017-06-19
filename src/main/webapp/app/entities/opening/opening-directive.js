(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'opening', function()
        {
            return {
                restrict: 'E',
                scope: { 
                    type: '=',
                    o: '=opening'
                },
                templateUrl: '/app/entities/opening/opening.html'
            };
        }
        );
})();
