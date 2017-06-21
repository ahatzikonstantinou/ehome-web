(function() {
    'use strict';

    angular
        .module('eHomeApp')
        .factory('Light1', Light1);

    Light1.$inject = [];

    function Light1() {
        //Constructor
        function Light1( mqtt_subscribe_topic, mqtt_publish_topic, state )
        {
            //public properties
            this.mqtt_subscribe_topic = mqtt_subscribe_topic;
            this.mqtt_publish_topic = mqtt_publish_topic;
            this.state = state;
            this.publisher = null;
        }

        Light1.prototype.update = function( topic, message )
        {
            if( topic == this.mqtt_subscribe_topic )
            {
                this.state = angular.fromJson( message );
            }
        }

        Light1.prototype.setPublisher = function( publisher )
        {
            this.publisher = publisher;
        }

        Light1.prototype.switch = function( value )
        {
            console.log( 'Light1 will send value ', value, ' to topic ', this.mqtt_publish_topic );
            if( this.publisher )
            {
                var message = new Paho.MQTT.Message( value );
                message.destinationName = this.mqtt_publish_topic ;
                console.log( 'Light1 sending message: ', message );
                this.publisher.send( message );
            }
        }

        return Light1;
    }
})();
