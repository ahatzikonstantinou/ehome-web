(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'floor', function()
        {
            return {
                transclude: true,
                restrict: 'E',
                scope: { 
                    f: '=floor',
                    showLabel: '=',
                    isCollapsed: '='
                },
                templateUrl: '/app/entities/floor/floor.html'
            };
        }
        );
})();
