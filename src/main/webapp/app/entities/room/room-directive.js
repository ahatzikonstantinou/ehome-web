(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'room', function()
        {
            return {
                transclude: true,
                restrict: 'E',
                scope: { 
                    r: '=room',
                    showLabel: '=',
                    isCollapsed: '=',
                    filter: '='
                },
                templateUrl: '/app/entities/room/room.html',
                link: function( scope, element, attrs )
                {
                    scope.$watch( 'r', function(){
                        console.log( scope.r );
                    } )
                }
            };
        }
        );
})();
