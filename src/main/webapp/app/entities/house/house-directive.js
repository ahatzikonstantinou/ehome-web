(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'house', function()
        {
            return {
                transclude: true,
                restrict: 'E',
                scope: { 
                    h: '=house',
                    isCollapsed: '=',
                    expandAllChildren: '&expandAllChildren',
                    showMqttTopics: '='
                },
                templateUrl: '/app/entities/house/house.html'
            };
        }
        );
})();
