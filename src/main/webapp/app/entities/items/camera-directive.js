(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .directive( 'camera', function()
        {
            return {
                
                restrict: 'E',
                scope: { 
                    i: '=item',
                    showMqttTopics: '='
                },
                templateUrl: '/app/entities/items/camera.html'
            };
        }
        );
})();
