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
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.state = state;
        }

        Roller1.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        return Roller1;
    }
})();
