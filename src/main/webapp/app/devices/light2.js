(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Light2', Light2);

    Light2.$inject = [];

    function Light2() {
        //Constructor
        function Light2( mqtt_subscribe_topic, mqtt_publish_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.mqtt_publish_topic = mqtt_publish_topic;
            this.state = state;
            this.publisher = null;
        }

        Light2.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        Light2.prototype.setPublisher = function( publisher )
        {
            this.publisher = publisher;
        }

        Light2.prototype.switch = function( value )
        {
            console.log( 'Light2 will send value ', value, ' to topic ', this.mqtt_publish_topic );
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( value );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Light2 sending message: ', message );
                this.publisher.send( message );
            }
        }

        return Light2;
    }
})();
