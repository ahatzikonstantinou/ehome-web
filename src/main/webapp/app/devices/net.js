(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Net', Net);

    Net.$inject = [];

    function Net() {
        //Constructor
        function Net( mqtt_subscribe_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.state = state;
        }

        Net.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        return Net;
    }
})();
