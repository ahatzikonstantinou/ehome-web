(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Door1', Door1);

    Door1.$inject = [];

    function Door1() {
        //Constructor
        function Door1( mqtt_subscribe_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.state = state;
        }

        Door1.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                console.log( 'Door1[mqtt_subscribe_topic]: this message is for me.' );
                this.state = angular.fromJson( message );
            }
        }

        return Door1;
    }
})();
