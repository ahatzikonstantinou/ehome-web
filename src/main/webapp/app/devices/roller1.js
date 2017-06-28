(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Roller1', Roller1);

    Roller1.$inject = [];

    function Roller1() {
        //Constructor
        function Roller1( mqtt_subscribe_topic, state )
        {
            //public properties
            MqttDevice.call( this, mqtt_subscribe_topic, state );
        }
        
        Roller1.prototype = Object.create( MqttDevice.prototype );
        Roller1.prototype.constructor = Roller1;

        return Roller1;
    }
})();
