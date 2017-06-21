(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('TemperatureHumidity', TemperatureHumidity);

    TemperatureHumidity.$inject = [];

    function TemperatureHumidity() {
        //Constructor
        function TemperatureHumidity( mqtt_subscribe_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.state = state;
        }

        TemperatureHumidity.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        return TemperatureHumidity;
    }
})();
